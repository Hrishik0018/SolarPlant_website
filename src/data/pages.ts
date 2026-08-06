export interface ContentBlock {
  type: 'text' | 'stats' | 'features' | 'list' | 'cta';
  heading?: string;
  body?: string;
  body2?: string;
  items?: { title: string; description: string; icon?: string }[];
  listItems?: { heading: string; items: string[] }[];
  stats?: { value: string; label: string }[];
}

export interface LongFormPageData {
  slug: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  heroImage: string;
  sections: ContentBlock[];
}

// ── ABOUT PAGE ────────────────────────────────────────────────────
export const aboutPage: LongFormPageData = {
  slug: 'about',
  title: 'Building the Future of Sustainable Energy',
  eyebrow: 'About Anandion Global',
  subtitle: 'Anandion Global is a future-focused clean energy and climate solutions company committed to accelerating the global transition toward a low-carbon economy. Founded on the principles of innovation, sustainability and responsible growth, we develop businesses that create long-term value for customers, investors, communities and the environment.',
  heroImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Our Story',
      body: 'The world is undergoing one of the most profound transformations in modern history. As nations pursue energy security, industries embrace decarbonization and communities seek sustainable growth, the global energy landscape is evolving at an unprecedented pace. Climate change, technological innovation and shifting economic priorities have made the transition to clean energy not only an environmental imperative but also an economic opportunity. At Anandion Global, we believe that the companies shaping this transformation today will define the prosperity of tomorrow. Founded with a vision to become a globally respected clean energy enterprise, Anandion Global is committed to accelerating the transition towards a more sustainable, resilient and inclusive future. We are building an integrated platform that combines renewable energy, climate solutions, carbon markets, green hydrogen, energy trading, electric mobility infrastructure and climate-focused investments under a single strategic vision. Our ambition extends far beyond developing projects or delivering services. We aspire to become a trusted partner for governments, businesses, investors and communities worldwide—helping them navigate the opportunities and challenges of the energy transition with confidence, innovation and integrity.',
    },
    {
      type: 'text',
      heading: 'Vision & Mission',
      body: 'Our Vision: To become one of the world\'s most trusted clean energy and climate enterprises.',
      body2: 'Our Mission: To accelerate sustainable development through innovative energy solutions, climate technologies and responsible investments.',
    },
    {
      type: 'features',
      heading: 'Core Values',
      body: 'Our values define who we are and guide every action we take.',
      items: [
        { title: 'Integrity',       description: 'We conduct business honestly, ethically and transparently, earning the trust of our stakeholders through responsible behaviour and sound governance.', icon: 'shield' },
        { title: 'Innovation',       description: 'We embrace curiosity, creativity and technology to develop solutions that address evolving energy and climate challenges.', icon: 'cpu' },
        { title: 'Sustainability',   description: 'Environmental stewardship and responsible resource management are embedded within every aspect of our business.', icon: 'leaf' },
        { title: 'Excellence',       description: 'We pursue the highest standards of quality, safety, operational performance and customer service.', icon: 'sparkles' },
        { title: 'Responsibility',   description: 'We take ownership of our decisions, honour our commitments and measure our success through meaningful outcomes.', icon: 'scale' },
        { title: 'Collaboration',    description: 'We believe that partnerships built on trust, respect and shared purpose create stronger businesses and more sustainable communities.', icon: 'users' },
        { title: 'Safety',           description: 'The safety and well-being of our employees, contractors, partners and communities are fundamental priorities.', icon: 'shield' },
        { title: 'Customer First',   description: 'We strive to deliver innovative, reliable and sustainable solutions that create lasting value for our customers.', icon: 'handshake' },
      ],
    },
    {
      type: 'text',
      heading: 'A Vision Born from Opportunity',
      body: 'The twenty-first century presents humanity with a defining challenge: meeting growing global energy demand while reducing greenhouse gas emissions and protecting the planet for future generations. Addressing this challenge requires more than incremental improvements. It demands new ideas, bold investments and long-term collaboration across governments, industries, financial institutions and civil society. Anandion Global was established in response to this opportunity. From its inception, the Company has embraced the belief that sustainable business success and environmental responsibility are mutually reinforcing. By integrating commercial excellence with climate-conscious innovation, we aim to create enduring value for our stakeholders while contributing to a cleaner and more resilient world. Our strategy is founded on a simple principle: economic growth and environmental stewardship should advance together.',
    },
    {
      type: 'text',
      heading: 'An Integrated Energy and Climate Enterprise',
      body: 'Unlike companies focused on a single technology or service, Anandion Global has been designed as an integrated enterprise capable of delivering solutions across the evolving energy value chain. Our diversified business portfolio enables us to address interconnected challenges through complementary expertise and coordinated execution. Together, these business verticals create a unified ecosystem capable of supporting clients through every stage of their sustainability journey—from strategy and financing to implementation and long-term operational excellence.',
      listItems: [
        { heading: 'Anandion Renewables', items: ['Developing utility-scale renewable energy projects, distributed energy systems and advanced energy storage solutions.'] },
        { heading: 'Anandion Carbon Markets', items: ['Supporting organisations in managing emissions, developing carbon credit projects and participating in carbon markets.'] },
        { heading: 'Anandion Climate Solutions', items: ['Providing strategic advisory services in sustainability, ESG integration, climate risk assessment and decarbonisation planning.'] },
        { heading: 'Anandion Hydrogen', items: ['Advancing the development and deployment of green hydrogen technologies for industry, transport and power systems.'] },
        { heading: 'Anandion EV Infrastructure', items: ['Developing intelligent charging networks and supporting infrastructure for electric mobility.'] },
        { heading: 'Anandion Energy Trading', items: ['Facilitating efficient participation in electricity and renewable energy markets through trading and market intelligence.'] },
        { heading: 'Anandion Climate Capital', items: ['Mobilising capital towards sustainable infrastructure, climate technologies and clean energy projects.'] },
      ],
    },
    {
      type: 'text',
      heading: 'Innovation as a Strategic Advantage',
      body: 'The energy sector is being reshaped by rapid technological advancement. Artificial intelligence, digital infrastructure, advanced analytics, smart grids, battery storage, hydrogen technologies and climate intelligence are transforming the way energy is generated, managed and consumed. At Anandion Global, innovation is not confined to research laboratories or technology teams. It is embedded within our culture and decision-making processes. We continually seek opportunities to improve efficiency, reduce environmental impact and create greater value for customers and stakeholders through technology-driven solutions. Innovation enables us to remain adaptable in an increasingly dynamic global marketplace while delivering practical, scalable and commercially viable outcomes.',
    },
    {
      type: 'text',
      heading: 'A Global Perspective',
      body: 'Although proudly headquartered in India, Anandion Global has been established with a global outlook. The transition to sustainable energy is a shared international challenge requiring collaboration across borders, sectors and disciplines. Our long-term strategy includes developing partnerships with governments, multilateral organisations, development finance institutions, research organisations, technology leaders and private enterprises across Asia, Europe, the Middle East, Africa and the Americas. We believe that diverse perspectives and international collaboration strengthen innovation, improve resilience and accelerate sustainable development. By combining local knowledge with global expertise, Anandion Global seeks to deliver solutions that are responsive to regional needs while aligned with international best practices.',
    },
    {
      type: 'text',
      heading: 'Responsible Growth',
      body: 'Growth is meaningful only when it is sustainable. At Anandion Global, our expansion strategy is guided by disciplined capital allocation, prudent risk management and long-term thinking. We seek opportunities that strengthen our capabilities, create value for stakeholders and contribute positively to the global transition towards cleaner energy systems. Our investment philosophy balances commercial opportunity with environmental stewardship and social responsibility, ensuring that growth is achieved responsibly and sustainably.',
    },
    {
      type: 'text',
      heading: 'A Company Built for the Future',
      body: 'The energy transition is one of the defining economic transformations of our time. Success will require organisations capable of integrating technology, finance, engineering, governance and sustainability into a unified vision. Anandion Global is being built with this future in mind. We are establishing robust governance frameworks, embracing digital innovation, investing in human capital and fostering strategic partnerships that position the Company for long-term resilience and global relevance. While our ambitions are significant, our approach remains grounded in disciplined execution, ethical conduct and a commitment to delivering measurable value.',
    },
    {
      type: 'cta',
      heading: 'Looking Ahead',
      body: 'The future of energy will be cleaner, more intelligent, more connected and more sustainable. Anandion Global is committed to playing a meaningful role in shaping that future. Powering a Sustainable Future is more than our tagline—it is the commitment that defines who we are, what we stand for and the future we are determined to help build.',
    },
  ],
};

// ── WHO WE ARE PAGE ───────────────────────────────────────────────
export const whoWeArePage: LongFormPageData = {
  slug: 'who-we-are',
  title: 'Who We Are',
  eyebrow: 'About Anandion Global',
  subtitle: 'Transforming Energy. Advancing Sustainability. Creating Lasting Impact.',
  heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'An Integrated Platform for Sustainable Growth',
      body: 'Anandion Global is a future-focused clean energy and climate enterprise dedicated to building innovative solutions that support the world\'s transition towards a sustainable, resilient and low-carbon economy. We operate at the intersection of energy, technology, finance and environmental stewardship, developing integrated businesses that address some of the most pressing challenges of our time. Our diversified portfolio spans renewable energy, carbon markets, climate solutions, green hydrogen, electric mobility infrastructure, energy trading and climate-focused investments, enabling us to deliver comprehensive solutions across the clean energy value chain. Our purpose is to create long-term value by combining innovation, responsible governance and strategic partnerships to help governments, businesses, investors and communities achieve their sustainability ambitions. As the world accelerates its transition towards cleaner energy systems, Anandion Global is positioning itself as a trusted partner capable of delivering reliable, scalable and future-ready solutions that contribute to economic growth while safeguarding the environment.',
    },
    {
      type: 'text',
      heading: 'A Global Mindset',
      body: 'Although Anandion Global proudly originates from India, our outlook is inherently international. Climate change and energy transformation are global challenges that require global collaboration. We are committed to developing strategic partnerships across Asia, Europe, the Middle East, Africa and the Americas, working with governments, multilateral institutions, financial organisations, technology innovators, research institutions and private enterprises. Our objective is to combine international best practices with local expertise, enabling us to develop solutions that are both globally relevant and regionally responsive.',
    },
    {
      type: 'text',
      heading: 'Guided by Purpose',
      body: 'Everything we do is driven by a clear and enduring purpose: to create sustainable solutions that generate lasting value for society. We believe that commercial success should be measured not only by financial performance but also by the positive impact an organisation creates for people, communities and the environment. This philosophy influences every decision we make—from selecting projects and partners to managing investments and engaging with stakeholders. By integrating sustainability into our strategy, operations and culture, we seek to contribute to a future where economic progress and environmental responsibility go hand in hand.',
    },
    {
      type: 'features',
      heading: 'Our Culture',
      body: 'At Anandion Global, our people are our greatest strength. We are committed to fostering an inclusive, collaborative and high-performance culture where innovation is encouraged, diverse perspectives are valued and continuous learning is embraced.',
      items: [
        { title: 'Trust', description: 'Our workplace is built upon trust, mutual respect and shared responsibility.', icon: 'users' },
        { title: 'Empowerment', description: 'We empower our employees to think creatively, act ethically and pursue excellence in everything they do.', icon: 'sparkles' },
        { title: 'Development', description: 'By investing in talent, leadership development and knowledge sharing, we are building an organisation capable of adapting to changing markets.', icon: 'trending' },
      ],
    },
    {
      type: 'features',
      heading: 'Our Commitment to Stakeholders',
      body: 'The long-term success of Anandion Global depends on creating value for all those who place their trust in us.',
      items: [
        { title: 'For Customers', description: 'We strive to deliver innovative, reliable and sustainable solutions.', icon: 'handshake' },
        { title: 'For Investors', description: 'We seek to generate resilient long-term value through disciplined growth and responsible capital allocation.', icon: 'trending' },
        { title: 'For Employees', description: 'We provide opportunities for professional development, leadership and meaningful contribution.', icon: 'users' },
        { title: 'For Partners', description: 'We build relationships based on transparency, collaboration and mutual success.', icon: 'handshake' },
        { title: 'For Communities', description: 'We support inclusive development through responsible business practices, environmental stewardship and social investment.', icon: 'leaf' },
      ],
    },
    {
      type: 'cta',
      heading: 'Building for Tomorrow',
      body: 'Anandion Global is more than an energy company. We are a platform for innovation, sustainability and long-term value creation. Our journey is guided by a simple but powerful belief: the future belongs to organisations that create value not only for today, but for generations to come.',
    },
  ],
};

// ── PHILOSOPHY PAGE ───────────────────────────────────────────────
export const philosophyPage: LongFormPageData = {
  slug: 'philosophy',
  title: 'Our Business Philosophy',
  eyebrow: 'About Anandion Global',
  subtitle: 'Creating Sustainable Value Through Innovation, Responsibility and Partnership',
  heroImage: 'https://images.pexels.com/photos/957024/pexels-photo-957024.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Purpose Before Profit',
      body: 'At Anandion Global, our business philosophy is founded on a simple yet enduring belief: business has the power to create meaningful and lasting positive change. We believe that commercial success and sustainable development are not competing objectives. Instead, they are mutually reinforcing drivers of long-term prosperity. Profitability is essential for every successful enterprise, but we believe profit should be the outcome of creating genuine value rather than the sole objective of business. Our purpose is to develop innovative solutions that improve lives, strengthen economies and contribute to a healthier planet. Every project we undertake is evaluated not only on its financial viability but also on its environmental, social and governance (ESG) impact.',
    },
    {
      type: 'features',
      heading: 'Guiding Principles',
      body: 'Our philosophy is built upon several interconnected principles that shape every decision we make.',
      items: [
        { title: 'Long-Term Thinking', description: 'We do not pursue short-term gains at the expense of long-term value. Our strategic decisions are guided by careful planning, disciplined execution and a commitment to building enduring capabilities.', icon: 'trending' },
        { title: 'Innovation with Purpose', description: 'Innovation has meaning only when it solves real-world challenges and improves outcomes for people, businesses and society. We foster a culture of continuous innovation.', icon: 'cpu' },
        { title: 'Sustainability as a Business Principle', description: 'Sustainability is not a separate initiative or corporate programme—it is an integral part of our identity, embedded into every investment, project and strategic decision.', icon: 'leaf' },
        { title: 'Integrity Without Compromise', description: 'We conduct our business honestly, transparently and responsibly, adhering to the highest standards of corporate governance and professional ethics. We maintain zero tolerance for corruption.', icon: 'shield' },
        { title: 'People at the Centre', description: 'Talented, diverse and motivated individuals create stronger organisations. We are committed to fostering an inclusive workplace where every employee has the opportunity to learn, contribute and grow.', icon: 'users' },
        { title: 'Partnership for Progress', description: 'No single organisation can achieve the transition to a sustainable future alone. We view partnerships as long-term relationships built on trust, transparency and shared objectives.', icon: 'handshake' },
        { title: 'Responsible Risk Management', description: 'Our approach includes robust governance, comprehensive due diligence, regulatory compliance, financial discipline and environmental risk management.', icon: 'scale' },
        { title: 'Creating Shared Value', description: 'We seek to create shared value by supporting local employment, strengthening supply chains, promoting skills development and contributing to social and environmental well-being.', icon: 'heart' },
      ],
    },
    {
      type: 'cta',
      heading: 'A Philosophy for the Future',
      body: 'The future of energy will be shaped by organisations that combine innovation with responsibility, ambition with discipline and growth with sustainability. Every decision we make is guided by our enduring principles of integrity, innovation, sustainability, collaboration and accountability. Powering a Sustainable Future is more than our promise—it is the philosophy that guides our journey and the legacy we strive to build.',
    },
  ],
};

// ── LEADERSHIP & GOVERNANCE PAGE ──────────────────────────────────
export const leadershipPage: LongFormPageData = {
  slug: 'leadership',
  title: 'Leadership Principles & Governance',
  eyebrow: 'About Anandion Global',
  subtitle: 'Leading with Integrity. Governing with Purpose.',
  heroImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Leadership with Vision',
      body: 'At Anandion Global, leadership is more than guiding an organisation—it is about inspiring confidence, creating long-term value and making decisions that positively impact people, communities and the planet. As a company operating in sectors that are fundamental to economic development and environmental sustainability, we recognise that effective leadership and strong corporate governance are inseparable. They form the foundation upon which trust is built, opportunities are created and sustainable growth is achieved. Our leadership philosophy combines visionary thinking with disciplined execution, ensuring that every strategic decision is guided by integrity, accountability and a steadfast commitment to responsible business practices. Governance at Anandion Global is not merely a framework for compliance; it is a strategic advantage that strengthens organisational resilience, protects stakeholder interests and supports sustainable value creation.',
    },
    {
      type: 'features',
      heading: 'Governance Principles',
      body: 'Our governance framework is guided by internationally recognised principles of good governance.',
      items: [
        { title: 'Transparency', description: 'Transparency in reporting and communication.', icon: 'file' },
        { title: 'Accountability', description: 'Accountability at every level of the organisation.', icon: 'scale' },
        { title: 'Ethical Conduct', description: 'Ethical conduct in all business activities.', icon: 'shield' },
        { title: 'Independent Oversight', description: 'Independent oversight and effective Board supervision.', icon: 'users' },
        { title: 'Risk Management', description: 'Robust risk management and internal controls.', icon: 'shield' },
        { title: 'Regulatory Compliance', description: 'Regulatory compliance across all jurisdictions.', icon: 'clipboard' },
        { title: 'Responsible Stewardship', description: 'Responsible stewardship of financial, environmental and human resources.', icon: 'leaf' },
      ],
    },
    {
      type: 'text',
      heading: 'The Role of the Board',
      body: 'The Board of Directors provides strategic direction, independent oversight and long-term guidance to the Company. Its primary responsibilities include defining the Company\'s long-term vision and strategic priorities, approving major investments and capital allocation decisions, overseeing enterprise risk management, monitoring financial performance and corporate governance, ensuring compliance with applicable laws, regulations and ethical standards, evaluating organisational performance and leadership effectiveness, and promoting sustainability, innovation and stakeholder engagement. The Board works closely with executive management while maintaining appropriate independence to safeguard the interests of shareholders and other stakeholders.',
    },
    {
      type: 'text',
      heading: 'Risk Management and Resilience',
      body: 'Effective governance requires a disciplined approach to identifying, assessing and managing risks. Anandion Global maintains an enterprise-wide risk management framework that supports informed decision-making and protects long-term value. Our risk management approach addresses strategic, operational, financial, environmental, technological, cybersecurity, legal and reputational risks. By proactively managing uncertainty, we enhance organisational resilience and strengthen our ability to deliver sustainable outcomes under changing market conditions.',
    },
    {
      type: 'cta',
      heading: 'Leadership for Future Generations',
      body: 'The challenges facing the global energy sector demand leaders who think beyond quarterly results. We invest in leadership development, succession planning and continuous learning to ensure that future leaders possess the knowledge, skills and ethical foundation required to navigate an increasingly complex global environment. Our goal is not simply to build a successful company, but to build an institution that will continue to create value for generations to come.',
    },
  ],
};

// ── SUSTAINABILITY PAGE ───────────────────────────────────────────
export const sustainabilityPage: LongFormPageData = {
  slug: 'sustainability',
  title: 'Sustainability & ESG Commitment',
  eyebrow: 'Sustainability',
  subtitle: 'Creating Lasting Value for People, Planet and Progress',
  heroImage: 'https://images.pexels.com/photos/7507403/pexels-photo-7507403.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Sustainability Is Our Foundation',
      body: 'At Anandion Global, sustainability is not a corporate initiative—it is the foundation of our identity, our strategy and our purpose. The global transition towards a low-carbon economy presents one of the greatest opportunities and responsibilities of our time. As nations strive to strengthen energy security, achieve climate goals and promote sustainable development, businesses must play an active role in creating solutions that generate long-term value while safeguarding the environment. We believe that sustainable growth is achieved when economic prosperity, environmental stewardship and social progress advance together. Accordingly, Environmental, Social and Governance (ESG) principles are embedded into every aspect of our business—from strategic planning and investment decisions to project development, operational excellence and stakeholder engagement. Our commitment extends beyond compliance. We seek to become a global leader in responsible business by creating measurable environmental impact, fostering inclusive development and maintaining the highest standards of corporate governance.',
    },
    {
      type: 'features',
      heading: 'Our ESG Framework',
      body: 'Our ESG framework integrates sustainability throughout our business through three interconnected pillars.',
      items: [
        { title: 'Environmental Stewardship', description: 'Protecting the planet through responsible environmental management — renewable energy, carbon reduction, resource efficiency, circular economy, biodiversity and water stewardship.', icon: 'leaf' },
        { title: 'Social Responsibility', description: 'Creating positive social impact by empowering people and communities — health and safety, diversity and inclusion, human rights, community development and employee development.', icon: 'users' },
        { title: 'Governance Excellence', description: 'Building trust through ethical leadership, transparency and accountability — board oversight, compliance, risk management, cybersecurity and responsible supply chains.', icon: 'scale' },
      ],
    },
    {
      type: 'features',
      heading: 'Environmental Responsibility',
      body: 'The energy sector plays a central role in addressing climate change and accelerating the transition to a low-carbon economy.',
      items: [
        { title: 'Climate Action', description: 'Supporting national and international climate objectives by enabling deployment of low-carbon technologies and climate-focused investments.', icon: 'globe' },
        { title: 'Carbon Management', description: 'Carbon accounting, emissions measurement, carbon reduction planning, carbon credit generation and net-zero implementation.', icon: 'leaf' },
        { title: 'Circular Economy', description: 'Product lifecycle optimization, material recovery, waste valorization, recycling initiatives and circular supply chains.', icon: 'recycle' },
        { title: 'Biodiversity & Nature', description: 'Forest conservation, ecosystem restoration, watershed management, nature-based carbon projects and biodiversity risk assessment.', icon: 'globe' },
        { title: 'Water Stewardship', description: 'Water-efficient technologies, water recycling, rainwater harvesting and watershed protection.', icon: 'droplets' },
        { title: 'Resource Efficiency', description: 'Energy efficiency, material efficiency, waste reduction, operational optimization and sustainable procurement.', icon: 'recycle' },
      ],
    },
    {
      type: 'features',
      heading: 'Social Responsibility',
      body: 'Sustainable development begins with people.',
      items: [
        { title: 'Health, Safety & Wellbeing', description: 'Zero harm philosophy, occupational health, safety leadership, mental wellbeing and preventive risk management.', icon: 'shield' },
        { title: 'Diversity, Equity & Inclusion', description: 'Creating a workplace where every individual feels valued regardless of gender, nationality, age, disability, background or perspective.', icon: 'users' },
        { title: 'Human Rights', description: 'Fair employment, ethical recruitment, freedom from discrimination, safe working conditions and human rights due diligence.', icon: 'scale' },
        { title: 'Community Development', description: 'Education, skill development, renewable energy access, climate awareness, youth and women\'s empowerment.', icon: 'heart' },
        { title: 'Employee Development', description: 'Technical training, leadership development, digital skills, sustainability education and career progression.', icon: 'trending' },
        { title: 'Responsible Supply Chains', description: 'Working with suppliers who share our commitment to ethical conduct, environmental responsibility and human rights.', icon: 'handshake' },
      ],
    },
    {
      type: 'features',
      heading: 'Governance Excellence',
      body: 'Strong governance is essential for sustainable business success.',
      items: [
        { title: 'Ethical Leadership', description: 'Accountability, transparency, responsibility, ethical decision-making and long-term thinking.', icon: 'scale' },
        { title: 'Corporate Governance', description: 'Independent oversight, board accountability, strategic risk management, internal controls and financial discipline.', icon: 'clipboard' },
        { title: 'Compliance & Ethics', description: 'Anti-bribery, anti-corruption, competition laws, data privacy and zero tolerance for unethical practices.', icon: 'shield' },
        { title: 'Cybersecurity & Data Protection', description: 'Cybersecurity infrastructure, information security, data privacy and digital resilience.', icon: 'cpu' },
      ],
    },
    {
      type: 'list',
      heading: 'Supporting the UN Sustainable Development Goals',
      body: 'Our business activities contribute to several of the United Nations Sustainable Development Goals.',
      listItems: [
        { heading: 'Key SDGs', items: [
          'Affordable and Clean Energy',
          'Decent Work and Economic Growth',
          'Industry, Innovation and Infrastructure',
          'Sustainable Cities and Communities',
          'Responsible Consumption and Production',
          'Climate Action',
          'Partnerships for the Goals',
        ]},
      ],
    },
    {
      type: 'cta',
      heading: 'Our Commitment to Future Generations',
      body: 'Sustainability is a journey of continuous improvement rather than a destination. Every decision we make is guided by a simple principle: the true measure of success is the positive legacy we leave behind. Powering a Sustainable Future. Protecting Our Planet. Empowering People. Creating Lasting Value.',
    },
  ],
};

// ── GOVERNANCE PAGE ───────────────────────────────────────────────
export const governancePage: LongFormPageData = {
  slug: 'governance',
  title: 'Corporate Governance',
  eyebrow: 'Governance',
  subtitle: 'Leading with Integrity. Building Trust. Creating Long-Term Value.',
  heroImage: 'https://images.pexels.com/photos/6950037/pexels-photo-6950037.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Our Governance Philosophy',
      body: 'At Anandion Global, corporate governance is more than a legal or regulatory requirement—it is the cornerstone of our identity as a responsible global enterprise. Strong governance enables sustainable growth, protects stakeholder interests, fosters investor confidence and ensures that every decision we make aligns with our purpose of Powering a Sustainable Future. Operating across renewable energy, carbon markets, climate solutions, hydrogen, EV infrastructure, energy trading and climate finance requires disciplined leadership, robust oversight and a culture rooted in ethics and accountability. As we expand into international markets, we recognize that our reputation will be built not only on the quality of our projects and services but also on the integrity of our governance.',
    },
    {
      type: 'features',
      heading: 'Governance Principles',
      body: 'Our governance philosophy is based on six core principles.',
      items: [
        { title: 'Integrity',      description: 'We conduct business honestly, ethically and responsibly in every market where we operate.', icon: 'shield' },
        { title: 'Accountability', description: 'Every leader and employee is accountable for their actions, decisions and performance.', icon: 'scale' },
        { title: 'Transparency',   description: 'We communicate openly and accurately with our stakeholders, providing timely and meaningful information.', icon: 'file' },
        { title: 'Responsibility', description: 'We recognize our responsibility to shareholders, employees, customers, communities, governments and the environment.', icon: 'leaf' },
        { title: 'Fairness',       description: 'We treat all stakeholders equitably, respecting their rights and interests.', icon: 'scale' },
        { title: 'Sustainability', description: 'Governance is integrated with our environmental, social and economic objectives to ensure resilient long-term growth.', icon: 'leaf' },
      ],
    },
    {
      type: 'text',
      heading: 'The Role of the Board of Directors',
      body: 'The Board of Directors is responsible for providing strategic direction, ensuring effective oversight and safeguarding the long-term interests of the Company and its stakeholders. The Board\'s primary responsibilities include defining long-term corporate strategy, approving major investments and acquisitions, overseeing financial performance, reviewing sustainability strategy, monitoring enterprise risks, approving annual budgets, evaluating executive performance, ensuring legal and regulatory compliance, protecting shareholder interests and promoting ethical corporate culture. The Board acts independently, objectively and in the best interests of the Company.',
    },
    {
      type: 'list',
      heading: 'Board Committees',
      body: 'Specialized Board Committees enable focused oversight of key governance areas.',
      listItems: [
        { heading: 'Audit Committee', items: ['Financial reporting', 'Internal controls', 'Internal audit', 'External audit', 'Compliance oversight', 'Fraud prevention', 'Financial integrity'] },
        { heading: 'Risk Management Committee', items: ['Enterprise Risk Management', 'Climate risks', 'Financial risks', 'Operational risks', 'Cybersecurity', 'Business continuity', 'Emerging risks'] },
        { heading: 'Nomination & Remuneration Committee', items: ['Board appointments', 'Executive succession planning', 'Leadership development', 'Performance evaluation', 'Compensation policies', 'Talent management'] },
        { heading: 'Sustainability & ESG Committee', items: ['ESG strategy', 'Climate commitments', 'Sustainability performance', 'Stakeholder engagement', 'ESG reporting', 'Responsible investment', 'Environmental compliance'] },
        { heading: 'Corporate Social Responsibility Committee', items: ['Community investment', 'Social initiatives', 'Skill development', 'Education', 'Environmental projects', 'Social impact programs'] },
      ],
    },
    {
      type: 'text',
      heading: 'Ethical Business Conduct',
      body: 'Integrity is non-negotiable. Every employee, director, contractor and business partner is expected to comply with our Code of Conduct and uphold the highest standards of professional ethics. Our ethical commitments include honest business practices, fair competition, respect for human rights, confidentiality, responsible use of company assets, conflict of interest disclosure, ethical procurement and respectful workplace behavior. We maintain zero tolerance for fraud, corruption or unethical conduct.',
    },
    {
      type: 'features',
      heading: 'Risk Management',
      body: 'Our Enterprise Risk Management framework identifies, assesses and manages risks across the organization.',
      items: [
        { title: 'Strategic Risks',    description: 'Risks related to strategic direction, market positioning and competitive dynamics.', icon: 'trending' },
        { title: 'Climate Risks',      description: 'Physical and transition risks associated with climate change.', icon: 'globe' },
        { title: 'Financial Risks',    description: 'Risks related to capital allocation, liquidity and financial performance.', icon: 'trending' },
        { title: 'Cybersecurity Risks', description: 'Risks to information systems, data privacy and digital infrastructure.', icon: 'cpu' },
        { title: 'Operational Risks',  description: 'Risks related to project execution, safety and operational performance.', icon: 'shield' },
        { title: 'Regulatory Risks',   description: 'Risks related to changing laws, regulations and compliance obligations.', icon: 'clipboard' },
      ],
    },
    {
      type: 'cta',
      heading: 'Building Trust for Generations',
      body: 'Corporate governance is not viewed as a compliance exercise—it is a strategic enabler of growth. It strengthens our decision-making, reinforces stakeholder confidence, protects our reputation and ensures that every aspect of our business is guided by integrity and accountability. Leading with Integrity. Governing with Accountability. Building Trust for Generations.',
    },
  ],
};

// ── INVESTORS PAGE ────────────────────────────────────────────────
export const investorsPage: LongFormPageData = {
  slug: 'investors',
  title: 'Investor Relations',
  eyebrow: 'Investors',
  subtitle: 'Investing in the Future of Sustainable Energy',
  heroImage: 'https://images.pexels.com/photos/38412413/pexels-photo-38412413.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Our Investment Proposition',
      body: 'At Anandion Global, we believe that the greatest investment opportunities are created where innovation meets purpose. The global transition toward a low-carbon economy is reshaping industries, redefining markets and unlocking unprecedented opportunities for long-term value creation. As governments, corporations and financial institutions accelerate investments in clean energy and sustainable infrastructure, businesses that combine visionary leadership with disciplined execution will lead the next generation of global growth. Anandion Global has been established to become one of those businesses. Our integrated platform spans renewable energy, carbon markets, climate solutions, green hydrogen, EV infrastructure, energy trading and climate finance, creating a diversified ecosystem positioned at the forefront of the global energy transition. For investors, Anandion Global represents more than a clean energy company. It is a long-term growth platform built on innovation, sustainability, operational excellence and responsible governance. Our objective is to generate sustainable financial performance while delivering measurable environmental and social impact.',
    },
    {
      type: 'features',
      heading: 'Why Invest in Anandion Global?',
      body: 'Our integrated business model reduces reliance on a single market while creating opportunities for operational synergies, diversified revenue streams and long-term resilience.',
      items: [
        { title: 'Integrated Clean Energy Platform', description: 'Unlike companies focused on a single business segment, Anandion Global operates across the entire clean energy value chain with seven business verticals.', icon: 'layers' },
        { title: 'Positioned in High-Growth Markets', description: 'Our business is strategically positioned in sectors expected to experience sustained long-term growth — renewable energy, hydrogen, carbon markets, electric mobility and climate finance.', icon: 'trending' },
        { title: 'Long-Term Business Model', description: 'We prioritize sustainable value creation through disciplined investments, operational excellence, innovation and responsible growth.', icon: 'building' },
        { title: 'Corporate Governance', description: 'Strong governance framework based on board oversight, ethical leadership, independent accountability, risk management and ESG integration.', icon: 'shield' },
        { title: 'Innovation as a Growth Driver', description: 'We continuously invest in AI, smart energy systems, digital platforms, hydrogen, battery storage and climate analytics.', icon: 'cpu' },
        { title: 'Sustainability Creates Value', description: 'Organizations that proactively address climate challenges are better positioned to attract capital, improve efficiency and unlock new markets.', icon: 'leaf' },
      ],
    },
    {
      type: 'list',
      heading: 'Diversified Revenue Streams',
      body: 'Our integrated platform generates multiple potential sources of revenue, reducing concentration risk and supporting long-term resilience.',
      listItems: [
        { heading: 'Potential Revenue Streams', items: [
          'Renewable energy project development',
          'Power generation',
          'Carbon credit development and trading',
          'ESG consulting',
          'Sustainability advisory',
          'Hydrogen infrastructure',
          'EV charging solutions',
          'Energy trading',
          'Climate investment management',
          'Technology licensing',
          'Project development services',
        ]},
      ],
    },
    {
      type: 'list',
      heading: 'Investor Downloads',
      body: 'We are committed to maintaining open, timely and accurate communication with our investors.',
      listItems: [
        { heading: 'Available Downloads', items: [
          'Annual Reports',
          'Financial Statements',
          'Corporate Governance Reports',
          'Policies',
          'Presentations',
        ]},
      ],
    },
    {
      type: 'cta',
      heading: 'Our Commitment to Investors',
      body: 'Every relationship with our investors is founded on trust, accountability and shared ambition. We are committed to acting with integrity, maintaining the highest standards of corporate governance, allocating capital responsibly, managing risks proactively, investing in innovation, building sustainable businesses, delivering transparent communication and creating long-term shareholder value. Invest with Purpose. Grow with Confidence. Power the Future.',
    },
  ],
};

// ── PROJECTS PAGE ─────────────────────────────────────────────────
export const projectsPage: LongFormPageData = {
  slug: 'projects',
  title: 'Projects & Innovation',
  eyebrow: 'Projects',
  subtitle: 'Building Tomorrow\'s Energy Infrastructure Today',
  heroImage: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Our Project Development Philosophy',
      body: 'At Anandion Global, projects are more than engineering achievements—they are tangible expressions of our vision to create a cleaner, more resilient and sustainable future. Every project we develop represents an opportunity to accelerate the global energy transition, strengthen economies, empower communities and deliver long-term value for our stakeholders. Innovation is equally fundamental to our identity. In a world where technology, climate policy and energy markets are evolving rapidly, success depends upon the ability to anticipate change, embrace new ideas and transform challenges into opportunities. We believe innovation is not limited to laboratories or research centres; it is embedded across our business—from project design and engineering to financing, digital transformation and customer engagement. Innovation powers our projects. Our projects power the future.',
    },
    {
      type: 'features',
      heading: 'Guiding Principles',
      body: 'Our development philosophy is based on five guiding principles.',
      items: [
        { title: 'Sustainability by Design', description: 'Environmental responsibility is integrated from the earliest stages of project planning.', icon: 'leaf' },
        { title: 'Innovation with Practical Impact', description: 'Technology should solve real-world challenges while improving efficiency, safety and sustainability.', icon: 'cpu' },
        { title: 'Long-Term Value Creation', description: 'Projects are evaluated not only on immediate returns but also on their long-term economic, environmental and social contributions.', icon: 'trending' },
        { title: 'Collaboration', description: 'Strong partnerships with governments, communities, investors, technology providers and customers are essential.', icon: 'handshake' },
        { title: 'Operational Excellence', description: 'Every project is executed with discipline, quality, transparency and continuous improvement.', icon: 'shield' },
      ],
    },
    {
      type: 'features',
      heading: 'Innovation at Anandion Global',
      body: 'Innovation is not confined to research laboratories—it is embedded throughout our business model. We invest in innovation that creates measurable commercial, environmental and social value.',
      items: [
        { title: 'Artificial Intelligence', description: 'AI for renewable energy forecasting, equipment diagnostics, market analytics, demand prediction, asset optimization and carbon accounting.', icon: 'cpu' },
        { title: 'Digital Transformation', description: 'IoT, cloud computing, big data analytics, digital twins, GIS and predictive maintenance.', icon: 'layers' },
        { title: 'Research and Development', description: 'Green hydrogen, carbon capture, advanced battery storage, sustainable fuels, smart mobility and climate analytics.', icon: 'sparkles' },
        { title: 'Innovation Partnerships', description: 'Collaboration with universities, research institutions, technology companies, start-ups and government agencies.', icon: 'handshake' },
      ],
    },
    {
      type: 'cta',
      heading: 'Measuring Project Success',
      body: 'We believe successful projects create value beyond financial returns. Our performance framework evaluates renewable energy capacity installed, carbon emissions avoided, energy generated, safety performance, water efficiency, waste reduction, biodiversity outcomes, community benefits, jobs created, investor returns and customer satisfaction. Innovating Today. Building Tomorrow. Powering a Sustainable Future.',
    },
  ],
};

// ── MEDIA PAGE ────────────────────────────────────────────────────
export const mediaPage: LongFormPageData = {
  slug: 'media',
  title: 'Media Centre',
  eyebrow: 'Media',
  subtitle: 'Connecting with the World Through Transparency, Innovation and Collaboration',
  heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Media Centre',
      body: 'At Anandion Global, we believe that meaningful progress is built on open communication, trusted relationships and transparent engagement. As a company committed to accelerating the global transition towards sustainable energy and climate resilience, we recognize the importance of keeping our stakeholders informed, inspired and connected. Our Media Centre serves as the central platform for sharing our latest developments, project milestones, corporate announcements, sustainability initiatives, industry insights and leadership perspectives. It reflects our commitment to transparency while showcasing the innovation, expertise and impact that define Anandion Global. Whether you are an investor, journalist, customer, business partner, policymaker, researcher or member of the public, our Media Centre provides timely, accurate and relevant information about our business and our contribution to the global clean energy transition.',
    },
    {
      type: 'list',
      heading: 'Media Resources',
      body: 'To support journalists, researchers and business partners, we provide a comprehensive collection of corporate resources.',
      listItems: [
        { heading: 'Available Resources', items: [
          'Corporate profile',
          'Company fact sheet',
          'Leadership biographies',
          'Corporate logo',
          'Brand guidelines',
          'Official photographs',
          'Project images',
          'Sustainability reports',
          'ESG publications',
          'Investor presentations',
        ]},
      ],
    },
    {
      type: 'text',
      heading: 'Media Enquiries',
      body: 'Journalists and media professionals seeking information, interviews or official comments are encouraged to contact our Corporate Communications team at hello@anandion.com. Our media relations team supports press enquiries, interview requests, background information, media statements, image requests, event accreditation, corporate information and expert commentary. We are committed to responding promptly and professionally while maintaining transparency and accuracy.',
    },
  ],
};

// ── CAREERS PAGE ──────────────────────────────────────────────────
export const careersPage: LongFormPageData = {
  slug: 'careers',
  title: 'Careers at Anandion Global',
  eyebrow: 'Careers',
  subtitle: 'Build the Future. Build Your Career.',
  heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
  sections: [
    {
      type: 'text',
      heading: 'Build the Future of Energy',
      body: 'At Anandion Global, we believe that the future of sustainable energy will be shaped by extraordinary people with bold ideas, diverse perspectives and an unwavering commitment to innovation. While technology powers the energy transition, it is talented individuals who transform vision into reality. Our people are the driving force behind every renewable energy project, every climate solution, every hydrogen innovation, every carbon market initiative and every investment that contributes to a cleaner and more sustainable world. As a global enterprise operating across renewable energy, carbon markets, climate solutions, green hydrogen, EV infrastructure, energy trading and climate finance, we offer more than employment—we offer the opportunity to become part of one of the world\'s most exciting industries. Whether you are an experienced professional, a recent graduate, an engineer, a financial expert, a sustainability specialist, a researcher or a technology innovator, Anandion Global provides an environment where talent is valued, ideas are encouraged and careers can flourish. Our ambition is to build not only a world-class company but also a workplace where people are inspired to grow, innovate and make a lasting impact. Powering a Sustainable Future begins with empowering exceptional people.',
    },
    {
      type: 'features',
      heading: 'Why Join Us',
      body: 'When you join Anandion Global, you become part of a purpose-driven organization committed to innovation, integrity and long-term excellence.',
      items: [
        { title: 'Purpose-Driven Work', description: 'Every role contributes to the clean energy transition and a sustainable future. Every contribution matters, every innovation counts, every career creates impact.', icon: 'leaf' },
        { title: 'Learning and Development', description: 'Technical training, leadership development, digital skills, sustainability education, innovation workshops and professional certifications.', icon: 'trending' },
        { title: 'Innovation Starts with People', description: 'We encourage every employee to contribute ideas that improve operational efficiency, sustainability, safety, technology and environmental performance.', icon: 'cpu' },
        { title: 'Diversity, Equity and Inclusion', description: 'We believe great organizations reflect the diversity of the communities they serve. Diverse teams strengthen creativity, collaboration and innovation.', icon: 'users' },
        { title: 'Health, Safety and Wellbeing', description: 'Nothing is more important than the health and safety of our people. Every employee has the right to return home safely every day.', icon: 'shield' },
        { title: 'A Global Career with Purpose', description: 'As Anandion Global expands internationally, our employees have opportunities to collaborate with clients, partners and colleagues across multiple countries and cultures.', icon: 'globe' },
      ],
    },
    {
      type: 'text',
      heading: 'Early Career Programs',
      body: 'We are committed to developing the next generation of sustainability and energy leaders. Our early career opportunities may include graduate trainee programs, engineering trainee programs, management trainee programs, summer internships, research internships, university partnerships, apprenticeships and campus recruitment. These programs provide meaningful exposure to real-world projects while supporting professional development.',
    },
    {
      type: 'text',
      heading: 'Leadership Development',
      body: 'Tomorrow\'s leaders are developed today. Our leadership programs are designed to help employees build the skills required to lead teams, manage complex projects and drive innovation. Development opportunities include leadership mentoring, executive coaching, strategic thinking, decision-making, communication skills, change management, team leadership and global business exposure. We believe leadership is earned through performance, integrity and continuous learning.',
    },
    {
      type: 'cta',
      heading: 'Join Us',
      body: 'The future belongs to those who are ready to lead it. Join us as we transform the energy landscape, accelerate climate action and build solutions that will benefit generations to come. At Anandion Global, your career is more than a job—it is an opportunity to leave a lasting legacy. Inspire Innovation. Empower Change. Build a Sustainable Future Together.',
    },
  ],
};

// ── All pages map ─────────────────────────────────────────────────
export const allPages: Record<string, LongFormPageData> = {
  about: aboutPage,
  'who-we-are': whoWeArePage,
  philosophy: philosophyPage,
  leadership: leadershipPage,
  sustainability: sustainabilityPage,
  governance: governancePage,
  investors: investorsPage,
  projects: projectsPage,
  media: mediaPage,
  careers: careersPage,
};
