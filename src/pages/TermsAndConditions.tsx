const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">
        Terms and Conditions for Food Court
      </h1>
      <p className="text-gray-600 mb-8">Last Updated: 13th May, 2025</p>

      <section className="mb-8">
        <p className="mb-4">
          Welcome to <span className="font-semibold">Food Court</span> ("we,"
          "us," or "our"). These Terms and Conditions ("Terms") govern your use
          of our food ordering website and services. By accessing or using{" "}
          <span className="font-semibold">Food Court</span>, you agree to comply
          with these Terms. If you do not agree, please refrain from using our
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">1. Services Provided</h2>
        <p className="mb-4">
          Food Court is an online platform that allows users to:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Browse menus from listed restaurants.</li>
          <li>Place food orders for delivery or pickup.</li>
          <li>Receive order confirmations and billing details via email.</li>
          <li>Make secure online payments for orders.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            You must provide accurate and complete information when placing an
            order.
          </li>
          <li>
            You are responsible for ensuring that your payment details are
            correct.
          </li>
          <li>
            Any misuse of the platform (fraud, unauthorized access, etc.) is
            strictly prohibited.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">3. Payments & Refunds</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We use <span className="font-semibold">Razorpay</span> as our
            payment gateway.
          </li>
          <li>
            All payments must be made in advance before order confirmation.
          </li>
          <li>
            Refunds (if applicable) will be processed as per the restaurant's
            policy.
          </li>
          <li>Food Court does not handle cash transactions directly.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          4. Order Confirmation & Cancellation
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Once an order is placed, you will receive an email confirmation.
          </li>
          <li>
            Order cancellations must be requested before the restaurant starts
            preparation.
          </li>
          <li>
            Food Court is not responsible for order delays or issues caused by
            restaurants.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">5. Privacy Policy</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            We collect personal data (name, email, payment details) to process
            orders.
          </li>
          <li>
            Your data is secured and will not be shared with third parties
            without consent.
          </li>
          <li>
            Refer to our <span className="font-semibold">Privacy Policy</span>{" "}
            for more details.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">6. Limitation of Liability</h2>
        <p className="mb-2">
          Food Court acts as an intermediary between users and restaurants.
        </p>
        <p className="mb-2">We are not liable for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Food quality, delivery delays, or restaurant errors.</li>
          <li>
            Any technical issues beyond our control (payment failures, website
            downtime).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">7. Modifications to Terms</h2>
        <p>
          We reserve the right to update these Terms at any time. Continued use
          of Food Court after changes implies acceptance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">8. Governing Law</h2>
        <p>
          These Terms are governed by the laws of Uttar Pradesh. Any disputes
          will be resolved in High courts.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
        <p className="mb-2">
          For any questions regarding these Terms, please contact us at:
        </p>
        <ul className="space-y-1">
          <li>
            📧 <span className="font-semibold">Email:</span>{" "}
            officialsandeep2023@gmail.com
          </li>
          <li>
            🌐 <span className="font-semibold">Website:</span>{" "}
            https://redux-plaza.vercel.app
          </li>
        </ul>
      </section>

      <section className="border-t pt-6">
        <p className="font-semibold">
          By using Food Court, you acknowledge that you have read, understood,
          and agreed to these Terms and Conditions.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
