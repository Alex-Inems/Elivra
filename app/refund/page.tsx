import React from "react";
// /app/refund/page.tsx
export default function RefundPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
        <p className="mb-4">
          Donations made to Elivra are typically non-refundable as funds are allocated immediately to aid efforts.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Exceptional Cases</h2>
        <p className="mb-4">
          If you believe a donation was made in error, please contact us within 7 days at support@elivra.org. We will review requests on a case-by-case basis.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Processing Time</h2>
        <p className="mb-4">
          Approved refunds will be processed back to the original payment method within 7-10 business days through Stripe.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="mb-4">
          Questions about refunds? Email support@elivra.live
        </p>
      </main>
    );
  }
  