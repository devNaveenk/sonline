export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "About Sonline",
    items: [
      {
        question: "What does Sonline do?",
        answer:
          "Sonline is a technology consulting firm dedicated to empowering organizations with tailored solutions for a digital-first world. Founded in 2015 and backed by over 25 years of global IT expertise, we deliver strategies that drive growth, efficiency, and transformation across digital transformation, AI/data analytics, IT consulting, and digital marketing.",
      },
      {
        question: "Where is Sonline located?",
        answer:
          "Sonline is headquartered at 130 Technology Pkwy, Peachtree Corners, GA 30092, and works with counties, schools, and organizations nationwide.",
      },
      {
        question: "Who leads the Sonline team?",
        answer:
          "Sonline is led by an experienced leadership team including Suri Anantharama (Chief Technology Officer), Ashok Ganapathy (Vice President), and Mr. Iyer PhD, one of our founding members, who provides C-level advisory on IT strategy and execution.",
      },
      {
        question: "What values define Sonline's culture?",
        answer:
          "Our culture is built on Endurance, Courage, Persistence, Diligence, Tranquility, and Empathy values we hire for and live by in every client relationship, always striving for customer delight.",
      },
    ],
  },
  {
    category: "Services & Solutions",
    items: [
      {
        question: "What services does Sonline offer?",
        answer:
          "We offer four core services: Digital Transformation (AI/ML workflow automation, cloud migration, modern app development), AI & Data Analytics, IT Consulting & Strategy, and Digital Marketing Services.",
      },
      {
        question: "What is the CREATE framework?",
        answer:
          "CREATE is our proven methodology for guiding organizations through transformation: Consolidate, Re-Engineer, Evolve, Adopt, Trash, and Endure. It helps evaluate current systems, identify redundancies, and chart a path that optimizes resources toward your long-term goals.",
      },
      {
        question: "What flagship platforms has Sonline built?",
        answer:
          "Our flagship solutions include Edukadu, BallotDA, LGA Search, and OMS Flow platforms built to scale for education, elections, public records, and operations management respectively.",
      },
      {
        question: "Does Sonline offer fractional CTO services?",
        answer:
          "Yes. As part of our Digital Transformation service, we provide Fractional CTO support alongside AI/ML powered workflow automation, cloud migration, modern application development, and end-to-end digital strategy consulting.",
      },
    ],
  },
  {
    category: "Working With Us",
    items: [
      {
        question: "How do I get in touch with Sonline?",
        answer:
          "You can reach us at support@sonline.us, call +1 937-343-5697, or use the contact form on our Contact page. Our team routes every message to the right specialist.",
      },
      {
        question: "Can I chat with someone before filling out the form?",
        answer:
          "Yes Nadia, our AI-powered assistant, is available on every page. Click \"Ask Nadia\" to get instant answers about our services, solutions, team, and more, with quick links to the right page.",
      },
      {
        question: "Does Sonline work with government and public sector clients?",
        answer:
          "Yes. Sonline has deep experience delivering technology solutions to counties, schools, and public sector organizations nationwide, including election management and public records platforms.",
      },
      {
        question: "How quickly can we start a project with Sonline?",
        answer:
          "Timelines depend on scope, but our team is ready to move quickly from a quick consultation call to a full transformation roadmap. Reach out via the Contact page and we'll respond promptly.",
      },
    ],
  },
];
