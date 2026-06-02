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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://truesun.in/",
  "name": "TrueSun Energy",
  "url": "https://truesun.in/",
  "logo": "https://truesun.in/assets/truesun-BPKZEvcM.png",
  "image": "https://bluebirdsolar.com/cdn/shop/articles/pmsuryaghar_min_2cbc91e5-36c6-412b-ba27-382f31968c4a.jpg?v=1761653009",
  "description": "Looking for the best solar company in Mumbai? TrueSun Energy offers rooftop solar installation, financing & net metering to help you save up to 80% on power bills.",
  "telephone": "+91-88508 45149",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "City",
    "name": "Mumbai"
  },
  "keywords": [
    "Best Rooftop Solar Company in Mumbai",
    "Rooftop Solar Installation Mumbai",
    "Residential Solar Company Mumbai",
    "Commercial Solar Installation Mumbai",
    "Industrial Solar Solutions Mumbai"
  ],
  "sameAs": [
    "https://www.facebook.com/savewithtruesun/",
    "https://www.instagram.com/truesunenergy//",
    "https://www.linkedin.com/company/28163084/",
    "https://www.youtube.com/@truesunenergysolutions/",
    "https://x.com/TrueSunEnergy/",
    "https://in.pinterest.com/02nmxqdt7syiposejxj5aa4piabmtr/"
  ],
  "serviceType": [
    "Rooftop Solar Installation",
    "Residential Solar Solutions",
    "Commercial Solar Solutions",
    "Industrial Solar Installation"
  ]
};

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

            {/* JSON-LD Home Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

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