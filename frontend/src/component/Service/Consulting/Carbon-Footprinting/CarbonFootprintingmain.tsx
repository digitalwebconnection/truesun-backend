
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
