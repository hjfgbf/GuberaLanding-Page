import Link from "next/link";

function PrivacyPolicy() {
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
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
  
          <p className="mb-4">
            At [Your Company Name], we value your privacy and are committed to protecting the personal information of our vendors and customers. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our platform.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-4">
            We collect personal and business information such as name, email, phone number, business details, and payment information when vendors register on our platform. We may also collect data related to product listings, transactions, and communication.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information we collect is used to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Create and manage vendor accounts</li>
            <li>Process payments and subscriptions</li>
            <li>Send important notifications and promotional emails</li>
            <li>Improve our services and provide technical support</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing & Disclosure</h2>
          <p className="mb-4">
            We do not sell or rent your personal information to third parties. We may share data with trusted service providers who assist us in operating our platform (e.g., payment processors, analytics services), subject to confidentiality agreements.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. However, no system is 100% secure, and we encourage you to safeguard your login credentials.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Cookies & Tracking</h2>
          <p className="mb-4">
            Our platform uses cookies to enhance user experience, analyze traffic, and personalize content. You can control cookie settings in your browser.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, or delete your personal data at any time. You can request changes by contacting our support team.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with the revised date.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-4">
            For questions regarding this policy, please contact us at <a href="mailto:support@yourwebsite.com" className="text-blue-600 underline">support@yourwebsite.com</a>.
          </p>
  
          <p className="mt-8 text-sm text-gray-600">
            Last updated: June 27, 2025
          </p>
        </div>
      </>
    );
  }
  
  export default PrivacyPolicy;
  