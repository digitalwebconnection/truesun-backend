import { useEffect, useState } from "react"
import { Helmet } from "react-helmet";
import ServicesHero from "./ServiceHero"
import RooftopSolarServicesPage from "./ServicesPage"
import LeadPopup from "../../component/LeadPopup";
import CustomerJourney from "./CustomerJourney";

const ServiceMain = () => {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    // Open popup when page loads
    setShowPopup(true)
  }, [])

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
        <link rel="canonical" href="https://truesun.in/services" />

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
      <ServicesHero />
      <RooftopSolarServicesPage />
      <CustomerJourney/>

      {showPopup && (
        <LeadPopup onClose={() => setShowPopup(false)} />
      )}
    </>
  )
}

export default ServiceMain