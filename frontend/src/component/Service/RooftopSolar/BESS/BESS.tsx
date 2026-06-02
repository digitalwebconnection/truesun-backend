import BESSBenefits from "./BESSBenefits"
import { Helmet } from "react-helmet";
import BESSHero from "./BESSHero"
import BESSSection from "./BESSSection"
import BESSUseCases from "./BESSUseCases"
import EnergyFlowSection from "./EnergyFlowSection"
import OurScope from "./OurScope"

const bessSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://truesun.in/services/rooftop/BESS",
  "name": "Energy Storage System Solutions",
  "serviceType": "Battery Energy Storage System Services",
  "url": "https://truesun.in/services/rooftop/BESS",
  "description": "Energy storage system for solar power backup and energy savings. Improve efficiency and ensure uninterrupted power with battery storage solutions.",
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
    "Energy Storage System Solutions",
    "Battery Energy Storage System",
    "BESS Solutions Mumbai",
    "Solar Battery Storage Mumbai",
    "Commercial Energy Storage Solutions"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const BESS = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Energy Storage System Solutions | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Energy storage system for solar power backup and energy savings. Improve efficiency and ensure uninterrupted power with battery storage solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="energy storage system India, battery energy storage system BESS, solar battery backup, lithium battery storage India, solar power storage solutions"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/rooftop/BESS/" />

        {/* Open Graph */}
        <meta property="og:title" content="Energy Storage System Solutions | TrueSun Energy" />
        <meta property="og:description" content="Reliable battery energy storage systems for solar backup and uninterrupted power. Maximize efficiency with TrueSun Energy." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/BESS/" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/bess-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Energy Storage System Solutions" />
        <meta name="twitter:description" content="Advanced battery storage solutions for solar power backup and energy savings." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bessSchema) }} />
      </Helmet>

      <BESSHero />
      <BESSSection />
      <BESSBenefits />
      <EnergyFlowSection />
      <OurScope />
      <BESSUseCases />
    </>
  )
}

export default BESS
