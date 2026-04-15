import LeadPopup from "../../../LeadPopup";
import { useState } from "react";

export default function BESSHero() {
        const [openLeadPopup, setOpenLeadPopup] = useState(false);
    return (
        <section className="relative py-24 px-6 md:px-16  h-150 overflow-hidden">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://media.licdn.com/dms/image/v2/D5612AQEFS7ewgWLveA/article-cover_image-shrink_720_1280/B56ZeQxl7rHEAI-/0/1750480610092?e=2147483647&v=beta&t=gQHQ5pWTDSTBZHWTji5xW7YNka8eARaN-yLBX-qbkuQ"
                    alt="Battery Energy Storage System"
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-[#000000]/30 "></div>
            </div>

            {/* Content */}
            <div className="relative max-w-7xl text-white mx-auto">

                <div className="max-w-3xl">
                    <h4 className="text-sm md:text-base tracking-widest text-white mb-4">
                        BATTERY ENERGY STORAGE SYSTEM
                    </h4>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        Store the Sun’s Energy. Use It on Your Terms.
                    </h1>

                    <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                        TrueSun’s BESS solutions integrate seamlessly with your rooftop solar
                        to eliminate grid dependency, slash electricity bills, and keep your
                        operations running — day or night.
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4">
                        <button
                        onClick={() => setOpenLeadPopup(true)}
                        className="bg-[#FC763A] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e56a2d] transition">
                          Get Consultation
                        </button>

                    </div>
                </div>

                {/* Floating Energy Badge */}
                <div className="absolute right-10 bottom-10 hidden md:block">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-4 rounded-2xl shadow-xl">
                        <p className="text-sm font-semibold">🔋 24/7 Power Backup</p>
                        <p className="text-xs text-gray-300">
                            Store excess solar & use anytime
                        </p>
                    </div>
                </div>

            </div>

                    {/* Popup Mount */}
      {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
        </section>
    );
}