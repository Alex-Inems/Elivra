"use client";

import React, { useEffect, useState } from "react";
import { db, collection, getDocs } from "@/firebaseConfig";
import { formatDistanceToNow } from "date-fns";

interface Donor {
  name: string;
  message: string;
  amount: number;
  createdAt: Date;
}

const GOAL = 100000;
const DONORS_PER_PAGE = 5;

const DonationProgress: React.FC = () => {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, setTimeUpdateTick] = useState(0);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "donations"));
        const donorList: Donor[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          let createdAt: Date;

          if (data.createdAt && data.createdAt.toDate) {
            createdAt = data.createdAt.toDate();
          } else if (typeof data.createdAt === "number") {
            createdAt = new Date(data.createdAt);
          } else {
            createdAt = new Date();
          }

          return {
            name: data.name,
            message: data.message || "",
            amount: data.amount,
            createdAt,
          };
        });

        donorList.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        setDonors(donorList);
      } catch (err) {
        console.error("Failed to fetch donors:", err);
        setError("Failed to load donor data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();

    const interval = setInterval(() => {
      setTimeUpdateTick(prev => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const totalRaised = donors.reduce((sum, donor) => sum + donor.amount, 0);
  const percentage = Math.min((totalRaised / GOAL) * 100, 100);
  const totalDonations = donors.length;
  const totalComments = donors.filter(donor => donor.message?.trim() !== "").length;

  const indexOfLastDonor = currentPage * DONORS_PER_PAGE;
  const indexOfFirstDonor = indexOfLastDonor - DONORS_PER_PAGE;
  const currentDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);
  const totalPages = Math.ceil(donors.length / DONORS_PER_PAGE);

  const handlePrev = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  if (loading) {
    return <div className="text-center py-10">Loading donations...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-20 space-y-10">
      {/* Progress Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Donation Goal</h2>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className="bg-green-600 h-full text-white text-sm flex items-center justify-center transition-all duration-500"
            style={{ width: `${percentage}%` }}
          >
            {Math.floor(percentage)}%
          </div>
        </div>
        <p className="text-gray-600 mt-2 text-sm">
          ${totalRaised.toLocaleString()} raised of ${GOAL.toLocaleString()} goal
        </p>

        {/* Total Donations & Comments */}
        <div className="mt-4 flex justify-center gap-12 text-gray-700">
          <div className="text-center">
            <p className="text-sm">Total Donations</p>
            <p className="text-2xl font-bold">{totalDonations}</p>
          </div>
          <div className="text-center">
            <p className="text-sm">Total Comments</p>
            <p className="text-2xl font-bold">{totalComments}</p>
          </div>
        </div>
      </div>

      {/* Donor Comments */}
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Donors</h3>
        {donors.length === 0 ? (
          <p className="text-gray-500">No donations yet. Be the first to donate!</p>
        ) : (
          <>
            <ul className="space-y-4">
              {currentDonors.map((donor, index) => (
                <li key={index} className="bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-800 font-medium">{donor.name}</p>
                  {donor.message && (
                    <p className="text-sm text-gray-600 mt-1">“{donor.message}”</p>
                  )}
                  <p className="text-sm text-green-700 font-semibold mt-2">
                    Donated ${donor.amount}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {formatDistanceToNow(donor.createdAt, { addSuffix: true })}
                  </p>
                </li>
              ))}
            </ul>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default DonationProgress;
