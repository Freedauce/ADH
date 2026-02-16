// ============================================
// ADHI – Mock Data (Phase 1) – EXPANDED
// All data is illustrative and fictional.
// ============================================

// ===== IMPACT STATS =====
export const impactStats = [
    { label: 'Housing Units Planned', value: '2,400+', sub: 'Across 4 Countries', icon: 'building' },
    { label: 'tCO₂ Avoided', value: '~42,000', sub: 'Illustrative Estimate', icon: 'leaf' },
    { label: 'Franchise Pilots', value: '7', sub: 'Active Programs', icon: 'globe' },
    { label: 'Supplier Partners', value: '38', sub: 'Regional Network', icon: 'handshake' },
    { label: 'Jobs Created', value: '1,200+', sub: 'Direct & Indirect', icon: 'users' },
    { label: 'Investment Raised', value: '$14.5M', sub: 'Seed + Series A', icon: 'dollar' },
    { label: 'Countries Active', value: '4', sub: 'East & West Africa', icon: 'map' },
    { label: 'Completion Rate', value: '94%', sub: 'On-Time Delivery', icon: 'check' },
];

// ===== PLATFORM CARDS =====
export const platformCards = [
    {
        title: 'Digital Procurement Hub',
        description: 'Standardized, structured procurement for scalable housing delivery across Africa. Real-time tracking, supplier management, and automated RFQ workflows.',
        icon: 'package',
        link: '/procurement',
        stats: '38 Suppliers • 6 Countries',
    },
    {
        title: 'Carbon Dashboard',
        description: 'Illustrative environmental impact modeling for sustainable construction. Track embodied carbon, operational emissions, and carbon credit potential.',
        icon: 'bar-chart',
        link: '/carbon',
        stats: '~42,000 tCO₂ Avoided',
    },
    {
        title: 'Franchise & Training Platform',
        description: 'Scalable franchising and builder certification for continent-wide expansion. Standardized kits, training modules, and quality assurance.',
        icon: 'graduation-cap',
        link: '/franchise',
        stats: '7 Active Franchises',
    },
];

// ===== WHY ADHI =====
export const whyAdhiItems = [
    {
        title: 'Housing Efficiency',
        description: 'Solves housing inefficiency through digital-first, standardized construction processes. Reduces build time by up to 45%.',
        icon: 'home',
    },
    {
        title: 'Unified Procurement',
        description: 'Eliminates fragmented procurement with a centralized digital hub. Connects 38+ verified suppliers across the continent.',
        icon: 'link',
    },
    {
        title: 'Carbon Accountability',
        description: 'Adds measurable carbon accountability to every construction project. Industry-leading sustainability reporting and carbon credit generation.',
        icon: 'shield',
    },
    {
        title: 'Franchise Scalability',
        description: 'Enables rapid, quality-controlled expansion through a franchise model. Standardized kits deployable in 12 weeks.',
        icon: 'rocket',
    },
    {
        title: 'Cost Reduction',
        description: 'Achieves 25-35% cost savings through bulk procurement, standardized designs, and efficient supply chain management.',
        icon: 'dollar',
    },
    {
        title: 'Community Impact',
        description: 'Creates local jobs, trains skilled builders, and develops communities with integrated infrastructure including water and energy.',
        icon: 'users',
    },
];

// ===== FEATURED HOUSING PROJECTS =====
export const featuredProjects = [
    {
        id: 1,
        name: 'Bwiza Heights – Phase 2',
        location: 'Kigali, Rwanda',
        country: 'Rwanda',
        units: 500,
        type: 'Mixed Residential',
        status: 'In Progress',
        completion: 72,
        price: 'From $28,000',
        bedrooms: '1-3 Bed',
        area: '45-110 m²',
        description: 'A flagship affordable housing development featuring modern LSF construction, solar-ready roofing, and integrated community spaces. Set in the heart of Kigali with panoramic views.',
        features: ['Solar Panels', 'Rainwater Harvesting', 'Community Garden', 'Children\'s Play Area', 'Security Station', 'Retail Spaces'],
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80',
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
        ],
    },
    {
        id: 2,
        name: 'Kampala Skyline Residences',
        location: 'Kampala, Uganda',
        country: 'Uganda',
        units: 320,
        type: 'Apartment Complex',
        status: 'In Progress',
        completion: 35,
        price: 'From $22,000',
        bedrooms: '1-2 Bed',
        area: '38-75 m²',
        description: 'Modern apartment living in Uganda\'s capital. Featuring energy-efficient design, rooftop gardens, and proximity to major transport links.',
        features: ['Rooftop Garden', 'EV Charging Ready', 'Smart Metering', 'Gym Facility', 'Co-working Space'],
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=80',
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
        ],
    },
    {
        id: 3,
        name: 'Nairobi Green Estates',
        location: 'Nairobi, Kenya',
        country: 'Kenya',
        units: 750,
        type: 'Townhouse Development',
        status: 'Planning',
        completion: 18,
        price: 'From $35,000',
        bedrooms: '2-4 Bed',
        area: '65-150 m²',
        description: 'A landmark green housing estate with zero-waste construction methodology, integrated solar microgrids, and smart home technology.',
        features: ['Solar Microgrid', 'Zero-Waste Construction', 'Smart Home Tech', 'Swimming Pool', 'Tennis Court', 'Medical Center'],
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&q=80',
            'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80',
        ],
    },
    {
        id: 4,
        name: 'Dar es Salaam Waterfront',
        location: 'Dar es Salaam, Tanzania',
        country: 'Tanzania',
        units: 280,
        type: 'Mixed-Use Development',
        status: 'Planning',
        completion: 8,
        price: 'From $32,000',
        bedrooms: '1-3 Bed',
        area: '42-120 m²',
        description: 'A waterfront mixed-use development combining residential, retail, and co-working spaces. Built with climate-resilient materials.',
        features: ['Waterfront Access', 'Retail Ground Floor', 'Co-working Hub', 'Backup Generator', 'CCTV Security'],
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
        gallery: [
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80',
        ],
    },
    {
        id: 5,
        name: 'Accra Innovation Village',
        location: 'Accra, Ghana',
        country: 'Ghana',
        units: 400,
        type: 'Smart Housing Estate',
        status: 'Upcoming',
        completion: 0,
        price: 'From $30,000',
        bedrooms: '2-3 Bed',
        area: '55-100 m²',
        description: 'Africa\'s first fully integrated smart housing village with IoT-enabled homes, automated energy management, and a tech innovation hub.',
        features: ['IoT Smart Homes', 'Innovation Hub', 'Automated Energy', 'Fiber Internet', 'Electric Vehicle Charging'],
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
        gallery: [],
    },
    {
        id: 6,
        name: 'Kigali Sunrise Gardens',
        location: 'Kigali, Rwanda',
        country: 'Rwanda',
        units: 150,
        type: 'Luxury Villas',
        status: 'Completed',
        completion: 100,
        price: 'From $55,000',
        bedrooms: '3-5 Bed',
        area: '120-250 m²',
        description: 'Premium villa community with landscaped gardens, private courtyards, and panoramic hillside views. ADHI\'s showcase project for high-end sustainable living.',
        features: ['Private Garden', 'Smart Lock', 'Solar + Battery', 'Heated Pool', 'Home Office', 'Guest House'],
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
        gallery: [],
    },
];

// ===== TEAM MEMBERS =====
export const teamMembers = [
    {
        name: 'Amara Diallo',
        role: 'CEO & Founder',
        bio: '15+ years in African infrastructure development. Former Director at Africa Finance Corporation. MBA from INSEAD.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    },
    {
        name: 'Dr. Kwame Asante',
        role: 'Chief Technology Officer',
        bio: 'PhD in Sustainable Construction from MIT. Led digital transformation at 3 major construction firms. Expert in BIM and modular construction.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    },
    {
        name: 'Fatima Nkunda',
        role: 'Head of Operations',
        bio: '12 years in supply chain management across East Africa. Previously at UN-Habitat. Specializes in last-mile logistics.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    },
    {
        name: 'David Mugisha',
        role: 'Chief Financial Officer',
        bio: 'Former investment banker at Goldman Sachs Africa. CFA charterholder. Expert in infrastructure financing and impact investing.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
    },
    {
        name: 'Dr. Aisha Okonkwo',
        role: 'Head of Sustainability',
        bio: 'Climate scientist with 10+ years in carbon accounting. Published researcher on embodied carbon in African construction.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    },
    {
        name: 'Jean-Pierre Habimana',
        role: 'Head of Franchise Development',
        bio: 'Built and scaled franchise networks across 6 African countries. Expert in standardized construction methodologies.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
    },
];

// ===== TESTIMONIALS =====
export const testimonials = [
    {
        quote: 'ADHI\'s procurement platform reduced our material costs by 30% and cut delivery times in half. This is the future of African construction.',
        author: 'Samuel Ochieng',
        role: 'Site Manager, Bwiza Phase 2',
        company: 'ADHI Rwanda',
    },
    {
        quote: 'The franchise model gave us everything we needed to start building quality homes in Uganda. Training, materials, methodology — all standardized.',
        author: 'Grace Namutebi',
        role: 'Franchise Partner',
        company: 'ADHI Uganda',
    },
    {
        quote: 'As an investor, the transparency of ADHI\'s dashboard gives me real confidence. I can see exactly where my money is going and the impact it\'s making.',
        author: 'Michael Chen',
        role: 'Impact Investor',
        company: 'GreenBridge Capital',
    },
    {
        quote: 'The carbon accountability built into every project is remarkable. ADHI is setting the standard for sustainable construction in Africa.',
        author: 'Dr. Elena Vasquez',
        role: 'Sustainability Advisor',
        company: 'World Green Building Council',
    },
];

// ===== PARTNERS =====
export const partners = [
    { name: 'Africa Finance Corporation', category: 'Finance' },
    { name: 'UN-Habitat', category: 'Development' },
    { name: 'World Bank IFC', category: 'Finance' },
    { name: 'African Development Bank', category: 'Finance' },
    { name: 'Rwanda Housing Authority', category: 'Government' },
    { name: 'Kenya National Housing Corp', category: 'Government' },
    { name: 'Holcim Africa', category: 'Materials' },
    { name: 'Lafarge Africa', category: 'Materials' },
    { name: 'SolarCity East Africa', category: 'Energy' },
    { name: 'GreenBridge Capital', category: 'Investment' },
    { name: 'TechBuild Solutions', category: 'Technology' },
    { name: 'CleanEnergy Africa', category: 'Energy' },
];

// ===== NEWS & UPDATES =====
export const newsArticles = [
    {
        id: 1,
        title: 'ADHI Secures $8.5M Series A to Expand Across East Africa',
        excerpt: 'The funding round was led by GreenBridge Capital with participation from Africa Finance Corporation, enabling expansion into Kenya and Tanzania.',
        date: 'January 15, 2025',
        category: 'Funding',
        readTime: '4 min read',
    },
    {
        id: 2,
        title: 'Bwiza Phase 2 Reaches 72% Completion Milestone',
        excerpt: 'Rwanda\'s largest affordable housing project built with ADHI technology is on track for Q3 2025 delivery, with 360 of 500 units structurally complete.',
        date: 'February 3, 2025',
        category: 'Projects',
        readTime: '3 min read',
    },
    {
        id: 3,
        title: 'ADHI Launches Carbon Credit Program for Housing Developments',
        excerpt: 'New initiative allows ADHI projects to generate verified carbon credits, creating additional revenue streams for developers and investors.',
        date: 'December 20, 2024',
        category: 'Sustainability',
        readTime: '5 min read',
    },
    {
        id: 4,
        title: 'Partnership with UN-Habitat to Address Africa\'s 50M Housing Deficit',
        excerpt: 'Strategic partnership aims to deploy ADHI\'s digital construction platform across 10 countries by 2028, targeting 100,000 housing units.',
        date: 'November 8, 2024',
        category: 'Partnership',
        readTime: '6 min read',
    },
    {
        id: 5,
        title: 'ADHI Franchise Program Expands to Ghana and Senegal',
        excerpt: 'Two new franchise partners certified to deploy ADHI construction methodology in West Africa, marking the platform\'s first expansion beyond East Africa.',
        date: 'October 22, 2024',
        category: 'Expansion',
        readTime: '3 min read',
    },
    {
        id: 6,
        title: 'Award: ADHI Named "Most Innovative PropTech" at Africa Tech Summit',
        excerpt: 'Recognition for pioneering digital-first approach to solving Africa\'s housing crisis through integrated procurement, carbon tracking, and franchising.',
        date: 'September 15, 2024',
        category: 'Awards',
        readTime: '2 min read',
    },
];

// ===== TIMELINE / MILESTONES =====
export const milestones = [
    { year: '2021', title: 'Founded', description: 'ADHI established in Kigali, Rwanda with a mission to digitize African housing construction.' },
    { year: '2022', title: 'Seed Funding', description: 'Raised $2.5M seed round. Launched digital procurement platform MVP.' },
    { year: '2023', title: 'First Project', description: 'Bwiza Phase 1 completed — 150 units delivered on time and 20% under budget.' },
    { year: '2024', title: 'Expansion', description: 'Launched operations in Uganda. Certified first 3 franchise partners. Carbon dashboard live.' },
    { year: '2025', title: 'Scale-Up', description: 'Series A funding. Active in 4 countries. 2,400+ units in pipeline. 7 franchise partners.' },
    { year: '2026', title: 'Vision', description: 'Target: 10 countries, 10,000+ units, and 100,000 tCO₂ avoided through the ADHI platform.' },
];

// ===== FAQ =====
export const faqItems = [
    {
        question: 'What is ADHI?',
        answer: 'ADHI (African Development Housing Initiative) is a digital platform that streamlines housing construction across Africa through integrated procurement, carbon accountability, and franchise-based scalability.',
    },
    {
        question: 'How does the franchise model work?',
        answer: 'Certified builders receive standardized house kits, training modules, proprietary construction methodology, and access to the ADHI procurement network. Franchisees can begin construction within 12 weeks of certification.',
    },
    {
        question: 'What construction method does ADHI use?',
        answer: 'ADHI primarily uses Light Steel Frame (LSF) construction combined with locally-sourced materials. This method is 45% faster than traditional construction, generates less waste, and produces more energy-efficient buildings.',
    },
    {
        question: 'How are carbon savings calculated?',
        answer: 'Carbon savings are estimated by comparing ADHI\'s construction methodology against baseline conventional construction methods. We measure embodied carbon (materials + construction) and operational carbon (energy use over 30 years).',
    },
    {
        question: 'Which countries does ADHI operate in?',
        answer: 'ADHI currently operates in Rwanda, Uganda, Kenya, and Tanzania. We are expanding to Ghana and Senegal in 2025, with plans to reach 10 countries by 2026.',
    },
    {
        question: 'How can I invest in ADHI?',
        answer: 'ADHI offers investment opportunities through our Investor Dashboard. Contact our investor relations team for detailed prospectuses, financial projections, and impact reports.',
    },
    {
        question: 'What is the typical price range for ADHI homes?',
        answer: 'ADHI homes range from $22,000 for a 1-bedroom apartment to $55,000+ for luxury 3-5 bedroom villas. Our affordable housing units start at $22,000-$28,000 depending on the country and configuration.',
    },
    {
        question: 'Does ADHI provide financing options?',
        answer: 'Yes, ADHI partners with local and international financial institutions to offer mortgage products, microfinance options, and rent-to-own schemes specifically designed for the African market.',
    },
];

// ===== COUNTRY OPERATIONS =====
export const countryOperations = [
    { country: 'Rwanda', flag: '🇷🇼', projects: 3, units: 650, status: 'Active', office: 'Kigali HQ' },
    { country: 'Uganda', flag: '🇺🇬', projects: 2, units: 440, status: 'Active', office: 'Kampala' },
    { country: 'Kenya', flag: '🇰🇪', projects: 2, units: 950, status: 'Active', office: 'Nairobi' },
    { country: 'Tanzania', flag: '🇹🇿', projects: 1, units: 280, status: 'Active', office: 'Dar es Salaam' },
    { country: 'Ghana', flag: '🇬🇭', projects: 1, units: 400, status: 'Upcoming', office: 'Accra (planned)' },
    { country: 'Senegal', flag: '🇸🇳', projects: 0, units: 0, status: 'Upcoming', office: 'Dakar (planned)' },
];

// ===== PROCUREMENT ORDERS (EXPANDED) =====
export const procurementOrders = [
    { id: 1, supplier: 'Example Steel Supplier Ltd.', sku: 'LSF Wall Panel – Type A', project: 'Bwiza Phase 2', country: 'Rwanda', rfqRef: 'RFQ-2025-004', status: 'Confirmed', delivery: '12 June 2025', value: '$145,000' },
    { id: 2, supplier: 'Kigali Concrete Works', sku: 'Foundation Block – Standard', project: 'Bwiza Phase 2', country: 'Rwanda', rfqRef: 'PO-2025-011', status: 'Shipped', delivery: '28 May 2025', value: '$82,000' },
    { id: 3, supplier: 'EcoTimber East Africa', sku: 'Roof Truss Panel – R20', project: 'Kampala Pilot', country: 'Uganda', rfqRef: 'RFQ-2025-008', status: 'Sent', delivery: '15 July 2025', value: '$67,500' },
    { id: 4, supplier: 'SafeGlass Rwanda', sku: 'Double-Glazed Window – W1', project: 'Bwiza Phase 2', country: 'Rwanda', rfqRef: 'PO-2025-015', status: 'Confirmed', delivery: '01 June 2025', value: '$53,200' },
    { id: 5, supplier: 'NairobiPipes Co.', sku: 'PVC Plumbing Kit – Standard', project: 'Nairobi Phase 1', country: 'Kenya', rfqRef: 'RFQ-2025-012', status: 'Draft', delivery: 'TBD', value: '$38,000' },
    { id: 6, supplier: 'SolarRoof Africa', sku: 'Solar Panel Kit – 5kW', project: 'Bwiza Phase 2', country: 'Rwanda', rfqRef: 'PO-2025-019', status: 'Confirmed', delivery: '20 June 2025', value: '$210,000' },
    { id: 7, supplier: 'CementPro Tanzania', sku: 'Portland Cement – Type I', project: 'Dar es Salaam', country: 'Tanzania', rfqRef: 'RFQ-2025-020', status: 'Sent', delivery: '08 August 2025', value: '$95,000' },
    { id: 8, supplier: 'AfriSteel Kenya', sku: 'Reinforcement Bar – 12mm', project: 'Nairobi Phase 1', country: 'Kenya', rfqRef: 'PO-2025-023', status: 'Confirmed', delivery: '15 July 2025', value: '$120,000' },
    { id: 9, supplier: 'GreenInsulate Ltd.', sku: 'Thermal Insulation Roll – R30', project: 'Kampala Pilot', country: 'Uganda', rfqRef: 'RFQ-2025-025', status: 'Draft', delivery: 'TBD', value: '$42,000' },
    { id: 10, supplier: 'WaterTech Solutions', sku: 'Rainwater Harvesting System', project: 'Bwiza Phase 2', country: 'Rwanda', rfqRef: 'PO-2025-028', status: 'Shipped', delivery: '22 May 2025', value: '$76,500' },
    { id: 11, supplier: 'ElectroPower Ghana', sku: 'Smart Meter Unit – v3', project: 'Accra Innovation', country: 'Ghana', rfqRef: 'RFQ-2025-030', status: 'Draft', delivery: 'TBD', value: '$58,000' },
    { id: 12, supplier: 'PaintMaster East Africa', sku: 'Exterior Weather Shield – 20L', project: 'Kigali Sunrise', country: 'Rwanda', rfqRef: 'PO-2025-032', status: 'Confirmed', delivery: '10 June 2025', value: '$28,500' },
];

// ===== PROCUREMENT FLOW STEPS =====
export const procurementFlowSteps = [
    { step: 1, label: 'RFQ Created', description: 'Request for Quotation issued to verified suppliers' },
    { step: 2, label: 'Supplier Review', description: 'Suppliers evaluate requirements and submit bids' },
    { step: 3, label: 'Bid Comparison', description: 'Automated comparison and scoring of supplier bids' },
    { step: 4, label: 'Confirmation', description: 'Purchase order confirmed and payment initiated' },
    { step: 5, label: 'Quality Check', description: 'Pre-shipment quality inspection and certification' },
    { step: 6, label: 'Shipment', description: 'Materials shipped with real-time GPS tracking' },
    { step: 7, label: 'Site Delivery', description: 'Delivered to construction site with digital receipt' },
];

// ===== MATERIAL CATEGORIES =====
export const materialCategories = [
    { name: 'Structural Steel', items: 145, suppliers: 12, icon: 'steel', totalValue: '$2.4M' },
    { name: 'Concrete & Cement', items: 89, suppliers: 8, icon: 'concrete', totalValue: '$1.8M' },
    { name: 'Roofing Systems', items: 67, suppliers: 6, icon: 'roof', totalValue: '$1.2M' },
    { name: 'Electrical & Solar', items: 112, suppliers: 10, icon: 'electrical', totalValue: '$3.1M' },
    { name: 'Plumbing & Water', items: 78, suppliers: 7, icon: 'plumbing', totalValue: '$890K' },
    { name: 'Insulation & Finishing', items: 95, suppliers: 9, icon: 'insulation', totalValue: '$650K' },
    { name: 'Windows & Doors', items: 54, suppliers: 5, icon: 'windows', totalValue: '$780K' },
    { name: 'Smart Home Tech', items: 38, suppliers: 4, icon: 'smart', totalValue: '$420K' },
];

// ===== SUPPLIER PERFORMANCE =====
export const supplierPerformance = [
    { name: 'Example Steel Supplier', rating: 4.8, onTime: 96, orders: 42, country: 'Rwanda' },
    { name: 'Kigali Concrete Works', rating: 4.6, onTime: 91, orders: 38, country: 'Rwanda' },
    { name: 'EcoTimber East Africa', rating: 4.9, onTime: 98, orders: 25, country: 'Uganda' },
    { name: 'SolarRoof Africa', rating: 4.7, onTime: 94, orders: 31, country: 'Kenya' },
    { name: 'AfriSteel Kenya', rating: 4.5, onTime: 89, orders: 28, country: 'Kenya' },
    { name: 'WaterTech Solutions', rating: 4.8, onTime: 97, orders: 19, country: 'Rwanda' },
];

// ===== CARBON DATA (EXPANDED) =====
export const embodiedCarbonData = [
    { name: 'Baseline Construction', embodied: 42000, operational: 28000 },
    { name: 'ADHI System', embodied: 24500, operational: 17000 },
];

export const carbonAvoidedHighlight = {
    value: '~42,000',
    unit: 'tCO₂',
    label: 'Total Carbon Avoided (Illustrative)',
    project: 'All Active Projects Combined',
};

export const housingImpactData = [
    { name: 'Unit 1-100', savings: 3700 },
    { name: 'Unit 101-200', savings: 3650 },
    { name: 'Unit 201-300', savings: 3800 },
    { name: 'Unit 301-400', savings: 3700 },
    { name: 'Unit 401-500', savings: 3650 },
];

export const carbonEstimatorOptions = [
    { value: 'bwiza-phase-2', label: 'Bwiza Phase 2 (500 Units)', result: 'Estimated ~18,500 tCO₂ avoided across 500 housing units using ADHI construction methodology.' },
    { value: 'kampala-pilot', label: 'Kampala Pilot (320 Units)', result: 'Estimated ~11,200 tCO₂ avoided across 320 housing units using ADHI construction methodology.' },
    { value: 'nairobi-phase-1', label: 'Nairobi Phase 1 (750 Units)', result: 'Estimated ~27,800 tCO₂ avoided across 750 housing units using ADHI construction methodology.' },
    { value: 'dar-es-salaam', label: 'Dar es Salaam (280 Units)', result: 'Estimated ~9,800 tCO₂ avoided across 280 housing units using ADHI construction methodology.' },
    { value: 'accra-innovation', label: 'Accra Innovation (400 Units)', result: 'Estimated ~15,600 tCO₂ avoided across 400 housing units using ADHI construction methodology.' },
];

export const carbonByCountry = [
    { country: 'Rwanda', avoided: 18500, projects: 3 },
    { country: 'Uganda', avoided: 11200, projects: 2 },
    { country: 'Kenya', avoided: 7800, projects: 2 },
    { country: 'Tanzania', avoided: 4500, projects: 1 },
];

export const sustainabilityMetrics = [
    { metric: 'Water Saved', value: '12M Liters', description: 'Through rainwater harvesting systems installed across all projects' },
    { metric: 'Waste Diverted', value: '85%', description: 'Construction waste diverted from landfills through recycling programs' },
    { metric: 'Renewable Energy', value: '3.2 MW', description: 'Total solar capacity installed across ADHI housing developments' },
    { metric: 'Trees Planted', value: '15,000+', description: 'Native trees planted in ADHI community developments' },
    { metric: 'Green Certification', value: 'EDGE', description: 'All ADHI projects target EDGE green building certification' },
    { metric: 'Carbon Credits', value: '8,500', description: 'Verified carbon credits generated and available for trading' },
];

// ===== FRANCHISE DATA (EXPANDED) =====
export const franchiseOverview = {
    name: 'ADHI Uganda – Pilot',
    status: 'Active',
    region: 'East Africa',
    startDate: 'January 2025',
    modules: 6,
    certified: true,
};

export const allFranchises = [
    { name: 'ADHI Rwanda – HQ', country: 'Rwanda', flag: '🇷🇼', status: 'Active', certified: true, builders: 45, projects: 3, since: '2021' },
    { name: 'ADHI Uganda – Pilot', country: 'Uganda', flag: '🇺🇬', status: 'Active', certified: true, builders: 28, projects: 2, since: '2024' },
    { name: 'ADHI Kenya – Nairobi', country: 'Kenya', flag: '🇰🇪', status: 'Active', certified: true, builders: 35, projects: 2, since: '2024' },
    { name: 'ADHI Tanzania – Dar', country: 'Tanzania', flag: '🇹🇿', status: 'Active', certified: true, builders: 15, projects: 1, since: '2024' },
    { name: 'ADHI Ghana – Accra', country: 'Ghana', flag: '🇬🇭', status: 'In Training', certified: false, builders: 12, projects: 1, since: '2025' },
    { name: 'ADHI Senegal – Dakar', country: 'Senegal', flag: '🇸🇳', status: 'Planned', certified: false, builders: 0, projects: 0, since: '2025' },
    { name: 'ADHI Ethiopia – Addis', country: 'Ethiopia', flag: '🇪🇹', status: 'Planned', certified: false, builders: 0, projects: 0, since: '2026' },
];

export const trainingModules = [
    { id: 1, title: 'Introduction to ADHI', status: 'Completed', progress: 100, hours: 8, description: 'Company overview, mission, values, and the ADHI construction methodology.' },
    { id: 2, title: 'LSF Construction Fundamentals', status: 'Completed', progress: 100, hours: 16, description: 'Light Steel Frame construction techniques, tools, and safety protocols.' },
    { id: 3, title: 'Digital Procurement Mastery', status: 'Completed', progress: 100, hours: 12, description: 'Using the ADHI procurement platform for ordering, tracking, and quality control.' },
    { id: 4, title: 'Quality Assurance & Inspection', status: 'In Progress', progress: 65, hours: 20, description: 'Quality standards, inspection checklists, and defect management.' },
    { id: 5, title: 'Sustainability & Carbon Tracking', status: 'In Progress', progress: 40, hours: 10, description: 'Carbon measurement, reporting, and sustainable construction practices.' },
    { id: 6, title: 'Project Management & Delivery', status: 'Not Started', progress: 0, hours: 24, description: 'End-to-end project management, timeline planning, and stakeholder communication.' },
];

export const houseKits = [
    {
        name: 'Starter Kit A',
        description: 'Entry-level housing kit for single-family residences. Includes LSF framing, roofing, and basic finishes. Perfect for affordable housing programs.',
        units: '1-2 Bedroom',
        sqm: '45–65 m²',
        price: 'From $22,000',
        buildTime: '8-10 weeks',
        features: ['LSF Frame', 'Metal Roofing', 'Basic Plumbing', 'Electrical Wiring'],
    },
    {
        name: 'Mid-Scale Kit B',
        description: 'Mid-range housing kit with enhanced insulation, solar-ready roofing, and modular layout options. Ideal for suburban developments.',
        units: '2-3 Bedroom',
        sqm: '75–110 m²',
        price: 'From $35,000',
        buildTime: '10-14 weeks',
        features: ['Enhanced Insulation', 'Solar-Ready Roof', 'Water Harvesting', 'Double Glazing'],
    },
    {
        name: 'Premium Kit C',
        description: 'High-end housing kit with premium finishes, smart home integration, and energy-efficient systems. Designed for mid-to-upper market.',
        units: '3-4 Bedroom',
        sqm: '120–180 m²',
        price: 'From $55,000',
        buildTime: '14-18 weeks',
        features: ['Smart Home Ready', 'Solar + Battery', 'Premium Finishes', 'Landscaping Kit'],
    },
    {
        name: 'Multi-Unit Kit D',
        description: 'Multi-unit construction kit for apartment blocks and townhouse developments. Scalable modular design for dense housing.',
        units: '4-12 Units',
        sqm: '200–600 m²',
        price: 'From $120,000',
        buildTime: '16-24 weeks',
        features: ['Modular Design', 'Shared Amenities', 'Fire Safety System', 'Parking Structure'],
    },
];

// ===== INVESTOR DASHBOARD DATA (EXPANDED) =====
export const salesData = [
    { month: 'Jul', revenue: 12000 },
    { month: 'Aug', revenue: 19000 },
    { month: 'Sep', revenue: 28000 },
    { month: 'Oct', revenue: 35000 },
    { month: 'Nov', revenue: 42000 },
    { month: 'Dec', revenue: 51000 },
    { month: 'Jan', revenue: 58000 },
    { month: 'Feb', revenue: 67000 },
    { month: 'Mar', revenue: 79000 },
    { month: 'Apr', revenue: 92000 },
    { month: 'May', revenue: 108000 },
    { month: 'Jun', revenue: 125000 },
];

export const marketingData = [
    { month: 'Jul', leads: 120, conversions: 28 },
    { month: 'Aug', leads: 180, conversions: 42 },
    { month: 'Sep', leads: 220, conversions: 58 },
    { month: 'Oct', leads: 290, conversions: 72 },
    { month: 'Nov', leads: 340, conversions: 88 },
    { month: 'Dec', leads: 380, conversions: 95 },
    { month: 'Jan', leads: 420, conversions: 110 },
    { month: 'Feb', leads: 460, conversions: 125 },
    { month: 'Mar', leads: 520, conversions: 140 },
    { month: 'Apr', leads: 580, conversions: 155 },
    { month: 'May', leads: 640, conversions: 175 },
    { month: 'Jun', leads: 710, conversions: 198 },
];

export const operationalData = [
    { quarter: 'Q1 2024', completion: 22 },
    { quarter: 'Q2 2024', completion: 38 },
    { quarter: 'Q3 2024', completion: 55 },
    { quarter: 'Q4 2024', completion: 68 },
    { quarter: 'Q1 2025', completion: 82 },
];

export const financialData = [
    { quarter: 'Q1 2024', revenue: 120000, costs: 95000 },
    { quarter: 'Q2 2024', revenue: 185000, costs: 130000 },
    { quarter: 'Q3 2024', revenue: 260000, costs: 175000 },
    { quarter: 'Q4 2024', revenue: 340000, costs: 210000 },
    { quarter: 'Q1 2025', revenue: 420000, costs: 250000 },
];

export const supportData = [
    { month: 'Jan', technical: 18, warranty: 12, general: 15 },
    { month: 'Feb', technical: 22, warranty: 14, general: 16 },
    { month: 'Mar', technical: 15, warranty: 10, general: 13 },
    { month: 'Apr', technical: 28, warranty: 18, general: 15 },
    { month: 'May', technical: 20, warranty: 12, general: 15 },
    { month: 'Jun', technical: 24, warranty: 16, general: 15 },
];

export const investorKPIs = [
    { label: 'Annual Revenue Run Rate', value: '$1.33M', change: '+24%' },
    { label: 'Gross Margin', value: '38.2%', change: '+3.1%' },
    { label: 'Units Delivered', value: '650', change: '+180' },
    { label: 'Customer Acquisition Cost', value: '$1,200', change: '-18%' },
    { label: 'Avg Revenue Per Unit', value: '$5,450', change: '+12%' },
    { label: 'Employee Count', value: '87', change: '+15' },
    { label: 'Net Promoter Score', value: '72', change: '+8' },
    { label: 'MRR Growth', value: '14.2%', change: '+2.1%' },
];

export const investmentRounds = [
    { round: 'Pre-Seed', amount: '$500K', date: 'Q2 2021', leadInvestor: 'Angel Investors', valuation: '$2.5M', status: 'Completed' },
    { round: 'Seed', amount: '$2.5M', date: 'Q1 2022', leadInvestor: 'GreenBridge Capital, AFC', valuation: '$12M', status: 'Completed' },
    { round: 'Series A', amount: '$8.5M', date: 'Q4 2024', leadInvestor: 'World Bank IFC, AfDB, GreenBridge', valuation: '$45M', status: 'Completed' },
    { round: 'Series B (Target)', amount: '$25M', date: 'Q2 2026', leadInvestor: 'Seeking Lead Investor', valuation: '$120M (Target)', status: 'Current' },
];

export const unitEconomics = [
    { label: 'Average Unit Price', value: '$32,000', description: 'Weighted average across all house kit types and markets.' },
    { label: 'Construction Cost', value: '$21,500', description: 'All-in cost including materials, labor, and logistics.' },
    { label: 'Gross Profit / Unit', value: '$10,500', description: 'Revenue minus direct construction costs per unit.' },
    { label: 'Franchise Fee', value: '$3,200/unit', description: 'Revenue from franchise licensing per unit constructed.' },
    { label: 'Platform Revenue / Unit', value: '$1,800', description: 'SaaS and procurement platform fees per unit.' },
    { label: 'Contribution Margin', value: '34%', description: 'After all variable costs, before fixed overhead.' },
];
