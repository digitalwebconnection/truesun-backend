// This is the main App component that sets up routing and renders the Navbar, Footer, and main content based on the current route. 

// This is all Importing the necessary components and styles for the application.
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminLogin from "./component/admin/AdminLogin";
import AdminDashboard from "./component/admin/AdminDashboard";
import ProtectedRoute from "./component/admin/ProtectedRoute";
import Navbar from "./component/Navbar";
import SolarFooter from "./component/Footer";
import HomeMain from "./component/home/HomeMain";
import MainAbout from "./component/abouus/MainAbout";
import ConsultingMain from "./component/Service/Consulting/ConsultingMain";
import WhatsAppDockPro from "./component/WhatsAppChatbot";
import Residentialmain from "./component/Service/RooftopSolar/Residential/Residentialmain";
import CarbonFootprintingmain from "./component/Service/Consulting/Carbon-Footprinting/CarbonFootprintingmain";
import Projectsmain from "./component/Projects/Projectsmain";
import MainCI from "./component/Service/RooftopSolar/C&I/MainC&I";
import SolarfinanceMain from "./component/Solar-finance/Solar-financeMain";
import Careersmain from "./component/Careers/Careersmain";
import ContactUsMain from "./component/ContactUs/ContactUsMain";
import ServiceMain from "./component/Service/ServiceMain";
import ScrollToTop from "./component/ScrollToTop";
import BlogMain from "./component/blog/BlogMain";
import BlogDetails from "./component/blog/BlogDetails";
import PrivacyPolicy from "./component/PrivacyPolicy";
import OM from "./component/Service/RooftopSolar/O-M/OM";
import BESS from "./component/Service/RooftopSolar/BESS/BESS";
import Subsidy from "./component/Service/RooftopSolar/Subsidy/Subsidy";
import SFC from "./component/Service/RooftopSolar/SFS/SFS";
import NotFound from "./component/NotFound";

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>

        <Route path="/" element={<HomeMain />} /> {/* Home Page Path Is / */}

        <Route path="/about" element={<MainAbout />} />{/* About Us Page  */}

        <Route path="/services" element={<ServiceMain />} /> {/* Service Main page  */}

        <Route path="/services/rooftop/C&I" element={<MainCI />} />{/* In Service Page Rooftop Section C&I Page */}

        <Route path="/services/rooftop/residential" element={<Residentialmain />} /> {/* In Service Page Rooftop Section Residential Page */}

        <Route path="/services/rooftop/O&M" element={<OM />} /> {/* In Service Page Rooftop Section O&M Page */}

        <Route path="/services/rooftop/BESS" element={<BESS />} /> {/* In Service Page Rooftop Section BESS Page */}

        <Route path="/services/rooftop/Subsidy" element={<Subsidy />} /> {/* In Service Page Rooftop Section Subsidy Page */}

        <Route path="/services/rooftop/Solar-Finance-Solutions" element={<SFC />} /> {/* In Service Page Rooftop Section Solar Finance Solutions Page */}

        <Route path="/services/consulting" element={<ConsultingMain />} /> {/* In Service Page Consulting Section Main Page */}

        <Route path="/services/consulting/Carbon-Footprinting" element={<CarbonFootprintingmain />} /> {/* In Service Page Consulting Section Carbon Footprinting Page */}

        <Route path="/Solar-finance" element={<SolarfinanceMain />} /> {/* Solar Finance Main Page (Separate from Rooftop Section) */}

        <Route path="/projects" element={<Projectsmain />} /> {/* Projects Page Path Is /projects */}

        <Route path="/careers" element={<Careersmain />} /> {/* Careers Page Path Is /careers */}

        <Route path="/Knowledgwe" element={<BlogMain />} /> {/* Blog Main Page Path Is /Knowledge */}

        <Route path="/Knowledgwe/:slug" element={<BlogDetails />} /> {/* Blog Details Page Path Is /Knowledge/:slug where :slug is the URL-friendly blog title */}

        <Route path="/contact" element={<ContactUsMain />} /> {/* Contact Us Page Path Is /contact */}

        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} /> {/* Privacy Policy Page Path Is /PrivacyPolicy */}

        {/* Fallback Route for 404 Not Found */}

        <Route path="*" element={<NotFound />} />

      </Routes>

      <SolarFooter />

      <WhatsAppDockPro />
    </>
  );
}

// For client hydration we wrap in BrowserRouter in main.jsx (above).
// For server render, we use StaticRouter in entry-server.jsx.
// Export default as component so both server and client can import.
export default function App() {
  const location = useLocation();
  const isAdmin  = location.pathname.startsWith('/admin');

  // Admin pages render WITHOUT Navbar / Footer
  if (isAdmin) {
    return (
      <Routes>
        <Route path="/admin" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    );
  }

  return <AppInner />;
}
