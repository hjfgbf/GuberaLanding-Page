import Link from "next/link";

function RefundPolicy() {
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
        <h1 className="text-2xl font-bold mb-4">Refund Policy</h1>
        <p className="mb-4">
          At [Your Company Name], we strive to provide a transparent and fair experience for our vendors and customers. This Refund Policy outlines the terms under which refunds may be issued for services and transactions on our platform.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Product Listings & Categories</h2>
        <p className="mb-4">
          Once a vendor has added products and assigned categories, we do not offer refunds for listing fees or subscription payments. Vendors are responsible for ensuring their listings meet our guidelines before publishing.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Subscription & Service Plans</h2>
        <p className="mb-4">
          Vendors who purchase monthly or yearly plans (Basic, Pro, or Enterprise) are not eligible for partial or full refunds once the service period has started, except in cases of technical issues caused by our platform that prevent usage of core features.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Order & Payment Disputes</h2>
        <p className="mb-4">
          Refunds related to customer orders must be handled directly between the vendor and customer. However, we may intervene in cases involving fraudulent transactions or failure to deliver. Disputes must be raised within 7 days of the order.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Profile Updates & Account Changes</h2>
        <p className="mb-4">
          Updating profile information or business details does not qualify for any refund. Make sure to double-check your account details before submitting any changes.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Cancellation Policy</h2>
        <p className="mb-4">
          Vendors may cancel their subscription at any time, but no refunds will be issued for the remaining period of the subscription. Access will remain active until the end of the billing cycle.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p className="mb-4">
          If you believe you are eligible for a refund under exceptional circumstances, please contact our support team at <a href="mailto:support@yourwebsite.com" className="text-blue-600 underline">support@yourwebsite.com</a> with full details of your request.
        </p>

        <p className="mt-8 text-sm text-gray-600">
          This policy is subject to change without notice. Last updated: June 27, 2025.
        </p>
      </div>
    </>
  );
}

export default RefundPolicy;
