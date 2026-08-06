import {
  Workflow,
  BrainCircuit,
  Compass,
  Megaphone,
  type LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  bullets: string[];
  image: string;
}

export const serviceDetails: ServiceDetail[] = [
  {
    icon: Workflow,
    title: "Digital Transformation",
    tagline: "Revolutionizing how you work with AI/ML, cloud migrations, and legacy modernization.",
    body: "Embrace the power of technology to modernize your operations and deliver value at scale. Our digital transformation services focus on equipping your organization with the tools and strategies to stay competitive in a fast-evolving landscape.",
    bullets: [
      "Fractional CTO",
      "AI/ML powered workflow automation",
      "Cloud migration and integration services",
      "Modern application development",
      "End-to-end digital strategy consulting",
    ],
    image: "/services/digital-transformation.jpg",
  },
  {
    icon: BrainCircuit,
    title: "AI & Data Analytics",
    tagline: "Turn data into actionable insights to drive smarter decision-making.",
    body: "Unlock the full potential of your data with advanced analytics and artificial intelligence. Our team specializes in turning raw data into actionable intelligence, enabling smarter decision-making and forward-looking strategies.",
    bullets: [
      "Predictive and prescriptive analytics",
      "AI-powered decision support systems",
      "Data visualization and dashboards",
      "Data integration and cleansing services",
    ],
    image: "/services/ai-data-analytics.jpg",
  },
  {
    icon: Compass,
    title: "IT Consulting & Strategy",
    tagline: "Build your future with strategic IT consulting and systems design.",
    body: "Our consulting services provide you with a clear roadmap to achieve your technology and business objectives. We setup dev pods (expert team of professionals based on your project needs) to ensure that your company is fully equipped to realize the vision.",
    bullets: [
      "Offshore / Nearshore IT development resources",
      "IT infrastructure design and implementation",
      "Cybersecurity and risk management",
      "Cloud strategy and implementation",
      "ITIL Change management and team enablement",
    ],
    image: "/services/it-consulting.jpg",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing Services",
    tagline: "Innovative digital marketing solutions to boost your online presence and maximize ROI.",
    body: "We provide innovative digital marketing solutions to boost your online presence, drive traffic, and maximize ROI for your business. Let us help you grow your brand in the digital space!",
    bullets: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Campaigns",
      "Social Media Marketing (SMM)",
      "Content Marketing",
      "Email Marketing",
      "Web Design & Development",
      "Analytics & Reporting",
    ],
    image: "/services/digital-marketing.jpg",
  },
];

export interface SolutionDetail {
  title: string;
  body: string;
  logo: string;
  image: string;
  url?: string;
}

export const solutionDetails: SolutionDetail[] = [
  {
    title: "Edukadu",
    body: "A comprehensive SaaS platform supporting DEI and e-Mentoring programs with tools for workforce training, secure communication, event management, and compliance with GDPR/CCPA. It integrates mentoring, surveys, scheduling, and payments while enabling organizations to manage programs, templates, and metrics in a customizable and user-friendly interface.",
    logo: "/solutions/edukadu-logo.png",
    image: "/solutions/digital-transformation-bg.jpg",
    url: "https://www.edukadu.com",
  },
  {
    title: "BallotDA",
    body: "A real-time dashboard for absentee ballot processing enables digitization and efficient management of ballot requests, linking voter data for validation. It streamlines FOIA/Open Records requests, provides source document references, and tracks responses with timestamps, ensuring transparency and reducing query resolution time.",
    logo: "/solutions/ballotda-logo.png",
    image: "/solutions/cloud-migration.jpg",
    url: "https://ballotda.com",
  },
  {
    title: "LGA Search",
    body: "Search your enterprise and cloud data sources (files, web folders, databases, email, PDF, images) easily and collate them to address your legal, audit, and compliance needs. As your data partner, we provide advanced tools like auto-completion, interactive filters, faceted search, and semantic enrichment to deliver tailored insights plus DISC assurance, multimedia and audio search, recommendations, and custom exports.",
    logo: "/solutions/lgasearch-logo.png",
    image: "/solutions/lgasearch-bg.jpg",
  },
  {
    title: "OMS Flow",
    body: "An AI-powered workspace centralizing all your data needs, revolutionizing order management with lifecycle tracking, real-time dashboards, and native integrations like DocuSign and QuickBooks. Simplified customer support and accessible order status enhance transparency and streamline operations.",
    logo: "/solutions/omsflow-logo.png",
    image: "/solutions/ementoring-bg.jpg",
  },
];

export interface CreateFrameworkStep {
  step: number;
  title: string;
  body: string;
}

export const createFramework: CreateFrameworkStep[] = [
  {
    step: 1,
    title: "Consolidate",
    body: "Streamline your ecosystem by merging overlapping functionalities and reducing redundancies in your application stack.",
  },
  {
    step: 2,
    title: "Re-Engineer",
    body: "Modernize existing systems by rethinking workflows, leveraging new technologies, and improving scalability.",
  },
  {
    step: 3,
    title: "Evolve",
    body: "Adapt your systems to meet the growing needs of your organization by introducing new features and capabilities.",
  },
  {
    step: 4,
    title: "Adopt",
    body: "Embrace innovative solutions to enhance productivity and bridge gaps within your ecosystem.",
  },
  {
    step: 5,
    title: "Trash",
    body: "Identify and decommission outdated systems that no longer serve your business needs or align with your vision.",
  },
  {
    step: 6,
    title: "Endure",
    body: "Retain and optimize mission-critical systems that provide ongoing value while integrating them with modern tools.",
  },
];

export interface CultureValue {
  title: string;
  body: string;
  image: string;
}

export const cultureValues: CultureValue[] = [
  {
    title: "Endurance",
    body: "Sometimes pathways are not well laid out and you need extra hands to clear obstacles. We are always available and provide support during every stage of the solution development and beyond.",
    image: "/culture/endurance.jpg",
  },
  {
    title: "Courage",
    body: "We know our strengths / limitations and our ability to say 'No' is liked and respected by our clients. During those times, we look out for alternative options and ensure customer success.",
    image: "/culture/courage.jpg",
  },
  {
    title: "Persistence",
    body: "Difficult terrains like legacy applications, systems integration can cause a heartburn. We as true partners would do heavy lifting, enable transition, train the team and ensure completion of the mission.",
    image: "/culture/persistence.jpg",
  },
  {
    title: "Diligence",
    body: "We empathize with customer situations, provide consulting service, work with third party vendors and our primary goal is to achieve a permanent, sustainable solution.",
    image: "/culture/diligence.jpg",
  },
  {
    title: "Tranquility",
    body: "Patience is a virtue and difficult situations tests our ability to stay quiet. We are sensitive to customer situations and always find a way out through positive approach, and objective thinking.",
    image: "/culture/tranquility.png",
  },
  {
    title: "Empathy",
    body: "We believe technology exists for the sake of business and not the other way around. Many times, simple solutions hide behind overalls called doubts. We uncover them by thinking out of the box!",
    image: "/culture/empathy.png",
  },
];

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Suri Anantharama",
    role: "Chief Technology Officer",
    bio: "Suri helps to find solutions for complex problems and leads the Digital Transformation business.",
    photo: "/team/suri-anantharama.png",
  },
  {
    name: "Ashok Ganapathy",
    role: "Vice President",
    bio: "Ashok provides the strategy / leadership and guides the team towards achieving the organization goals.",
    photo: "/team/ashok-ganapathy.png",
  },
  {
    name: "Mr. Iyer PhD",
    role: "Strategy & Development",
    bio: "One of our founding members, brings in 30+ years of industry experience, provides C-Level advisory on IT strategy and execution.",
    photo: "/team/mk-iyer.png",
  },
  {
    name: "Rama YN",
    role: "Executive Management",
    bio: "Rama understands the nuances of IT support business and oversees partner teams and ensures customer satisfaction.",
    photo: "/team/rama-yn.png",
  },
  {
    name: "Raj Subramanian",
    role: "Solutions Architect",
    bio: "Raj leads the Best Practices consulting team that specializes in ITIL / BC / DR / Zero-Day / Cyber Security practice.",
    photo: "/team/raj-subramanian.png",
  },
  {
    name: "Dhrupal Patel",
    role: "Technologist",
    bio: "Dhrupal leads the LGA Search Solution team and spearheads the FOIA / Open Records Deployment.",
    photo: "/team/dhrupal-patel.jpg",
  },
  {
    name: "Peri Sivakumar",
    role: "Technologist",
    bio: "Peri is passionate about new technologies like IoT, Big Data and brings your ideas to life.",
    photo: "/team/peri-sivakumar.png",
  },
  {
    name: "Shobana Murugesan",
    role: "Product Architect",
    bio: "Works with the developers to realize the world class solution.",
    photo: "/team/shobana-murugesan.png",
  },
  {
    name: "Aaron Gobin",
    role: "Solutions Director",
    bio: "Works closely with the customers to deliver key results.",
    photo: "/team/aaron-gobin.png",
  },
  {
    name: "Harsha Sarvaiya",
    role: "Project Manager",
    bio: "Manages Sonline projects and responsible for customer success.",
    photo: "/team/harsha-sarvaiya.jpg",
  },
  {
    name: "Balaji Balakrishnan",
    role: "Solutions Specialist",
    bio: "Helps organizations build their employee training and development solutions.",
    photo: "/team/balaji-balakrishnan.png",
  },
  {
    name: "Chris Turner",
    role: "Marketing Lead",
    bio: "Leads the marketing efforts and spearheads the goal to create omnichannel experience for customers.",
    photo: "/team/chris-turner.png",
  },
  {
    name: "Ritu Bosch",
    role: "Marketing Evangelist",
    bio: "Information evangelist that devotes time to explain IT services and projects to the user community.",
    photo: "/team/ritu-bosch.png",
  },
];

export interface BlogSection {
  heading?: string;
  body?: string;
  bullets?: string[];
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  sections: BlogSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "top-5-govtech-innovations",
    title: "Top 5 GovTech Innovations Revolutionizing Public Services Today",
    author: "Suri Anantharama",
    date: "January 21, 2025",
    excerpt:
      "Discover the top 5 GovTech innovations transforming public services. Learn how technology is revolutionizing governance, enhancing efficiency, and improving citizen experiences.",
    image: "/blog/govtech.jpg",
    sections: [
      {
        body: "Technology solutions tailored for government applications are revolutionizing how public services are delivered. From streamlining operations to improving citizen engagement, government technology solutions are fostering transparency, efficiency, and innovation.",
      },
      {
        heading: "1. AI in Public Services: Driving Efficiency and Personalization",
        body: "Artificial Intelligence (AI) is transforming how governments interact with citizens by enabling faster and more personalized service delivery.",
        bullets: [
          "Automated Citizen Support: AI-powered chatbots provide 24/7 assistance for queries related to taxes, benefits, and more.",
          "Predictive Analytics: Governments use AI to predict traffic patterns, healthcare needs, and resource allocation.",
        ],
      },
      {
        heading: "2. Smart Governance Tools for Data-Driven Decisions",
        body: "Smart governance involves leveraging advanced tools and data analytics to make informed policy decisions.",
        bullets: [
          "Enhanced Transparency: Real-time dashboards display government spending and project statuses.",
          "Streamlined Decision-Making: Data-driven insights help allocate resources where they're needed most.",
        ],
      },
      {
        heading: "3. Blockchain for Secure and Transparent Transactions",
        body: "Blockchain technology is being adopted for its unmatched security and transparency in managing sensitive data.",
        bullets: [
          "Voting Systems: Secure, tamper-proof digital voting platforms.",
          "Land Registries: Immutable records for property ownership, reducing fraud.",
        ],
      },
      {
        heading: "4. Cloud-Based Solutions for Seamless Collaboration",
        body: "Cloud migration benefits extend to public services, enabling governments to store, process, and share data efficiently.",
        bullets: [
          "Scalability: Resources can be scaled up or down based on demand.",
          "Cost Savings: Reduced expenses for physical infrastructure.",
          "Inter-Agency Collaboration: Seamless sharing of data among various departments.",
        ],
      },
      {
        heading: "5. Internet of Things (IoT) for Smart Cities",
        body: "IoT devices are enhancing urban living by enabling real-time monitoring and control of city infrastructure.",
        bullets: [
          "Smart Traffic Lights: Adaptive systems that reduce congestion and pollution.",
          "Waste Management: Sensors in bins optimize waste collection schedules.",
          "Public Safety: IoT-enabled surveillance systems for proactive crime prevention.",
        ],
      },
      {
        heading: "Why Embrace GovTech Now?",
        body: "The USA is leading the charge in adopting government technology solutions, but the global landscape is rapidly evolving. By embracing GovTech trends, public sector organizations can ensure they stay ahead in delivering citizen-centric services.",
      },
    ],
  },
  {
    slug: "ai-and-ml-demystified",
    title: "AI and ML Demystified: How Smart Tech is Redefining Business Success",
    author: "Ritu Bosch",
    date: "2025",
    excerpt:
      "Discover how AI and ML are revolutionizing businesses by driving innovation, improving efficiency, and redefining success. Learn about the power of smart technology today!",
    image: "/blog/ai-ml.jpg",
    sections: [
      {
        body: "Artificial Intelligence (AI) and Machine Learning (ML) have become transformative forces in the modern business landscape. With the ability to analyze massive datasets, automate processes, and deliver actionable insights, AI in business is redefining how organizations achieve success.",
      },
      {
        heading: "Understanding AI and ML",
        body: "AI involves creating systems capable of performing tasks that typically require human intelligence, such as problem-solving, decision-making, and natural language processing. ML, a subset of AI, enables machines to learn from data and improve performance over time.",
      },
      {
        heading: "AI and ML Use Cases in Business Success",
        bullets: [
          "AI-Powered Automation: Streamlining repetitive tasks like data entry and inventory management.",
          "Personalized Marketing: Leveraging ML algorithms to analyze customer preferences and predict behavior.",
          "Predictive Analytics: AI-driven analytics helps forecast market trends, optimize supply chains, and manage risks.",
          "Customer Support Enhancements: AI chatbots and virtual assistants provide 24/7 support, improving customer satisfaction.",
        ],
      },
      {
        heading: "Machine Learning Applications Across Industries",
        bullets: [
          "Healthcare: Diagnosing diseases with precision using ML-powered imaging tools.",
          "Finance: Fraud detection through anomaly detection models.",
          "Retail: Inventory optimization and dynamic pricing strategies.",
          "Manufacturing: Predictive maintenance to avoid equipment breakdowns.",
        ],
      },
      {
        heading: "Smart Technology Trends Driving Business Innovation",
        bullets: [
          "Hyperautomation: Combining AI, ML, and robotic process automation (RPA) to achieve end-to-end business process automation.",
          "Natural Language Processing (NLP): Analyzing customer feedback, automating report generation, and enabling conversational AI applications.",
          "Edge AI: Processing data locally on devices for real-time insights, critical for IoT and autonomous systems.",
        ],
      },
      {
        heading: "How to Adopt AI and ML in Your Business",
        bullets: [
          "Identify key areas of improvement — start with processes that are repetitive, data-intensive, or require real-time decision-making.",
          "Invest in AI-powered automation tools that integrate AI and ML to automate workflows and gain insights.",
          "Upskill your workforce to maximize the benefits of these technologies.",
          "Collaborate with experts to implement custom strategies tailored to your business needs.",
        ],
      },
      {
        heading: "Conclusion",
        body: "AI and ML are no longer futuristic concepts but indispensable tools for achieving business success. Businesses that embrace AI and ML today will be the leaders of tomorrow.",
      },
    ],
  },
  {
    slug: "10-proven-ways-digital-transformation",
    title: "10 Proven Ways Digital Transformation Boosts Efficiency and Profits",
    author: "Suri Anantharama",
    date: "February 14, 2025",
    excerpt:
      "Discover 10 proven ways digital transformation enhances efficiency and maximizes profits. Learn how technology-driven strategies can streamline operations and drive business growth.",
    image: "/blog/digital-transformation-tips.jpg",
    sections: [
      {
        body: "In today's fast-paced digital era, businesses are under constant pressure to innovate and optimize. A digital transformation strategy has emerged as a powerful approach to enhance productivity, streamline operations, and increase profitability.",
      },
      {
        heading: "1. Business Process Automation",
        body: "Automation eliminates manual tasks, reduces human errors, and accelerates workflows, enabling businesses to focus on strategic initiatives — automating invoicing, payroll, inventory management, and AI-powered CRM tools.",
      },
      {
        heading: "2. Enhanced Customer Experiences",
        body: "Digital tools like AI chatbots, personalized marketing, and data analytics provide businesses with insights to cater to customer needs better, resulting in faster response times and tailored recommendations.",
      },
      {
        heading: "3. Cloud Migration Benefits",
        bullets: [
          "Remote access to resources.",
          "Reduced IT infrastructure costs.",
          "Enhanced data security and disaster recovery.",
        ],
      },
      {
        heading: "4. IT Modernization Services",
        body: "Outdated IT systems can hinder progress. Organizations adopting modern IT systems report up to a 30% increase in operational efficiency.",
      },
      {
        heading: "5. Data-Driven Decision Making",
        body: "Operational efficiency tools like business intelligence dashboards and predictive analytics empower organizations to identify trends, optimize resource allocation, and reduce waste.",
      },
      {
        heading: "6. Remote Work Enablement",
        body: "The rise of digital collaboration tools — video conferencing platforms and cloud-based project management software — has made remote work a reality, boosting productivity and employee satisfaction.",
      },
      {
        heading: "7. Cybersecurity Improvements",
        body: "Digital transformation prioritizes robust security measures — proactive threat detection and compliance with industry regulations — that build trust with customers and partners.",
      },
      {
        heading: "8. Integration of AI and Machine Learning",
        body: "AI and ML enable businesses to automate complex tasks, analyze vast datasets, and deliver personalized solutions — from predictive maintenance in manufacturing to AI-driven marketing campaigns.",
      },
      {
        heading: "9. Operational Efficiency Tools",
        body: "Businesses leverage specialized tools like ERP systems and workflow management software to streamline operations and eliminate redundancies.",
      },
      {
        heading: "10. Agility and Scalability",
        body: "Digital transformation equips businesses with the ability to adapt quickly to market changes by implementing agile methodologies and utilizing cloud solutions to scale resources on demand.",
      },
      {
        heading: "Conclusion",
        body: "A well-executed digital transformation strategy drives growth, streamlines processes, and boosts profitability. Investing in digital transformation isn't just about staying relevant — it's about thriving in a competitive landscape.",
      },
    ],
  },
];

export interface InsightPost {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  image: string;
  sections: BlogSection[];
  videoId?: string;
}

export const insightPosts: InsightPost[] = [
  {
    slug: "what-is-your-small-idea",
    title: "What is your Small Idea?",
    author: "Sonline",
    excerpt:
      "A Lunch & Learn workshop for the UPS Toastmasters group on how small ideas — common sense, convenient, accidental, or born from deep self-reflection — can make a big difference in our lives.",
    image: "/insights/small-idea.jpg",
    videoId: "oUy5NoYRF7k",
    sections: [
      {
        body: "Lunch & Learn Workshop for the UPS Toastmasters group conducted on March 24th with a focus on Small Ideas... and how they can make a BIG difference in our lives.",
      },
      {
        heading: "The origins and mechanics of small ideas",
        body: "Learn about the origins and mechanics of small ideas to understand how you can participate in that. Come up with small ideas that are common sense, convenient, an accidental discovery, or born from deep self-reflection.",
      },
    ],
  },
  {
    slug: "change-management-demystified",
    title: "Change Management Demystified!",
    author: "Suri Anantharama",
    excerpt:
      "Explore the fundamentals of change management and how a simple Risk Score formula helps IT leaders make informed decisions on every Request for Change.",
    image: "/insights/change-management.jpg",
    sections: [
      {
        body: "Are you planning to implement ITIL? Do you handle Change Requests? Are you measuring the risk associated with a given RFC (Request for change)? IT leaders across the world struggle to find the right methodology when it comes to quantifying the \"Risk Element\" associated with change request. Customers use tools such as CA Service Desk, Service Now, ServiceDesk Plus, LanDesk, BOSS, BMC Remedy, or other products to manage their #ITIL change requests.",
      },
      {
        heading: "Primary Attributes of RFC",
        body: "Irrespective of the tools or even manual ways of tracking changes using XLS sheets, you need to look for 5 primary attributes in every RFC:",
        bullets: [
          "Change Impact",
          "Impact if change is not performed",
          "Testing Status",
          "Outage period",
          "Backout period",
        ],
      },
      {
        body: "Each attribute carries a \"weight\" based on their importance and helps in calculating the Risk Score. During the CAB (Change Advisory Board) or CMC (Change Management Committee) meetings, this Risk score could be used to make informed decisions.",
      },
      {
        heading: "Risk Score Calculation",
        body: "Our Magic Formula uses the primary attributes to calculate the Risk Score using the Risk Rating value of the primary attribute multiplied by weight of attribute. You can modify the Risk score by changing the weight.",
        image: "/insights/risk-score-formula.jpg",
      },
      {
        heading: "1. Change Impact — [weight: 3]",
        body: "Every RFC has some kind of impact in the environment affecting few individuals to everyone. We have to capture the risk rating during the Change Request input process. For example, a functional manager could request a change or a Technician might move an incident to the change queue.",
        bullets: [
          "Minimal Impact (1)",
          "Significant – but not critical (2)",
          "Critical business systems impacted (3)",
          "Major Impact (4)",
        ],
      },
      {
        body: "(x) indicates the Risk Rating and weight of change impact is 3. Change Impact Score = Weight x Risk Rating. In case of Minimal Impact, Change Impact score = 3 x 1 = 3 and in case of Major Impact, Change Impact score = 3 x 4 = 12.",
      },
      {
        heading: "2. Impact if Change is not performed — [weight: 1.5]",
        body: "This attribute is another key factor in determining the need for the given change. Sometimes RFC is pushed through even though it carries a High Risk score if the 'System would not function' without the change. Also, this factor helps to monitor pet projects being pushed through the queue.",
        bullets: [
          "No Impact (1)",
          "Minimum performance loss (2)",
          "Substantial performance loss (3)",
          "System not usable (4)",
        ],
      },
      {
        body: "In case of No Impact, the attribute score = 1.5 x 1 = 1.5 and in case of 'system not usable' scenario, score = 1.5 x 4 = 6.",
      },
      {
        heading: "3. Testing Status — [weight: 2]",
        body: "IT leaders of large organizations are paranoid about making a change that is not validated thoroughly in R&D setup. Inability to test the RFC in QA environment implies High Risk. Financial institutions & Healthcare firms demand \"Filing / Review of Test Results\" as a precursor to even consider a change.",
        bullets: [
          "Fully tested in production (1)",
          "Partially tested in production (2)",
          "Tested in a controlled environment (3)",
          "Not able to test until live (4)",
        ],
      },
      {
        body: "If you could fully test the change, the attribute score = 2 x 1 = 2 and if not, attribute score = 2 x 4 = 8.",
      },
      {
        heading: "4. Outage Period — [weight: 1.5]",
        body: "System Availability is an important measure considered by leaders to evaluate the functioning of a Service Desk Team and any kind of scheduled / unscheduled downtime is carefully reviewed prior to the approval of RFC. Any outage that lasts more than 4 hours can have devastating consequences. Weight for this attribute would be high if you are running a Healthcare environment.",
        bullets: [
          "Less than 1 hour (1)",
          "Between 1 to 2 hours (2)",
          "Between 2 to 4 hours (3)",
          "Up to a Day (4)",
        ],
      },
      {
        body: "Outage more than a day can cause significant business loss, but it can happen due to various reasons such as lack of planning, limited support, natural calamities, resource limitations, etc. Applying the same formula as above, Outage period scores can range between 1.5 and 6.",
      },
      {
        heading: "5. Backout Period — [weight: 2]",
        body: "Despite all the planning, a change can fail and Disaster Planning / Recovery is a key component of any Risk Management plan. Every RFC should capture this attribute backout period (generally in hours) as a mandatory field. It is better to be safe than sorry!",
        bullets: [
          "Backout is easy < 1 hour (1)",
          "Backout is complex – 4 hours (2)",
          "Backout is very difficult – 1 Day (3)",
          "Backout is not possible (4)",
        ],
      },
      {
        body: "Backout Period score can range between 2 and 8.",
      },
      {
        heading: "Risk Score Analysis",
        body: "RFC Risk Score = Total Sum [Weight * Risk Rating] of all attributes. If you use the Weight & Risk ratings defined above, RFC Risk Score can range between 10 and 40.",
        image: "/insights/change-risk.jpg",
      },
      {
        heading: "Change Requests with corresponding Risk Score -- BOSS",
        body: "Change Management becomes easy once we associate a Risk Score to every RFC. Companies can define their own workflow rules to allow Technicians work on the RFCs with a Risk Score below threshold levels. For example, technicians can work on change requests with a score less than 18 without approval from CAB.",
        image: "/insights/risk-analysis-table.jpg",
      },
      {
        body: "Risk Score helps CAB to focus on important changes. Users may consider additional factors like application dependency, environment, and connectivity to make prudent decisions.",
      },
      {
        heading: "Are you ready for Change?",
        body: "Suri Anantharama is an entrepreneur based out of Atlanta [USA] and helps organizations in their Technology road maps, IT strategy, Product development with a focus on the SMAC [Social / Mobility / Analytics / Cloud] stack. Suri supports efforts towards universal peace, freedom and happiness of everyone.",
      },
    ],
  },
  {
    slug: "insights-from-dr-mlk",
    title: "Insights from Dr MLK... 4 life changing lessons!",
    author: "Suri Anantharama",
    excerpt:
      "Four secular, life-changing lessons from Dr. Martin Luther King Jr.'s speeches that can be adapted by anyone building a better society — or a better career.",
    image: "/insights/mlk-lessons.jpg",
    sections: [
      {
        body: "Every year, we celebrate the life of Dr Martin Luther King Jr on the 3rd Monday of January. We listen to his 'I have a Dream speech' or read some of the published books on his life, his civil rights movement, non-violent approach, life struggles, and some people confine him as the leader of a particular community.",
      },
      {
        body: "I consider Dr MLK as one the greatest global leaders of the 20th century in the lines of Mahatma Gandhi, Nelson Mandela, FDR and others. We learn some important life lessons from Dr MLK's speeches that are not related to Civil Rights, Christian teachings, or Community awakening workshops. These 4 life changing lessons are secular in nature and can be adapted and internalized by each one of us towards building a better society.",
      },
      {
        heading: "Do the right thing",
        body: "Our ability to think and do the right thing is very essential. It has to be part of our fundamental principles and there is no need to procrastinate that intent. MLK says that there is no appropriate time, location or circumstance to do the right thing.\n\n\"The time is always right to do what's right\"",
      },
      {
        heading: "Size does not matter",
        body: "Our intent to take action faces obstacles due to our own limiting thoughts. We compare ourselves with others and create this invisible barrier leading to procrastination. We get into a mindset that postpones certain activities to a state only \"if certain conditions\" are reached. Very few people reach that stage and lot of their ideas die down with them. MLK encourages us to be of service in whatever capacity and come out of limiting mindsets.\n\n\"Be a bush if you can't be a tree. If you can't be a highway, just be a trail. If you can't be a sun, be a star. For it isn't by size that you win or fail. Be the best of whatever you are.\"",
      },
      {
        heading: "Imagination is key",
        body: "With the right intent, and coming out of limiting belief, when you are ready to take the action, Dream BIG! Assume you want to be a Mentor for a group of students, dream of the higher purpose and the change that would bring in. It would motivate the individual and also the stakeholders in the ecosystem. MLK says dreams are here to stay forever!\n\n\"You can kill the dreamer, but you can't kill the dream.\"",
      },
      {
        heading: "Status Quo is not your friend",
        body: "With the right intent, coming out of the limiting belief, having a dream, you have to take the action immediately. Your big dream may require you to fly and cross the boundaries imposed by the organizations, external factors or the society and it may feel like a daunting task. But do it anyway! I consider this profound advice can change the society for good. People settling in with temporary achievements, positions or titles instead of pursuing the goals towards self-actualization.. MLK wants you to march forward!\n\n\"If you can't fly then run, if you can't run then walk, if you can't walk then crawl, but whatever you do you have to keep moving forward.\"",
      },
      {
        body: "I consider these 4 life lessons can significantly alter the conditioning of our professionals that pursue education / career goals and settle. Life is a continuous journey towards discovering new frontiers by unleashing the hidden, dormant potential through constant introspection.\n\nLet us remember Dr MLK for providing these wonderful insights to imbibe in our life!",
      },
    ],
  },
  {
    slug: "are-you-productive",
    title: "Are you productive?",
    author: "Suri Anantharama",
    excerpt:
      "A simple reframe — Value = Benefits to Others × Quality × Efficiency — that changes how you think about productivity at work and in life.",
    image: "/insights/productivity-value.jpg",
    sections: [
      {
        body: "Friends - We think about this every day and measure productivity quantitatively. Generally the Key Performance Indicators are tied to new customers, sales revenues, products sold, services offered, profit margins, etc.\n\nTraditionally we measured productivity using total value divided by hours worked (or simply output / input) in various use cases.\n\nProductivity = Total value of work / Total hours worked",
        image: "/insights/productivity-diagram.jpg",
      },
      {
        body: "Last week, during a lunch meeting, my mentor introduced the concept of Value calculation to become #GreatAtWork and referred the book written by @MortenTHansen. I am duty bound to share this to a larger audience as Value calculation explained by him was so relevant and can be applied in our work / personal life.\n\nValue of a person's work = Benefits to others x quality x efficiency",
      },
      {
        heading: "We infer 3 important insights:",
        bullets: [
          "Benefits to Others -- You may clock 60-70 hours / week but if the organization does not benefit, value would be Zero (even though it is of the highest quality!)",
          "Quality -- Ask questions and always introspect why are we doing something. Quality of work can be greatly improved if we practice \"active listening\" (to ensure accurate completion as per customer needs)",
          "Efficiency -- It can be improved significantly by automating mundane / repetitive tasks, providing training sources, and through effective communication.",
        ],
      },
      {
        body: "Which is more important? All of them! Pay close attention to X (mathematical sign) as Value could become a BIG ZERO even if we miss one of the three factors and if we get it right, total Value would be a HUGE MULTIPLIER!!\n\nLet us work on Value Creation and make the world a better place.",
        image: "/insights/value-creation-diagram.jpg",
      },
      {
        heading: "Consider these ideas for value creation:",
        bullets: [
          "Spend 4 hours / week at a senior care center to help them learn to use mobile devices effectively (Immeasurable happiness when they chat with their millennial grand children)",
          "Teach a life skill to a student / or a needy person for few weeks (Relish the change and enjoy the impact it made due to your selfless activity)",
          "Mentor a co-worker or a team member and help them succeed in a project that they are struggling with (Observe how they feel as they go through the transformation and taste success)",
        ],
      },
      {
        body: "Are you creating value?",
      },
    ],
  },
  {
    slug: "grassroots-movement-in-georgia",
    title: "Grassroots movement in Georgia!",
    author: "Suri Anantharama",
    excerpt:
      "750 projects, 1,000+ students, and proof that Georgia's public schools are producing serious STEM talent — reflections from judging the GA Tech Fair.",
    image: "/insights/grassroots-movement.jpg",
    sections: [
      {
        body: "Do you send your kids to private school? Do you believe that GA public schools lag behind in terms of delivering STEM education? Read this...",
      },
      {
        body: "Last month, GAETF gave me the opportunity to participate in the competition as a Judge and it was a great experience for me. There were 750 projects and 1000+ students from various school districts of GA participated in the Tech Fair. Imagine a mass gathering in Macon to showcase their mobile apps, robotics, 3D modeling, Game design, Video production and many more. If you think students of GA public schools are lagging behind, think again!!",
      },
      {
        heading: "GA Tech Fair 2016 -- Winners!",
        body: "Our team judged more than 40 projects, interviewed 70 odd students with a focus on mobile apps. Solutions included school apps, 3D games, electoral college analysis, volunteer work automation, sports team collaboration, etc. Particularly, students from remote areas of GA surprised us with their innovations!",
      },
      {
        body: "Many students were from economically backward communities and go to schools that depend on E-Rate funding programs. Some of them shared their reasons on attending the Tech Fair..",
        bullets: [
          "\"I am sick for the past 3 days.. still drove 4 hours to attend this Tech Fair.. It means a lot for me and I don't get to see so many smart students in one place..\" — West Georgia",
          "\"We offered to develop this app as our school website was buggy and our principal needed some help...\" — 30 miles from Athens",
          "\"Very few students have smart phones in our school and I could not test my game app. Still I believe and will come back next year..\" — Muscogee county",
          "\"I want to develop a compelling 3D game that is sticky..\" — Hall County",
        ],
      },
      {
        heading: "Organizers",
        body: "This blog would not be complete without the special mention of the leadership, and dedicated volunteers who work for months to conduct this competition at the school, district, region and finally state finals!\n\nIn terms of planning, organizing an event, GaETF should get 9.5 out of 10..!",
      },
      {
        heading: "Judges",
        body: "We had volunteers who judged various categories and they were ready for the grueling 15-minute sessions with student teams. Planning committee had worked on team folders that was so clear & concise that there was no need for explanation. Kudos to the GaETF team that prepared the judging sheets, scorecards and an awesome training folder.\n\nAnyone interested in conducting Mobile Apps contests / hackathon can take some notes and contact GaETF for additional inputs.",
      },
      {
        body: "I am so happy that GA is moving in the right direction with respect to STEM education and with the support of higher education institutes like @GeorgiaTech, @GeorgiaStateU, and @UniversityofGA, we are producing great talent for the nation!\n\nSuri Anantharama is one of the founding members of TAG Government, Public Sector society and provides IT advisory / Best Practices consulting services to several local government cities / counties / schools across the country.",
      },
    ],
  },
  {
    slug: "strategic-partner-in-business",
    title: "Sustainability: A Framework for Growth and Connection",
    author: "Aaron Gobin",
    excerpt:
      "Sustainable business partnerships are built on three traits: unfettered integrity, consistency of drive and purpose, and a willingness to learn with humility.",
    image: "/insights/strategic-partner.jpg",
    sections: [
      {
        body: "Sustainability is not merely about preservation; it's about fostering the optimal state for balanced growth, renewal, and forward momentum. Whether it pertains to life itself, our living situations, or our physical, emotional, and mental health, sustainability serves as a guiding principle that transcends time. For generations, it has symbolized the regenerative, circular nature of progress far from the stagnancy of standing still.",
      },
      {
        body: "In my experience of working with thousands of individuals and organizations over the last two decades, I've observed that true sustainability both personally and professionally is built upon key qualities that differentiate the top \"5 percenters.\" These individuals and organizations exhibit three foundational traits:",
        bullets: [
          "Unfettered Integrity: A steadfast commitment to doing what's right, even when no one is watching.",
          "Consistency of Drive and Purpose: A relentless pursuit of goals, powered by clarity of vision and unwavering determination.",
          "A Willingness to Learn with Humility: The rare ability to admit personal limitations while recognizing opportunities for growth and embracing constructive feedback.",
        ],
      },
      {
        body: "These traits form the foundation for building meaningful, sustainable relationships be it with colleagues, business partners, or even passing acquaintances. When these qualities are present, there's a synergy, a \"lock\" or \"fusion,\" that creates a base not just for collaboration, but for genuinely exciting and transformative next steps.",
      },
      {
        body: "Now, ask yourself: Do the people you partner with in business share these qualities? If they do, you're likely standing on a sustainable foundation for growth. If not, it may be time to reassess and prioritize these traits in your connections.",
      },
      {
        body: "I'd love to hear your thoughts. Have you encountered individuals or teams that embody these principles? How have they impacted your journey? Feel free to share your experiences and insights at aaron@sonline.us, I'm eager to learn from you.",
      },
    ],
  },
  {
    slug: "value-of-partnership-smbs",
    title: "The Value of Partnership: SMBs and the Foundation for Sustainable Growth",
    author: "Aaron Gobin",
    excerpt:
      "Why small and medium businesses that build from the center out — shared values first — create more durable partnerships than those chasing growth at any cost.",
    image: "/insights/smb-partnership.jpg",
    sections: [
      {
        body: "Culturally, small and medium-sized businesses (SMBs) share a natural alignment with one another. Unlike larger organizations that often morph into bureaucracies, drifting away from the original values and intentions of their humble beginnings, SMBs tend to maintain their grounding in shared purpose and a strong sense of community. This unique connection is especially evident in their relationships with their core SMB customers, whom we'll refer to as partners in business. Like the right life partners, the right business partners keep us grounded while fostering healthy growth and upward trajectories.",
      },
      {
        body: "However, a challenge arises when businesses lose sight of the foundation that propelled their initial success. The disproportionate gap between 'what got us here' and the relentless push for growth at any cost often leaves organizations disconnected from the very partnerships that built their success. This is where SMBs can stand apart by nurturing relationships that emphasize mutual growth, shared values, and aligned goals.",
      },
      {
        heading: "Building the Wheel: Two Philosophies of Growth",
        bullets: [
          "From the Outside In: Starting with the outer circumference, then working inward to connect the pieces (spokes) and finally solidifying the center/pivot point.",
          "From the Center Out: Building from the base or center first, then adding the spokes, followed by the inner wheel and outer circumference.",
        ],
      },
      {
        body: "Most SMBs instinctively follow the second approach, focusing on creating a strong, solid core whether it's their values, purpose, or team before expanding outward. This methodology naturally aligns with cultivating partnerships that prioritize shared values, grit, and synchronized work philosophies.",
      },
      {
        heading: "The Question of Partnership",
        body: "The choice of partners often defines the trajectory of SMBs. Would you prefer to collaborate with partners who share your critical values, work ethic, and approach to timelines and outputs? Or do you see value in working with entities that hold vastly different perspectives on business operations and task progression?\n\nBoth approaches can have merit, but for SMBs navigating an unpredictable future, the decision often hinges on the type of journey they want to take. Partnerships with shared philosophies and complementary strengths can lead to sustained growth, while mismatched relationships might derail progress or shift focus away from core priorities.",
      },
      {
        heading: "Let's Collaborate on This Insight",
        body: "If you're an SMB, I'd love to hear your perspective. What kind of partner would you choose to navigate the uncharted future? Do shared values and philosophies drive your decisions, or are you open to contrasting viewpoints for growth? Share your thoughts at aaron@sonline.us — I'm looking forward to co-authoring this conversation with you and learning from your experiences.",
      },
    ],
  },
];
