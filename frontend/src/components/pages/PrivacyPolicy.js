import PageHeader from "./PageHeader";

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <div className="mx-auto w-full max-w-screen-xl px-4 lg:px-16 py-10 text-slate-600">
        
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-6 text-justify">
          Welcome to our platform. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>

        <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
        <p className="mb-6 text-justify">
          We may collect personal information such as your name, email address, phone number, and delivery address when you use our services. We also collect non-personal data like browser type, device information, and usage data to improve our services.
        </p>

        <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
        <p className="mb-6 text-justify">
          We use your information to:
          <ul className="list-disc pl-6 mt-2">
            <li>Process and deliver your orders</li>
            <li>Improve user experience</li>
            <li>Send updates, offers, and notifications</li>
            <li>Provide customer support</li>
          </ul>
        </p>

        <h2 className="text-2xl font-bold mb-4">4. Sharing of Information</h2>
        <p className="mb-6 text-justify">
          We do not sell your personal information. We may share your data with trusted partners such as delivery providers or payment gateways only to complete your transactions.
        </p>

        <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
        <p className="mb-6 text-justify">
          We implement appropriate security measures to protect your data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
        <p className="mb-6 text-justify">
          We use cookies to enhance your browsing experience. Cookies help us understand user behavior and improve our services.
        </p>

        <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
        <p className="mb-6 text-justify">
          You have the right to access, update, or delete your personal information. You can contact us anytime for such requests.
        </p>

        <h2 className="text-2xl font-bold mb-4">8. Changes to This Policy</h2>
        <p className="mb-6 text-justify">
          We may update this Privacy Policy from time to time. Changes will be posted on this page with updated dates.
        </p>

        <h2 className="text-2xl font-bold mb-4">9. Contact Us</h2>
        <p className="text-justify">
          If you have any questions about this Privacy Policy, you can contact us at:
          <br />
          <span className="font-semibold">Email:</span> support@yourdomain.com
        </p>

      </div>
    </>
  );
};

export default PrivacyPolicy;