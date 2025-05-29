"use client";
import Link from "next/link";
import Image from "next/image";
import DonationProgress from "@/components/Home/DonationProgress";
import { MapPinIcon,} from '@heroicons/react/24/outline'; // Corrected import path

const DonationHome: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left - Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-8 md:p-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Help Us Bring Hope <br />
            <span className="text-green-700 text-4xl">One Donation at a Time</span>
          </h1>
          {/* Profile Information - Moved to the Bottom */}
          <div className="mt-4 px-5 flex items-center space-x-4 ">

            <div>
              <h2 className="text-xl font-semibold text-gray-800">Help the Displaced in Palestine</h2>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="h-5 w-5 text-green-600" />
                <p className="text-sm">Gaza</p>
              </div>
            </div>

          </div>
          <p className="text-sm text-gray-600 max-w-xl">
            All donations are being sent to a displaced Camp resident who buys food, fuel, medicine, and other supplies directly on the ground in Gaza. He distributes the supplies to people living in Nuseirat Camp. Children are dying of starvation at this camp. Nuseirat, including the UNWRA school where people have been sheltering, has been repeatedly bombed this year. Thank you to all donors, no matter how large or small your contributation. Anything can help. Thank you for your humanity.
          </p>
          <Link href="/donationform">
            <button className="bg-green-700 text-white px-8 py-4 rounded-full shadow-lg text-lg hover:bg-green-600 transition">
              Donate Now
            </button>
          </Link>
          <p className="text-sm text-gray-500 pt-2">
            100% of your donation supports those in need.
          </p>
        </div>

        {/* Right - Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:min-h-screen relative">
          <Image
            src="/images/ycl.jpg" // replace with actual image path
            alt="Hopeful family"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-20" />
        </div>

        <DonationProgress />
      </div>

    </div>
  );
};

export default DonationHome;
