import CareersHero from "./CareersHero"
import CareerWithTruesun from "./CareerWithTruesun"
import { Helmet } from "react-helmet";

const Careersmain = () => {
  return (
    <>
    <Helmet>
        {/* Title */}
        <title>Build Your Career in Solar Energy | Join the Renewable Future</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Explore careers in solar energy and discover job opportunities in the renewable sector. Build a future with clean energy and grow your career."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="careers in solar energy, solar jobs India, renewable energy jobs Mumbai, solar company careers, clean energy careers India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/careers" />

        {/* Open Graph */}
        <meta property="og:title" content="Careers in Solar Energy | Join TrueSun Energy" />
        <meta property="og:description" content="Join the renewable energy revolution. Explore job opportunities in solar energy and build a meaningful career." />
        <meta property="og:url" content="https://truesun.in/careers" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-careers.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers in Solar Energy" />
        <meta name="twitter:description" content="Grow your career in the renewable energy sector with exciting solar job opportunities." />
      </Helmet>
     <CareersHero/>
     <CareerWithTruesun/>
    </>
  )
}

export default Careersmain
