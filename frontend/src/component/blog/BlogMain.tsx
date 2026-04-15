import SolarBlogPage from "./BlogHero"
import { Helmet } from "react-helmet"

const BlogMain = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Solar Energy Insights & Blog | TrueSun Energy</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Read our solar blog for expert tips, installation guides, and updates on solar energy. Discover ways to save electricity and go solar."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar energy blog India, solar tips and guides, rooftop solar blog, solar installation advice, renewable energy blog India"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/knowledge" />

        {/* Open Graph */}
        <meta property="og:title" content="Solar Energy Blog | TrueSun Energy Insights" />
        <meta property="og:description" content="Expert tips, guides, and updates on solar energy to help you save electricity and make smart energy decisions." />
        <meta property="og:url" content="https://truesun.in/knowledge" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-blog.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Energy Blog & Insights" />
        <meta name="twitter:description" content="Learn about solar installation, savings, and energy efficiency with our expert blog." />
      </Helmet>

      <SolarBlogPage/>
    </>
  )
}

export default BlogMain
