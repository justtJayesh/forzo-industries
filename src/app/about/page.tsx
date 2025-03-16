"use client";

import {
    Building2,
    Users,
    Award,
    Factory,
    ArrowRight,
    CheckCircle,
    Target,
    Eye,
    Lightbulb,
} from "lucide-react";
import Image from "next/image";

const workItems = [
    {
        title: "Power Distribution & Substation Solutions",
        description:
            "11, 22, 33, 66 & 132 KV Outdoor Substation with GIS/SF6 Breaker, Transformer, Indoor / Outdoor Breaker, Reactor, Capacitor, Cable laying, CT/PT, Energy Meter, Multiple Pole Structure, Isolator, Insulator, Earthing & Lightening Arrestor",
        image: "/powerDistributionSystem.jpg",
    },
    {
        title: "Water Treatment & Distribution Systems",
        description:
            "Water complex with motor pump, water treatment plant (RO, Softener, Ultra Filtration, Clarifies, Pressure Sand Filtration, etc.), dry & wet cooling tower, pipeline with Valve & fittings, MCC & PCC Panel with cables",
        image: "/waterTreatment.jpeg",
    },
    {
        title: "Rolling Mill Systems",
        description:
            "Siemens make complete Rolling Mill for long products with advanced automation",
        image: "/rollingMachine.jpeg",
    },
    {
        title: "Continuous Casting & Metallurgical Equipment Systems",
        description:
            "4/7, 6/11, 6/9/15 Radius Casters with water complex, withdrawal assembly, dummy bar, motors, gearbox, apron area, mould jacket, hydraulic & camshaft oscillation system, ladle & tundish car, hydraulic line with power pack, PLC Panels with wiring",
        image: "/castingImg.webp",
    },
    {
        title: "Steel Mill Material Handling & Pollution Control Systems",
        description:
            "Scrap Poker, Scrap Shearing Machine with Stationary Crane, Venturi, Cassate & Bag Filter Air Pollution Control System for Primary & Secondary, Ladle Car, Conveyors, Slag Crushing Plant, Hydraulic Grab, Magnet and EOT Cranes",
        image: "/pollution-control-sytem.jpg",
    },
    {
        title: "Industrial Power Transformer & Switchgear Solutions",
        description:
            "Power, Distribution, Furnace, Booster & Rolling Mill Transformer & Indoor / Outdoor Breaker Panel",
        image: "/transformer.jpeg",
    },
    {
        title: "Metal Processing Power & Control Systems",
        description:
            "Induction Melting Furnace & Sintering power supply unit, copper & aluminium busbar, DC Choke, Capacitor rack, SS & MS Pipeline, Hydraulic System with Pipeline, MCC & PCC Panel",
        image: "/metalProcessing.webp",
    },
    {
        title: "Industrial Electrical & Control Systems Solutions",
        description:
            "APFC Panel, UPS, PLC & SCADA, Industrial AC, Fibre Optic, LT & Ethernet Cable, Earthing, etc.",
        image: "/IoTwork.jpeg",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[600px] w-full overflow-hidden">
                <Image
                    src="/about-hero-img.jpg"
                    alt="Industrial Factory"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-6">
                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                            ESTABLISHED 1998
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            Building Industrial Excellence
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            FORZO INDUSTRIAL SOLUTIONS PVT LTD is a leading
                            provider of industrial solutions across diverse
                            industries.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 mt-8">
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                                <p className="text-3xl font-bold text-white">
                                    25+
                                </p>
                                <p className="text-gray-300">
                                    Years Experience
                                </p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                                <p className="text-3xl font-bold text-white">
                                    15,000+
                                </p>
                                <p className="text-gray-300">Staff Served</p>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg">
                                <p className="text-3xl font-bold text-white">
                                    200+
                                </p>
                                <p className="text-gray-300">
                                    Companies Served
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Company Overview */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16">
                        <div className="md:w-1/2">
                            <div>
                                <div className="text-red-600 font-semibold mb-4">
                                    OUR STORY
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                    From Humble Beginnings to Industry Leader
                                </h2>
                                <p className="text-lg text-gray-800 mb-8">
                                    <b>FORZO INDUSTRIAL SOLUTIONS PVT LTD</b>{" "}
                                    was established in Pune, India in the year
                                    1998 as a sole proprietorship firm initially
                                    called <b>Hariprakash Singh</b> (Promoter
                                    Name) and is now incorporated as a Private
                                    Limited company in the year <b>2022</b>.
                                    Over the years we have spread across the
                                    country having representatives or branches
                                    at Mumbai, Nashik, Jalna, Nagpur, Raipur,
                                    Mandi Govindgarh and Bengaluru.
                                </p>
                                <p className="text-lg text-gray-800 mb-8">
                                    Our promoter <b>Mr Hari Singh</b> has{" "}
                                    <b>30+ Years</b> of experience in the
                                    <b>Industry</b> with maintaining a very good
                                    reputation in the market and being well
                                    known for the{" "}
                                    <b>Erection & Commissioning</b> work.
                                </p>
                                <p className="text-lg text-gray-800 mb-8">
                                    Forzo offers professional services
                                    <b>“Dedicated to Industrial Segment”</b> and
                                    has an envious inventory of <b>15000+</b>
                                    manpower/staff served to more than{" "}
                                    <b>200+</b>
                                    companies (with <b>70%</b> Repeated) in two
                                    decades. We offer{" "}
                                    <b>Total Operation and Maintenance</b>{" "}
                                    services ranging from project development
                                    support through mobilization services to O&M
                                    contracts from start-up of commercial
                                    operation, supporting the whole project life
                                    cycle. The dynamic contribution of over{" "}
                                    <b>1600 manpower</b> is our immense
                                    potential.
                                </p>
                                <p className="text-lg text-gray-800 mb-8">
                                    We have <b>250+ experienced personnel</b>{" "}
                                    (Site Managers, Engineers, Supervisors &
                                    Skilled / Unskilled Labours) dedicated for
                                    the{" "}
                                    <b>
                                        Installation, Erection & Commissioning
                                        work
                                    </b>
                                    .
                                </p>
                                <p className=" text-lg text-gray-800 mb-8">
                                    <b>Forzo</b> can provide{" "}
                                    <b>Total Manpower Solutions</b> ranging from
                                    skilled / technician / engineers to senior
                                    management and contracts from the{" "}
                                    <b>concept to commercial operation</b>,
                                    supporting the whole project and operation
                                    life cycle association.
                                </p>
                                {/* <div className="flex items-center gap-2 text-red-600 font-medium">
                                    <span>Learn more about our journey</span>
                                    <ArrowRight className="h-5 w-5" />
                                </div> */}
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="sticky top-24 grid gap-8">
                                <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src="/about-image2.jpg"
                                        alt="Industrial Operations"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-8">
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <Users className="h-10 w-10 text-red-600 mb-4" />
                                        <h3 className="text-xl font-bold mb-2">
                                            Expert Team
                                        </h3>
                                        <p className="text-gray-600">
                                            Our team consists of highly skilled
                                            professionals with years of industry
                                            experience.
                                        </p>
                                    </div>
                                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                                        <Building2 className="h-10 w-10 text-red-600 mb-4" />
                                        <h3 className="text-xl font-bold mb-2">
                                            National Presence
                                        </h3>
                                        <p className="text-gray-600">
                                            Over the years we have spread across
                                            the country.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overview Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/vision_n_mission.jpg"
                                    alt="Industrial Capabilities"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="text-red-600 font-semibold mb-4">
                                OUR EXPERTISE
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Comprehensive Industrial Solutions Provider
                            </h2>
                            <p className="text-base text-gray-600 mb-8">
                                Forzo offers complete solutions for the Industry
                                starting from design and detailed engineering to
                                procurement, fabrication, construction, erection
                                and installation and successful commissioning of
                                the plant or machinery. We offer complete
                                manpower for individual machinery or complete
                                plant Operation & Maintenance on contractual
                                basis or on payroll.
                            </p>
                            <div className="grid gap-6">
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <Target className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            Our Vision
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            To be the PREFERRED partner for the
                                            Project & Manpower Solutions
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <Eye className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            Our Mission
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            To deliver quality & value through
                                            maintaining a quality management
                                            system that provides our clients
                                            with quality product
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">
                                            Our Values
                                        </h3>
                                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-red-600" />
                                                Innovation
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-red-600" />
                                                Teamwork
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-red-600" />
                                                Delivery
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-red-600" />
                                                Experience
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-red-600" />
                                                Satisfaction
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Policies Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-red-600 font-semibold mb-4">
                            OUR COMMITMENT
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Guided by Strong Principles
                        </h2>
                        <p className="text-lg text-gray-600">
                            At FORZO, we are committed to maintaining the
                            highest standards in quality, safety, and
                            environmental responsibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group">
                            <div className="bg-white p-10 rounded-2xl h-full transition-all duration-300 group-hover:bg-red-600 group-hover:shadow-xl">
                                <Award className="h-12 w-12 text-red-600 mb-6 transition-colors group-hover:text-white" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors group-hover:text-white">
                                    Quality Policy
                                </h3>
                                <p className="text-gray-600 transition-colors group-hover:text-white/90">
                                    We are committed to attain, deliver and
                                    maintain the highest standards of quality in
                                    our supplies & services to achieve maximum
                                    customer satisfaction with unerring
                                    regularity on a lasting basis.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-white p-10 rounded-2xl h-full transition-all duration-300 group-hover:bg-red-600 group-hover:shadow-xl">
                                <Users className="h-12 w-12 text-red-600 mb-6 transition-colors group-hover:text-white" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors group-hover:text-white">
                                    Safety & Health Policy
                                </h3>
                                <p className="text-gray-600 transition-colors group-hover:text-white/90">
                                    We are committed to safety & health of our
                                    Manpower and equipment's. We are dedicated
                                    to implementation of the highest safety
                                    Standards through awareness and training.
                                </p>
                            </div>
                        </div>

                        <div className="group">
                            <div className="bg-white p-10 rounded-2xl h-full transition-all duration-300 group-hover:bg-red-600 group-hover:shadow-xl">
                                <Factory className="h-12 w-12 text-red-600 mb-6 transition-colors group-hover:text-white" />
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors group-hover:text-white">
                                    Environmental Policy
                                </h3>
                                <p className="text-gray-600 transition-colors group-hover:text-white/90">
                                    We are committed to conduct operations in a
                                    manner compatible with environmental and
                                    economic development of the community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Work Description Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="text-red-600 font-semibold mb-4">
                            OUR CAPABILITIES
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Comprehensive Work Scope
                        </h2>
                        <p className="text-base text-gray-600">
                            From power distribution to industrial automation, we
                            handle diverse industrial projects with expertise
                            and precision.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {workItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-xl p-6"
                            >
                                <div className="relative h-48 rounded-lg overflow-hidden mb-6">
                                    <Image
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Director's Message */}
            <div className="py-24 bg-gray-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="text-red-500 font-semibold mb-4">
                                LEADERSHIP
                            </div>
                            <h2 className="text-4xl font-bold mb-8">
                                Director's Message
                            </h2>

                            <blockquote className="space-y-2 text-xl italic text-gray-300 border-l-4 border-red-500 pl-6 my-8">
                                <p>
                                    "I welcome you to be a part of our
                                    meaningful journey marked by commitment to
                                    quality, trust and, of course, commercial
                                    growth. What started as a family business
                                    way back in 1998, our quality assurance
                                    managers, erection team and the workers at
                                    the plant / units are as driven to serve you
                                    satisfactorily.
                                </p>
                                <p>
                                    Our family gets bigger every day with our
                                    ever-growing clientele. Emboldened by the
                                    encouragement of more than 200 satisfied
                                    clients, we look forward to successfully
                                    serve an even wider client base than what we
                                    are doing, at present.
                                </p>
                                <p>
                                    With your constant support shaping our
                                    entrepreneurial ambitions, we’re sure that
                                    we will be able to conquer further
                                    milestones."
                                </p>
                            </blockquote>

                            {/* Directors Message */}
                            {/* <div className="mt-8">
                                <p className="font-bold text-xl">
                                    Hariprakash Singh
                                </p>
                                <p className="text-red-500">Director</p>
                            </div> */}
                        </div>

                        <div className="relative h-[500px] rounded-2xl overflow-hidden">
                            <Image
                                src="/director-msg1.jpg"
                                alt="Director"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
