import Link from "next/link";

function TermsAndConditions() {
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
          <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
  
          <p className="mb-4">
            Welcome to [Your Company Name]. By accessing or using our platform as a vendor, you agree to the following terms and conditions. Please read them carefully before registering or using our services.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Vendor Eligibility</h2>
          <p className="mb-4">
            To become a vendor on our platform, you must be at least 18 years of age and legally authorized to run a business in your jurisdiction. You are solely responsible for the accuracy and legality of the information you provide.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Product Listings</h2>
          <p className="mb-4">
            Vendors may list physical or digital products under the allowed categories. Products must comply with all applicable laws and must not infringe on intellectual property rights. We reserve the right to remove listings that violate our guidelines.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments & Subscription</h2>
          <p className="mb-4">
            Vendors are required to subscribe to one of our pricing plans (Basic, Pro, Enterprise). Subscription fees are billed monthly or annually and are non-refundable, except under exceptional circumstances as outlined in our Refund Policy.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Order Fulfillment</h2>
          <p className="mb-4">
            Vendors are fully responsible for processing and fulfilling customer orders in a timely and accurate manner. Failure to deliver products may result in penalties, account suspension, or legal action.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Account Management</h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. Notify us immediately if you suspect any unauthorized use.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate any vendor account that violates these terms or engages in fraudulent, illegal, or unethical practices.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Modifications</h2>
          <p className="mb-4">
            [Your Company Name] reserves the right to modify these Terms and Conditions at any time. Continued use of the platform after changes are posted constitutes your acceptance of the new terms.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact</h2>
          <p className="mb-4">
            If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:support@yourwebsite.com" className="text-blue-600 underline">support@yourwebsite.com</a>.
          </p>
  
          <p className="mt-8 text-sm text-gray-600">
            Last updated: June 27, 2025
          </p>
        </div>
      </>
    );
  }
  
  export default TermsAndConditions;
  