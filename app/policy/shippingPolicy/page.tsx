import Link from "next/link";

function ShippingPolicy() {
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
          <h1 className="text-2xl font-bold mb-4">Shipping Policy</h1>
  
          <p className="mb-4">
            At [Your Company Name], we strive to ensure timely and reliable delivery of products purchased through our platform. This Shipping Policy outlines the responsibilities of vendors and expectations for customers regarding shipping and delivery.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Vendor Shipping Responsibility</h2>
          <p className="mb-4">
            Vendors are solely responsible for fulfilling and shipping customer orders. Once an order is confirmed, vendors must process and ship the product within the promised time frame mentioned on the product listing.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Shipping Timeline</h2>
          <p className="mb-4">
            Vendors must clearly state their estimated shipping time. Delays must be communicated to customers immediately. Late shipments without valid reasons may result in penalties or account suspension.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Shipping Methods</h2>
          <p className="mb-4">
            Vendors may use any reliable courier service to fulfill their orders. Tracking details must be provided to the customer once the product has been shipped.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Shipping Charges</h2>
          <p className="mb-4">
            Vendors may choose to offer free or paid shipping. All shipping charges must be clearly mentioned on the product page. Any hidden charges are strictly prohibited.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. International Shipping</h2>
          <p className="mb-4">
            Vendors must indicate if they support international shipping. They are responsible for calculating and collecting any applicable customs duties or international delivery charges.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Lost or Damaged Products</h2>
          <p className="mb-4">
            Vendors are responsible for ensuring products are packaged securely. In case of lost or damaged goods during transit, the vendor must take necessary steps to replace or refund the product.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact & Support</h2>
          <p className="mb-4">
            For any issues related to shipping, customers can contact the vendor directly through their store dashboard or reach out to <a href="mailto:support@yourwebsite.com" className="text-blue-600 underline">support@yourwebsite.com</a>.
          </p>
  
          <p className="mt-8 text-sm text-gray-600">
            This policy is subject to change without prior notice. Last updated: June 27, 2025.
          </p>
        </div>
      </>
    );
  }
  
  export default ShippingPolicy;
  