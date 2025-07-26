import React from "react";
// /app/privacy/page.tsx
export default function PrivacyPage() {
    return (
      <main className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          Elivra respects your privacy. This policy explains how we collect, use, and protect the information you provide.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We collect personal information such as name, email address, and payment details when you make a donation.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          Information is used to process donations via Stripe, send donation receipts, and communicate updates about our work.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Sharing Information</h2>
        <p className="mb-4">
          We only share necessary information with our payment processor, Stripe. We never sell or rent your information.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Security</h2>
        <p className="mb-4">
          We implement strong security measures to protect your personal information.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Your Rights</h2>
        <p className="mb-4">
          You can request access, correction, or deletion of your information at any time by emailing support@elivra.org.
        </p>
  
        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Contact</h2>
        <p className="mb-4">
          Questions about this Privacy Policy? Contact us at support@elivra.live
        </p>
      </main>
    );
  }
  