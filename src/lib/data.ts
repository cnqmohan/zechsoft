
import { Code, Cloud, Lock, LineChart, Briefcase, Database, type LucideIcon, Smartphone, Users, BrainCircuit, CheckCircle, CloudCog, AreaChart, ShieldCheck } from 'lucide-react';
import type { ReactElement, ElementType } from 'react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
];

type ServiceItem = {
  title: string;
  slug: string;
  points: string[];
  imageId: string; 
};

type ServiceCategory = {
  category: string;
  icon: ElementType;
  items: ServiceItem[];
};

export const services: ServiceCategory[] = [
  {
    category: 'Core Development Services',
    icon: Code,
    items: [
      {
        title: 'Web Development',
        slug: 'web-development',
        points: [
          'Custom web applications',
          'Responsive websites (desktop & mobile)',
          'E-commerce platforms',
          'CMS development (WordPress, Drupal, Joomla, etc.)',
          'Progressive Web Apps (PWAs)',
        ],
        imageId: 'service-web-dev',
      },
      {
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        points: [
          'Android & iOS app development',
          'Cross-platform apps (Flutter, React Native, Xamarin)',
          'Native apps (Java/Kotlin for Android, Swift for iOS)',
          'App UI/UX design',
          'App testing & deployment',
        ],
        imageId: 'service-mobile-dev',
      },
      {
        title: 'Software Development',
        slug: 'software-development',
        points: [
          'Custom enterprise software',
          'ERP, CRM solutions',
          'Automation tools',
          'AI & ML powered applications',
          'API development & integration',
        ],
        imageId: 'service-enterprise',
      },
    ],
  },
  {
    category: 'Cloud & Infrastructure Services',
    icon: CloudCog,
    items: [
      {
        title: 'Cloud Computing',
        slug: 'cloud-computing',
        points: [
          'Cloud migration (AWS, Azure, Google Cloud)',
          'Cloud storage & backup solutions',
          'SaaS, PaaS, IaaS solutions',
          'Serverless architecture',
          'Cloud security & monitoring',
        ],
        imageId: 'service-cloud-devops',
      },
      {
        title: 'DevOps Services',
        slug: 'devops-services',
        points: [
          'Continuous Integration/Continuous Deployment (CI/CD)',
          'Containerization (Docker, Kubernetes)',
          'Infrastructure as Code (IaC)',
          'Monitoring & performance tuning',
        ],
        imageId: 'service-devops',
      },
      {
        title: 'Hosting & Domain Services',
        slug: 'hosting-domain-services',
        points: [
          'Web hosting (shared, VPS, dedicated, cloud)',
          'Domain registration & management',
          'SSL certification',
        ],
        imageId: 'service-hosting',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    icon: ShieldCheck,
    items: [
      {
        title: 'Cybersecurity Services',
        slug: 'cybersecurity-services',
        points: [
          'Vulnerability assessment & penetration testing',
          'Network & endpoint security',
          'Identity & access management',
          'Data encryption & security monitoring',
        ],
        imageId: 'service-cybersecurity',
      },
      {
        title: 'Compliance',
        slug: 'compliance',
        points: ['GDPR, HIPAA, ISO, PCI-DSS'],
        imageId: 'service-compliance',
      },
    ],
  },
  {
    category: 'Digital Growth Services',
    icon: AreaChart,
    items: [
      {
        title: 'Digital Marketing & Social Media',
        slug: 'digital-marketing-social-media',
        points: [
          'SEO (Search Engine Optimization)',
          'SEM (Google Ads, PPC campaigns)',
          'Social media marketing (Facebook, Instagram, LinkedIn, etc.)',
          'Email marketing & automation',
          'Content marketing & blogging',
          'Influencer & affiliate marketing',
        ],
        imageId: 'service-digital-marketing',
      },
      {
        title: 'Branding & Design',
        slug: 'branding-design',
        points: [
          'Logo & brand identity design',
          'UI/UX design',
          'Graphic design & motion graphics',
          'Video editing & marketing materials',
        ],
        imageId: 'service-ui-ux',
      },
    ],
  },
  {
    category: 'Consulting & Support',
    icon: Briefcase,
    items: [
      {
        title: 'IT Consulting',
        slug: 'it-consulting',
        points: [
          'Digital transformation strategy',
          'Business process automation',
          'Technology roadmaps',
          'Cloud & data strategy consulting',
          'IT audits & compliance checks',
        ],
        imageId: 'service-consulting',
      },
      {
        title: 'IT Support & Maintenance',
        slug: 'it-support-maintenance',
        points: [
          'Remote & onsite support',
          'Network monitoring & troubleshooting',
          'Software updates & patch management',
          'Backup & disaster recovery',
          '24/7 helpdesk support',
        ],
        imageId: 'service-maintenance',
      },
    ],
  },
  {
    category: 'Data & Analytics',
    icon: Database,
    items: [
      {
        title: 'Data Services',
        slug: 'data-services',
        points: [
          'Big Data processing',
          'Business Intelligence (BI) solutions',
          'Predictive analytics',
          'Data warehousing',
          'Data visualization (Power BI, Tableau, etc.)',
        ],
        imageId: 'service-data-analytics',
      },
      {
        title: 'AI & Machine Learning',
        slug: 'ai-machine-learning',
        points: [
          'Chatbots & virtual assistants',
          'Predictive modeling',
          'Natural Language Processing (NLP)',
          'Computer vision solutions',
        ],
        imageId: 'service-ai-ml',
      },
    ],
  },
];


export const teamMembers = [
  {
    name: 'Dhinesh Ram',
    role: 'Founder & CEO',
    bio: 'Dhinesh has led the company from its inception, guiding it through two years of rapid growth with a focus on innovation and client success.',
    imageId: 'team-1',
  },
];

export const portfolioItems = [
  {
    title: 'Fintech Analytics Platform',
    category: 'Web Application',
    description: 'A comprehensive analytics platform for a major financial institution, providing real-time data visualization and reporting. The platform helped increase data processing speed by 300%.',
    imageId: 'portfolio-1',
    metrics: ['300% faster data processing', '99.9% uptime', '20% increase in user engagement'],
    challenges: 'Integrating multiple legacy data sources and ensuring bank-grade security were the primary challenges. Our team developed a custom data pipeline and implemented a multi-layered security architecture.'
  },
  {
    title: 'ShopSphere E-commerce Solution',
    category: 'Mobile & Web',
    description: 'A scalable e-commerce platform for a fast-growing retail brand, featuring a custom CMS and personalized shopping experiences. Resulted in a 40% increase in conversion rates.',
    imageId: 'portfolio-2',
    metrics: ['40% increase in conversion', '50% faster page loads', 'Handled 10,000+ concurrent users'],
    challenges: 'Building a recommendation engine that could scale with a rapidly growing product catalog. We leveraged machine learning models to provide highly relevant product suggestions.'
  },
  {
    title: 'HealthTrack Patient Portal',
    category: 'Enterprise Software',
    description: 'A HIPAA-compliant patient portal for a network of hospitals, improving patient-doctor communication and access to medical records. Reduced administrative workload by 25%.',
    imageId: 'portfolio-3',
    metrics: ['25% reduction in admin tasks', 'Full HIPAA compliance', 'Improved patient satisfaction score by 15 points'],
    challenges: 'Ensuring strict adherence to HIPAA regulations while maintaining a user-friendly interface for patients of all ages and technical abilities. Extensive user testing and accessibility audits were key.'
  },
  {
    title: 'Martech Campaign Optimizer',
    category: 'AI & Machine Learning',
    description: 'An AI-powered tool that analyzes marketing campaign data to provide actionable insights and automated budget allocation, increasing ROI by 35%.',
    imageId: 'portfolio-4',
    metrics: ['35% average increase in campaign ROI', 'Automated 80% of manual reporting tasks', 'Processed terabytes of data daily'],
    challenges: 'Developing machine learning models that could accurately predict campaign performance across diverse channels with fluctuating market conditions.'
  },
  {
    title: 'Streamify Media Platform',
    category: 'Cloud & DevOps',
    description: 'A global video streaming service built on a serverless architecture with a custom CDN to deliver low-latency content to millions of users.',
    imageId: 'portfolio-5',
    metrics: ['Sub-second video start time', 'Scaled to 5 million concurrent viewers', 'Reduced infrastructure costs by 40%'],
    challenges: 'Architecting a cost-effective and highly scalable infrastructure that could handle massive, unpredictable spikes in traffic during live events.'
  },
  {
    title: 'SecureAuth IAM Solution',
    category: 'Cybersecurity',
    description: 'An enterprise-grade Identity and Access Management (IAM) solution providing single sign-on (SSO), multi-factor authentication (MFA), and granular access control.',
    imageId: 'portfolio-6',
    metrics: ['Unified authentication for 50+ applications', 'Blocked 99.9% of credential stuffing attacks', 'Reduced helpdesk password reset tickets by 60%'],
    challenges: 'Integrating with a wide array of legacy and modern applications, each with unique authentication protocols, while ensuring a seamless user experience.'
  }
];

export const testimonials = [
  {
    name: 'Sarah L.',
    company: 'CEO, Innovate Inc.',
    quote: 'Zechsoft transformed our operations with their custom enterprise software. Their team was professional, responsive, and truly understood our needs. We couldn\'t be happier with the result.',
    imageId: 'testimonial-1',
  },
  {
    name: 'Michael B.',
    company: 'Founder, NextGen Retail',
    quote: 'The mobile app they developed for us has been a game-changer. Our user engagement is through the roof, and the feedback has been overwhelmingly positive. A truly top-tier development partner.',
    imageId: 'testimonial-2',
  },
  {
    name: 'Emily C.',
    company: 'Marketing Director, HealthCo',
    quote: 'Working with Zechsoft on our UI/UX redesign was a fantastic experience. They took the time to understand our users and delivered a design that is both beautiful and incredibly intuitive. Our conversion rates have skyrocketed.',
    imageId: 'testimonial-3',
  },
];
export const coreValues = [
  {
    title: 'Quality',
    description: 'ISO certified quality systems',
  },
  {
    title: 'Safety',
    description: 'Zero accident policy',
  },
  {
    title: 'Innovation',
    description: 'Continuous process improvement',
  },
  {
    title: 'Integrity',
    description: 'Transparent business practices',
  },
  {
    title: 'Reliability',
    description: 'On-time project delivery',
  },
  {
    title: 'Client Focus',
    description: 'Tailored solutions',
  },
];
