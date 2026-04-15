import ResidentialHero from "./ResidentialHero"
import ResidentialSolarDetailsPage from "./ResidentialSolarDetails"
import { Helmet } from "react-helmet";


const Residentialmain = () => {
  return (
    <>
     <Helmet>
        {/* Title */}
        <title>Residential Solar System in Mumbai | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Switch to a residential solar system for your home. Save on electricity bills and enjoy efficient, eco-friendly rooftop solar energy solutions."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="residential solar system Mumbai, rooftop solar for home India, home solar installation Mumbai, solar panels for house India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/services/rooftop/residential" />

        {/* Open Graph */}
        <meta property="og:title" content="Residential Solar System in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Save on electricity bills with efficient rooftop solar systems for your home. Clean, reliable, and cost-effective energy solutions." />
        <meta property="og:url" content="https://truesun.in/services/rooftop/residential" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/residential-solar.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Residential Solar System in Mumbai" />
        <meta name="twitter:description" content="Affordable rooftop solar solutions for homes. Reduce electricity bills with TrueSun Energy." />
      </Helmet>
      <ResidentialHero/>
      <ResidentialSolarDetailsPage/>
    </>
  )
}

export default Residentialmain
