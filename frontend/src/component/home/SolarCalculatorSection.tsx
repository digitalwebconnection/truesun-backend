import { useMemo, useState } from "react";
import { MapPin, Ruler, CreditCard, Users, ArrowRight, CheckCircle2, TrendingUp, PiggyBank, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LeadPopup from "../LeadPopup";

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
  const [rooftopArea, setRooftopArea] = useState<string>("");
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [category, setCategory] = useState("RESIDENTIAL");
  const [mainErrors, setMainErrors] = useState<{ pincode?: string; area?: string; bill?: string }>({});

  const [openPopup, setOpenPopup] = useState(false);
  const [openLeadPopup, setOpenLeadPopup] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<{ phone?: string; email?: string }>({});

  const selectedCategory = CUSTOMER_CATEGORY.find((c) => c.value === category);

  const result = useMemo(() => {
    const safeArea = parseFloat(rooftopArea) || 0;
    const safeBill = parseFloat(monthlyBill) || 0;
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
    setErrors({});

    const newErrors: { phone?: string; email?: string } = {};

    // phone validation
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    const submissionData = new FormData();
    submissionData.append("access_key", WEB3FORMS_ACCESS_KEY);
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("pincode", pincode);
    submissionData.append("monthly_bill", String(monthlyBill));
    submissionData.append("rooftop_area", String(rooftopArea));
    submissionData.append("category", category);

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: submissionData });
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

  const handleCalculateClick = () => {
    const errs: any = {};
    if (!pincode) errs.pincode = "Please fill this";
    if (!rooftopArea) errs.area = "Please fill this";
    if (!monthlyBill) errs.bill = "Please fill this";
    
    if (Object.keys(errs).length > 0) {
      setMainErrors(errs);
      return;
    }
    setMainErrors({});
    setOpenPopup(true);
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
            <h2 className="text-3xl font-extrabold tracking-tight lg:text-5xl text-[#686868]">
              Switch to Solar, <span className="text-[#FC763A]">Save Forever.</span>
            </h2>
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
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                      setPincode(val);
                      if (mainErrors.pincode) setMainErrors(prev => ({ ...prev, pincode: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#FC763A] focus:border-transparent outline-none transition-all ${mainErrors.pincode ? "border-red-500" : "border-slate-200"}`}
                  />
                </div>
                {mainErrors.pincode && <div className="text-[10px] text-red-500 px-1">{mainErrors.pincode}</div>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Rooftop Area (sq.ft)</label>
                <div className="relative">
                  <Ruler className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    required
                    placeholder="e.g. 800"
                    value={rooftopArea}
                    onChange={(e) => {
                      setRooftopArea(e.target.value);
                      if (mainErrors.area) setMainErrors(prev => ({ ...prev, area: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all ${mainErrors.area ? "border-red-500" : "border-slate-200"}`}
                  />
                </div>
                {mainErrors.area && <div className="text-[10px] text-red-500 px-1">{mainErrors.area}</div>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-600 ml-1">Avg. Monthly Bill (₹)</label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                  <input
                    type="number"
                    required
                    placeholder="e.g. 3000"
                    value={monthlyBill}
                    onChange={(e) => {
                      setMonthlyBill(e.target.value);
                      if (mainErrors.bill) setMainErrors(prev => ({ ...prev, bill: undefined }));
                    }}
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all ${mainErrors.bill ? "border-red-500" : "border-slate-200"}`}
                  />
                </div>
                {mainErrors.bill && <div className="text-[10px] text-red-500 px-1">{mainErrors.bill}</div>}
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
                onClick={handleCalculateClick}
                className="w-full mt-4 bg-[#FC763A] hover:bg-[#e0652f] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-200 transition-all flex items-center justify-center gap-2 group"
              >
                Calculate Savings <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* RESULT SECTION */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="space-y-6 transition-all duration-500">
                {/* HERO RESULT */}
                <div className="bg-[#e0652f] text-white p-8 shadow-2xl relative overflow-hidden rounded-3xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#FC763A] opacity-20 blur-3xl -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-5 blur-2xl -ml-10 -mb-10"></div>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                      <p className="text-orange-100 font-bold uppercase tracking-widest text-[10px] mb-2 bg-white/10 w-fit px-2 py-0.5 rounded">Recommended Capacity</p>
                      <h2 className={`text-6xl md:text-7xl font-black tabular-nums transition-all ${!leadSubmitted ? "opacity-20 select-none" : ""}`}>
                        {leadSubmitted ? result.recommendedKw : "5.0"} 
                        <span className="text-2xl font-light text-orange-100 ml-2 uppercase">kW</span>
                      </h2>
                    </div>
                    <div className="flex items-center gap-8 border-l border-white/20 pl-8">
                      <div className="text-center">
                        <p className="text-orange-100 text-xs uppercase font-bold tracking-wider mb-1">Payback</p>
                        <p className={`text-3xl font-bold tabular-nums transition-all ${!leadSubmitted ? "opacity-20 select-none" : ""}`}>
                          {leadSubmitted ? result.payback.toFixed(1) : "3.4"}
                          <span className="text-sm font-normal ml-1">Yrs</span>
                        </p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-full">
                        <CheckCircle2 className="text-white w-8 h-8" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* STATS GRID */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 shrink-0">
                      <PiggyBank className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Monthly Savings</p>
                      <p className={`text-2xl font-bold text-slate-900 tabular-nums transition-all ${!leadSubmitted ? "opacity-20 select-none" : ""}`}>
                        {leadSubmitted ? fmtINR.format(result.monthlySavings) : "₹4,850"}
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
                      <Calendar className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-0.5">Annual Savings</p>
                      <p className={`text-2xl font-bold text-slate-900 tabular-nums transition-all ${!leadSubmitted ? "opacity-20 select-none" : ""}`}>
                        {leadSubmitted ? fmtINR.format(result.annualSavings) : "₹58,200"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* SUBSIDY & CTA SECTION */}
                <div className="bg-slate-900 text-white p-6 rounded-3xl overflow-hidden relative">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-[#FC763A] opacity-10 blur-[80px] -mr-32 -mt-32"></div>
                   
                   <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
                          <p className="text-emerald-400 text-sm font-bold uppercase tracking-wider">Govt. Subsidy eligible</p>
                        </div>
                        <p className="text-slate-300 text-xs">Based on latest MNRE guidelines and {leadSubmitted ? category.toLowerCase().replace('_', ' ') : "residential"} category.</p>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Estimated Subsidy</p>
                        <p className={`text-3xl font-bold text-white tabular-nums transition-all ${!leadSubmitted ? "opacity-20 select-none" : ""}`}>
                          {leadSubmitted ? fmtINR.format(result.subsidy) : "₹78,000"}
                        </p>
                      </div>
                   </div>
                </div>

                {leadSubmitted && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    <p className="text-lg text-slate-600 font-medium leading-relaxed">
                      Thank you for contacting <span className="text-[#FC763A] font-bold">TrueSun</span> — our technical team will reach out to you within 24 hours to schedule a free site assessment.
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => setOpenLeadPopup(true)}
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#FC763A] px-8 py-3.5 font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-orange-300/50"
                      >
                        <span className="relative">Book a Free Site Visit</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {!leadSubmitted && (
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { label: "Tier-1 Panels", icon: CheckCircle2 },
                  { label: "25yr Warranty", icon: CheckCircle2 },
                  { label: "Remote Monitoring", icon: CheckCircle2 },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <item.icon className="w-5 h-5 text-emerald-500 mb-2" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
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
                <div className="space-y-1">
                  <input 
                    name="name" 
                    required 
                    placeholder="Full Name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all" 
                  />
                </div>
                
                <div className="space-y-1">
                  <input 
                    name="email" 
                    required 
                    placeholder="Email Address" 
                    value={formData.email}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all ${errors.email ? "border-red-500" : "border-slate-200"}`} 
                  />
                  {errors.email && <div className="text-[10px] text-red-500 px-1">{errors.email}</div>}
                </div>

                <div className="space-y-1">
                  <input 
                    name="phone" 
                    required 
                    placeholder="Phone Number (10 digits)" 
                    value={formData.phone}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData(prev => ({ ...prev, phone: val }));
                      if (errors.phone) setErrors(prev => ({ ...prev, phone: undefined }));
                    }}
                    className={`w-full border p-3 rounded-xl focus:ring-2 focus:ring-[#FC763A] outline-none transition-all ${errors.phone ? "border-red-500" : "border-slate-200"}`} 
                  />
                  {errors.phone && <div className="text-[10px] text-red-500 px-1">{errors.phone}</div>}
                </div>

                <button
                  type="submit"
                  disabled={loading || !formData.name || !formData.email || !formData.phone}
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold mt-2 hover:bg-slate-800 transition-colors disabled:opacity-50"
                >
                  {loading ? "Generating Report..." : "Show My Results"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {openLeadPopup && <LeadPopup onClose={() => setOpenLeadPopup(false)} />}
    </div>
  );
}