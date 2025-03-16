// Define TypeScript interfaces
interface CoreServices {
    title: string;
    description: string;
}

interface ServiceCategory {
    title: string;
    points: string[];
}

interface ServiceProvider {
    title: string;
    description: string;
    otherServices: string[];
    subDescription: string;
}

interface Service {
    id: number;
    service: string;
    description: string;
    features?: string[];
    longDescription1?: string;
    longDescription2?: string;
    longDescription3?: string;
    coreServicesCategory?: CoreServices[];
    servicesOffered?: ServiceCategory[];
    valueProposition?: CoreServices[];
    image?: string;
    serviceProvider?: ServiceProvider;
    conclusion?: string;
}

const services: Service[] = [
    {
        id: 1,
        service: "Project Management",
        image: "/servicesImg/pm-img4.jpg",
        description:
            "Comprehensive approach of planning, executing, and managing service-oriented projects to ensure delivery of high-quality services.",
        longDescription1:
            "At FORZO this Service is a comprehensive approach of planning, executing, and managing service-oriented projects. That involves coordinating resources, managing timelines, and ensuring the delivery of high-quality services that meet client expectations and organizational goals.",
        longDescription2:
            "It integrates best practices and tools to streamline project workflows, monitor progress, and handle potential challenges proactively.",
        features: [
            "Planning and resource coordination",
            "Timeline management",
            "Quality service delivery",
            "Efficient workflow streamlining",
        ],
        coreServicesCategory: [
            {
                title: "Planning",
                description:
                    "Defining project scope, objectives, and deliverables.",
            },
            {
                title: "Resource Management",
                description:
                    "Allocating human, financial, and technological resources effectively.",
            },
            {
                title: "Execution",
                description:
                    "Implementing project plans and managing day-to-day operations.",
            },
            {
                title: "Monitoring & Control",
                description:
                    "Tracking project progress, managing risks, and making necessary adjustments.",
            },
            {
                title: "Delivery",
                description:
                    "Ensuring project outcomes meet quality standards and client satisfaction.",
            },
        ],
        conclusion:
            "Our Service Project Management fosters collaboration, transparency, and efficiency, contributing to the successful completion of projects within scope, time, and budget constraints.",
    },
    {
        id: 2,
        service: "Layout, Design & Engineering",
        image: "/servicesImg/lde-img1.webp",
        description:
            "Holistic service offering that encompasses planning, conceptualization, and execution of layout designs and engineering solutions.",
        longDescription1:
            "At FORZO Layout, Design & Engineering is a holistic service offering that encompasses the planning, conceptualization, and execution of layout designs and engineering solutions for a variety of projects. This service is tailored to meet the unique needs of clients across industries, focusing on creating efficient, functional, and aesthetically pleasing environments.",
        longDescription2:
            "The Layout component involves strategic planning of physical spaces to optimize workflow, enhance user experience, and ensure compliance with regulatory standards. This includes site analysis, space planning, and layout development to create practical and effective designs. Designing at FORZO focus on translating client visions into detailed, visual representations. This includes architectural and interior design, 3D modeling, and the creation of design documentation that helps bring concepts to life. The design process is iterative, incorporating client feedback to achieve the desired outcome.",
        longDescription3:
            "Engineering plays a critical role in ensuring that design concepts are not only visually appealing but also structurally sound and technically feasible. The engineering team at FORZO is involved in creating detailed technical drawings, conducting feasibility studies, and managing engineering aspects such as mechanical, electrical, and structural systems. A key strength of our Layout, Design & Engineering is its collaborative approach. By integrating layout planning, design creativity, and engineering precision, FORZO ensures that every project is executed efficiently, within budget, and aligned with client objectives.",
        features: [
            "Strategic space planning",
            "Detailed visual design",
            "Technical drawing creation",
            "Collaborative approach integration",
        ],
        conclusion:
            "Our Layout, Design & Engineering offers end-to-end solutions that transform ideas into reality, delivering spaces that are not only functional but also inspire and engage those who use them.",
    },
    {
        id: 3,
        service: "Supply, Installation, Erection & Commissioning",
        image: "/servicesImg/sic-img1.jpg",
        description:
            "Comprehensive service covering the end-to-end process of delivering and implementing equipment, systems, and infrastructure.",
        longDescription1:
            "At FORZO Supply, Installation, Erection & Commissioning is a comprehensive service offering that covers the end-to-end process of delivering and implementing equipment, systems, and infrastructure for a variety of projects. This ensures that all components are supplied, installed, and made operational with precision and efficiency.",
        longDescription2:
            "The Supply phase involves sourcing high-quality materials and equipment from trusted vendors. FORZO focuses on quality assurance, timely procurement, and cost-effective purchasing to support project requirements. During the Installation, FORZO's skilled technicians and engineers handle the placement and setup of equipment, ensuring compliance with design specifications and safety standards. The process is meticulously managed to avoid disruptions and maintain project timelines.",
        longDescription3:
            "Erection include assembling and constructing equipment or structures on-site. This involves detailed planning, safe handling of materials, and adherence to engineering best practices to achieve structural stability and integrity. Commissioning is the final stage where installed systems are tested and calibrated to ensure they operate as intended. This includes performance testing, fine-tuning settings, and verifying compliance with operational requirements. FORZO's team ensures that all systems are fully functional and ready for use.",
        features: [
            "Quality material sourcing",
            "Skilled technical installation",
            "Detailed on-site construction",
            "Comprehensive system testing",
        ],
        conclusion:
            "FORZO delivers seamless project execution, minimizes risks, and ensures projects are completed on time, within budget, and to the highest quality standards.",
    },
    {
        id: 4,
        service: "Industrial Piping and Fabrication",
        image: "/servicesImg/ipf-img1.jpg",
        description:
            "High-quality, reliable, and efficient piping and fabrication solutions for various industries including oil and gas, petrochemical, power generation, and more.",
        longDescription1:
            "FORZO is a leading provider of industrial piping and fabrication solutions, delivering high-quality, reliable, and efficient services to various industries, including oil and gas, petrochemical, power generation, water treatment, and manufacturing. With a commitment to excellence, safety, and innovation, FORZO ensures seamless project execution from design to installation.",
        features: [
            "High-quality material usage",
            "Reliable fabrication processes",
            "Efficient installation methods",
            "Innovative design solutions",
        ],
        coreServicesCategory: [
            {
                title: "Industrial Piping",
                description:
                    "Comprehensive piping solutions, including design, fabrication, installation, and maintenance of piping systems for process, utility, and infrastructure applications.",
            },
            {
                title: "Fabrication",
                description:
                    "Custom metal fabrication services, including structural steel, skids, pressure vessels, and modular components, using advanced technology and skilled craftsmanship.",
            },
            {
                title: "Installation & Maintenance",
                description:
                    "End-to-end installation services and preventative maintenance programs to maximize system efficiency and longevity.",
            },
            {
                title: "Safety & Compliance",
                description:
                    "Strict adherence to safety protocols and regulatory standards.",
            },
            {
                title: "Quality Assurance",
                description:
                    "High-quality materials, skilled workmanship, and rigorous testing.",
            },
            {
                title: "Technical Expertise",
                description:
                    "Experienced professionals and state-of-the-art equipment.",
            },
            {
                title: "Customer Focus",
                description:
                    "Tailored solutions to meet specific project needs and goals.",
            },
        ],
        conclusion:
            "FORZO stands as a trusted partner in industrial piping and fabrication, offering robust, innovative, and cost-effective solutions that drive operational efficiency and project success.",
    },
    {
        id: 5,
        service: "Revamping and Re-installation",
        image: "/servicesImg/rr-img1.jpeg",
        description:
            "Specialized services for upgrading, modernizing, and reconfiguring industrial facilities and equipment to enhance operational performance.",
        longDescription1:
            "FORZO is a trusted provider of revamping and re-installation services, specializing in upgrading, modernizing, and reconfiguring industrial facilities and equipment. Serving in various industries, FORZO delivers efficient and cost-effective solutions to enhance operational performance and extend asset life.",
        features: [
            "System modernization",
            "Equipment reconfiguration",
            "Performance enhancement",
            "Asset life extension",
        ],
        coreServicesCategory: [
            {
                title: "Revamping",
                description:
                    "Comprehensive assessment and modernization of existing systems, including process optimization, capacity expansion, and equipment upgrades. FORZO enhances efficiency, safety, and compliance with the latest standards.",
            },
            {
                title: "Re-Installation",
                description:
                    "Expert dismantling, relocation, and reinstallation of industrial equipment and systems, ensuring minimal downtime and seamless integration into new configurations.",
            },
            {
                title: "Engineering & Design",
                description:
                    "Tailored engineering solutions to support revamping and re-installation projects, including 3D modeling, system redesign, and feasibility studies.",
            },
            {
                title: "Maintenance & Support",
                description:
                    "Ongoing maintenance, troubleshooting, and support to maintain optimal performance of revamped and re-installed systems.",
            },
            {
                title: "Technical Expertise",
                description:
                    "Skilled professionals with experience in complex industrial environments.",
            },
            {
                title: "Safety & Compliance",
                description:
                    "Commitment to safety protocols and regulatory compliance throughout the project lifecycle.",
            },
            {
                title: "Efficiency & Reliability",
                description:
                    "Minimized disruption to operations with a focus on timely project completion.",
            },
            {
                title: "Custom Solutions",
                description:
                    "Adaptable services that meet specific operational and budgetary requirements.",
            },
        ],
        conclusion:
            "FORZO provides robust and reliable revamping and re-installation services, helping clients modernize their facilities, optimize performance, and achieve long-term operational success.",
    },
    {
        id: 6,
        service: "Operation & Maintenance",
        image: "/servicesImg/om-img1.jpg",
        description:
            "Comprehensive solutions to enhance operational efficiency, maximize asset lifespan, and ensure safety and compliance through tailored services.",
        longDescription1:
            "FORZO is a specialized contractor providing comprehensive Plant Operation & Maintenance solutions across diverse industries. Our mission is to enhance operational efficiency, maximize asset lifespan, and ensure safety and compliance through tailored Operation & Maintenance services.",
        features: [
            "24/7 operational management",
            "Preventative maintenance programs",
            "Asset lifecycle maximization",
            "Safety protocol adherence",
        ],
        servicesOffered: [
            {
                title: "Operation Services",
                points: [
                    "Round-the-clock plant operation management.",
                    "Skilled manpower supply and training.",
                    "Monitoring and control systems integration.",
                ],
            },
            {
                title: "Maintenance Services",
                points: [
                    "Preventive, predictive, and corrective maintenance.",
                    "Equipment diagnostics and troubleshooting.",
                    "Asset integrity management and optimization.",
                ],
            },
            {
                title: "Support Services",
                points: [
                    "Spare parts management and procurement.",
                    "Safety management and compliance audits.",
                    "Energy management and performance enhancement.",
                ],
            },
        ],
        valueProposition: [
            {
                title: "Expertise",
                description:
                    "Highly trained personnel and advanced methodologies.",
            },
            {
                title: "Reliability",
                description: "Proactive maintenance to minimize downtime.",
            },
            {
                title: "Cost Efficiency",
                description:
                    "Optimized operations to reduce operational expenses.",
            },
            {
                title: "Safety & Compliance",
                description: "Adherence to international safety standards.",
            },
        ],
        conclusion:
            "With a strong track record in managing complex plant operations and maintenance challenges, FORZO ensures productivity, safety, and sustainability, making us the preferred partner for Operation & Maintenance needs.",
    },
    {
        id: 7,
        service: "Plant Productivity Improvement",
        image: "/servicesImg/pp-img1.avif",
        description:
            "Specialized solutions aimed at enhancing operational efficiency, optimizing processes, and maximizing output across various industries.",
        longDescription1:
            "FORZO offers specialized Productivity Improvement solutions aimed at enhancing operational efficiency, optimizing processes, and maximizing output across various industries. Our approach integrates advanced technologies, industry best practices, and expert insights to drive measurable performance gains.",
        features: [
            "Workflow bottleneck elimination",
            "Process optimization techniques",
            "Resource utilization improvement",
            "Output maximization strategies",
        ],
        servicesOffered: [
            {
                title: "Process Optimization",
                points: [
                    "Analysis of existing workflows and identification of bottlenecks.",
                    "Implementation of Lean and Six Sigma methodologies.",
                    "Streamlining production processes for higher efficiency.",
                ],
            },
            {
                title: "Technology Integration",
                points: [
                    "Automation and digital transformation solutions.",
                    "Deployment of smart monitoring and control systems.",
                    "Data analytics for predictive maintenance and real-time performance tracking.",
                ],
            },
            {
                title: "Resource Management",
                points: [
                    "Effective utilization of manpower, materials, and equipment.",
                    "Energy management to reduce costs and enhance sustainability.",
                    "Inventory optimization to avoid production delays.",
                ],
            },
        ],
        valueProposition: [
            {
                title: "Increased Efficiency",
                description: "Improved process flow and reduced waste.",
            },
            {
                title: "Higher Output",
                description:
                    "Enhanced production rates with existing resources.",
            },
            {
                title: "Cost Savings",
                description:
                    "Lower operational costs through efficiency gains.",
            },
            {
                title: "Sustainability",
                description:
                    "Optimized resource consumption and reduced environmental impact.",
            },
        ],
        conclusion:
            "With a proven track record in boosting productivity, FORZO delivers tailored solutions that align with client goals, driving long-term operational excellence and profitability.",
    },
    {
        id: 8,
        service: "Industrial Automation (IoT)",
        image: "/servicesImg/iot-img1.webp",
        description:
            "Cutting-edge solutions powered by the Internet of Things to transform industrial operations into smart, efficient, and data-driven environments.",
        longDescription1:
            "FORZO provides cutting-edge Industrial Automation solutions powered by the Internet of Things (IOT) to transform industrial operations into smart, efficient, and data-driven environments. Our solutions cater to diverse industries, to optimize processes, reduce costs, and enhance productivity.",
        features: [
            "Smart sensor integration",
            "Real-time data monitoring",
            "Automated control systems",
            "Predictive maintenance analytics",
        ],
        servicesOffered: [
            {
                title: "Automation Solutions",
                points: [
                    "Design and integration of automated control systems.",
                    "Robotics and process automation for repetitive tasks.",
                    "Programmable Logic Controller (PLC) and SCADA system implementation.",
                ],
            },
            {
                title: "IOT Integration",
                points: [
                    "Smart sensors and devices for real-time data collection.",
                    "Development of IOT-enabled monitoring and control systems.",
                    "Predictive maintenance through data analytics and machine learning.",
                ],
            },
            {
                title: "Data-Driven Insights",
                points: [
                    "Visualization dashboards for process monitoring.",
                    "Anomaly detection and predictive analytics.",
                    "Custom reporting tools to support data-driven decision-making.",
                ],
            },
        ],
        valueProposition: [
            {
                title: "Increased Efficiency",
                description:
                    "Automate and streamline operations to reduce manual intervention.",
            },
            {
                title: "Enhanced Visibility",
                description:
                    "Real-time monitoring and control of industrial processes.",
            },
            {
                title: "Cost Reduction",
                description:
                    "Minimize downtime and maintenance costs through predictive analytics.",
            },
            {
                title: "Scalability",
                description:
                    "Future-ready solutions adaptable to evolving business needs.",
            },
        ],
        conclusion:
            "With a focus on innovation and reliability, FORZO delivers tailored Industrial Automation and IOT solutions that improve operational efficiency, safety, and profitability, positioning businesses for success in Industry.",
    },
    {
        id: 9,
        service: "Turnkey Projects",
        image: "/servicesImg/tp-img1.jpg",
        description:
            "Comprehensive end-to-end solutions for businesses seeking streamlined project execution from initial concept to final implementation.",
        longDescription1:
            "Forzo offers comprehensive Turnkey Project Services, delivering end-to-end solutions for businesses seeking streamlined project execution. Our turnkey approach ensures that every phase of a project from initial concept and design to final implementation and commissioning is managed with precision and efficiency. We handle all aspects of the project lifecycle, including planning, design, procurement, construction, installation, and quality assurance. Our experienced team coordinates each step, allowing clients to focus on their core business activities while we manage timelines, budgets, and technical requirements. Forzo Turnkey Project Service is ideal for industries requiring complex infrastructure development, equipment installation, or large-scale project management. By choosing Forzo, clients benefit from a single point of accountability, reduced risk, and accelerated project completion. With a focus on delivering high-quality results and exceeding client expectations, Forzo is a trusted partner for turnkey projects of all sizes and complexities.",
        longDescription2:
            "Forzo is a leading Engineering, Procurement, and Construction (EPC) contractor, delivering comprehensive project solutions across various industries. As an EPC contractor, Forzo manages every phase of a project, from initial design and engineering through procurement of materials and equipment, to construction and final commissioning. This end-to-end approach ensures streamlined project execution, reduced risks, and adherence to budget and timeline commitments. Forzo's engineering expertise encompasses feasibility studies, detailed design, and innovative solutions tailored to client needs. The procurement process leverages strong supplier relationships to source high-quality materials and equipment efficiently. During construction, Forzo maintains rigorous safety and quality standards, employing skilled professionals and advanced project management techniques. With a focus on sustainability and innovation, Forzo delivers projects that meet the highest industry standards. Their portfolio includes infrastructure, energy, industrial, and commercial projects, showcasing versatility and a strong track record of successful completions. Forzo's holistic approach as an EPC contractor not only simplifies project management for clients but also enhances project efficiency and performance, making them a trusted partner in delivering complex and large-scale projects globally.",
        longDescription3:
            "Forzo Turnkey Project Service is ideal for industries requiring complex infrastructure development, equipment installation, or large-scale project management. By choosing Forzo, clients benefit from a single point of accountability, reduced risk, and accelerated project completion.",
        serviceProvider: {
            title: "Forzo as an MEP Service Provider",
            description:
                "FORZO MEP Service is a leading provider of Mechanical, Electrical, and Plumbing (MEP) solutions, delivering end-to-end services for residential, commercial, and industrial projects. Our expertise spans from design and engineering to installation, maintenance, and project management, ensuring seamless integration and optimal performance of building systems.",
            otherServices: [
                "Mechanical Systems",
                "Electrical Systems",
                "Plumbing Systems",
                "Project Management",
            ],
            subDescription:
                "With a focus on safety, efficiency, and sustainability, FORZO MEP Service utilizes advanced technologies and best practices to meet and exceed client expectations. Our experienced team of engineers and technicians is committed to delivering reliable, high-quality services that enhance the functionality and comfort of built environments.",
        },
        conclusion:
            "For tailored MEP solutions and exceptional service, trust FORZO MEP Service to power your next project.",
    },
];

export default services;
export function getServiceById(id: number) {
    return services.find((service) => service.id === id) || null;
}

export function getAllServices() {
    return services;
}
