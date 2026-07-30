import {
  Globe2,
  Lightbulb,
  Layers,
  HeartHandshake,
  BrainCircuit,
  Workflow,
  Blocks,
  Gauge,
  Sparkles,
  Share2,
  BarChart3,
  Zap,
  Users,
  ShieldCheck,
  AlertTriangle,
  Wrench,
  TrendingUp,
} from "lucide-react";
import type {
  NavItem,
  IconCardItem,
  StatItem,
  SolutionItem,
  TestimonialItem,
  WorkItem,
} from "./types";

export const nav: NavItem[] = [
  { label: "Why Sonline", href: "#why-sonline" },
  { label: "Pillars", href: "#pillars" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Featured Project", href: "#featured-project" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const whyChooseUs: IconCardItem[] = [
  {
    icon: Globe2,
    title: "Global Expertise",
    body: "A team of seasoned professionals with a proven track record of success in driving transformation for businesses across industries.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Solutions",
    body: "From AI-driven insights to process automation, we harness the latest technologies to deliver impactful results.",
  },
  {
    icon: Layers,
    title: "Tailored Approach",
    body: "Every organization is unique, and so are our solutions. We design strategies that align with your goals and challenges.",
  },
  {
    icon: HeartHandshake,
    title: "Unparalleled Support",
    body: "Customer delight is a top priority for our team, and we are dedicated to achieving it in every endeavor we undertake.",
  },
];

export const pillars: IconCardItem[] = [
  {
    icon: Sparkles,
    title: "Experience",
    body: "Crafting intuitive, customer-centric experiences that drive engagement and build loyalty. From digital platforms to optimized workflows, we ensure every interaction is meaningful.",
  },
  {
    icon: Share2,
    title: "Integrate",
    body: "Breaking silos and bridging gaps. We connect your systems, tools, and processes into a unified ecosystem, ensuring seamless operations and unlocking new efficiencies.",
  },
  {
    icon: BarChart3,
    title: "Visualize",
    body: "Clarity through data. By leveraging advanced analytics and AI technologies, we uncover actionable insights that empower informed decision-making and enable forward-looking strategies.",
  },
  {
    icon: Zap,
    title: "Act",
    body: "Turning ideas into impact. We partner with you to implement strategic initiatives, measure outcomes, and ensure continuous improvement for lasting success.",
  },
];

export const services: IconCardItem[] = [
  {
    icon: Workflow,
    title: "Digital Transformation",
    body: "Redefine how you work with AI-driven workflows, cloud solutions, and automation.",
  },
  {
    icon: Blocks,
    title: "Custom Platforms",
    body: "Tailored solutions like Edukadu for e-learning or BallotDA for election management.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Analytics",
    body: "Unlock the full potential of your data with advanced analytics and predictive modeling.",
  },
  {
    icon: Gauge,
    title: "Business Process Optimization",
    body: "Streamline operations, reduce costs, and enhance productivity through innovative process redesign.",
  },
];

export const solutions: SolutionItem[] = [
  {
    title: "Edukadu",
    body: "AI/ML-driven e-learning platform engineered to modernize how institutions teach, track, and engage learners.",
  },
  {
    title: "BallotDA",
    body: "Election management platform handling poll worker onboarding, training, scheduling, and secure payroll handoff.",
  },
];

export const stats: StatItem[] = [
  { value: "50+", label: "Organizations transformed" },
  { value: "25+", label: "Years of global IT depth" },
  { value: "4", label: "Continents reached" },
];

export const heroCapabilities: string[] = [
  "Strategic Advisory",
  "AI & Data Platforms",
  "Custom Software Delivery",
];

export const experienceStats: StatItem[] = [
  {
    value: "84%",
    label: "of customers say they're more loyal to companies that prioritize data privacy and transparency",
  },
  {
    value: "67%",
    label: "of customers prefer self-service options over speaking to a representative",
  },
  {
    value: "60%",
    label: "of customer service requests will be handled by AI",
  },
];

export const whyWorkWithUs: IconCardItem[] = [
  {
    icon: Globe2,
    title: "Think Global, Act Local",
    body: "We are US based, and have engaged with government, commercial, and education businesses locally.",
  },
  {
    icon: Zap,
    title: "Flexible & Agile",
    body: "Flexibility, agility, and speed in our execution is our specialty, with focus on quality.",
  },
  {
    icon: Users,
    title: "Collaborative & Engaged",
    body: "We tailor our solution to your specific needs and work closely with you and your teams for continued success.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Partner",
    body: "We are a trusted partner to our customers with extensive credentials and deep expertise in technology.",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "BallotDA has revolutionized our poll management system in Fulton County. With its user-friendly interface and comprehensive tools, we've seamlessly managed onboarding, training, precinct assignments for our poll workers and payroll handoff, all while ensuring the confidentiality and security of our poll workers' information. Thanks to BallotDA, our operations have become more efficient and transparent.",
    name: "Fulton County Elections",
    role: "Poll Worker Management",
  },
  {
    quote:
      "Sonline helped us with a new website for our Epstein School. Suri led the efforts and helped us create the new one. His team was very responsive and engaged throughout the whole process. We will engage them again for special projects.",
    name: "Aaron Griffin",
    role: "Head of Technology",
  },
];

export const work: WorkItem[] = [
  {
    title: "Digital Transformation for the Utility Industry Leader",
    body: "Several digital transformation initiatives including infrastructure upgrade, Azure migration, P2V transformation of legacy ERP, a customer service app, and fractional CTO services.",
  },
  {
    title: "Cloud Migration and Intelligent Document Processing",
    body: "New age cloud OMS solution replacing a legacy system for order management and intelligent document processing with seamless DocuSign integration.",
  },
  {
    title: "Election Worker Management and Payroll Processing",
    body: "Cloud solution to efficiently manage election workers including registration, training, poll scheduling, kiosk attendance, and AMS payroll integration.",
  },
  {
    title: "Wizard-Driven Value Discovery Solution",
    body: "State-of-the-art ROI solution that helps customers understand the value of their investment via a discovery questionnaire that aids their decision process.",
  },
  {
    title: "e-Mentoring Made Easy Across Continents",
    body: "e-Mentoring platform with AI matching of mentors and mentees across four continents, transforming operations for a service organization associated with the UN.",
  },
  {
    title: "IT Infrastructure & Digital Transformation for a Home Accessories Leader",
    body: "Technology leadership for a seamless location move, application migrations, and several integration initiatives for a fashion-forward rugs and home accessories manufacturer.",
  },
  {
    title: "ServiceDesk Revolution for a Premier Membership Organization",
    body: "ITSM / change management best-practices consulting and implementation, improving service desk efficiency, resource utilization, and customer service.",
  },
  {
    title: "Connecting Brilliant Minds of Georgia",
    body: "Digitalization of student registration, ranking, and dashboards for a statewide technology competition, used by students from more than 1,000 Georgia schools.",
  },
  {
    title: "Streamlined Steel Building Investment Experience",
    body: "Streamlined legacy processes to make the experience easier when investing in a pre-engineered steel building.",
  },
];

export const payrollIntegration: IconCardItem[] = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    body: "Temporary poll worker payroll ran through manual, disconnected processes — onboarding data, hours, and pay approvals lived outside the county's actual payroll system, creating errors and delays.",
  },
  {
    icon: Wrench,
    title: "The Solution",
    body: "We connected BallotDA's Poll Worker Management module directly into enterprise payroll systems — SAP, Oracle, and ADP — automating the handoff from onboarding to final payment.",
  },
  {
    icon: TrendingUp,
    title: "The Outcome",
    body: "Zero-error payroll processing, faster reimbursement for election workers, and a fully auditable, compliant record from recruitment through final pay.",
  },
];

export const payrollSystems: string[] = ["SAP", "Oracle", "ADP", "AMS"];

export const companyInfo = {
  email: "support@sonline.us",
  linkedinUrl: "https://www.linkedin.com/company/sonline",
  hq: "130 Technology Pkwy, Peachtree Corners, GA 30092",
  aboutParagraph:
    "Sonline, where insight meets innovation, is a technology consulting firm dedicated to empowering organizations with tailored solutions for a digital-first world. Founded in 2015 and backed by over 25 years of global IT expertise, we deliver strategies that drive growth, efficiency, and transformation.",
};
