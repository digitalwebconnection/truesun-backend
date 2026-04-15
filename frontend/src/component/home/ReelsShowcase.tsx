const ReelsShowcaseSection = () => {
  const reels = [
    {
      title: "Solar Savings Explained",
      description:
        "See how rooftop solar can reduce your electricity bills and generate long-term savings for your home or business.",
      video: "https://www.instagram.com/reel/DVvwjoPjXJ3/",
    },
    {
      title: "Solar Installation Process",
      description:
        "A quick look at how rooftop solar systems are professionally installed from structure setup to final commissioning.",
      video: "https://www.instagram.com/reel/DTuywEAgmeC/",
    },
    {
      title: "PM Surya Ghar Subsidy Guide",
      description:
        "Understanding government solar subsidies and how homeowners can benefit from the PM Surya Ghar Yojana.",
      video: "https://www.instagram.com/reel/DU2UWGpgZ1N/",
    },
    {
      title: "Solar System ROI & Payback",
      description:
        "How solar panels generate electricity, reduce dependency on the grid, and deliver long-term financial returns.",
      video: "https://www.instagram.com/reel/DUVFE9glbHg/",
    },
  ];

  const getEmbedUrl = (url: string) => {
    const match = url.match(/reel\/([^/?]+)/);
    return match ? `https://www.instagram.com/reel/${match[1]}/embed` : "";
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-[#686868] mb-6 font-semibold">
            Solar Knowledge &{" "}
            <span className="text-[#FC763A]">Installation Highlights</span>
          </h2>

          <p className="text-[#686868]/80 text-lg max-w-7xl mx-auto">
            Short videos that explain how solar works, the benefits of rooftop
            systems, government subsidies, and the TrueSun installation
            process.
          </p>
        </div>

        {/* Reel Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reels.map((reel, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-full h-[520px] overflow-hidden">
                <iframe
                  src={getEmbedUrl(reel.video)}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="text-[#686868] text-lg font-bold mb-3">
                  {reel.title}
                </h3>
                <p className="text-[#686868]/70 text-sm leading-relaxed">
                  {reel.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReelsShowcaseSection;