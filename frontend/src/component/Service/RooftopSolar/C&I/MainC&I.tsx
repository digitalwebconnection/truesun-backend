import CIHeroSection from "./HeroC&I"
import SolarNovaIndustrialPage from "./PageC&I"
import { Helmet } from "react-helmet";

const ciSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://truesun.in/services/rooftop/C&I",
  "name": "Commercial Solar Installation in Mumbai",
  "serviceType": "Industrial Solar Company",
  "url": "https://truesun.in/services/rooftop/C&I",
  "description": "Get commercial & industrial solar solutions in Mumbai with expert rooftop installation, financing & energy-saving systems for businesses.",
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
    "@type": "BusinessAudience",
    "audienceType": "Commercial and Industrial Businesses"
  },
  "keywords": [
    "Commercial Solar Installation in Mumbai",
    "Industrial Solar Company",
    "Industrial Solar Solutions Mumbai",
    "Commercial Rooftop Solar Mumbai",
    "Factory Solar Installation Mumbai"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const MainCI = () => {
  return (
    <>
      <Helmet>
        {/* Title (Optimized with main + secondary keywords) */}
        <title>
          Commercial Solar Installation in Mumbai | Industrial Solar Company
        </title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Get commercial & industrial solar solutions in Mumbai with expert rooftop installation, financing & energy-saving systems for businesses."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="industrial solar company Mumbai, commercial solar installation Mumbai, rooftop solar for business India, C&I solar solutions Mumbai"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in//services/rooftop/C&I" />

        {/* Open Graph */}
        <meta property="og:title" content="Commercial Solar Installation in Mumbai | Industrial Solar Company" />
        <meta property="og:description" content="Expert rooftop solar solutions for commercial & industrial businesses in Mumbai. Reduce costs and increase efficiency with TrueSun Energy." />
        <meta property="og:url" content="https://truesun.in//services/rooftop/C&I" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/ci-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial & Commercial Solar Company Mumbai" />
        <meta name="twitter:description" content="Power your business with cost-saving solar solutions in Mumbai." />

        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ciSchema) }} />
      </Helmet>

      <CIHeroSection />
      <SolarNovaIndustrialPage />
    </>
  )
}

export default MainCI
