import RwaSubsidySection from "./RwaSubsidySection"
import SolarBenefits from "./SolarBenefits"
import SolarEligibilitySection from "./SolarEligibilitySection"
import SolarSubsidyHero from "./SolarSubsidyHero "
import { Helmet } from "react-helmet";

const subsidySchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://truesun.in/services/rooftop/Subsidy",
  "url": "https://truesun.in/services/rooftop/Subsidy",
  "name": "Solar Subsidy in India | Govt Solar Panel Subsidy & Benefits",
  "description": "Solar subsidy in India to reduce solar installation cost. Learn about government schemes, benefits, and how to apply for rooftop solar subsidies.",
  "publisher": {
    "@type": "Organization",
    "name": "TrueSun Energy",
    "url": "https://truesun.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://truesun.in/wp-content/uploads/logo.png"
    }
  },
  "keywords": [
    "Solar Subsidy in India",
    "Govt Solar Panel Subsidy & Benefits",
    "PM Surya Ghar Yojana",
    "Residential Solar Subsidy",
    "Government Solar Scheme India"
  ],
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the solar subsidy in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Government of India provides subsidies for residential rooftop solar installations under approved renewable energy schemes."
      }
    },
    {
      "@type": "Question",
      "name": "Who can apply for solar subsidy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Residential property owners installing rooftop solar systems can apply for government solar subsidies in India."
      }
    },
    {
      "@type": "Question",
      "name": "What are the benefits of solar subsidy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solar subsidy helps reduce installation costs, lowers electricity bills, and promotes clean renewable energy usage."
      }
    }
  ]
};

const Subsidy = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Solar Subsidy in India | Govt Solar Panel Subsidy & Benefits</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Solar subsidy in India to reduce solar installation cost. Learn about government schemes, benefits, and how to apply for rooftop solar subsidies."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar subsidy India, government solar subsidy India, rooftop solar subsidy India, PM Surya Ghar Yojana, solar panel subsidy Mumbai"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/rooftop/Subsidy/" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Subsidy in India | Govt Solar Panel Subsidy & Benefits" />
        <meta property="og:description" content="Learn how to reduce your solar installation cost with government subsidy schemes in India. Step-by-step guide and benefits explained." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/subsidy" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-subsidy.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Subsidy in India" />
        <meta name="twitter:description" content="Save on solar installation costs with government subsidy schemes in India." />

      </Helmet>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(subsidySchema) }} />

      <SolarSubsidyHero />
      <SolarBenefits />
      <RwaSubsidySection />
      <SolarEligibilitySection />
    </>
  )
}

export default Subsidy
