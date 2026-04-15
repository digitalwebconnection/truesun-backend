import { Helmet } from "react-helmet";
import Aboutab from "./AboutAb"
import AboutHero from "./HeroAb"
import OurTeamSection from "./OurTeamSection"


const MainAbout = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Trusted Solar Company in Mumbai | About TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="A trusted solar company in Mumbai providing rooftop solar solutions, financing & clean energy expertise. Choose TrueSun Energy for reliable solar services."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="trusted solar company Mumbai, best solar company Mumbai, rooftop solar Mumbai, solar energy company India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Trusted Solar Company in Mumbai | About TrueSun Energy" />
        <meta property="og:description" content="Reliable rooftop solar solutions in Mumbai with financing and expert support. TrueSun Energy – your trusted solar partner." />
        <meta property="og:url" content="https://truesun.in/about" />
        <meta property="og:type" content="website" />

        {/* Optional OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-banner.jpg" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Trusted Solar Company in Mumbai" />
        <meta name="twitter:description" content="Choose TrueSun Energy for reliable and efficient solar solutions in Mumbai." />
      </Helmet>

      <AboutHero />
      <Aboutab />
      <OurTeamSection />
    </>
  )
}

export default MainAbout
