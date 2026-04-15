 

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Send,
  X,
  Sparkles,
  Home,
  Building2,
  Phone,
  Mail,
} from "lucide-react";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export type WhatsAppDockFlowProps = {
  phoneNumber?: string; // kept for UI/branding only (not used for sending)
  companyName?: string;
  subtitle?: string;
  logoUrl?: string;
  brand?: { from?: string; to?: string; ring?: string };
  footerText?: string;
  prefill?: string;
  web3ToEmail?: string | null; // optional: direct the Web3Forms email to a specific recipient
};

export default function WhatsAppDockFlowFlat({
  companyName = "TrueSun Solar",
  subtitle = "Your Solar Experts",
  logoUrl,
  brand = { from: "#0DB02B", to: "#0F7F34", ring: "#FFC527" },
  footerText = "Call: +91 88508 45149 · Support@truesun.in",
  web3ToEmail = null,
}: WhatsAppDockFlowProps) {
  const [open, setOpen] = useState(false);

  // conversation state
  const [step, setStep] = useState<
    "welcome" | "askInterest" | "typeSelection" | "collectDetails" | "done" | "no"
  >("welcome");

  // transcript
  const [transcript, setTranscript] = useState<{ from: "bot" | "user"; text: string; key?: string }[]>(
    []
  );

  // collected details
  const [choice, setChoice] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // submission state
  const [submitting, setSubmitting] = useState(false);
  const [resultMessage, setResultMessage] = useState<string | null>(null);

  const fabRef = useRef<HTMLButtonElement | null>(null);

  const pushBot = (text: string) =>
    setTranscript((t) => [...t, { from: "bot", text, key: `b-${Date.now()}-${Math.random()}` }]);
  const pushUser = (text: string) =>
    setTranscript((t) => [...t, { from: "user", text, key: `u-${Date.now()}-${Math.random()}` }] );

  // when opened, start flow
  useEffect(() => {
    if (open) {
      setTranscript([]);
      setTimeout(() => pushBot("Hi! 👋"), 120);
      setTimeout(() => {
        pushBot("Are you interested in installing solar?");
        setStep("askInterest");
      }, 420);
    } else {
      // reset on close
      setStep("welcome");
      setTranscript([]);
      setChoice(null);
      setName("");
      setClientPhone("");
      setEmail("");
      setLocation("");
      setSubmitting(false);
      setResultMessage(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleInterest = (ans: "yes" | "no") => {
    pushUser(ans === "yes" ? "Yes, I'm interested" : "No, thank you");
    if (ans === "no") {
      pushBot("No worries! If you'd like later, tap Chat with us again.");
      setStep("no");
      return;
    }
    setStep("typeSelection");
    setTimeout(() => pushBot("Great! Which type of installation?"), 300);
  };

  const handleTypePick = (t: "Industry" | "Commercial" | "Residential") => {
    pushUser(t);
    setChoice(t);
    setStep("collectDetails");
    setTimeout(() => pushBot(`Thanks — you selected ${t}. Please share your contact details and any notes.`), 340);
  };

  // Web3Forms access key provided by user
  const WEB3FORMS_ACCESS_KEY = "379a21a3-04ba-4421-80fd-31fe44886bf5";

  const handleSend = async () => {
    // basic client validation
    if (!name || !clientPhone) {
      pushBot("Please provide your name and phone number before sending.");
      return;
    }

    setSubmitting(true);
    pushUser("Sent details");
    setStep("done");
    setResultMessage(null);

    // Prepare FormData for Web3Forms (this will deliver an email)
    try {
      const formData = new FormData();

      // access key
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);

      // subject explicitly marks origin so owner recognizes it's from the WhatsApp bot
      formData.append("subject", `New lead - ${companyName} [WhatsApp Bot]`);

      // core fields
      formData.append("name", name);
      formData.append("email", email || "no-reply@noemail.local");
      formData.append("phone", clientPhone);

      // message body — starts with a clear source line for owner
      const messageBody = [
        `Source: WhatsApp Bot widget`,
        `Interested in: ${choice || "N/A"}`,
        `Location: ${location || "N/A"}`,
      ].join("\n");
      formData.append("message", messageBody);

      // helpful metadata and custom fields for owner
      formData.append("company", companyName);
      formData.append("source", "website-chat-widget");
      formData.append("lead_source", "WhatsApp Bot");
      formData.append("owner_note", "This lead was captured via the website WhatsApp bot widget — follow up quickly.");

      // if you want the email to be sent to a specific address (instead of the address configured in the Web3Forms dashboard)
      if (web3ToEmail) {
        formData.append("to", web3ToEmail);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResultMessage("Success! Your details have been sent via email.");
        pushBot("Thank you — we've recorded your inquiry and sent it by email. Someone will contact you soon.");
      } else {
        setResultMessage("Error sending via email. Please check Web3Forms configuration.");
        pushBot("There was an issue sending your details via email. Please try again later.");
        console.error("Web3Forms response error:", data);
      }
    } catch (err) {
      console.error("Web3Forms submit error:", err);
      setResultMessage("Network error while sending. Please try again later.");
      pushBot("There was a network error while sending your details. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="wa-panel-flat"
            className="fixed right-6 bottom-24 z-50"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: EASE_OUT }}
          >
            <div className="relative rounded-2xl" style={{ backgroundImage: `linear-gradient(120deg, ${brand.from}, ${brand.to})` }}>
              <div className="w-[94vw] max-w-[360px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg">
                {/* header */}
                <div className="flex items-center gap-3 px-4 py-3 text-white" style={{ backgroundImage: `linear-gradient(90deg, ${brand.from}, ${brand.to})` }}>
                  <div className="h-9 w-9 rounded-full ring-2 grid place-items-center overflow-hidden">
                    {logoUrl ? <img src={logoUrl} alt="Logo" className="h-9 w-9 object-cover" /> : <MessageCircle className="h-5 w-5" />}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold truncate">{companyName}</div>
                    <div className="text-[11px] text-white/90">{subtitle}</div>
                  </div>
                  <button onClick={() => setOpen(false)} className="ml-auto rounded-md p-1 hover:bg-white/10">
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* chat body */}
                <div className="px-4 pt-3 pb-3 space-y-2" style={{ minHeight: 120 }}>
                  {transcript.length === 0 && <div className="text-sm text-gray-500">Starting chat...</div>}

                  {transcript.map((m) => (
                    <div key={m.key} className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}>
                      <div className={`${m.from === "bot" ? "bg-gray-100 text-gray-800" : "bg-linear-to-r from-green-500 to-green-700 text-white"} rounded-xl px-3 py-2 text-sm max-w-[86%]`}>
                        {m.text}
                      </div>
                    </div>
                  ))}

                  {/* dynamic area */}
                  <div>
                    {step === "askInterest" && (
                      <div className="mt-2 flex gap-2">
                        <button onClick={() => handleInterest("yes")} className="rounded-full px-3 py-1.5 bg-white border text-sm">Yes</button>
                        <button onClick={() => handleInterest("no")} className="rounded-full px-3 py-1.5 bg-white border text-sm">No</button>
                      </div>
                    )}

                    {step === "typeSelection" && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        <button onClick={() => handleTypePick("Industry")} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white">
                          <Sparkles className="h-3 w-3" /> Industry
                        </button>
                        <button onClick={() => handleTypePick("Commercial")} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white">
                          <Building2 className="h-3 w-3" /> Commercial
                        </button>
                        <button onClick={() => handleTypePick("Residential")} className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm bg-white">
                          <Home className="h-3 w-3" /> Residential
                        </button>
                      </div>
                    )}

                    {step === "no" && (
                      <div className="mt-2">
                        <div className="text-xs text-gray-500">If you'd like later, press restart.</div>
                        <div className="mt-2">
                          <button onClick={() => {
                            setTranscript([]);
                            setStep("askInterest");
                            setTimeout(() => pushBot("Are you interested in installing solar?"), 160);
                          }} className="rounded-full px-3 py-1.5 bg-white border">Restart</button>
                        </div>
                      </div>
                    )}

                    {step === "collectDetails" && (
                      <div className="mt-3 space-y-2">
                        <input aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full rounded-xl border px-3 py-2 text-sm" />
                        <input aria-label="Phone" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} placeholder="Phone" className="w-full rounded-xl border px-3 py-2 text-sm" />
                        <input aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email (optional)" className="w-full rounded-xl border px-3 py-2 text-sm" />
                        <input aria-label="Location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location / City" className="w-full rounded-xl border px-3 py-2 text-sm" />
                        <div className="mt-2 flex justify-between items-center">
                          <div className="text-xs text-gray-500">{resultMessage}</div>
                          <button
                            onClick={handleSend}
                            disabled={!name || !clientPhone || submitting}
                            aria-disabled={!name || !clientPhone || submitting}
                            className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm text-white ${!name || !clientPhone || submitting ? "opacity-60 cursor-not-allowed" : ""}`}
                            style={{ backgroundImage: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
                          >
                            {submitting ? "Sending..." : <><Send className="h-4 w-4" /> Send</>}
                          </button>
                        </div>
                      </div>
                    )}

                    {step === "done" && (
                      <div className="mt-2 text-sm text-gray-600">
                        Thanks! We've recorded your inquiry.
                      </div>
                    )}
                  </div>
                </div>

                {/* footer */}
                <div className="px-4 pb-3 border-t border-gray-100 pt-2">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Phone className="h-3 w-3" />
                    <Mail className="h-3 w-3" />
                    <span>{footerText}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        ref={fabRef}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => setOpen((v) => !v)}
        className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-lg"
        style={{ backgroundImage: `linear-gradient(135deg, ${brand.from}, ${brand.to})` }}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">{open ? "Close" : "Chat with us"}</span>
      </motion.button>
    </>
  );
}
