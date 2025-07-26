import React from "react";
// /app/shipping/page.tsx
export default function ShippingPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Shipping Policy</h1>
        <p className="mb-4">
          Elivra facilitates digital donations and does not ship physical goods.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Acknowledgment Receipts</h2>
        <p className="mb-4">
          Upon successful donation, an email receipt will be sent to the address provided during checkout.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
        <p className="mb-4">
          Questions? Email us at support@elivra.live
        </p>
      </main>
    );
  }
  