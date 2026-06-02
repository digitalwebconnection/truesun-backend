import ResidentialHero from "./ResidentialHero"
import ResidentialSolarDetailsPage from "./ResidentialSolarDetails"
import { Helmet } from "react-helmet";

const residentialSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://truesun.in/services/rooftop/residential",
  "name": "Residential Solar System in Mumbai",
  "serviceType": "Residential Rooftop Solar Installation",
  "url": "https://truesun.in/services/rooftop/residential",
  "description": "Switch to a residential solar system for your home. Save on electricity bills and enjoy efficient, eco-friendly rooftop solar energy solutions.",
  "provider": {
    "@type": "Organization",
    "name": "TrueSun Energy",
    "url": "https://truesun.in/",
    "logo": "https://truesun.in/assets/truesun-BPKZEvcM.png",
    "image": "https://truesun.in/wp-content/uploads/logo.png",
    "telephone": "+91-88508 45149",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Mumbai"
  },
  "audience": {
    "@type": "PeopleAudience",
    "audienceType": "Residential Property Owners"
  },
  "keywords": [
    "Residential Solar System in Mumbai",
    "Home Solar Installation Mumbai",
    "Residential Rooftop Solar Mumbai",
    "Solar Panels for Home Mumbai",
    "Residential Solar Company Mumbai"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const Residentialmain = () => {
  return (
    <>
     <Helmet>
        {/* Title */}
        <title>Residential Solar System in Mumbai | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Switch to a residential solar system for your home. Save on electricity bills and enjoy efficient, eco-friendly rooftop solar energy solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="residential solar system Mumbai, rooftop solar for home India, home solar installation Mumbai, solar panels for house India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/rooftop/residential/" />

        {/* Open Graph */}
        <meta property="og:title" content="Residential Solar System in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Save on electricity bills with efficient rooftop solar systems for your home. Clean, reliable, and cost-effective energy solutions." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/residential" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/residential-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Solar System in Mumbai" />
        <meta name="twitter:description" content="Affordable rooftop solar solutions for homes. Reduce electricity bills with TrueSun Energy." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(residentialSchema) }} />
      </Helmet>
      <div className="overflow-x-hidden">
        <ResidentialHero />
        <ResidentialSolarDetailsPage />
      </div>
    </>
  )
}

export default Residentialmain
