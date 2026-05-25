

import React from "react";
import {
  CreditCard,
  Percent,
} from "lucide-react";
import heroImage from "../../assets/affordable-solar-panel-financing.jpg";

interface BenefitItemProps {
  title: string;
  desc: string;
}

const TruesunSolarFinanceHero: React.FC = () => {
  return (
    <section className="relative md:h-150 h-auto   overflow-hidden bg-slate-900 text-slate-50">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroImage}
          alt="affordable solar panel financing"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
      </div>

      {/* Gradient overlay for readability */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pt-28 pb-10 lg:flex-row lg:items-center lg:pt-32">
        {/* LEFT SIDE CONTENT */}
        <div className="max-w-4xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FC763A] bg-[#FC763A]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#FC763A]">
            <CreditCard className="h-3.5 w-3.5" />
            Truesun • Solar Finance
          </span>

          <div>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Solar Finance Made Simple {" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-[#FC763A]">
                for homes and businesses.
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-200/85 sm:text-base">
              Turn your electricity bills into solar EMIs. Flexible finance options
              help you go solar without a heavy upfront payment.
            </p>
          </div>

          {/* BENEFITS – kept short & clean */}
          <div className="mt-4 space-y-3 text-sm">
            <BenefitItem
              title="Low or zero upfront cost"
              desc="Start solar with minimal initial cash outflow."
            />
            <BenefitItem
              title="EMIs designed around savings"
              desc="In many cases, bill savings can offset your EMI."
            />
            <BenefitItem
              title="Works with banks & NBFCs"
              desc="Truesun supports end-to-end documentation and processing."
            />
          </div>

          {/* CTA BUTTONS */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">


            <a
              href="tel:+918850845149"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-100 bg-slate-900/50 hover:bg-slate-800/70 transition"
            >
              Request a Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

const BenefitItem: React.FC<BenefitItemProps> = ({ title, desc }) => (
  <div className="flex gap-3">
    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#FC763A]/15">
      <Percent className="h-3 w-3 text-[#FC763A]" />
    </div>
    <div>
      <div className="text-sm font-semibold text-slate-50">{title}</div>
      <div className="text-xs text-slate-300/85">{desc}</div>
    </div>
  </div>
);



export default TruesunSolarFinanceHero;
