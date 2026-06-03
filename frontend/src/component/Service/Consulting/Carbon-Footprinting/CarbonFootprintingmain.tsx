import { Helmet } from "react-helmet";
import CarbonCreditServices from "./CarbonCreditServices"
import CarbonCreditsSection from "./CarbonCreditsSection"
import CarbonCreditTypes from "./CarbonCreditTypes"
import CarbonFootprintSection from "./CarbonFootprintSection"
import CarbonJourneyCTA from "./CarbonJourneyCTA"
import CarbonFootprintHero from "./HeroCarbon"
import IRECSection from "./IRECSection"
import WhyChooseTrueSun from "./WhyChooseTrueSun"


const carbonFootprintingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://truesun.in/services/consulting/carbon-footprinting",
  "name": "Carbon Foot printing Services in Mumbai",
  "serviceType": "Carbon Footprint Assessment and Sustainability Consulting",
  "url": "https://truesun.in/services/consulting/carbon-footprinting",
  "description": "Carbon footprinting services to measure and reduce business emissions. Get expert carbon assessment, audit, and sustainability solutions.",
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
  "keywords": [
    "Carbon Foot printing Services in Mumbai",
    "Carbon Footprint Assessment Mumbai",
    "Sustainability Consulting Mumbai",
    "Carbon Emission Consulting",
    "Environmental Impact Assessment Mumbai"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const CarbonFootprintingmain = () => {
  return (
    <>

    <Helmet>
        {/* Title */}
        <title>Carbon Footprinting Services in Mumbai | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Carbon footprinting services to measure and reduce business emissions. Get expert carbon assessment, audit, and sustainability solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="carbon footprinting services Mumbai, carbon footprint assessment India, carbon audit services, sustainability consulting India, emission reduction services"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/consulting/carbon-footprinting/" />

        {/* Open Graph */}
        <meta property="og:title" content="Carbon Footprinting Services in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Measure and reduce your business carbon emissions with expert carbon footprint assessment and sustainability solutions." />
        <meta property="og:url" content="https://truesun.in/services/consulting/carbon-footprinting" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/carbon-footprint.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carbon Footprinting Services in Mumbai" />
        <meta name="twitter:description" content="Expert carbon assessment and sustainability consulting to reduce emissions and improve ESG performance." />

      </Helmet>

      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carbonFootprintingSchema) }} />

      <CarbonFootprintHero />
      <CarbonFootprintSection />
      <IRECSection />
      <CarbonCreditsSection />
      <CarbonCreditTypes />
      <CarbonCreditServices />
      <WhyChooseTrueSun />
      <CarbonJourneyCTA/>
    </>
  )
}

export default CarbonFootprintingmain
