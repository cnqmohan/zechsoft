
import { Code, Cloud, Lock, LineChart, Briefcase, Database, type LucideIcon, Smartphone, Users, BrainCircuit, CheckCircle, CloudCog, AreaChart, ShieldCheck } from 'lucide-react';
import type { ReactElement, ElementType } from 'react';

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
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

export const blogPosts = [
    {
        slug: 'the-rise-of-ai-in-software-development',
        title: 'The Rise of AI in Software Development',
        author: 'Alex Johnson',
        date: '2024-05-15',
        imageId: 'blog-1',
        excerpt: 'Artificial Intelligence is no longer a futuristic concept; it\'s a transformative force in the software development lifecycle. From AI-powered coding assistants to automated testing, we explore how AI is revolutionizing the way we build software.',
        content: `
<p>Artificial Intelligence (AI) is rapidly evolving from a niche technology into a fundamental component of modern software development. Its integration into the development lifecycle is not just an incremental improvement but a paradigm shift, promising to enhance productivity, improve code quality, and accelerate innovation. In this article, we delve into the various ways AI is making its mark on the world of software engineering.</p>

<h3>AI-Powered Code Completion and Generation</h3>
<p>One of the most immediate impacts of AI is in the realm of code generation. Tools like GitHub Copilot, powered by OpenAI\'s Codex, have become invaluable assistants to developers. These tools go far beyond traditional autocomplete by suggesting entire blocks of code, functions, and even complex algorithms based on the context of the current file and natural language comments. This not only speeds up the coding process but also helps developers learn new patterns and libraries. By handling boilerplate and repetitive code, AI allows engineers to focus on higher-level problem-solving and architectural design.</p>

<h3>Automated Testing and Debugging</h3>
<p>Testing is a critical but often time-consuming part of software development. AI is stepping in to automate and optimize this process. AI-driven tools can automatically generate test cases that cover a wide range of scenarios, including edge cases that human developers might overlook. Furthermore, intelligent debugging systems can analyze code, identify the root cause of bugs, and even suggest fixes. This significantly reduces the time spent on debugging, allowing teams to deliver more robust software faster.</p>

<h3>Smarter Project Management</h3>
<p>AI is also transforming project management. Predictive analytics models can analyze historical project data to estimate timelines more accurately, identify potential risks, and allocate resources more effectively. AI-powered tools can help streamline workflows by automating task assignments, tracking progress, and facilitating communication within teams. This data-driven approach to project management leads to more predictable outcomes and more efficient development cycles.</p>

<h3>The Future is Collaborative</h3>
<p>The role of AI in software development is not to replace human developers but to augment their abilities. The future is a collaborative one, where developers and AI work together, each leveraging their unique strengths. Developers bring creativity, critical thinking, and a deep understanding of user needs, while AI provides speed, data-processing power, and the ability to handle complex, repetitive tasks.</p>

<p>As AI technology continues to mature, its integration into software development will only deepen. Embracing these tools is no longer optional for companies that want to stay competitive. At Zechsoft, we are committed to leveraging the power of AI to build better, smarter, and more efficient software for our clients.</p>
        `,
    },
    {
        slug: 'choosing-the-right-cloud-strategy',
        title: 'On-Premise vs. Cloud: Choosing the Right Strategy',
        author: 'Maria Garcia',
        date: '2024-04-22',
        imageId: 'blog-2',
        excerpt: 'The debate between on-premise and cloud infrastructure is a critical one for any business. This post breaks down the pros and cons of each, helping you decide on the best strategy for your enterprise.',
        content: `
<p>One of the most fundamental decisions a modern business has to make is where to host its digital infrastructure. The choice between maintaining on-premise servers and migrating to the cloud has significant implications for cost, scalability, security, and performance. There is no one-size-fits-all answer; the right strategy depends on your specific business needs, regulatory requirements, and long-term goals.</p>

<h3>Understanding On-Premise Infrastructure</h3>
<p>On-premise, or "on-prem," refers to hosting your software and data on servers that you physically own and maintain within your organization. This traditional model offers complete control over your hardware and software stack.</p>
<ul>
    <li><strong>Pros:</strong>
        <ul>
            <li><strong>Control:</strong> You have full control over your hardware, software, and security configurations.</li>
            <li><strong>Security:</strong> For highly sensitive data, keeping it within your own physical network can provide a greater sense of security and control over compliance.</li>
            <li><strong>Performance:</strong> For applications requiring extremely low latency, having servers on-site can be advantageous.</li>
        </ul>
    </li>
    <li><strong>Cons:</strong>
        <ul>
            <li><strong>Cost:</strong> Requires significant upfront capital expenditure for hardware, plus ongoing costs for maintenance, power, and real estate.</li>
            <li><strong>Scalability:</strong> Scaling up requires purchasing and provisioning new hardware, which can be slow and expensive. Scaling down is often not feasible.</li>
            <li><strong>Maintenance:</strong> Your IT team is responsible for all maintenance, updates, and troubleshooting.</li>
        </ul>
    </li>
</ul>

<h3>The Power of the Cloud</h3>
<p>Cloud computing involves renting computing services—including servers, storage, databases, and software—from a cloud provider like Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP).</p>
<ul>
    <li><strong>Pros:</strong>
        <ul>
            <li><strong>Scalability:</strong> The cloud offers incredible elasticity. You can scale resources up or down in minutes based on demand.</li>
            <li><strong>Cost-Effectiveness:</strong> The pay-as-you-go model eliminates large upfront hardware costs and reduces ongoing operational expenses.</li>
            <li><strong>Reliability & Availability:</strong> Cloud providers offer high levels of uptime and data redundancy across multiple geographic locations.</li>
        </ul>
    </li>
    <li><strong>Cons:</strong>
        <ul>
            <li><strong>Less Control:</strong> You are reliant on the provider\'s infrastructure and have less control over the underlying hardware.</li>
            <li><strong>Ongoing Costs:</strong> While upfront costs are lower, monthly subscription fees can add up, especially if resources are not managed properly.</li>
            <li><strong>Security Concerns:</strong> While cloud providers have robust security, data breaches are still a concern, and you are responsible for configuring your security settings correctly.</li>
        </ul>
    </li>
</ul>

<h3>Hybrid Cloud: The Best of Both Worlds?</h3>
<p>A hybrid cloud strategy combines on-premise infrastructure with a public cloud, allowing data and applications to be shared between them. This approach offers greater flexibility. Businesses can keep sensitive data on-premise while leveraging the public cloud for scalable, less-sensitive workloads. This model can be complex to manage but provides a powerful balance of control and scalability.</p>

<h3>Making the Decision</h3>
<p>Choosing the right strategy requires a thorough assessment of your needs. Consider the following:</p>
<ul>
    <li><strong>Regulatory & Compliance Needs:</strong> Does your industry require data to be stored in a specific geographic location or under your direct control?</li>
    <li><strong>Scalability Demands:</strong> Does your application experience variable traffic that would benefit from elastic scaling?</li>
    <li><strong>Budget:</strong> Do you prefer a capital expenditure (CapEx) model or an operational expenditure (OpEx) model?</li>
    <li><strong>IT Resources:</strong> Do you have the in-house expertise to manage and maintain your own servers?</li>
</ul>
<p>At Zechsoft, we help our clients navigate these complex decisions, designing and implementing infrastructure strategies that align with their business objectives and set them up for future growth.</p>
        `,
    },
    {
        slug: 'the-importance-of-proactive-cybersecurity',
        title: 'Beyond the Firewall: The Importance of Proactive Cybersecurity',
        author: 'David Lee',
        date: '2024-03-10',
        imageId: 'blog-3',
        excerpt: 'In today\'s digital landscape, a reactive approach to cybersecurity is a recipe for disaster. We discuss the importance of a proactive security posture, from threat hunting to continuous employee training.',
        content: `
<p>In an era of increasingly sophisticated cyber threats, the old model of cybersecurity—a strong firewall and antivirus software—is no longer sufficient. Attackers are constantly finding new ways to breach defenses, and businesses can no longer afford to simply react to attacks after they happen. A proactive cybersecurity posture is essential for protecting sensitive data, maintaining customer trust, and ensuring business continuity.</p>

<h3>From Reactive to Proactive</h3>
<p>A reactive security approach focuses on responding to incidents after they occur. While a good incident response plan is crucial, relying on it alone means you are always one step behind the attackers. A proactive approach, on the other hand, involves actively seeking out and mitigating potential threats before they can be exploited.</p>

<h3>Key Pillars of Proactive Cybersecurity</h3>
<ol>
    <li><strong>Threat Hunting:</strong> This is the practice of actively searching for signs of malicious activity within your network, rather than waiting for an alert. Threat hunters assume that a breach has already occurred or is imminent and look for subtle indicators of compromise (IoCs) that automated systems might miss.</li>
    <li><strong>Vulnerability Management:</strong> Proactive security involves continuous scanning of your systems and applications to identify vulnerabilities. Once identified, these vulnerabilities must be prioritized and patched promptly to close potential entry points for attackers.</li>
    <li><strong>Security Awareness Training:</strong> Your employees are often the first line of defense, but they can also be the weakest link. Regular, engaging training on topics like phishing, social engineering, and password hygiene can turn your workforce into a powerful security asset.</li>
    <li><strong>Penetration Testing:</strong> Also known as "ethical hacking," penetration testing involves simulating a real-world attack on your systems to identify weaknesses. Regular pen tests provide invaluable insights into your security posture and help you prioritize your defense efforts.</li>
</ol>

<h3>Developing a Security-First Culture</h3>
<p>Technology is only one part of the equation. Building a truly proactive security posture requires fostering a security-first culture throughout the organization. This means that security is not just the IT department\'s responsibility but a shared priority for everyone. From developers writing secure code to executives championing security initiatives, every member of the team has a role to play.</p>

<h3>The Cost of Inaction</h3>
<p>The cost of a data breach goes far beyond financial penalties. It includes reputational damage, loss of customer trust, and potential legal liabilities. Investing in proactive cybersecurity is not just a cost center; it\'s an investment in the long-term health and resilience of your business.</p>

<p>At Zechsoft, we embed security into every stage of the software development lifecycle. By adopting a proactive, defense-in-depth strategy, we help our clients build applications that are not only functional and efficient but also resilient against the ever-evolving landscape of cyber threats.</p>
        `,
    },
];

    

    