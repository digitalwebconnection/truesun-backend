import RwaSubsidySection from "./RwaSubsidySection"
import SolarBenefits from "./SolarBenefits"
import SolarEligibilitySection from "./SolarEligibilitySection"
import SolarSubsidyHero from "./SolarSubsidyHero "
import { Helmet } from "react-helmet";


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
        <link rel="canonical" href="https://truesun.in/services/rooftop/subsidy" />

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
      <SolarSubsidyHero />
      <SolarBenefits />
      <RwaSubsidySection />
      <SolarEligibilitySection />
    </>
  )
}

export default Subsidy
