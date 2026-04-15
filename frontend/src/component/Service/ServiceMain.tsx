import { useEffect, useState } from "react"
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