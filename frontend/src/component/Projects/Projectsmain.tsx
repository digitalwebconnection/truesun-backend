import ProjectsHero from "./ProjectsHero"
import ProjectsPage from "./ProjectsPage"
import ProjectVideoSection from "./ProjectVideoSection"
import { Helmet } from "react-helmet";

const Projectsmain = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Solar Projects in Mumbai | Save Energy with Expert Installations</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Discover solar projects in Mumbai including residential and commercial installations. Reliable rooftop solar solutions for long-term savings."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar projects Mumbai, rooftop solar projects India, residential solar installations Mumbai, commercial solar projects Mumbai, solar case studies India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/projects" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Projects in Mumbai | TrueSun Energy" />
        <meta property="og:description" content="Explore our completed solar projects including residential and commercial installations across Mumbai." />
        <meta property="og:url" content="https://truesun.in/projects" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-projects.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Projects in Mumbai" />
        <meta name="twitter:description" content="View our successful rooftop solar installations and case studies." />
      </Helmet>
      <ProjectsHero />
      <ProjectsPage />
      <ProjectVideoSection />
    </>
  )
}

export default Projectsmain
