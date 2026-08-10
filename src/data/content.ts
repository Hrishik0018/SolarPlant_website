import {
  SunMedium, Wind, Zap, Flame, Leaf, TrendingUp,
  Building2, Plug, Recycle, Globe2, Cpu, ShieldCheck,
  Droplets, Users, Scale, ClipboardCheck, FileText,
  Layers, Sparkles, BarChart3, Handshake, HeartHandshake,
  Map as MapIcon, HardHat, Monitor, PenTool, Repeat,
  BatteryCharging, FlaskConical,
  type LucideIcon,
} from 'lucide-react';

export const LOGO_PATH = '/assets/images/IMG_2441.PNG';

// ── Navigation ────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  to: string;
  children?: { label: string; to: string; desc?: string }[];
}

export const navItems: NavLink[] = [
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Our Story',          to: '/about',          desc: 'Building the future of sustainable energy' },
      { label: 'Who We Are',         to: '/about#who-we-are', desc: 'Transforming energy, advancing sustainability' },
      { label: 'Philosophy',         to: '/about#philosophy', desc: 'Creating sustainable value through innovation' },
      { label: 'Leadership & Governance', to: '/about#leadership', desc: 'Leading with integrity, governing with purpose' },
    ],
  },
  {
    label: 'Businesses',
    to: '/businesses/renewables',
    children: [
      { label: 'Anandion Renewables',        to: '/businesses/renewables',  desc: 'Utility-scale solar, wind, hybrid & storage' },
      { label: 'Anandion Carbon Markets',     to: '/businesses/carbon',      desc: 'Carbon credits, offsets & trading' },
      { label: 'Anandion Climate Solutions',  to: '/businesses/climate',     desc: 'ESG, sustainability & decarbonisation' },
      { label: 'Anandion Hydrogen',           to: '/businesses/hydrogen',    desc: 'Green hydrogen production & infrastructure' },
      { label: 'Anandion EV Infrastructure',  to: '/businesses/ev',          desc: 'Charging networks & smart mobility' },
      { label: 'Anandion Energy Trading',     to: '/businesses/trading',     desc: 'Power trading & market solutions' },
      { label: 'Anandion Climate Capital',    to: '/businesses/capital',     desc: 'Climate investment & finance' },
    ],
  },
  {
    label: 'Sustainability',
    to: '/sustainability',
    children: [
      { label: 'Sustainability & ESG',  to: '/sustainability',  desc: 'Creating lasting value for people & planet' },
      { label: 'Corporate Governance',   to: '/governance',       desc: 'Leading with integrity & trust' },
      { label: 'Investors',              to: '/investors',        desc: 'Investing in the future of sustainable energy' },
    ],
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Media',
    to: '/media',
  },
  {
    label: 'Careers',
    to: '/careers',
  },
];

// ── Business Verticals (7 official) ───────────────────────────────
export interface BusinessVertical {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  closingLine: string;
  icon: LucideIcon;
  color: string;
  accent: string;
  image: string;
  heroImage: string;
  vision: string;
  mission: string;
  overview: string;
  whyMatters?: string;
  capabilities: { heading: string; items: string[] }[];
  process: { title: string; description: string; icon: string }[];
  whyChooseUs: { title: string; description: string }[];
  sustainability?: { heading: string; items: string[] };
  innovation?: { heading: string; items: string[] };
  partnerships?: { heading: string; items: string[] };
  safety?: { heading: string; items: string[] };
}

export const businesses: BusinessVertical[] = [
  // 1. Renewables
  {
    slug: 'renewables',
    name: 'Anandion Renewables',
    fullName: 'Anandion Renewables',
    tagline: 'Empowering the World Through Clean Energy',
    closingLine: 'Powering the Transition. Building the Future.',
    icon: SunMedium,
    color: 'from-amber-400 to-emerald-500',
    accent: '#f59e0b',
    image: 'https://images.pexels.com/photos/3738092/pexels-photo-3738092.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become a globally trusted renewable energy company delivering innovative, reliable and sustainable power solutions that contribute to energy security, climate resilience and inclusive economic growth.',
    mission: 'To develop, finance, construct, own and operate renewable energy assets that generate long-term environmental, social and economic value. By combining cutting-edge technologies with responsible project development, we aim to provide clean energy solutions that support governments, businesses and communities in achieving their sustainability and net-zero ambitions.',
    overview: 'Renewable energy is no longer an alternative—it is the foundation of the global energy transition. As nations strive to strengthen energy security, reduce greenhouse gas emissions and meet ambitious climate commitments, renewable energy has become the fastest-growing source of electricity generation worldwide. At Anandion Renewables, we believe that access to reliable, affordable and sustainable energy is fundamental to economic development and societal progress. Our mission is to develop world-class renewable energy solutions that accelerate the transition to a low-carbon economy while creating long-term value for customers, investors and communities. As the renewable energy division of Anandion Global, Anandion Renewables is committed to delivering integrated clean energy infrastructure that combines engineering excellence, technological innovation and responsible environmental stewardship. From utility-scale renewable power generation to distributed energy systems and advanced energy storage, we develop solutions that enable a cleaner, smarter and more resilient energy future.',
    capabilities: [
      {
        heading: 'Solar Energy',
        items: [
          'Utility-scale solar parks',
          'Ground-mounted photovoltaic systems',
          'Floating solar installations',
          'Rooftop solar solutions',
          'Commercial and industrial solar projects',
          'Captive power plants',
          'Community solar initiatives',
          'Agrivoltaic systems',
        ],
      },
      {
        heading: 'Wind Energy',
        items: [
          'Onshore wind farm development',
          'Offshore wind project advisory',
          'Wind resource assessment',
          'Site selection and optimization',
          'Turbine technology evaluation',
          'Grid integration',
          'Asset management',
          'Operations and maintenance',
        ],
      },
      {
        heading: 'Hybrid Renewable Energy Systems',
        items: [
          'Solar power',
          'Wind energy',
          'Battery energy storage',
          'Smart energy management systems',
          'Grid-connected infrastructure',
          'Microgrids',
        ],
      },
      {
        heading: 'Battery Energy Storage Systems (BESS)',
        items: [
          'Grid stabilization',
          'Peak load management',
          'Renewable energy integration',
          'Backup power',
          'Frequency regulation',
          'Energy arbitrage',
          'Industrial energy optimization',
        ],
      },
      {
        heading: 'Distributed Energy Solutions',
        items: [
          'Commercial buildings',
          'Manufacturing facilities',
          'Educational institutions',
          'Healthcare facilities',
          'Hospitality',
          'Residential communities',
          'Industrial parks',
        ],
      },
      {
        heading: 'Comprehensive Project Development',
        items: [
          'Project Identification',
          'Feasibility Studies',
          'Engineering & Design',
          'Procurement',
          'Construction Management',
          'Commissioning',
          'Operations & Maintenance',
        ],
      },
    ],
    process: [
      { title: 'Project Identification', description: 'We evaluate resource availability, market demand, regulatory environments and investment opportunities to identify high-potential projects.', icon: 'map' },
      { title: 'Feasibility Studies', description: 'Comprehensive technical, environmental, financial and commercial assessments ensure informed investment decisions.', icon: 'file' },
      { title: 'Engineering & Design', description: 'Our engineering teams develop optimized designs that maximize energy production while ensuring operational efficiency and regulatory compliance.', icon: 'design' },
      { title: 'Procurement', description: 'We work with globally recognized manufacturers and suppliers to procure reliable, high-quality equipment that meets international standards.', icon: 'layers' },
      { title: 'Construction Management', description: 'Projects are delivered with strong emphasis on quality, safety, environmental responsibility and schedule adherence.', icon: 'build' },
      { title: 'Commissioning', description: 'Rigorous testing and performance verification ensure projects operate safely and efficiently from day one.', icon: 'monitor' },
      { title: 'Operations & Maintenance', description: 'Long-term asset management, predictive maintenance and digital monitoring maximize performance throughout the operational life of each project.', icon: 'monitor' },
    ],
    whyChooseUs: [
      { title: 'Integrated renewable energy capabilities', description: 'From project identification through operations, our end-to-end platform eliminates the need for multiple partners.' },
      { title: 'Experienced multidisciplinary teams', description: 'Engineering, finance, sustainability and operations professionals working together to deliver world-class projects.' },
      { title: 'Commitment to innovation', description: 'We continuously evaluate and adopt emerging technologies including AI, digital twins, drone-based inspections and IoT-enabled monitoring.' },
      { title: 'Safety-first culture', description: 'We strive to create workplaces where every employee, contractor and stakeholder returns home safely every day.' },
      { title: 'Financial discipline and responsible investment', description: 'Every investment is evaluated not only on financial viability but also on its ESG impact.' },
      { title: 'Global outlook with local expertise', description: 'We combine international best practices with local knowledge to develop regionally responsive solutions.' },
    ],
    sustainability: {
      heading: 'Sustainability by Design',
      items: [
        'Reducing greenhouse gas emissions',
        'Protecting biodiversity',
        'Responsible land use planning',
        'Efficient water management',
        'Sustainable construction practices',
        'Circular economy principles',
        'Community engagement',
        'Environmental monitoring throughout project life',
      ],
    },
    innovation: {
      heading: 'Technology and Innovation',
      items: [
        'Artificial Intelligence for predictive maintenance',
        'Digital twins for asset optimization',
        'Drone-based inspections',
        'IoT-enabled monitoring systems',
        'Advanced weather forecasting',
        'Smart grid integration',
        'High-efficiency photovoltaic technologies',
        'Next-generation battery storage',
        'Robotics for inspection and maintenance',
      ],
    },
    safety: {
      heading: 'Safety and Operational Excellence',
      items: [
        'Leadership accountability',
        'Continuous training',
        'Hazard identification',
        'Risk management',
        'Incident prevention',
        'Emergency preparedness',
        'Continuous improvement',
      ],
    },
  },

  // 2. Carbon Markets
  {
    slug: 'carbon',
    name: 'Anandion Carbon Markets',
    fullName: 'Anandion Carbon Markets',
    tagline: 'Accelerating Climate Action Through Carbon Finance',
    closingLine: 'Transforming Carbon into Climate Action. Creating Value Beyond Emissions.',
    icon: Leaf,
    color: 'from-emerald-400 to-navy-600',
    accent: '#2e8b57',
    image: 'https://images.pexels.com/photos/35054635/pexels-photo-35054635.png?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/35054635/pexels-photo-35054635.png?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become one of the world\'s most trusted carbon market and climate finance platforms, enabling organizations to accelerate decarbonisation while creating measurable environmental, economic and social value.',
    mission: 'To develop transparent, credible and high-integrity carbon market solutions that empower governments, businesses and communities to achieve their climate ambitions. By combining scientific expertise, regulatory knowledge and innovative financial solutions, we help our partners transform sustainability commitments into measurable outcomes.',
    overview: 'Climate change has become one of the defining challenges of the twenty-first century. Governments, industries and financial institutions across the world are committing to ambitious decarbonisation targets, while investors increasingly recognise sustainability as a critical driver of long-term value. As the global economy transitions towards net-zero emissions, carbon markets have emerged as one of the most effective mechanisms for reducing greenhouse gas emissions while promoting sustainable economic development. At Anandion Carbon Markets, we are committed to transforming climate responsibility into measurable environmental and economic value. As the carbon markets and climate finance division of Anandion Global, we provide comprehensive solutions that enable businesses, governments, project developers and investors to participate confidently in domestic and international carbon markets. Our expertise spans carbon credit development, carbon asset management, emissions trading, climate finance, sustainability advisory and net-zero strategies. We believe that well-functioning carbon markets are essential to accelerating global climate action by directing capital towards projects that reduce emissions, protect ecosystems and create positive social impact.',
    whyMatters: 'The transition to a low-carbon economy requires unprecedented levels of investment in clean technologies, renewable energy, sustainable infrastructure and ecosystem restoration. Carbon markets play a vital role by assigning economic value to verified greenhouse gas emission reductions and removals. They create financial incentives for organizations to reduce emissions while supporting projects that contribute to sustainable development.',
    capabilities: [
      {
        heading: 'Carbon Credit Project Development',
        items: [
          'Renewable Energy Carbon Projects',
          'Energy Efficiency Projects',
          'Green Hydrogen Projects',
          'Sustainable Agriculture Initiatives',
          'Waste Management and Methane Capture',
          'Bioenergy Projects',
          'Afforestation and Reforestation',
          'Blue Carbon Initiatives',
          'Industrial Emissions Reduction',
          'Nature-Based Climate Solutions',
        ],
      },
      {
        heading: 'Carbon Asset Management',
        items: [
          'Carbon asset valuation',
          'Portfolio optimization',
          'Credit issuance management',
          'Registry administration',
          'Transaction advisory',
          'Retirement strategies',
          'Compliance support',
          'Risk management',
        ],
      },
      {
        heading: 'Carbon Trading',
        items: [
          'Carbon credit procurement',
          'Carbon credit sales',
          'Trading strategy',
          'Market intelligence',
          'Portfolio diversification',
          'Price analysis',
          'Transaction execution',
          'Counterparty evaluation',
        ],
      },
      {
        heading: 'Climate Finance',
        items: [
          'Green finance advisory',
          'Sustainable investment strategies',
          'Climate project financing',
          'Carbon revenue modeling',
          'ESG-linked financing',
          'Green bonds',
          'Blended finance',
          'Impact investment advisory',
        ],
      },
      {
        heading: 'Net Zero Advisory',
        items: [
          'Carbon footprint assessments',
          'Emissions inventories',
          'Scope 1, 2 and 3 analysis',
          'Science-based target development',
          'Decarbonisation roadmaps',
          'Residual emissions management',
          'Carbon offset strategies',
          'Net-zero implementation planning',
        ],
      },
      {
        heading: 'ESG and Climate Strategy',
        items: [
          'ESG framework development',
          'Climate risk assessments',
          'Sustainability reporting',
          'Carbon disclosure',
          'Regulatory readiness',
          'Investor communications',
          'Stakeholder engagement',
          'Climate governance',
        ],
      },
    ],
    process: [
      { title: 'Project Development', description: 'Scientific expertise, robust methodologies and rigorous verification from concept development to credit issuance.', icon: 'file' },
      { title: 'Verification', description: 'Independent third-party validation ensuring every credit represents genuine, measurable climate impact.', icon: 'shield' },
      { title: 'Asset Management', description: 'Professional management of carbon credits throughout their lifecycle — valuation, optimization, and retirement.', icon: 'chart' },
      { title: 'Trading', description: 'Transparent, informed participation in compliance and voluntary carbon markets with due diligence on every transaction.', icon: 'trade' },
    ],
    whyChooseUs: [
      { title: 'Comprehensive carbon market expertise', description: 'End-to-end capabilities from project development through trading and retirement.' },
      { title: 'High-integrity project development', description: 'Every credit must demonstrate additionality, permanence, transparency and independent verification.' },
      { title: 'Advanced climate analytics', description: 'AI-powered emissions analytics, digital MRV and satellite-based project monitoring.' },
      { title: 'Global regulatory understanding', description: 'Deep knowledge of domestic and international carbon market regulations and frameworks.' },
      { title: 'Commitment to nature-based solutions', description: 'Supporting projects that protect, restore and sustainably manage forests, wetlands and biodiversity-rich landscapes.' },
      { title: 'Transparent governance', description: 'Integrity is our highest priority — we maintain zero tolerance for low-quality or questionable credits.' },
    ],
    sustainability: {
      heading: 'Integrity Above Everything',
      items: [
        'Additionality',
        'Permanence',
        'Transparency',
        'Independent verification',
        'Robust monitoring',
        'Environmental integrity',
        'Social responsibility',
        'Regulatory compliance',
      ],
    },
    innovation: {
      heading: 'Technology and Digital Innovation',
      items: [
        'AI-powered emissions analytics',
        'Digital MRV (Monitoring, Reporting and Verification)',
        'Satellite-based project monitoring',
        'Blockchain-enabled carbon registries',
        'Carbon intelligence dashboards',
        'Digital portfolio management',
        'Automated compliance monitoring',
        'Climate data analytics',
      ],
    },
  },

  // 3. Climate Solutions
  {
    slug: 'climate',
    name: 'Anandion Climate Solutions',
    fullName: 'Anandion Climate Solutions',
    tagline: 'Enabling Sustainable Transformation for a Changing World',
    closingLine: 'Enabling Sustainable Transformation.',
    icon: Globe2,
    color: 'from-sky-400 to-emerald-600',
    accent: '#0ea5e9',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become one of the world\'s leading providers of integrated climate and sustainability solutions, empowering organizations to create resilient businesses while contributing to global environmental and social progress.',
    mission: 'To help organizations integrate sustainability into strategy, operations and decision-making by delivering innovative climate solutions that improve environmental performance, strengthen governance and create long-term stakeholder value.',
    overview: 'The world is entering a new era where sustainability is no longer viewed as a corporate responsibility alone—it has become a strategic business imperative. Governments are introducing stronger environmental regulations, investors are integrating Environmental, Social and Governance (ESG) considerations into investment decisions, customers are demanding responsible business practices, and organizations across every industry are redefining their strategies to remain competitive in a rapidly evolving global economy. At Anandion Climate Solutions, we help organizations transform these challenges into opportunities. As the sustainability and climate advisory division of Anandion Global, we provide integrated consulting, advisory and implementation services that enable businesses, governments, financial institutions and communities to accelerate their transition toward a resilient, low-carbon and sustainable future. Our expertise combines environmental science, engineering, policy, finance and digital innovation to develop practical, measurable and future-ready climate solutions that generate lasting environmental, social and economic value. We believe sustainability is not merely about reducing environmental impact—it is about creating stronger businesses, healthier communities and a more prosperous future.',
    capabilities: [
      {
        heading: 'ESG Strategy & Transformation',
        items: [
          'ESG strategy development',
          'ESG maturity assessments',
          'Materiality assessments',
          'ESG governance frameworks',
          'Board advisory',
          'ESG target setting',
          'ESG implementation roadmaps',
          'Stakeholder engagement',
          'ESG performance measurement',
        ],
      },
      {
        heading: 'Sustainability Reporting',
        items: [
          'Global Reporting Initiative (GRI)',
          'International Sustainability Standards Board (ISSB)',
          'Task Force on Climate-related Financial Disclosures (TCFD)',
          'Taskforce on Nature-related Financial Disclosures (TNFD)',
          'Sustainability Accounting Standards Board (SASB)',
          'Integrated Reporting principles',
          'National regulatory disclosure requirements',
        ],
      },
      {
        heading: 'Climate Risk & Resilience',
        items: [
          'Climate risk assessments',
          'Scenario analysis',
          'Transition planning',
          'Climate resilience strategies',
          'Supply chain risk evaluation',
          'Business continuity planning',
          'Adaptation strategies',
          'Infrastructure resilience',
        ],
      },
      {
        heading: 'Decarbonization Strategy',
        items: [
          'Greenhouse gas inventories',
          'Scope 1, Scope 2 and Scope 3 emissions analysis',
          'Energy transition planning',
          'Renewable energy integration',
          'Energy efficiency programs',
          'Low-carbon technology assessment',
          'Emissions reduction roadmaps',
          'Carbon management strategies',
        ],
      },
      {
        heading: 'Circular Economy Solutions',
        items: [
          'Resource efficiency assessments',
          'Waste minimization',
          'Circular product design',
          'Material recovery strategies',
          'Recycling systems',
          'Industrial symbiosis',
          'Sustainable procurement',
          'Lifecycle analysis',
        ],
      },
      {
        heading: 'Sustainable Infrastructure Advisory',
        items: [
          'Sustainable infrastructure planning',
          'Green building strategies',
          'Renewable energy integration',
          'Smart city solutions',
          'Climate-resilient infrastructure',
          'Environmental impact assessments',
          'Sustainable transportation planning',
          'Infrastructure decarbonization',
        ],
      },
      {
        heading: 'Nature-Based Solutions',
        items: [
          'Forest conservation',
          'Biodiversity management',
          'Ecosystem restoration',
          'Watershed protection',
          'Natural capital assessment',
          'Sustainable land management',
          'Blue carbon initiatives',
          'Landscape restoration',
        ],
      },
    ],
    process: [
      { title: 'Assessment', description: 'We begin with a comprehensive assessment of your organization\'s current sustainability maturity, risks and opportunities.', icon: 'chart' },
      { title: 'Strategy Design', description: 'We develop tailored strategies that align sustainability objectives with long-term business growth.', icon: 'design' },
      { title: 'Implementation', description: 'We support execution across every business function, ensuring sustainability becomes embedded across the organization.', icon: 'build' },
      { title: 'Measurement', description: 'We track outcomes through robust ESG data management and internationally recognized reporting frameworks.', icon: 'monitor' },
    ],
    whyChooseUs: [
      { title: 'Integrated expertise', description: 'Environmental science, engineering, policy, finance and digital innovation combined in one team.' },
      { title: 'Practical, measurable outcomes', description: 'We deliver future-ready solutions that generate lasting value — not just reports.' },
      { title: 'Internationally recognized frameworks', description: 'Deep expertise in GRI, ISSB, TCFD, TNFD, SASB and national regulatory requirements.' },
      { title: 'Digital sustainability innovation', description: 'ESG data platforms, AI-driven analytics and carbon accounting software.' },
      { title: 'Global perspective with local knowledge', description: 'Solutions that are globally relevant and regionally responsive.' },
      { title: 'Purpose-driven approach', description: 'We believe sustainability creates stronger businesses, healthier communities and a more prosperous future.' },
    ],
    innovation: {
      heading: 'Digital Sustainability',
      items: [
        'ESG data platforms',
        'AI-driven sustainability analytics',
        'Carbon accounting software',
        'Environmental monitoring systems',
        'Digital dashboards',
        'Smart sensors',
        'Satellite-based monitoring',
      ],
    },
  },

  // 4. Hydrogen
  {
    slug: 'hydrogen',
    name: 'Anandion Hydrogen',
    fullName: 'Anandion Hydrogen',
    tagline: 'Powering the Hydrogen Economy',
    closingLine: 'Powering Industry. Enabling Net Zero. Fueling the Future.',
    icon: Flame,
    color: 'from-emerald-400 to-navy-600',
    accent: '#10b981',
    image: 'https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/15970028/pexels-photo-15970028.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become a globally recognized leader in green hydrogen and its derivatives by delivering innovative, reliable and sustainable hydrogen solutions that accelerate the transition to a carbon-neutral economy.',
    mission: 'To develop, finance, build and operate world-class hydrogen projects that enable industries, governments and communities to reduce carbon emissions while strengthening energy security and supporting sustainable economic development.',
    overview: 'The transition to a net-zero future requires more than renewable electricity. While solar, wind and battery storage are transforming power generation, sectors such as heavy industry, long-distance transportation, shipping, aviation and chemical manufacturing continue to face significant decarbonisation challenges. These hard-to-abate sectors demand clean energy solutions capable of delivering high energy density, operational flexibility and industrial-scale reliability. Hydrogen, particularly Green Hydrogen, has emerged as one of the most promising solutions to meet these challenges. At Anandion Hydrogen, we are committed to advancing the hydrogen economy by developing innovative, safe and commercially viable hydrogen solutions that support industrial decarbonisation, energy security and sustainable economic growth. As the hydrogen business of Anandion Global, we combine renewable energy expertise, infrastructure development, technology partnerships and climate-focused investments to create an integrated hydrogen ecosystem that contributes to the global transition towards a cleaner energy future. Our vision extends beyond producing hydrogen—we aspire to build the infrastructure, supply chains and strategic partnerships that will enable hydrogen to become a cornerstone of tomorrow\'s energy system.',
    whyMatters: 'Green hydrogen is produced using renewable electricity through water electrolysis, emits no carbon dioxide during production and can replace fossil fuels across multiple sectors. Hydrogen offers significant advantages: decarbonising steel, cement and chemical manufacturing; supporting sustainable aviation fuels and maritime fuels; fueling heavy commercial transport; providing seasonal energy storage; enhancing renewable energy integration; strengthening national energy independence; and supporting long-duration grid resilience.',
    capabilities: [
      {
        heading: 'Green Hydrogen Production',
        items: [
          'Utility-scale hydrogen plants',
          'Renewable-powered electrolysis facilities',
          'Integrated solar-hydrogen projects',
          'Wind-hydrogen integration',
          'Hybrid renewable hydrogen systems',
          'Decentralized hydrogen production',
          'Industrial hydrogen generation',
          'Off-grid hydrogen solutions',
        ],
      },
      {
        heading: 'Hydrogen Infrastructure',
        items: [
          'Hydrogen storage systems',
          'Compression facilities',
          'Distribution networks',
          'Refueling stations',
          'Pipeline infrastructure',
          'Terminal development',
          'Industrial supply systems',
          'Export logistics',
        ],
      },
      {
        heading: 'Industrial Decarbonisation',
        items: [
          'Steel Manufacturing',
          'Cement Production',
          'Refineries',
          'Chemical Industries',
          'Fertilizer Production',
          'Glass Manufacturing',
          'Mining Operations',
          'Heavy Engineering',
        ],
      },
      {
        heading: 'Hydrogen Mobility',
        items: [
          'Hydrogen fueling stations',
          'Fuel cell infrastructure',
          'Commercial vehicle applications',
          'Bus fleets',
          'Rail transportation',
          'Maritime applications',
          'Aviation support infrastructure',
          'Heavy logistics',
        ],
      },
      {
        heading: 'Green Ammonia & Hydrogen Derivatives',
        items: [
          'Green Ammonia',
          'Green Methanol',
          'Synthetic Aviation Fuels',
          'Hydrogen Carriers',
          'Industrial Feedstocks',
          'Export-Oriented Hydrogen Products',
        ],
      },
    ],
    process: [
      { title: 'Resource Assessment', description: 'Renewable resource mapping and co-location analysis for optimal hydrogen production economics.', icon: 'map' },
      { title: 'Plant Design', description: 'Electrolyzer sizing, balance of plant, storage, and offtake integration engineering.', icon: 'design' },
      { title: 'Construction', description: 'Modular electrolyzer installation, compression systems, and pipeline connections.', icon: 'build' },
      { title: 'Operations', description: 'Continuous hydrogen production, quality assurance, safety management and logistics.', icon: 'monitor' },
    ],
    whyChooseUs: [
      { title: 'Comprehensive hydrogen project development', description: 'From renewable power generation to hydrogen production, storage, transportation and end-use applications.' },
      { title: 'Renewable energy integration', description: 'Our parent company\'s renewable energy expertise ensures optimal, low-cost power supply for electrolysis.' },
      { title: 'Infrastructure development capabilities', description: 'We build the storage, distribution and refueling infrastructure needed for a functioning hydrogen economy.' },
      { title: 'Strategic technology partnerships', description: 'Collaboration with electrolyzer manufacturers, research institutions and industrial offtake partners.' },
      { title: 'Safety-first culture', description: 'International engineering standards, comprehensive risk assessments and process safety management.' },
      { title: 'Long-term investment approach', description: 'We invest with a long-term perspective, supporting the hydrogen economy through its development and maturity.' },
    ],
    sustainability: {
      heading: 'Sustainability Commitment',
      items: [
        'Reducing greenhouse gas emissions',
        'Supporting renewable energy integration',
        'Promoting water-efficient technologies',
        'Enhancing industrial sustainability',
        'Reducing dependence on fossil fuels',
        'Supporting circular economy principles',
        'Encouraging responsible resource utilization',
        'Strengthening climate resilience',
      ],
    },
    innovation: {
      heading: 'Research, Development and Innovation',
      items: [
        'Advanced Electrolysis Technologies',
        'Fuel Cell Innovation',
        'Hydrogen Storage Materials',
        'Digital Plant Optimization',
        'AI-Based Process Control',
        'Hydrogen Safety Systems',
        'Carbon-Free Industrial Applications',
        'Renewable Integration Technologies',
      ],
    },
    safety: {
      heading: 'Safety First',
      items: [
        'International engineering standards',
        'Comprehensive risk assessments',
        'Hazard identification',
        'Process safety management',
        'Emergency preparedness',
        'Continuous workforce training',
        'Digital monitoring',
        'Operational excellence',
      ],
    },
  },

  // 5. EV Infrastructure
  {
    slug: 'ev',
    name: 'Anandion EV Infrastructure',
    fullName: 'Anandion EV Infrastructure',
    tagline: 'Driving the Future of Sustainable Mobility',
    closingLine: 'Charging Progress. Connecting Mobility. Powering Tomorrow.',
    icon: Plug,
    color: 'from-emerald-400 to-sky-600',
    accent: '#3dba7d',
    image: 'https://images.pexels.com/photos/4678065/pexels-photo-4678065.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/4678065/pexels-photo-4678065.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become a leading global developer of intelligent electric mobility infrastructure, enabling the transition toward cleaner transportation through innovative charging solutions, digital technologies and renewable energy integration.',
    mission: 'To design, develop, finance, install and operate world-class EV charging infrastructure that supports sustainable transportation while creating long-term value for customers, communities and the environment.',
    overview: 'Transportation is undergoing one of the most significant transformations since the invention of the internal combustion engine. Governments are accelerating the transition to zero-emission mobility, automotive manufacturers are investing billions in electric vehicle technologies, businesses are electrifying their fleets, and consumers are embracing cleaner, smarter and more sustainable transportation solutions. Electric mobility is no longer a future aspiration—it is becoming the foundation of modern transportation. At Anandion EV Infrastructure, we are committed to building the intelligent charging infrastructure and digital energy ecosystem that will power the next generation of mobility. As the electric mobility division of Anandion Global, we develop integrated EV charging solutions for governments, businesses, commercial establishments, industries, fleet operators, real estate developers and public infrastructure projects. Our approach combines advanced charging technologies, renewable energy integration, battery storage, digital platforms and smart energy management to create reliable, scalable and future-ready mobility infrastructure. Our mission is simple: to make electric mobility accessible, reliable and sustainable for everyone.',
    capabilities: [
      {
        heading: 'Public Charging Infrastructure',
        items: [
          'Highways',
          'Urban centres',
          'Municipal facilities',
          'Metro stations',
          'Airports',
          'Railway stations',
          'Bus terminals',
          'Tourist destinations',
          'Retail locations',
          'Fuel stations',
        ],
      },
      {
        heading: 'Commercial Charging Solutions',
        items: [
          'Office campuses',
          'Shopping centres',
          'Hotels',
          'Hospitals',
          'Educational institutions',
          'Entertainment venues',
          'Business parks',
          'Mixed-use developments',
        ],
      },
      {
        heading: 'Fleet Charging Solutions',
        items: [
          'Fleet energy assessment',
          'Depot charging',
          'Smart charging systems',
          'Load management',
          'Charging optimization',
          'Fleet analytics',
          'Operational planning',
          'Infrastructure expansion strategies',
        ],
      },
      {
        heading: 'Residential Charging Solutions',
        items: [
          'Individual residential chargers',
          'Apartment complex charging',
          'Housing society charging infrastructure',
          'Community charging solutions',
          'Smart metering',
          'Energy management',
          'Mobile application integration',
        ],
      },
      {
        heading: 'Fast Charging Networks',
        items: [
          'Highway corridors',
          'Logistics hubs',
          'Commercial transport',
          'Public charging plazas',
          'Fleet depots',
          'Urban mobility centres',
        ],
      },
      {
        heading: 'Renewable Energy Integration',
        items: [
          'Solar Power',
          'Wind Energy',
          'Battery Storage',
          'Smart Grids',
          'Microgrids',
          'Energy Management Systems',
          'Carbon Reduction Strategies',
        ],
      },
    ],
    process: [
      { title: 'Site Assessment', description: 'We evaluate locations for grid capacity, traffic patterns, user convenience and future scalability.', icon: 'map' },
      { title: 'System Design', description: 'We design charging systems integrating hardware, software, energy management and renewable integration.', icon: 'design' },
      { title: 'Installation', description: 'We handle procurement, installation, testing and commissioning with safety and quality at the forefront.', icon: 'build' },
      { title: 'Operations', description: 'We provide ongoing monitoring, maintenance, software updates and customer support through our digital platform.', icon: 'monitor' },
    ],
    whyChooseUs: [
      { title: 'End-to-end project development', description: 'From site assessment through ongoing operations, we deliver complete mobility infrastructure solutions.' },
      { title: 'Renewable energy integration', description: 'Our unique strength is the ability to integrate clean energy generation with charging infrastructure.' },
      { title: 'Digital mobility platforms', description: 'Mobile applications, real-time availability, digital payments and fleet management dashboards.' },
      { title: 'Battery storage expertise', description: 'BESS integration for peak demand management, grid stabilization and renewable integration.' },
      { title: 'Safety-first approach', description: 'Infrastructure designed to internationally recognized engineering, electrical and cybersecurity standards.' },
      { title: 'Long-term operational support', description: 'We don\'t just install chargers — we operate, maintain and optimize them for the long term.' },
    ],
    innovation: {
      heading: 'Innovation and Research',
      items: [
        'Ultra-fast charging',
        'Wireless charging',
        'Vehicle-to-Grid (V2G)',
        'Vehicle-to-Building (V2B)',
        'Battery swapping',
        'Artificial Intelligence',
        'Autonomous charging',
        'Energy optimization algorithms',
        'Predictive maintenance',
        'Smart mobility analytics',
      ],
    },
    safety: {
      heading: 'Safety and Reliability',
      items: [
        'Electrical safety',
        'Fire protection',
        'Cybersecurity',
        'Quality assurance',
        'Preventive maintenance',
        'Emergency response',
        'Operational monitoring',
        'Continuous improvement',
      ],
    },
  },

  // 6. Energy Trading
  {
    slug: 'trading',
    name: 'Anandion Energy Trading',
    fullName: 'Anandion Energy Trading',
    tagline: 'Powering Intelligent Energy Markets',
    closingLine: 'Connecting Markets. Optimizing Energy. Powering Sustainable Growth.',
    icon: TrendingUp,
    color: 'from-navy-500 to-emerald-600',
    accent: '#1a3d7a',
    image: 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/18468536/pexels-photo-18468536.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become one of the world\'s most trusted providers of intelligent energy trading and market solutions, enabling efficient, transparent and sustainable energy markets that support economic growth and the global energy transition.',
    mission: 'To optimize energy markets by delivering innovative trading, procurement and risk management solutions that create measurable value for businesses, utilities, governments and investors.',
    overview: 'The global energy sector is undergoing a profound transformation. Electricity markets are becoming increasingly decentralized, renewable energy is changing traditional power flows, digital technologies are enhancing market transparency and consumers are evolving into active participants within the energy ecosystem. In this dynamic environment, energy trading has become a strategic function that connects power generation with consumption while ensuring reliability, affordability and efficiency across increasingly complex energy systems. At Anandion Energy Trading, we are committed to creating intelligent, transparent and sustainable energy market solutions that enable organizations to optimize energy procurement, manage price volatility and accelerate the transition toward cleaner electricity systems. As the energy trading division of Anandion Global, we provide comprehensive electricity trading, renewable energy procurement, market advisory, portfolio optimization, renewable energy certificate (REC) trading, cross-border energy solutions and risk management services. Our approach combines market intelligence, advanced analytics, digital technologies and disciplined governance to help our customers make informed energy decisions in rapidly evolving markets. Energy trading is no longer simply about buying and selling electricity. It is about creating smarter energy systems that balance commercial performance with sustainability, resilience and long-term value.',
    capabilities: [
      {
        heading: 'Electricity Trading',
        items: [
          'Day-Ahead Market participation',
          'Real-Time Market participation',
          'Bilateral power transactions',
          'Open access power procurement',
          'Short-term electricity trading',
          'Long-term power procurement',
          'Merchant energy strategies',
          'Renewable energy trading',
          'Utility trading support',
        ],
      },
      {
        heading: 'Renewable Energy Procurement',
        items: [
          'Green power procurement',
          'Renewable Power Purchase Agreements (PPAs)',
          'Corporate PPAs',
          'Virtual PPAs',
          'Captive renewable solutions',
          'Group captive structures',
          'Renewable procurement advisory',
          'Energy portfolio optimization',
        ],
      },
      {
        heading: 'Renewable Energy Certificates (RECs)',
        items: [
          'REC procurement',
          'REC trading',
          'Compliance advisory',
          'Portfolio management',
          'Regulatory support',
          'Market intelligence',
          'Certificate retirement',
          'Renewable attribute management',
        ],
      },
      {
        heading: 'Energy Portfolio Management',
        items: [
          'Procurement optimization',
          'Demand forecasting',
          'Energy budgeting',
          'Load analysis',
          'Contract optimization',
          'Market timing strategies',
          'Price benchmarking',
          'Portfolio diversification',
        ],
      },
      {
        heading: 'Risk Management',
        items: [
          'Price risk management',
          'Market exposure analysis',
          'Hedging strategies',
          'Contract risk evaluation',
          'Regulatory risk monitoring',
          'Counterparty assessment',
          'Portfolio stress testing',
          'Financial risk reporting',
        ],
      },
      {
        heading: 'Cross-Border Energy Markets',
        items: [
          'International power procurement',
          'Cross-border electricity markets',
          'Regional market advisory',
          'Energy imports and exports',
          'Transmission optimization',
          'International regulatory guidance',
          'Energy market integration',
        ],
      },
    ],
    process: [
      { title: 'Market Analysis', description: 'Real-time market intelligence, demand forecasting and price modeling across electricity markets.', icon: 'chart' },
      { title: 'Portfolio Strategy', description: 'Optimization across assets, contracts and exchanges to maximize value for our clients.', icon: 'design' },
      { title: 'Execution', description: 'Disciplined trading execution across day-ahead, real-time and contract markets.', icon: 'trade' },
      { title: 'Risk Management', description: 'Continuous position monitoring, credit risk management and regulatory compliance.', icon: 'shield' },
    ],
    whyChooseUs: [
      { title: 'Comprehensive energy market expertise', description: 'Deep knowledge of electricity markets, regulations and trading mechanics across multiple jurisdictions.' },
      { title: 'Renewable energy specialization', description: 'Leading expertise in green power procurement, PPAs, RECs and renewable attribute management.' },
      { title: 'Advanced market analytics', description: 'AI-powered forecasting, machine learning models and real-time market intelligence.' },
      { title: 'Robust risk management', description: 'Disciplined framework for price, counterparty, regulatory and operational risk.' },
      { title: 'Digital trading capabilities', description: 'Algorithmic trading support, digital dashboards and automated reporting.' },
      { title: 'Long-term customer relationships', description: 'We build partnerships based on transparency, performance and mutual success.' },
    ],
    innovation: {
      heading: 'Digital Energy Trading',
      items: [
        'Artificial Intelligence',
        'Machine Learning forecasting',
        'Algorithmic trading support',
        'Digital market dashboards',
        'Automated reporting',
        'Cloud-based analytics',
        'Smart contract management',
        'Predictive analytics',
      ],
    },
  },

  // 7. Climate Capital
  {
    slug: 'capital',
    name: 'Anandion Climate Capital',
    fullName: 'Anandion Climate Capital',
    tagline: 'Investing in a Sustainable Future',
    closingLine: 'Investing in Tomorrow. Financing the Energy Transition. Creating Lasting Impact.',
    icon: Handshake,
    color: 'from-navy-600 to-emerald-500',
    accent: '#0b2d5b',
    image: 'https://images.pexels.com/photos/11391951/pexels-photo-11391951.jpeg?auto=compress&cs=tinysrgb&w=1200',
    heroImage: 'https://images.pexels.com/photos/11391951/pexels-photo-11391951.jpeg?auto=compress&cs=tinysrgb&w=1920',
    vision: 'To become a globally respected climate investment platform that mobilizes capital towards sustainable infrastructure, clean technologies and climate innovation while generating long-term value for investors and society.',
    mission: 'To identify, develop, finance and manage high-quality climate investment opportunities that contribute to the global transition toward a resilient, low-carbon economy.',
    overview: 'The transition to a low-carbon economy is one of the largest economic transformations in modern history. Achieving global climate objectives will require unprecedented levels of investment in renewable energy, sustainable infrastructure, clean technologies, climate innovation and resilient communities. Governments, development institutions, corporations and investors are increasingly recognizing that climate action is not only an environmental responsibility but also one of the greatest investment opportunities of the twenty-first century. At Anandion Climate Capital, we are committed to mobilizing capital that creates measurable financial returns while delivering lasting environmental and social impact. As the investment and climate finance division of Anandion Global, Anandion Climate Capital develops, finances, manages and invests in sustainable infrastructure and climate-focused businesses across the global clean energy ecosystem. We bridge the gap between capital and opportunity by supporting projects that accelerate decarbonization, strengthen energy security and contribute to long-term sustainable development. Our philosophy is founded on the belief that responsible investment can create enduring value for investors, businesses, communities and future generations.',
    capabilities: [
      {
        heading: 'Renewable Energy',
        items: [
          'Utility-scale solar parks',
          'Wind farms',
          'Hybrid renewable energy systems',
          'Battery Energy Storage Systems (BESS)',
          'Distributed energy assets',
          'Renewable infrastructure platforms',
        ],
      },
      {
        heading: 'Green Hydrogen',
        items: [
          'Green hydrogen production',
          'Electrolysis technologies',
          'Hydrogen infrastructure',
          'Storage systems',
          'Transportation networks',
          'Industrial hydrogen applications',
          'Green ammonia projects',
        ],
      },
      {
        heading: 'Climate Technologies',
        items: [
          'Artificial Intelligence for energy optimization',
          'Smart grids',
          'Energy management software',
          'Carbon management platforms',
          'Climate analytics',
          'Digital sustainability solutions',
          'Advanced battery technologies',
          'Industrial decarbonization technologies',
        ],
      },
      {
        heading: 'Sustainable Infrastructure',
        items: [
          'EV charging networks',
          'Smart cities',
          'Clean transportation infrastructure',
          'Water management',
          'Waste-to-energy facilities',
          'Circular economy infrastructure',
          'Green industrial parks',
          'Climate-resilient infrastructure',
        ],
      },
      {
        heading: 'Carbon Markets and Environmental Assets',
        items: [
          'Carbon credit portfolios',
          'Nature-based projects',
          'Biodiversity conservation initiatives',
          'Forest restoration',
          'Blue carbon ecosystems',
          'Natural capital investments',
          'Ecosystem restoration',
        ],
      },
      {
        heading: 'Climate Finance Solutions',
        items: [
          'Project finance advisory',
          'Green bond structuring',
          'Sustainability-linked financing',
          'Blended finance',
          'Infrastructure financing',
          'Climate fund advisory',
          'Investment readiness assessments',
          'Capital raising support',
        ],
      },
      {
        heading: 'Private Equity & Venture Capital',
        items: [
          'Renewable energy technologies',
          'Energy storage',
          'Green hydrogen',
          'Carbon management',
          'Climate software',
          'Sustainable mobility',
          'Circular economy',
          'Artificial Intelligence for climate applications',
        ],
      },
    ],
    process: [
      { title: 'Deal Sourcing', description: 'We identify high-quality investment opportunities across the clean energy and climate technology ecosystem.', icon: 'map' },
      { title: 'Due Diligence', description: 'Comprehensive financial, technical, ESG and risk assessment of every investment opportunity.', icon: 'file' },
      { title: 'Investment', description: 'Disciplined capital allocation with a long-term perspective, focused on resilient financial performance.', icon: 'chart' },
      { title: 'Portfolio Management', description: 'Active management, continuous monitoring and strategic support to maximize value and impact.', icon: 'monitor' },
    ],
    whyChooseUs: [
      { title: 'Integrated clean energy expertise', description: 'Our investment team is backed by the full technical expertise of Anandion Global\'s seven business verticals.' },
      { title: 'Strong climate finance capabilities', description: 'From project finance to green bonds, blended finance and private equity — comprehensive financial solutions.' },
      { title: 'Robust ESG integration', description: 'Environmental, Social and Governance considerations are integrated throughout our investment process.' },
      { title: 'Global market perspective', description: 'We identify opportunities across Asia, Europe, the Middle East, Africa and the Americas.' },
      { title: 'Innovation-focused investment strategy', description: 'We actively support emerging technologies and innovative business models.' },
      { title: 'Long-term value creation', description: 'We invest with a long-term perspective, focusing on assets capable of delivering resilient financial performance.' },
    ],
  },
];

export const getBusiness = (slug: string): BusinessVertical | undefined =>
  businesses.find((b) => b.slug === slug);

// ── Stats ─────────────────────────────────────────────────────────
export const globalStats: { value: string; suffix?: string; label: string }[] = [
  { value: '7',     suffix: '+', label: 'Business Verticals' },
  { value: '100',   suffix: '%', label: 'Sustainability Focus' },
  { value: '1',     suffix: '',  label: 'Global Growth Vision' },
  { value: '1',     suffix: '',  label: 'Net Zero Commitment' },
];

// ── Homepage "Why Anandion" pillars ───────────────────────────────
export interface WhyPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyAnandionPillars: WhyPillar[] = [
  {
    icon: Layers,
    title: 'Integrated Solutions',
    description: 'Rather than offering isolated services, Anandion Global delivers end-to-end solutions spanning project development, financing, implementation and long-term operational support.',
  },
  {
    icon: Leaf,
    title: 'Sustainability First',
    description: 'Environmental responsibility is embedded into our strategy, investments and decision-making processes. Every business vertical contributes toward creating measurable climate impact.',
  },
  {
    icon: Globe2,
    title: 'Global Outlook',
    description: 'Although proudly established in India, Anandion Global is designed as an international enterprise capable of serving clients across Asia, Europe, the Middle East, Africa and the Americas.',
  },
  {
    icon: Scale,
    title: 'Responsible Governance',
    description: 'Our governance framework emphasizes transparency, accountability, ethical leadership, risk management, regulatory compliance and long-term value creation.',
  },
  {
    icon: Cpu,
    title: 'Innovation Driven',
    description: 'We actively embrace digital transformation, artificial intelligence, automation and advanced analytics to improve efficiency, sustainability and operational performance.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    description: 'We work alongside governments, corporations, research institutions, financial institutions and technology leaders to accelerate sustainable development.',
  },
];

// ── Business ecosystem cards (for homepage) ───────────────────────
export interface EcosystemCard {
  icon: LucideIcon;
  name: string;
  description: string;
  slug: string;
}

export const ecosystemCards: EcosystemCard[] = [
  { icon: SunMedium, name: 'Renewable Energy', slug: 'renewables', description: 'Developing clean power generation through utility-scale solar, wind, hybrid systems and battery storage.' },
  { icon: Leaf, name: 'Carbon Markets', slug: 'carbon', description: 'Creating environmental and financial value through carbon credits, emissions reduction and climate finance.' },
  { icon: Globe2, name: 'Climate Solutions', slug: 'climate', description: 'Supporting organizations with ESG advisory, sustainability reporting, climate strategy and decarbonization planning.' },
  { icon: Flame, name: 'Hydrogen', slug: 'hydrogen', description: 'Developing the next generation of clean fuel technologies through green hydrogen production and infrastructure.' },
  { icon: Plug, name: 'EV Infrastructure', slug: 'ev', description: 'Building intelligent charging networks that enable sustainable mobility.' },
  { icon: TrendingUp, name: 'Energy Trading', slug: 'trading', description: 'Optimizing energy markets through innovative procurement, trading and market intelligence.' },
  { icon: Handshake, name: 'Climate Capital', slug: 'capital', description: 'Mobilizing investment to accelerate renewable energy and sustainable infrastructure worldwide.' },
];

// ── Core values ───────────────────────────────────────────────────
export const coreValues: { icon: LucideIcon; title: string }[] = [
  { icon: ShieldCheck, title: 'Integrity' },
  { icon: Cpu,         title: 'Innovation' },
  { icon: Leaf,        title: 'Sustainability' },
  { icon: Sparkles,    title: 'Excellence' },
  { icon: Scale,       title: 'Responsibility' },
  { icon: Users,       title: 'Collaboration' },
  { icon: ShieldCheck, title: 'Safety' },
  { icon: HeartHandshake, title: 'Customer First' },
];

// ── Partner types ─────────────────────────────────────────────────
export const partnerTypes: string[] = [
  'Government', 'Utilities', 'Corporates', 'Technology Providers',
  'Financial Institutions', 'NGOs', 'Universities',
];

// ── Project highlights ────────────────────────────────────────────
export interface ProjectHighlight {
  name: string;
  type: string;
  capacity: string;
  image: string;
  description: string;
}

export const projectHighlights: ProjectHighlight[] = [
  { name: 'Utility-Scale Solar Parks',          type: 'Renewables',  capacity: 'GW Scale',   image: 'https://images.pexels.com/photos/11815854/pexels-photo-11815854.jpeg?auto=compress&cs=tinysrgb&w=1200', description: 'Development of utility-scale photovoltaic projects delivering reliable and affordable clean electricity.' },
  { name: 'Onshore Wind Developments',          type: 'Renewables',  capacity: 'GW Scale',   image: 'https://images.pexels.com/photos/3633955/pexels-photo-3633955.jpeg?auto=compress&cs=tinysrgb&w=1200',    description: 'Advanced turbine technologies maximizing generation efficiency while minimizing environmental impact.' },
  { name: 'Green Hydrogen Production Facilities', type: 'Hydrogen',   capacity: 'MW Scale',   image: 'https://images.pexels.com/photos/31587338/pexels-photo-31587338.jpeg?auto=compress&cs=tinysrgb&w=1200', description: 'Renewable-powered electrolysis plants producing zero-carbon hydrogen for industrial decarbonisation.' },
  { name: 'Afforestation & Reforestation',      type: 'Carbon',      capacity: 'Hectares',   image: 'https://images.pexels.com/photos/9413489/pexels-photo-9413489.jpeg?auto=compress&cs=tinysrgb&w=1200',  description: 'Large-scale nature-based carbon credit projects restoring ecosystems and generating verified credits.' },
  { name: 'Public Fast Charging Networks',      type: 'EV',          capacity: 'Network',    image: 'https://images.pexels.com/photos/9800004/pexels-photo-9800004.jpeg?auto=compress&cs=tinysrgb&w=1200', description: 'Highway corridor DC fast charging enabling long-distance electric mobility.' },
  { name: 'Hybrid Renewable Systems',           type: 'Renewables',  capacity: 'MW Scale',   image: 'https://images.pexels.com/photos/7763083/pexels-photo-7763083.jpeg?auto=compress&cs=tinysrgb&w=1200',    description: 'Integrated solar, wind and battery storage improving energy reliability and optimization.' },
];

// ── Investor highlights ───────────────────────────────────────────
export const investorHighlights: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: TrendingUp, title: 'Growing Global Energy Demand', description: 'The world\'s energy needs continue to expand, creating sustained demand for clean energy infrastructure.' },
  { icon: Leaf,       title: 'Net Zero Economy',              description: 'The transition toward net-zero emissions is reshaping industries and unlocking unprecedented investment opportunities.' },
  { icon: Handshake,  title: 'Climate Finance',               description: 'Trillions of dollars in annual investment will be required to modernize energy systems and achieve climate goals.' },
  { icon: Building2,  title: 'Renewable Infrastructure',      description: 'Renewable energy infrastructure represents one of the most stable and resilient long-term investment categories.' },
  { icon: BarChart3,  title: 'Long-Term Growth',              description: 'Our integrated platform is positioned for sustained growth across multiple high-growth sectors.' },
];

// ── Innovation areas ──────────────────────────────────────────────
export const innovationAreas: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Cpu,         title: 'Artificial Intelligence',     description: 'AI for renewable energy forecasting, equipment diagnostics, market analytics and asset optimization.' },
  { icon: Zap,         title: 'Digital Energy',              description: 'Smart grids, digital twins, IoT-enabled monitoring and predictive maintenance.' },
  { icon: Flame,       title: 'Hydrogen Innovation',         description: 'Advanced electrolysis technologies, fuel cell innovation and hydrogen storage materials.' },
  { icon: BatteryCharging, title: 'Energy Storage',          description: 'Next-generation battery storage, V2G integration and grid-scale energy management.' },
  { icon: FlaskConical, title: 'Research',                   description: 'Continuous research in sustainable fuels, carbon capture and climate analytics.' },
  { icon: Handshake,   title: 'Technology Partnerships',     description: 'Collaboration with universities, research institutions, technology companies and start-ups.' },
];

// ── Media items ───────────────────────────────────────────────────
export interface MediaItem {
  date: string;
  title: string;
  category: string;
  excerpt: string;
}

export const mediaItems: MediaItem[] = [
  { date: '', title: 'Anandion Global Announces Integrated Clean Energy Platform',  category: 'Press Release',  excerpt: 'Company launches seven business verticals spanning renewable energy, carbon markets, hydrogen, EV infrastructure and climate finance.' },
  { date: '', title: 'Green Hydrogen Initiative Breaks Ground',                     category: 'Press Release',  excerpt: 'Anandion Hydrogen begins development of utility-scale green hydrogen production facilities.' },
  { date: '', title: 'Anandion Global Commits to Net Zero',                          category: 'Sustainability', excerpt: 'Company pledges to integrate ESG principles into every strategic decision and investment.' },
  { date: '', title: 'Strategic Partnership Formed with Leading Technology Provider', category: 'Partnership',    excerpt: 'Collaboration aims to accelerate innovation across renewable energy and smart infrastructure.' },
  { date: '', title: 'EV Charging Network Expansion Announced',                      category: 'Press Release',  excerpt: 'Anandion EV Infrastructure unveils plans for highway corridor fast charging networks.' },
  { date: '', title: 'Climate Capital Mobilizes Investment for Sustainable Infrastructure', category: 'Investment', excerpt: 'Anandion Climate Capital announces new investment focus on climate technologies and sustainable infrastructure.' },
];

// ── Career openings ───────────────────────────────────────────────
export interface CareerOpening {
  title: string;
  team: string;
  location: string;
  type: string;
}

export const careerOpenings: CareerOpening[] = [
  { title: 'Solar Project Manager',           team: 'Anandion Renewables',       location: 'Pan-India',    type: 'Full-time' },
  { title: 'Wind Resource Analyst',           team: 'Anandion Renewables',       location: 'Pan-India',    type: 'Full-time' },
  { title: 'Carbon Analyst',                  team: 'Anandion Carbon Markets',   location: 'Pan-India',    type: 'Full-time' },
  { title: 'ESG Consultant',                  team: 'Anandion Climate Solutions', location: 'Pan-India',   type: 'Full-time' },
  { title: 'Chemical Engineer — Hydrogen',    team: 'Anandion Hydrogen',         location: 'Pan-India',    type: 'Full-time' },
  { title: 'EV Infrastructure Specialist',    team: 'Anandion EV Infrastructure', location: 'Pan-India',   type: 'Full-time' },
  { title: 'Energy Trader',                   team: 'Anandion Energy Trading',   location: 'Pan-India',    type: 'Full-time' },
  { title: 'Investment Analyst',              team: 'Anandion Climate Capital',  location: 'Pan-India',    type: 'Full-time' },
];

// ── Contact emails ────────────────────────────────────────────────
export const contactEmails = {
  general:    'hello@anandion.com',
  business:   'hello@anandion.com',
  investors:  'hello@anandion.com',
  media:      'hello@anandion.com',
  careers:    'hello@anandion.com',
  partnerships: 'hello@anandion.com',
};

// ── Icon map for process steps ────────────────────────────────────
export const processIconMap: Record<string, LucideIcon> = {
  map: MapIcon,
  file: FileText,
  design: PenTool,
  build: HardHat,
  monitor: Monitor,
  chart: BarChart3,
  trade: Repeat,
  shield: ShieldCheck,
  layers: Layers,
  wind: Wind,
};

// ── Lucide icon re-exports for convenience ────────────────────────
export {
  SunMedium, Wind, Zap, Flame, Leaf, TrendingUp,
  Building2, Plug, Recycle, Globe2, Cpu, ShieldCheck,
  Droplets, Users, Scale, ClipboardCheck, FileText,
  Layers, Sparkles, BarChart3, Handshake, HeartHandshake,
  BatteryCharging, FlaskConical,
};
