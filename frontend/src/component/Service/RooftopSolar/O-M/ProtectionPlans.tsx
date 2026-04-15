import { useState } from "react";
import LeadPopup from "../../../LeadPopup";

export default function ProtectionPlans() {
      const [openLeadPopup, setOpenLeadPopup] = useState(false);

    return (
        <section className="py-20 px-6 md:px-16 bg-gray-50">
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-3xl md:text-5xl font-bold  text-[#FC763A] mb-4">
                    Choose Your Protection Plan
                </h2>
                <p className="text-[#686868] text-lg">
                    Reliable solar performance starts with the right maintenance plan.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">

                {/* Plan 01 */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border hover:shadow-2xl transition">
                    <h3 className="text-xl font-semibold text-gray-500 mb-2">
                        Plan 01
                    </h3>
                    <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">
                        Preventive O&M
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Proactive care to prevent failures before they occur.
                    </p>

                    <ul className="space-y-4 text-left">
                        <li>
                            <strong>Scheduled Inspections</strong>
                            <p className="text-sm text-gray-500">
                                Regular on-site technical inspections to assess system health.
                            </p>
                        </li>

                        <li>
                            <strong>Electrical & Safety Checks</strong>
                            <p className="text-sm text-gray-500">
                                Inspection of wiring, DC/AC connections, earthing, and protection systems.
                            </p>
                        </li>

                        <li>
                            <strong>Performance Monitoring</strong>
                            <p className="text-sm text-gray-500">
                                Ongoing monitoring of generation data to detect issues early.
                            </p>
                        </li>

                        <li>
                            <strong>Inverter Health Check</strong>
                            <p className="text-sm text-gray-500">
                                Inspection and testing of inverters and combiner boxes.
                            </p>
                        </li>

                        <li>
                            <strong>Maintenance Reports</strong>
                            <p className="text-sm text-gray-500">
                                Detailed reports with observations and recommendations.
                            </p>
                        </li>
                    </ul>

                    <button
                            onClick={() => setOpenLeadPopup(true)}
                    className="mt-8 w-full bg-[#FC763A] text-white py-3 rounded-xl  transition">
                        Choose Plan
                    </button>
                </div>

                {/* Plan 02 */}
                <div className="relative bg-[#0B1F3A] text-white rounded-2xl shadow-2xl p-8 border-2 border-[#FC763A] transform scale-105">

                    {/* Badge */}
                    <div className="absolute -top-3 right-6 bg-[#FC763A] text-whitetext-xs font-semibold px-3 py-1 rounded-full">
                        Most Popular
                    </div>

                    <h3 className="text-xl font-semibold text-gray-300 mb-2">
                        Plan 02
                    </h3>
                    <h2 className="text-2xl font-bold mb-4">
                        Comprehensive O&M
                    </h2>
                    <p className="text-gray-300 mb-6">
                        Complete care including everything in Preventive, plus more.
                    </p>

                    <ul className="space-y-4 text-left">
                        <li>
                            <strong>All Preventive Plan Services</strong>
                            <p className="text-sm text-gray-400">
                                Includes all inspections, monitoring, and reporting.
                            </p>
                        </li>

                        <li>
                            <strong>Corrective Maintenance</strong>
                            <p className="text-sm text-gray-400">
                                Quick fault resolution to minimise downtime and losses.
                            </p>
                        </li>

                        <li>
                            <strong>Priority Support</strong>
                            <p className="text-sm text-gray-400">
                                Faster issue escalation and technician dispatch.
                            </p>
                        </li>

                        <li>
                            <strong>Annual Performance Review</strong>
                            <p className="text-sm text-gray-400">
                                Yearly audit with optimisation recommendations.
                            </p>
                        </li>

                        <li>
                            <strong>Solar Panel Cleaning (Exclusive)</strong>
                            <p className="text-sm text-gray-400">
                                Professional cleaning to restore peak efficiency.
                            </p>
                        </li>
                    </ul>

                    <button
                            onClick={() => setOpenLeadPopup(true)}
                    className="mt-8 w-full bg-[#FC763A] text-white py-3 rounded-xl font-semiboldtransition">
                        Choose Plan
                    </button>
                </div>

            </div>
            {openLeadPopup && (
        <LeadPopup onClose={() => setOpenLeadPopup(false)} />
      )}
        </section>
    );
}