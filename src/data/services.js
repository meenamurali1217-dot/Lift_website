export const services = [
  {
    id: 'elevator-installation',
    title: 'Turnkey Elevator Installation',
    slug: 'elevator-installation',
    shortDescription: 'Full-cycle engineering, civil shaft coordination, mechanical erection, precision rail alignment, and statutory safety licensing.',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    overview: 'From initial architectural blueprints through to government lift licensing and handover, BlueStar Lifts manages every step of your elevator installation with military precision.',
    benefits: [
      'Comprehensive civil shaft inspection and laser-guided plumb alignment',
      'Minimization of noise and structural vibration using elastomeric isolators',
      'Dedicated project manager handling government inspection and PWD / statutory licenses',
      'Pre-commissioning 125% full load testing and safety certificate issuance'
    ],
    process: [
      { step: '01', title: 'Site Survey & Shaft Laser Plumb', desc: 'Thorough structural audit of hoistway dimensions, pit depth, overhead, and power feed.' },
      { step: '02', title: 'Mechanical Rigging & Rail Alignment', desc: 'Installation of high-tensile guide rails calibrated with laser alignment tools within 0.5 mm tolerance.' },
      { step: '03', title: 'Cabin & Drive Integration', desc: 'Mounting of the PMSM traction machine, counterweight balancing, and luxury cabin assembly.' },
      { step: '04', title: 'Electrical Wiring & Control Calibration', desc: '32-bit microprocessor controller configuration, landing door interlocks, and safety circuit testing.' },
      { step: '05', title: 'Inspection & Statutory Handover', desc: 'Rigorous dynamic load testing, safety gear activation verification, and official licensing.' }
    ]
  },
  {
    id: 'elevator-maintenance',
    title: 'Preventive Elevator Maintenance',
    slug: 'elevator-maintenance',
    shortDescription: 'Scheduled monthly inspections, predictive lubrication, component wear diagnostics, and 24/7 technical surveillance.',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    overview: 'Our proactive maintenance philosophy stops breakdowns before they happen. Our trained technicians conduct comprehensive 38-point mechanical and electrical audits every month.',
    benefits: [
      'Guaranteed 99.8% fleet uptime across all contracted installations',
      'Systematic rope tension testing, brake torque calibration, and guide rail lubrication',
      'Genuine original OEM spare parts used exclusively',
      'Digital service logs accessible anytime by building facilities managers'
    ],
    process: [
      { step: '01', title: 'Monthly 38-Point Check', desc: 'Comprehensive inspection of brake mechanisms, rope tension, door rollers, and safety interlocks.' },
      { step: '02', title: 'Predictive Lubrication', desc: 'Application of high-grade lubricants to guide rails and bearings to prevent frictional wear.' },
      { step: '03', title: 'Digital Audit Record', desc: 'Real-time mobile technician log signed off and synchronized to the customer facility portal.' }
    ]
  },
  {
    id: 'elevator-repair',
    title: '24/7 Rapid Breakdown & Repair',
    slug: 'elevator-repair',
    shortDescription: 'Round-the-clock emergency dispatch with 30-minute passenger entrapment rescue response in major metros.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    overview: 'When an elevator stops, business stops. BlueStar Lifts maintains round-the-clock mobile rapid response squads stationed across key urban sectors with ready spares.',
    benefits: [
      '30-minute rapid rescue response protocol for passenger entrapments',
      '24/7 Toll-Free Emergency Dispatch Center operating 365 days a year',
      'Fully equipped mobile vans stocked with critical switches, contactors, and sensors',
      'Direct communication channel between car emergency intercom and central dispatch'
    ],
    process: [
      { step: '01', title: 'Instant Distress Alert', desc: 'Emergency call received via in-car GSM intercom or building facility helpline.' },
      { step: '02', title: 'Squad Dispatch', desc: 'Nearest mobile technician squad dispatched with real-time GPS tracking.' },
      { step: '03', title: 'Safe Passenger Evacuation', desc: 'Execution of standard manual brake-release safe floor landing protocol.' },
      { step: '04', title: 'Fault Rectification', desc: 'Component testing, replacement of defective part, and return to service.' }
    ]
  },
  {
    id: 'elevator-modernization',
    title: 'Elevator Modernization & Upgrades',
    slug: 'elevator-modernization',
    shortDescription: 'Transform aging, high-energy, noisy lifts into whisper-quiet, modern, energy-efficient systems without replacing existing shafts.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80',
    overview: 'Give your building a modern rebirth. Our modular modernization packages replace obsolete geared motors with permanent magnet gearless units, saving up to 45% power and enhancing building asset value.',
    benefits: [
      'Up to 45% reduction in elevator power consumption with regenerative drives',
      'Drastically reduced passenger waiting times via modern microprocessor group controllers',
      'Total cabin aesthetic facelift (brushed stainless steel, modern LED lighting, glass panels)',
      'Compliance with modern National Building Code (NBC 2016) safety regulations'
    ],
    process: [
      { step: '01', title: 'Life Cycle Assessment', desc: 'Evaluation of existing guide rails, machine room layout, and structural capacity.' },
      { step: '02', title: 'Modular Engineering Plan', desc: 'Targeted upgrade package (Drive, Controller, Door Operators, or Full Cabin).' },
      { step: '03', title: 'Staged Implementation', desc: 'Work executed in occupied buildings with minimal passenger disruption.' }
    ]
  },
  {
    id: 'amc-contracts',
    title: 'Annual Maintenance Contracts (AMC)',
    slug: 'amc-contracts',
    shortDescription: 'Predictable, all-inclusive maintenance packages protecting your capital investment and ensuring compliance peace-of-mind.',
    iconName: 'FileCheck',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    overview: 'Protect your building assets with our transparent Annual Maintenance Contracts. Choose from Bronze, Silver, or Comprehensive Platinum plans tailored to your traffic volume and budget.',
    benefits: [
      'Priority emergency callouts with contractually committed SLAs',
      'Routine statutory safety checkups and licensing renewal assistance',
      'Platinum plan covers all major mechanical and electronic replacement parts',
      'Flat, predictable annual budgeting with zero surprise breakdown invoices'
    ],
    process: [
      { step: '01', title: 'Free Asset Audit', desc: 'Our technical director inspects your elevator fleet and recommends the ideal AMC tier.' },
      { step: '02', title: 'Service Level Agreement', desc: 'Clear contractual commitments on response time, spare coverage, and inspection cadence.' },
      { step: '03', title: 'Continuous Care', desc: 'Automated scheduling of monthly maintenance visits and annual safety load testing.' }
    ]
  },
  {
    id: 'technical-support-audits',
    title: 'Safety Audits & Technical Testing',
    slug: 'technical-support-audits',
    shortDescription: 'Third-party safety certifications, dynamic 125% load tests, vibration harmonics analysis, and legal compliance consulting.',
    iconName: 'Award',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    overview: 'Ensure your vertical transportation conforms strictly to IS 14665, National Building Code 2016, and state lift inspectorate guidelines with our certified safety audit team.',
    benefits: [
      'Comprehensive 75-point statutory safety and risk audit report',
      'Dynamic full-capacity overspeed governor and safety clamp arrest test',
      'Door closing force and optical infrared sensor calibration',
      'Assistance with state lift licensing renewals and PWD liaison'
    ],
    process: [
      { step: '01', title: 'Physical Audit', desc: 'In-depth measurement of brake holding torque, rope elongation, and rail straightness.' },
      { step: '02', title: 'Vibration & Acoustic Analysis', desc: 'High-precision accelerometers measure cabin ride quality and acoustic dB levels.' },
      { step: '03', title: 'Compliance Certification', desc: 'Delivery of detailed safety audit documentation with corrective recommendations.' }
    ]
  }
];

export const amcPlans = [
  {
    id: 'silver',
    name: 'Silver Care',
    tier: 'Standard Preventive',
    pricePerLiftMonth: '₹ 1,800',
    pricePerLiftYear: '₹ 21,600',
    idealFor: 'Low-rise residential buildings (up to 4 floors) with low daily traffic.',
    features: [
      '12 Scheduled Monthly Routine Inspections per year',
      'Lubrication of guide rails, bearings, and door mechanisms',
      'Adjustment of door interlocks and brake clearances',
      'Normal Breakdown Callouts (8 AM to 8 PM)',
      'Digital Service Sheets after every visit',
      'Spares billed separately at discounted AMC rates'
    ],
    slaResponse: '4 Hours (Standard Hours)',
    isPopular: false
  },
  {
    id: 'gold',
    name: 'Gold Care',
    tier: 'Semi-Comprehensive',
    pricePerLiftMonth: '₹ 2,900',
    pricePerLiftYear: '₹ 34,800',
    idealFor: 'Mid-rise residential societies and commercial offices up to 12 floors.',
    features: [
      '12 Scheduled Monthly Routine Inspections per year',
      'Minor consumables included (oils, contactors, carbon brushes, fuses, push button lamps)',
      '24/7 Breakdown Assistance with rapid dispatch',
      'Emergency passenger entrapment rescue (60-minute SLA)',
      'Annual Safety Gear Drop & Governor inspection',
      'Statutory Lift License renewal assistance'
    ],
    slaResponse: '2 Hours (24/7 Available)',
    isPopular: true
  },
  {
    id: 'platinum',
    name: 'Platinum Care',
    tier: 'Fully Comprehensive',
    pricePerLiftMonth: '₹ 4,500',
    pricePerLiftYear: '₹ 54,000',
    idealFor: 'High-rise towers, hospitals, corporate headquarters, and high-traffic malls.',
    features: [
      '12 Monthly Inspections + 4 Quarterly Deep Technical Audits',
      '100% Spares Coverage (Controller PCBs, Inverter Drives, Motors, Ropes, Door Operators)',
      'Priority 24/7 Emergency Dispatch with 30-minute passenger rescue SLA',
      'Dedicated BlueStar resident engineer on call',
      'Annual 125% Dynamic Load Test with third-party certification',
      'Predictive IoT remote monitoring sensor unit included',
      'Zero additional repair invoices — total peace of mind'
    ],
    slaResponse: '30-45 Minutes (Guaranteed SLA)',
    isPopular: false
  }
];
