const IMG = 'https://www.aagati.com/assets/images';

export const site = {
  name: 'Aagati',
  legalName: 'AagatiServe Pvt Ltd',
  email: 'info@aagati.com',
  logo: `${IMG}/AAGATI.svg`,
  logoWhite: 'https://www.aagati.com/assets/new-images/AAGATI-white.svg',
  linkedin: '#',
  instagram: '#',
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string; desc?: string }[] };

export const nav: NavItem[] = [
  {
    label: 'Data and AI Services',
    href: '#services',
    children: [
      { label: 'AI Consulting', href: '#services', desc: 'Strategy to production-grade AI' },
      { label: 'Aagati × Actian', href: '#services', desc: 'Real-time enterprise data, unified' },
      { label: 'Business Intelligence', href: '#services', desc: 'Dashboards that drive decisions' },
      { label: 'Strategy & Advisory', href: '#services', desc: 'Digital roadmaps with clear ROI' },
      { label: 'Product Engineering', href: '#services', desc: 'MVPs to resilient SaaS' },
      { label: 'Enterprise Integration', href: '#services', desc: 'APIs & middleware that connect' },
      { label: 'Intelligent Automation', href: '#services', desc: 'Automate repetitive work' },
      { label: 'GTM Advisory', href: '#services', desc: 'Predictable revenue pipelines' },
      { label: 'CTO as a Service', href: '#services', desc: 'Fractional technology leadership' },
      { label: 'Cloud & DevOps', href: '#services', desc: 'Scalable cloud operations' },
      { label: 'Enterprise IT Security', href: '#services', desc: 'Zero-Trust, audit-ready' },
    ],
  },
  { label: 'About', href: '#about' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Why Aagati', href: '#why' },
    ];

export const heroWords = ['outcomes', 'velocity', 'margin', 'clarity'];

export const heroStats = [
  { value: '18%', label: 'Lift in final candidate selection rate', tag: 'Amphenol' },
  { value: '28%', label: 'Increase in clinician engagement on EHR', tag: 'Healthcare' },
  { value: '11%', label: 'Revenue boost from intelligent automation', tag: 'Platform client' },
  { value: 'Days', label: 'From assessment to production — not quarters', tag: 'Delivery' },
];

// logos live in /public/logos. `h` = logo height class, tuned so each mark looks optically the same size
export const clients = [
  { name: "Moody's", sector: 'Financial Services', logo: '/logos/moodys.svg', h: 'h-6' },
  { name: 'Dentsu', sector: 'Advertising', logo: '/logos/dentsu.svg', h: 'h-6' },
  { name: 'GlobalLogic', sector: 'Digital Engineering', logo: '/logos/globallogic.png', h: 'h-8' },
  { name: 'Infosys', sector: 'IT Services', logo: '/logos/infosys.svg', h: 'h-7' },
  { name: 'Wipro', sector: 'IT Services', logo: '/logos/wipro.svg', h: 'h-10' },
  { name: 'TCS', sector: 'IT Consulting', logo: '/logos/tcs.svg', h: 'h-9' },
  { name: 'Kyndryl', sector: 'Infrastructure', logo: '/logos/kyndryl.svg', h: 'h-7' },
  { name: 'Amphenol', sector: 'Manufacturing', logo: '/logos/amphenol.svg', h: 'h-6' },
  { name: 'DishTV', sector: 'Media', logo: '/logos/dishtv.svg', h: 'h-8' },
  { name: 'Actian', sector: 'Data Platforms', logo: '/logos/actian.svg', h: 'h-7' },
  { name: 'Crecientech', sector: 'Technology', logo: '/logos/crecientech.png', h: 'h-9' },
  { name: 'Primus Partners', sector: 'Public Sector', logo: '/logos/primus.png', h: 'h-9' },
];

export const services = [
  {
    tag: 'Product Engineering',
    title: 'Product Engineering & Innovation',
    href: '#services',
    desc: 'Turn complex enterprise visions into high-velocity B2B SaaS realities, from rapid MVPs to secure, resilient cloud products.',
    img: `${IMG}/pd_engineering.png`,
    alt: 'Product engineering team collaborating on digital product development',
  },
  {
    tag: 'Digital Transformation',
    title: 'Digital Transformation & Operational Excellence',
    href: '#services',
    desc: 'Eliminate enterprise data silos and operational friction with AI-orchestrated API middleware and modern integration architectures.',
    img: `${IMG}/digital_transfom.png`,
    alt: 'Digital transformation workspace with connected enterprise systems',
  },
  {
    tag: 'Cybersecurity',
    title: 'Cybersecurity & Compliance',
    href: '#services',
    desc: 'Deploy AI-powered Zero-Trust architecture to secure your perimeter, isolate vulnerabilities, and stay audit-ready for DPDP, SOC2, and ISO.',
    img: `${IMG}/cybersec_img.png`,
    alt: 'Cybersecurity operations and compliance monitoring interface',
  },
  {
    tag: 'Modernization',
    title: 'Application Modernization & Managed Services',
    href: '#services',
    desc: 'AI-assisted refactoring and automated migration pipelines move legacy estates to the cloud with zero downtime — and cut run-rate infrastructure costs from day one.',
    img: `${IMG}/app_modernization.png`,
    alt: 'Application modernization and managed services',
  },
  {
    tag: 'Workforce',
    title: 'Contingent Workforce Solutions',
    href: '#services',
    desc: 'Elastic, pre-vetted talent pools and AI-vetted pods on demand — plus GCC setup and Build-Operate-Transfer models to scale cross-border teams fast.',
    img: `${IMG}/workforce_img.png`,
    alt: 'Contingent workforce and elastic engineering pod collaboration',
  },
  {
    tag: 'GTM Advisory',
    title: 'Digital Marketing & GTM Advisory',
    href: '#services',
    desc: 'AI-driven predictive analytics and high-intent targeting align your Go-To-Market playbook with real buyer behaviour to build predictable revenue pipelines.',
    img: `${IMG}/digitalmar_img.png`,
    alt: 'Digital marketing and GTM advisory for B2B SaaS',
  },
];

export const approach = [
  'Problem-first discovery',
  'AI & Data Engineering',
  'Product Engineering',
  'Enterprise-grade Security',
  'Explainable by Design',
  'Assessment to production in days',
];

export type CaseStudy = {
  client: string;
  sector: string;
  title: string;
  summary: string;
  tags: string[];
  outcomes: string[];
  metric?: { value: string; label: string };
};

export const caseStudies: CaseStudy[] = [
  {
    client: "Moody's",
    sector: 'Financial Services & Data Analytics',
    title: 'Automating Technical Prescreening with Agentic AI',
    summary: 'A complete, in-house AI recruitment flow designed to prescreen candidates for specialized technical and engineering roles across multiple technology stacks.',
    tags: ['Agentic Voice AI', 'Agentic Text AI', 'Technical Screening'],
    outcomes: ['Automated initial technical prescreening', 'Supported complex, role-specific evaluations', 'Enabled an in-house, multi-channel AI workflow'],
  },
  {
    client: 'Primus Partners',
    sector: 'Public Sector Consulting',
    title: 'End-to-End Design and Secure Deployment of Government Platforms',
    summary: 'Comprehensive technical support to design, deploy, assess, and secure government platforms in alignment with stringent national cybersecurity guidelines.',
    tags: ['Solution Design', 'Secure Deployment', 'Cyber Security', 'CERT-In Aligned'],
    outcomes: ['End-to-end deployment of scalable government platforms', 'Post-deployment vulnerability assessment and mitigation', 'CERT-In aligned security fortification'],
  },
  {
    client: 'TCS',
    sector: 'Global IT Consulting & Services',
    title: 'Optimizing Panel-Level Technical Recruitment with Agentic AI',
    summary: 'A bespoke AI recruitment system that strengthens late-stage, panel-level selection for complex technical roles while reducing load on senior engineering teams.',
    tags: ['Agentic Voice AI', 'Agentic Text AI', 'Panel-Level Selection'],
    outcomes: ['Bespoke agentic AI recruitment flow', 'Multi-channel technical candidate evaluation', 'Focused support for panel-level selections'],
  },
  {
    client: 'Amphenol',
    sector: 'Global Manufacturing',
    title: 'Enhancing Permanent Hiring Selection Rates with Voice AI',
    summary: 'An end-to-end AI recruitment solution that automated ATS-level profile screening and preliminary voice interviews for permanent-position hiring.',
    tags: ['Voice AI', 'ATS Automation', 'Permanent Hiring'],
    outcomes: ['25% improvement in final candidate selection rate', 'End-to-end ATS-level profile screening', 'Consistent preliminary Voice AI interviews'],
    metric: { value: '25%', label: 'better selection rate' },
  },
  {
    client: 'Vollzo',
    sector: 'Maritime & Shipping',
    title: 'Empowering Maritime Operations with AI-Driven Defect Detection',
    summary: 'An offline-capable mobile app and AI dashboard that help sailors capture ship defects and give management centralized maintenance insights.',
    tags: ['Mobile Development', 'Image AI', 'AI Dashboard', 'Offline-First'],
    outcomes: ['Seamless online and offline defect reporting', 'Image AI-assisted defect detection', 'Centralized maintenance insights for ship management'],
  },
  {
    client: 'Healthcare EHR System',
    sector: 'HealthTech & Electronic Health Records',
    title: 'Elevating Dental Practice Efficiency with AI Decision Support',
    summary: 'A generative AI recommendation and decision-support system that delivers actionable clinical insights inside dental practitioners’ existing EHR workflows.',
    tags: ['Generative AI', 'RAG', 'Decision Support', 'Product Development'],
    outcomes: ['40% increase in dentist engagement', '20% boost in overall revenue through upselling', 'End-to-end generative AI decision support'],
    metric: { value: '40%', label: 'more dentist engagement' },
  },
  {
    client: 'Real Estate AI Company',
    sector: 'Real Estate Tech & Government Permitting',
    title: 'Streamlining County-Level Architectural Compliance with an AI Backbone',
    summary: 'An AI backbone that reads architectural files, validates drawing objects, and flags code-compliance issues before they delay county-level permitting.',
    tags: ['Text AI', 'Knowledge Graphs', 'Compliance Review', 'Product Development'],
    outcomes: ['Over 80% reduction in repetitive submissions', '75% of compliance issues identified upfront', '15% decrease in overall permitting costs'],
    metric: { value: '80%', label: 'fewer repeat submissions' },
  },
  {
    client: 'Actian',
    sector: 'Enterprise Data Solutions & Software',
    title: 'Empowering Channel Sales with AI Analysts and Data Observability',
    summary: 'AI analyst solutions and data observability systems engineered to deliver reliable, actionable intelligence across complex channel sales networks.',
    tags: ['AI Analysts', 'Data Observability', 'Data Intelligence', 'Channel Sales'],
    outcomes: ['End-to-end AI analyst engineering for channel sales', 'Continuous visibility into data-pipeline health', 'Proactive, data-backed sales intelligence'],
  },
];

export const advantages = [
  {
    title: 'Speed & Agility',
    desc: 'From assessment to deployment in days, not quarters. We believe in fast, focused acceleration.',
    icon: 'zap',
  },
  {
    title: 'Uncompromising Quality',
    desc: 'Certified experts delivering solutions built with explainability, enterprise-grade security, and future-proof architecture.',
    icon: 'shield',
  },
  {
    title: 'Maximum ROI',
    desc: 'Cut cloud spend, automate repetitive work, and free your budget from hidden integration costs — all AI-driven, all measurable.',
    icon: 'trending',
  },
];

export const offices = [
  { city: 'Bengaluru, India', address: '15/72, 1st Floor, 59 Cross, 4th Block, Rajajinagar, Bangalore, Karnataka 560010' },
  { city: 'Gurugram, India', address: 'Unit 644, 6th Floor, JMD Megapolis IT Park, Sohna Road, Sector-48, Gurugram' },
  { city: 'Delaware, USA', address: '8 The Green Suite A, Dover, DE 19901, USA' },
];

export const footerLinks = [
  {
    title: 'Data & AI Services',
    links: [
      ['Data & Artificial Intelligence', '#services'],
      ['Business Intelligence', '#services'],
      ['Strategy & Advisory', '#services'],
      ['Product Engineering', '#services'],
      ['Enterprise Integration', '#services'],
      ['Intelligent Automation', '#services'],
      ['AI Training & Upskilling', '#services'],
      ['GTM Advisory', '#services'],
    ],
  },
  {
    title: 'Cloud Office',
    links: [
      ['CTO as a Service', '#services'],
      ['Application Modernization', '#services'],
      ['Enterprise IT Security', '#services'],
      ['Cyber Insurance Premium Estimator', '#'],
      ['Data Breach Cost Calculator', '#'],
      ['Security Investment ROI Calculator', '#'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Workforce Solutions', '#services'],
      ['TalentSkout', '#'],
      ['Case Studies', '#case-studies'],
      ['Careers', '#'],
      ['Contact Us', '#contact'],
    ],
  },
] as const;

export const contactHref = '#contact';
