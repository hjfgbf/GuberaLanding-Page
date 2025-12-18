import Link from "next/link";

function CancellationPolicy() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <Link
          className="flex mb-5 text-black transition hover:text-black"
          href="/"
          aria-label="Medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            width="24"
            height="24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <span className="pl-1">Back</span>
        </Link>

        <h1 className="text-2xl font-bold mb-4">Cancellation Policy</h1>
        <p className="mb-4">
          At [Your Company Name], we aim to maintain transparency for all our vendors and customers. This Cancellation Policy outlines the rules and procedures for canceling subscriptions, orders, and services on our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Vendor Subscription Cancellation</h2>
        <p className="mb-4">
          Vendors can cancel their active subscription plan (Basic, Pro, or Enterprise) at any time through their dashboard. Upon cancellation:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Access to premium features will continue until the end of the billing cycle.</li>
          <li>No partial or full refunds will be issued for the unused portion.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Customer Order Cancellation</h2>
        <p className="mb-4">
          Order cancellations from customers must be managed directly by the vendor. Vendors should clearly define their cancellation window and refund eligibility within their store policies. Orders marked as “Shipped” or “Delivered” may not be eligible for cancellation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Product Listing Cancellation</h2>
        <p className="mb-4">
          Vendors may remove or cancel listed products at any time. However, fees associated with listing or promotions will not be refunded upon cancellation.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Account Termination</h2>
        <p className="mb-4">
          If a vendor chooses to permanently delete their account, all associated data including products, orders, and analytics will be lost. Please back up your information before initiating termination. No refunds will be provided upon account deletion.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
        <p className="mb-4">
          If you face issues canceling a service or believe a cancellation was processed in error, contact our support team at <a href="mailto:support@yourwebsite.com" className="text-blue-600 underline">support@yourwebsite.com</a>.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          This policy may be updated from time to time. Last revised: June 27, 2025.
        </p>
      </div>
    </>
  );
}

export default CancellationPolicy;
