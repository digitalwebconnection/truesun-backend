import { Helmet } from "react-helmet";
import ServicesHero from "./ServiceHero"
import RooftopSolarServicesPage from "./ServicesPage"
import CustomerJourney from "./CustomerJourney";

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://truesun.in/services",
  "name": "Solar Panel Installation in Mumbai",
  "serviceType": "Rooftop Solar Installation Services",
  "url": "https://truesun.in/services",
  "description": "Expert industrial & commercial solar company offering customized rooftop solar solutions to reduce electricity costs and power business growth.",
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
    "Solar Panel Installation in Mumbai",
    "Rooftop Solar Installation Mumbai",
    "Residential Solar Installation Mumbai",
    "Commercial Solar Installation Mumbai",
    "Industrial Solar Solutions Mumbai"
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

const ServiceMain = () => {

  return (
    <>
     <Helmet>
        {/* Title */}
        <title>Solar Panel Installation in Mumbai | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Expert industrial & commercial solar company offering customized rooftop solar solutions to reduce electricity costs and power business growth."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar panel installation Mumbai, solar installation service, rooftop solar Mumbai, commercial solar India, industrial solar solutions"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Panel Installation in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Customized rooftop solar solutions for industrial & commercial use. Reduce electricity costs with TrueSun Energy." />
        <meta property="og:url" content="https://truesun.in/services" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-services.jpg" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Panel Installation in Mumbai" />
        <meta name="twitter:description" content="Affordable and efficient solar installation services for businesses in Mumbai." />

      </Helmet>

      {/* JSON-LD Services Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />

      <ServicesHero />
      <RooftopSolarServicesPage />
      <CustomerJourney/>
    </>
  )
}

export default ServiceMain