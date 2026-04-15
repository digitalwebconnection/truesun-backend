

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <div className="bg-linear-to-r from-[#FC763A] to-[#FFB347] pt-26 pb-10 px-4 text-center text-white">
        <h1 className="text-3xl md:text-4xl font-bold">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto">
          Your privacy is important to us. Learn how TrueSun Energy Solutions
          collects, uses, and protects your information.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-10">

        {/* INTRO */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            What Information Do We Collect?
          </h2>
          <p className="text-slate-600 text-sm leading-7">
            TrueSun Energy Solutions Private Limited respects the privacy of its users and is committed to protecting it in all aspects. The information about the user that may be collected includes:
          </p>
          <ul className="list-disc pl-5 mt-3 text-sm text-slate-600 space-y-1">
            <li>Information supplied by users</li>
            <li>Information automatically tracked while browsing the website</li>
          </ul>
          <p className="mt-3 text-slate-600 text-sm leading-7">
            By using our website, you consent to the collection, storage, and use of your information for the services you apply for.
          </p>
        </section>

        {/* USAGE */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            What Do We Use Your Information For?
          </h2>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-2">
            <li>To personalize your experience</li>
            <li>To improve customer service and support</li>
            <li>To send periodic emails</li>
          </ul>

          <p className="mt-4 text-sm text-slate-600 leading-7">
            TrueSun collects data to better understand user needs, improve services, and customize the website experience. Any voluntarily shared data will be used to fulfill user-specific requests.
          </p>
        </section>

        {/* SECURITY */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            How Do We Protect Your Information?
          </h2>
          <p className="text-sm text-slate-600 leading-7">
            We implement security measures to maintain the safety of your personal information when you submit a request or place an order.
          </p>

          <div className="mt-3 rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700">
            🔒 SSL (Secure Sockets Layer) technology is used to protect your data.
          </div>
        </section>

        {/* DISCLOSURE */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Do We Disclose Any Information to Outside Parties?
          </h2>
          <p className="text-sm text-slate-600 leading-7">
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>
        </section>

        {/* COOKIES */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Do We Use Cookies?
          </h2>
          <p className="text-sm text-slate-600 leading-7">
            Yes. Cookies are small files stored on your device that help us understand user behavior and improve website functionality. These help us recognize your browser and remember certain information.
          </p>
        </section>

        {/* POLICY CHANGE */}
        <section>
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Changes to Our Privacy Policy
          </h2>
          <p className="text-sm text-slate-600 leading-7">
            If we decide to change our privacy policy, we will post updates on this page. Changes will apply only to information collected after the date of modification.
          </p>
        </section>

        {/* CONTACT */}
        <section className="rounded-2xl bg-slate-50 border p-6">
          <h2 className="text-xl font-semibold text-slate-900 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-slate-600">
            If you have any questions about this privacy policy, feel free to contact us:
          </p>

          <p className="mt-3 text-sm font-medium text-[#FC763A]">
            📧 info@truesun.in
          </p>
        </section>

      </div>
    </div>
  )
}

export default PrivacyPolicy