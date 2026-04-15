

import React, { useMemo, useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  CreditCard,
  CircleDollarSign,
  Handshake,
} from "lucide-react";
import LeadPopup from "../../component/LeadPopup";



/* =========================
   TrueSun palette (logo)
   ========================= */
const PALETTE = {
  primary: "#FC763A",
  accent: "#FEC24A",
  neutral: "#686868",
  dark: "#0f1720",
};

/* =========================
   Animations
   ========================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

function Section({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <motion.section id={id} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }} variants={fadeUp}>
      {children}
    </motion.section>
  );
}

/* =========================
   Small helpers
   ========================= */
function fmtINR(n: number) {
  return new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(n);
}

/* =========================
   EMI calculator helper
   =========================
   - Basic formula for EMI: E = P * r * (1+r)^n / ((1+r)^n - 1)
   - P = principal (system capex - subsidy)
   - r = monthly interest (annual/12/100)
   - n = months (tenure years * 12)
*/
function calcEmi(principal: number, annualRate = 10, tenureYears = 5) {
  if (!principal || principal <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = Math.max(1, tenureYears * 12);
  const num = principal * r * Math.pow(1 + r, n);
  const den = Math.pow(1 + r, n) - 1;
  const emi = den <= 0 ? principal / n : num / den;
  return Math.round(emi);
}

/* =========================
   Finance models data
   ========================= */
const MODELS = [
  {
    id: "emi",
    title: "EMI / Loan Financing",
    subtitle: "Best for homeowners",
    icon: <CircleDollarSign className="h-5 w-5 text-white" />,
    bullets: ["Low monthly payments", "Partner banks & NBFCs", "Flexible tenures (1–7 yrs)"],
  },
  {
    id: "opex",
    title: "Zero Upfront (OPEX)",
    subtitle: "Great for shops & manufacturing",
    icon: <Handshake className="h-5 w-5 text-white" />,
    bullets: ["No upfront cost", "Pay per unit (PPA) or fixed monthly fee", "Off-balance-sheet option"],
  },
  {
    id: "subsidy",
    title: "Subsidy + Loan Combo",
    subtitle: "For residential buyers with subsidies",
    icon: <CreditCard className="h-5 w-5 text-white" />,
    bullets: ["Use state & central subsidies", "Lower loan principal", "Shorter payback"],
  },
];

/* =========================
   Loan partners (placeholders)
   ========================= */

/* =========================
   Component: EMI Calculator Mini
   ========================= */
function EmiCalculatorMini({
  onBook,
}: {
  onBook: () => void;
}) {
  // Inputs: monthlyBill & tariff (basic approach)
  const [monthlyBill, setMonthlyBill] = useState<number>(4000);
  const [tariff, setTariff] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(5);
  const [rate] = useState<number>(12); // APR
  const [applySubsidy, setApplySubsidy] = useState<boolean>(true);

  // Estimate consumption and recommended system similar to earlier logic:
  const PR = 0.75;
  const sunHours = 5.4; // generic Maharashtra
  const costPerKw = 55000;

  const estimated = useMemo(() => {
    const monthlyKWh = tariff > 0 ? monthlyBill / tariff : 0;
    const targetKWh = monthlyKWh * 0.8;
    const kWhPerKwMonth = sunHours * 30 * PR;
    const recommendedKw = kWhPerKwMonth > 0 ? Math.max(0.3, Math.min(25, targetKWh / kWhPerKwMonth)) : 0;
    const capex = Math.round(recommendedKw * costPerKw);
    const subsidy = applySubsidy ? Math.min(78000, Math.round(Math.min(recommendedKw, 2) * 30000 + Math.max(0, Math.min(recommendedKw - 2, 1)) * 18000)) : 0;
    const principal = Math.max(0, capex - subsidy);
    const emi = calcEmi(principal, rate, tenure);
    const monthlyGen = Math.round(recommendedKw * kWhPerKwMonth);
    const monthlySavings = Math.round(monthlyGen * tariff);
    return { recommendedKw: Number(recommendedKw.toFixed(2)), capex, subsidy, principal, emi, monthlyGen, monthlySavings };
  }, [monthlyBill, tariff, tenure, rate, applySubsidy]);



  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">Quick EMI Estimator</h3>
        <div className="text-xs text-slate-500">Instant numbers</div>
      </div>

      <div className="mt-4 grid gap-3">
        <label className="text-xs text-slate-600">
          Monthly electricity bill (₹)
          <input
            className="w-full mt-1 rounded-md border px-3 py-2 text-sm"
            type="number"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value || 0))}
          />
        </label>

        <label className="text-xs text-slate-600">
          Electricity tariff (₹/kWh)
          <input
            className="w-full mt-1 rounded-md border px-3 py-2 text-sm"
            type="number"
            step="0.1"
            value={tariff}
            onChange={(e) => setTariff(Number(e.target.value || 0))}
          />
        </label>

        <div className="">
          <label className="text-xs text-slate-600">
            Tenure (years)
            <select className="w-full mt-1 rounded-md border px-3 py-2 text-sm" value={tenure} onChange={(e) => setTenure(Number(e.target.value))}>
              {[3, 4, 5].map((y) => (
                <option key={y} value={y}>
                  {y} yr
                </option>
              ))}
            </select>
          </label>

        </div>

        <label className="flex items-center gap-2 text-xs">
          <input type="checkbox" checked={applySubsidy} onChange={(e) => setApplySubsidy(e.target.checked)} />
          Apply PM Surya Ghar subsidy (if eligible)
        </label>

        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm">
          <div className="flex items-center justify-between">
            <div>Estimated system</div>
            <div className="font-semibold">{estimated.recommendedKw} kW</div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div>Gross CAPEX</div>
            <div className="font-semibold">₹{fmtINR(estimated.capex)}</div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div>Subsidy</div>
            <div className="font-semibold text-emerald-600">₹{fmtINR(estimated.subsidy)}</div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div>Loan principal</div>
            <div className="font-semibold">₹{fmtINR(estimated.principal)}</div>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t">
            <div>Estimated EMI</div>
            <div className="text-lg font-bold">₹{fmtINR(estimated.emi)}</div>
          </div>
          <div className="mt-2 text-xs text-slate-500">*This is an indicative estimate. Final EMI depends on partner bank/NBFC approval.</div>
        </div>

        <div className="mt-3 flex gap-2">
          <button onClick={onBook} className="flex-1 rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-4 py-2 text-sm font-semibold text-white shadow">
            Book a Free Finance Call
          </button>

        </div>
      </div>
    </div>
  );
}

/* =========================
   Main page
   ========================= */
export default function SolarFinancePage() {
  const [openLeadPopup, setOpenLeadPopup] = useState(false);

  return (
    <main className="relative mx-auto max-w-7xl px-4 py-12 md:px-0">
      {/* HERO */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-[rgba(252,118,58,0.08)] px-3 py-1 text-sm font-semibold" style={{ color: PALETTE.primary }}>
              Finance made simple
            </p>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-[#686868] sm:text-4xl">
              Own solar with flexible finance — EMI, Zero-Upfront, or Subsidy combos
            </h1>
            <p className="mt-3 text-slate-700 max-w-xl">
              Pick a model that suits your budget. We work with banks and NBFCs to offer low-interest loans, and OPEX models for zero upfront capital. Get a clear number in under 2 minutes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setOpenLeadPopup(true)} className="rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-5 py-2 text-sm font-semibold text-white shadow">
                Talk to a finance expert
              </button>
              <a href="#options" className="rounded-full border px-5 py-2 text-sm font-medium text-slate-700">
                See financing options
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-slate-50 p-3">
                <div className="text-[11px] text-slate-500">Typical payback (C&I)</div>
                <div className="mt-1 font-semibold">3–5 years</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <div className="text-[11px] text-slate-500">Residential ROI</div>
                <div className="mt-1 font-semibold">4–6 years</div>
              </div>
            </div>
          </div>

          {/* Right: mini calculator */}
          <div>
            <EmiCalculatorMini onBook={() => setOpenLeadPopup(true)} />
          </div>
        </div>
      </Section>

      {/* MODELS */}
      <Section id="options">
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {MODELS.map((m) => (
            <motion.div
              key={m.id}
              className="group relative rounded-3xl border bg-white p-6 shadow-md transition hover:shadow-xl"
              whileHover={{ y: -8 }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-linear-to-r from-[#FC763A] to-[#FFB347] p-3 text-white shadow-md">
                  {m.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-500">{m.subtitle}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="mt-5 space-y-3 text-sm text-slate-700">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#FC763A]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <button
                  onClick={() => setOpenLeadPopup(true)}
                  className="rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:scale-105"
                >
                  Get Started →
                </button>


              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 pointer-events-none bg-linear-to-r from-[#FC763A]/10 to-[#FFB347]/10" />
            </motion.div>
          ))}
        </div>

        {/* POPUP */}
        {openLeadPopup && (
          <LeadPopup onClose={() => setOpenLeadPopup(false)} />
        )}
      </Section>



      {/* COMPARISON */}
      <Section>
        <div className="mt-10 overflow-x-auto rounded-lg border bg-white p-4 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-slate-900">Which model suits you?</h3>
            <div className="text-xs text-slate-500">Quick comparison to pick the right fit</div>
          </div>

          <table className="min-w-full table-auto text-sm">
            <thead>
              <tr className="text-left text-xs text-slate-500">
                <th className="py-2 pr-6">Feature</th>
                <th className="py-2 pr-6">EMI / Loan</th>
                <th className="py-2 pr-6">Zero-Upfront (OPEX)</th>
                <th className="py-2 pr-6">Subsidy + Loan</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-t">
                <td className="py-3 pr-6">Upfront cost</td>
                <td>Partial / No (loan)</td>
                <td>Zero</td>
                <td>Low (subsidy reduces principal)</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 pr-6">Ownership</td>
                <td>Customer</td>
                <td>Provider (PPA/lease)</td>
                <td>Customer</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 pr-6">Balance sheet</td>
                <td>On balance sheet</td>
                <td>Off balance sheet</td>
                <td>On balance sheet</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 pr-6">Best for</td>
                <td>Homes & small businesses</td>
                <td>Large commercial & industries</td>
                <td>Residential users eligible for subsidy</td>
              </tr>
              <tr className="border-t">
                <td className="py-3 pr-6">Typical tenor</td>
                <td>1–7 years</td>
                <td>5–10 years</td>
                <td>1–5 years</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* PROCESS + FAQ + CTA */}
      <Section>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900">5-step process</h4>
            <ol className="mt-3 space-y-2 text-sm text-slate-700">
              <li>1. Share last 2–3 bills</li>
              <li>2. We size the system & model</li>
              <li>3. Choose EMI / OPEX / Subsidy mix</li>
              <li>4. Faster loan approvals & install</li>
              <li>5. Start saving — payments begin</li>
            </ol>
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900">FAQ</h4>
            <details className="mt-3 space-y-2 text-sm text-slate-700">
              <summary className="cursor-pointer font-medium">How long does loan approval take?</summary>
              <div className="mt-2 text-sm text-slate-600">Typically 3–7 working days once documents are complete. We help with paperwork.</div>

              <summary className="cursor-pointer font-medium mt-3">Can EMI be paid from monthly savings?</summary>
              <div className="mt-2 text-sm text-slate-600">Yes — most residential customers find EMI ≤ savings from reduced electricity bills.</div>

              <summary className="cursor-pointer font-medium mt-3">Do you assist with subsidies?</summary>
              <div className="mt-2 text-sm text-slate-600">We help with eligibility checks and claim filing for state / central schemes.</div>
            </details>
          </div>

          <div className="rounded-2xl border bg-white p-4 shadow-sm">
            <h4 className="text-sm font-semibold text-slate-900">Ready to start?</h4>
            <p className="mt-2 text-sm text-slate-700">Share a few details and we’ll call you with a clear plan and numbers.</p>

          </div>
        </div>
      </Section>

      {/* FOOTER CTA */}
      <div className="mt-12 rounded-2xl bg-[linear-gradient(90deg,#fffaf0,#fff7ed)] p-6 text-center shadow-sm">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900">Finance that actually helps you save</h3>
          <p className="mt-2 text-slate-700">We’ll match you with the right partner and show exact EMI with zero obligations.</p>
          <div className="mt-4 flex justify-center gap-3">
            <button onClick={() => setOpenLeadPopup(true)} className="rounded-full bg-linear-to-r from-[#FC763A] to-[#FFB347] px-6 py-2 text-sm font-semibold text-white">
              Talk to finance expert
            </button>
            {/* <a href="#learn-more" className="rounded-full border px-6 py-2 text-sm font-medium text-slate-700">Download brochure</a> */}
          </div>
        </div>
      </div>

      {/* Lead popup mount */}
      {openLeadPopup && <LeadPopup onClose={() => setOpenLeadPopup(false)} />}
    </main>
  );
}
