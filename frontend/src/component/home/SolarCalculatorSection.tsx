import { useMemo, useState } from "react";
import { Zap, MapPin, Ruler, CreditCard, Users, ArrowRight, CheckCircle2, TrendingUp, PiggyBank, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ========= CONFIG & CONSTANTS ========= */

const WEB3FORMS_ACCESS_KEY = "379a21a3-04ba-4421-80fd-31fe44886bf5";
const PRICE_PER_UNIT = 10;
const ONE_KW_SOLAR_AREA = 70;
const UNIT_MONTHLY_ONE_KW = 120;
const COST_PER_KW = 52000;

const CUSTOMER_CATEGORY = [
  { label: "Residential (CHS)", value: "RESIDENTIAL", subsidyAllowed: true },
  { label: "Bungalows & Homes", value: "BUNGALOWS_HOMES", subsidyAllowed: true },
  { label: "Industrial", value: "INDUSTRIAL", subsidyAllowed: false },
  { label: "Commercial", value: "COMMERCIAL", subsidyAllowed: false },

];

const fmtINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

export default function SolarCalculator() {
  const [pincode, setPincode] = useState("");
  const [rooftopArea, setRooftopArea] = useState<number>(800);
  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [category, setCategory] = useState("RESIDENTIAL");

  const [openPopup, setOpenPopup] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const selectedCategory = CUSTOMER_CATEGORY.find((c) => c.value === category);

  const result = useMemo(() => {
    const safeArea = Math.max(0, rooftopArea);
    const safeBill = Math.max(0, monthlyBill);
    const areaKW = Math.round(safeArea / ONE_KW_SOLAR_AREA);
    const units = safeBill / PRICE_PER_UNIT;
    const billKW = Math.round(units / UNIT_MONTHLY_ONE_KW);
    const recommendedKw = Math.max(1, Math.min(areaKW || 1, billKW || 1));

    const monthlyGen = recommendedKw * UNIT_MONTHLY_ONE_KW;
    const monthlySavings = monthlyGen * PRICE_PER_UNIT;
    const annualSavings = monthlySavings * 12;
    const capex = recommendedKw * COST_PER_KW;
    const subsidy = selectedCategory?.subsidyAllowed ? recommendedKw * 18000 : 0;
    const netCost = capex - subsidy;
    const payback = annualSavings > 0 ? netCost / annualSavings : 0;

    return { recommendedKw, monthlySavings, annualSavings, capex, subsidy, netCost, payback };
  }, [monthlyBill, rooftopArea, category]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("pincode", pincode);
    formData.append("monthly_bill", String(monthlyBill));
    formData.append("rooftop_area", String(rooftopArea));
    formData.append("category", category);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setLeadSubmitted(true);
        setOpenPopup(false);
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-orange-100">
      <div className="max-w-6xl mx-auto py-12 px-6">

        {/* HEADER */}
        <header className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-100 rounded-full">
              Solar ROI Estimator
            </span>
            <h1 className="text-3xl font-extrabold tracking-tight lg:text-5xl text-[#686868]">
              Switch to Solar, <span className="text-[#FC763A]">Save Forever.</span>
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-lg text-[#686868]">
              Calculate your system size, estimated savings, and government subsidies in under 60 seconds.
            </p>
          </motion.div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* INPUT SECTION */}
          <div className="lg:col-span-5 bg-white p-8  shadow-xl shadow-slate-800/60 hover:shadow-2xl border border-slate-100">
            <h2 className="text-xl font-bold mb-2 flex items-center  gap-2">
              <TrendingUp className="w-5 h-5 text-[#FC763A]" /> Configuration
            </h2>

            <div className="space-y-3">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Pincode</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    placeholder="e.g. 110001"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FC763A] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Rooftop Area (sq.ft)</label>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    required
                    value={rooftopArea}
                    onChange={(e) => setRooftopArea(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Avg. Monthly Bill (₹)</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type=""
                    required
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Customer Category</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <select
                    value={category}
                    required
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl appearance-none focus:ring-2 focus:ring-[#FC763A] outline-none transition-all"
                  >
                    {CUSTOMER_CATEGORY.map((cat) => (
                      <option key={cat.value} value={cat.value}>{cat.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                onClick={() => setOpenPopup(true)}
                className="w-full mt-4 bg-[#FC763A] hover:bg-[#e0652f] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2 group"
              >
                Calculate Savings <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RESULT SECTION */}
          <div className="lg:col-span-7">
            {!leadSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-3xl bg-slate-50/50 p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                  <Zap className="w-8 h-8 text-slate-300" />
                </div>
                <p className="text-slate-500 font-medium italic">Complete the form to unlock your personalized solar report.</p>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="space-y-6">

                {/* HERO RESULT */}
                <div className="bg-[#e0652f] text-white p-8  shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FC763A] opacity-20 blur-3xl -mr-10 -mt-10"></div>
                  <div className="flex justify-between  items-start">
                    <div>
                      <p className="text-white font-bold uppercase tracking-wider text-xs mb-2">Recommended Capacity</p>
                      <h2 className="text-6xl font-black">{result.recommendedKw} <span className="text-2xl font-normal text-white">kW</span></h2>
                    </div>
                    <div className="text-center pt-2  ">
                      <p className="text-white text-lg">Payback Period</p>
                      <p className="text-3xl font-bold">{result.payback.toFixed(1)} <span className="text-sm font-normal">Years</span></p>
                    </div>
                    <CheckCircle2 className="text-green-400 w-10 h-10" />
                  </div>

                </div>

                {/* STATS GRID */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-6  border border-slate-500/40 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600">
                      <PiggyBank className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase">Monthly Savings</p>
                      <p className="text-xl font-bold text-slate-900">{fmtINR.format(result.monthlySavings)}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6  border border-slate-500/40 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-slate-500 text-xs font-bold uppercase">Annual Savings</p>
                      <p className="text-xl font-bold text-slate-900">{fmtINR.format(result.annualSavings)}</p>
                    </div>
                  </div>
                </div>
                {/* SUBSIDY ALERT */}
                {result.subsidy > 0 && (
                  <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-emerald-800 font-medium">Government Subsidy Applied</p>
                    </div>
                    <span className="text-emerald-700 font-bold">+{fmtINR.format(result.subsidy)}</span>
                  </div>
                )}
                <p className="text-xl ">Thank you for contacting TrueSun — our team will get back to you within 24 hours.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {openPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpenPopup(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="bg-[#FC763A] p-6 text-white text-center">
                <h3 className="text-2xl font-bold">Almost There!</h3>
                <p className="text-orange-100 text-sm mt-1">Submit to view your detailed solar breakdown</p>
              </div>
              <form onSubmit={handleSubmit} className="p-8 space-y-4">
                <input name="name" required placeholder="Full Name" className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all" />
                <input name="email" required type="email" placeholder="Email Address" className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all" />
                <input name="phone" required placeholder="Phone Number" className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold mt-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
                >
                  {loading ? "Generating Report..." : "Show My Results"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}