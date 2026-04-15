import HeroSection from './Hero'
import AboutTrueSun from './AboutHm'
import { Helmet } from "react-helmet";
// import WhatWeDo from './WhatWeDo'
// import SolarProjectShowcase from './SolarProjectShowcase'
import SolarFAQ from './SolarFAQ'
// import SolarForEveryone from './SolarForEveryone'
// import ServicesSection from './ServicesSection'
import SimpleReviewSection from './SolarInstallationReviews'
import Scroll from './PartnersSection'
import SolarCalculatorSection from './SolarCalculatorSection'
import TruesunStats from './TruesunStats'
import RecentProjectsSection from './RecentProjectsSection'
import WhyTrueSun from './WhyTrueSun'
import ReelsShowcaseSection from './ReelsShowcase'

const HomeMain = () => {
    return (
        <>
            <Helmet>
                {/* Title */}
                <title>Best Rooftop Solar Company in Mumbai | TrueSun Energy</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Looking for the best solar company in Mumbai? TrueSun Energy offers rooftop solar installation, financing & net metering to help you save up to 80% on power bills."
                />

                {/* Keywords (optional but good) */}
                <meta name="keywords" content="best solar company, rooftop solar Mumbai, solar installation Mumbai, solar panels India" />

                {/* Viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                {/* Open Graph (for social sharing) */}
                <meta property="og:title" content="Best Rooftop Solar Company in Mumbai | TrueSun Energy" />
                <meta property="og:description" content="Save up to 80% on electricity with rooftop solar solutions by TrueSun Energy." />
                <meta property="og:type" content="website" />

                {/* Canonical URL */}
                <link rel="canonical" href="https://truesun.in/" />
            </Helmet>
            <HeroSection />
            <SolarCalculatorSection />
            <TruesunStats />
            <WhyTrueSun />
            <AboutTrueSun />
            <RecentProjectsSection />
            {/* <ServicesSection /> */}
            {/* <WhatWeDo /> */}
            {/* <SolarForEveryone /> */}
            {/* <SolarProjectShowcase /> */}

            <SimpleReviewSection />
            <SolarFAQ />
            <ReelsShowcaseSection />
            <Scroll />
        </>
    )
}

export default HomeMain