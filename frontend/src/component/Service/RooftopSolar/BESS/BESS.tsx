import BESSBenefits from "./BESSBenefits"
import { Helmet } from "react-helmet";
import BESSHero from "./BESSHero"
import BESSSection from "./BESSSection"
import BESSUseCases from "./BESSUseCases"
import EnergyFlowSection from "./EnergyFlowSection"
import OurScope from "./OurScope"

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
        <link rel="canonical" href="https://truesun.in/services/rooftop/bess" />

        {/* Open Graph */}
        <meta property="og:title" content="Energy Storage System Solutions | TrueSun Energy" />
        <meta property="og:description" content="Reliable battery energy storage systems for solar backup and uninterrupted power. Maximize efficiency with TrueSun Energy." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/bess" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/bess-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Energy Storage System Solutions" />
        <meta name="twitter:description" content="Advanced battery storage solutions for solar power backup and energy savings." />
      </Helmet>

     <BESSHero/> 
     <BESSSection/>
     <BESSBenefits/>
     <EnergyFlowSection/>
     <OurScope/>
     <BESSUseCases/>
    </>
  )
}

export default BESS
