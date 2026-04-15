import BESSBenefits from "./BESSBenefits"
import BESSHero from "./BESSHero"
import BESSSection from "./BESSSection"
import BESSUseCases from "./BESSUseCases"
import EnergyFlowSection from "./EnergyFlowSection"
import OurScope from "./OurScope"

const BESS = () => {
  return (
    <>
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
