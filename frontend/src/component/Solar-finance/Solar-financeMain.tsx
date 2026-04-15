import SolarFinanceHero from "./HeroSolarfinance"
import SolarFinancePage from "./SolarFinancePage"
import { Helmet } from "react-helmet";

const SolarfinanceMain = () => {
  return (
    <>
    <Helmet>
        {/* Title */}
        <title>Affordable Solar Panel Financing | Install Solar with Easy EMI</title>

        {/* Meta Description */}
        <meta
          name="description"
          content="Solar panel financing for home and business with EMI and loan options. Make solar affordable and enjoy long-term energy savings."
        />

        {/* Keywords */}
        <meta
          name="keywords"
          content="solar panel financing India, solar EMI plans, solar loan options India, rooftop solar finance Mumbai, solar financing for home and business"
        />

        {/* Canonical */}
        <link rel="canonical" href="https://truesun.in/solar-finance" />

        {/* Open Graph */}
        <meta property="og:title" content="Affordable Solar Panel Financing | Easy EMI Options" />
        <meta property="og:description" content="Install solar with easy EMI and financing options. Affordable solutions for homes and businesses." />
        <meta property="og:url" content="https://truesun.in/solar-finance" />
        <meta property="og:type" content="website" />

        {/* OG Image */}
        <meta property="og:image" content="https://truesun.in/solar-finance.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Solar Panel Financing Options" />
        <meta name="twitter:description" content="Affordable EMI plans to install solar and start saving on electricity bills." />
      </Helmet>
      <SolarFinanceHero/>
      <SolarFinancePage/>
    </>
  )
}

export default SolarfinanceMain
