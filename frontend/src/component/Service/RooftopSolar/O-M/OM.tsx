import SolarHero from "./OMHero"
import ProcessAndPlans from "./ProcessAndPlans"
import ProtectionPlans from "./ProtectionPlans"
import WhyOMSection from "./WhyOMSection"
import { Helmet } from "react-helmet";

const OM = () => {
  return (
    <>
    <Helmet>
        {/* Title */}
        <title>Solar Maintenance Services in Mumbai | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Solar maintenance services in Mumbai to improve efficiency and extend system life. Get expert solar care and reliable support from TrueSun Energy."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar maintenance services Mumbai, solar panel maintenance India, rooftop solar maintenance, solar AMC services Mumbai, solar repair services"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/rooftop/o-and-m" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Maintenance Services in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Ensure peak performance of your solar system with expert maintenance and AMC services in Mumbai." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/o-and-m" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-maintenance.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Maintenance Services in Mumbai" />
        <meta name="twitter:description" content="Professional solar maintenance and AMC services to maximize system performance and lifespan." />
      </Helmet>
      <SolarHero/>
      <ProtectionPlans/>
      <ProcessAndPlans/>
      <WhyOMSection/>
    </>
  )
}

export default OM
