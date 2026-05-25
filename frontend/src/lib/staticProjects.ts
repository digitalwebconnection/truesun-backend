import bloom from "../assets/Bloom Packaging/2.jpg";
import rentokil from "../assets/PCI Rentokill/2.jpg";
import rustomjee from "../assets/Rustomjee virar/5.png";
import oberoi from "../assets/Oberoi Realty/3.png";
import landmark from "../assets/Landmrk Pllatinum/5.jpeg";
import kalpataru from "../assets/Kalpataru Estate CHS Limited/6.jpeg";
import ganesh from "../assets/Ganesh kung/4.png";
import sharad from "../assets/Sharad Apt/3.jpeg";
import bungalow from "../assets/Andheri Bungalow/1.png";

export interface StaticProject {
  _id: string;
  name: string;
  segment: string;
  location: string;
  description: string;
  image: string;
  capacity: string;
  roofType: string;
  co2Mitigated: string;
  annualGen: string;
  payback: string;
  savings: string;
  isStatic?: boolean;
}

export const staticProjects: StaticProject[] = [
  {
    _id: "static-proj-1",
    name: "Andheri Independent Bungalow",
    segment: "Residential Bungalow",
    location: "Andheri, Mumbai",
    description: "High-efficiency solar system designed specifically for bungalows to optimize roof footprint and generation.",
    image: bungalow,
    capacity: "15 kW",
    roofType: "RCC Roof",
    co2Mitigated: "18 tonnes",
    annualGen: "21,600 kWh",
    payback: "3 Year",
    savings: "2.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-2",
    name: "Sharad Apartment",
    segment: "Residential",
    location: "Goregaon West, Mumbai",
    description: "12 kW solar power system installed using an elevated mounting structure allowing solar generation while keeping terrace usable.",
    image: sharad,
    capacity: "12 kW",
    roofType: "RCC Roof",
    co2Mitigated: "14 tonnes",
    annualGen: "17,280 kWh",
    payback: "3 Year",
    savings: "1.9 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-3",
    name: "Ganesh Kunj",
    segment: "Residential",
    location: "Andheri East, Mumbai",
    description: "Residential solar rooftop installation providing consistent green power and lowering common electricity consumption.",
    image: ganesh,
    capacity: "15 kW",
    roofType: "RCC Roof",
    co2Mitigated: "18 tonnes",
    annualGen: "21,600 kWh",
    payback: "3 Year",
    savings: "2.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-4",
    name: "Kalpataru Society",
    segment: "Residential Society",
    location: "Andheri, Mumbai",
    description: "A large-scale society rooftop system targeting common amenities load to reduce monthly maintenance charges.",
    image: kalpataru,
    capacity: "115 kW",
    roofType: "RCC Roof",
    co2Mitigated: "135 tonnes",
    annualGen: "1,65,600 kWh",
    payback: "Less than 4 years",
    savings: "18.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-5",
    name: "Landmark Platinum",
    segment: "Residential",
    location: "Bandra East, Mumbai",
    description: "Premium residential installation meeting strict architectural and structural load requirements.",
    image: landmark,
    capacity: "40 kW",
    roofType: "RCC Roof",
    co2Mitigated: "47 tonnes",
    annualGen: "57,600 kWh",
    payback: "3 Year",
    savings: "6.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-6",
    name: "Oberoi Realty",
    segment: "Highrise Residential",
    location: "Bhandup West, Mumbai",
    description: "Highrise residential solar deployment optimized for wind loading and elevator supply integration.",
    image: oberoi,
    capacity: "80 kW",
    roofType: "RCC Roof",
    co2Mitigated: "94 tonnes",
    annualGen: "1,15,200 kWh",
    payback: "3 Year",
    savings: "12.8 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-7",
    name: "Rustomjee Global City",
    segment: "Residential",
    location: "Virar, Mumbai",
    description: "Extensive residential complex system generating significant electricity to handle common lighting and water pumping.",
    image: rustomjee,
    capacity: "40 kW",
    roofType: "RCC Roof",
    co2Mitigated: "47 tonnes",
    annualGen: "57,600 kWh",
    payback: "3 Year",
    savings: "6.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-8",
    name: "Rentokil PCI",
    segment: "Commercial & Industrial",
    location: "Goregaon West, Mumbai",
    description: "Commercial rooftop solar installation yielding maximum tariff benefits and tax offsets.",
    image: rentokil,
    capacity: "40 kW",
    roofType: "RCC Roof",
    co2Mitigated: "47 tonnes",
    annualGen: "57,600 kWh",
    payback: "3 Year",
    savings: "6.4 Lakhs",
    isStatic: true
  },
  {
    _id: "static-proj-9",
    name: "Bloom Packaging Pvt Ltd",
    segment: "Industrial",
    location: "Daman, India",
    description: "Industrial metal sheet roof installation providing low-cost electricity for automated machinery.",
    image: bloom,
    capacity: "60 kW",
    roofType: "Metal Sheet Roof",
    co2Mitigated: "70 tonnes",
    annualGen: "86,400 kWh",
    payback: "3 years",
    savings: "9.6 Lakhs",
    isStatic: true
  }
];
