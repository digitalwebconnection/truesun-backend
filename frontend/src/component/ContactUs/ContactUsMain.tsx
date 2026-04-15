import ContactPage from "./ContactPage"
import ContactHero from "./ContactUsHero"
import { Helmet } from "react-helmet"

const ContactUsMain = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Contact Solar Company | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Contact solar company for rooftop solar installation, consultation, and support. Get reliable solar solutions and reduce energy costs."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="contact solar company, solar consultation Mumbai, rooftop solar inquiry, solar installation contact India, solar support services"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Solar Company | TrueSun Energy" />
        <meta property="og:description" content="Get in touch for solar installation, consultation, and support. Start saving with solar today." />
        <meta property="og:url" content="https://truesun.in/contact" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/contact-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact TrueSun Energy" />
        <meta name="twitter:description" content="Connect with our solar experts for consultation and installation services." />
      </Helmet>
      <ContactHero />
      <ContactPage />
    </>
  )
}

export default ContactUsMain
