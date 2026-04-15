import { Helmet } from "react-helmet";
import CarbonCreditServices from "./CarbonCreditServices"
import CarbonCreditsSection from "./CarbonCreditsSection"
import CarbonCreditTypes from "./CarbonCreditTypes"
import CarbonFootprintSection from "./CarbonFootprintSection"
import CarbonJourneyCTA from "./CarbonJourneyCTA"
import CarbonFootprintHero from "./HeroCarbon"
import IRECSection from "./IRECSection"
import WhyChooseTrueSun from "./WhyChooseTrueSun"


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
        <link rel="canonical" href="https://truesun.in/services/consulting/carbon-footprinting" />

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
