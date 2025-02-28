"use client";

import { useState } from "react";
import ServiceList from "./ServiceList";
import ServiceDetails from "./ServiceDetails";

// Sample data for services
const services = [
    {
        id: 1,
        name: "Project Management",
        description: "Professional cleaning services for homes and offices.",
    },
    {
        id: 2,
        name: "Layout, Design & Engineering",
        description: "Expert plumbing services for all your needs.",
    },
    {
        id: 3,
        name: "Supply, Installation, Erection & Commissioning",
        description:
            "Reliable electrical services for residential and commercial properties.",
    },
    {
        id: 4,
        name: "Industrial Piping & Fabrication",
        description:
            "High-quality painting services for interior and exterior.",
    },
    {
        id: 5,
        name: "Revamping & Re-installation",
        description: "Comprehensive gardening and landscaping services.",
    },
    {
        id: 6,
        name: "Plant Operation & Maintenance Contractor",
        description:
            "Professional pest control services for homes and offices.",
    },
    {
        id: 7,
        name: "Plant Productivity Improvement",
        description: "Expert HVAC services for all",
    },
    {
        id: 8,
        name: "Industrial Automation (IoT)",
        description: "Expert plumbing services for all your needs.",
    },
];

export default function ServicePage() {
    const [selectedService, setSelectedService] = useState(services[0]);

    return (
        <div>
            <div className="size-full border relative">
                <div
                    className="mx-auto p-4 h-[40vh] flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.4,
                    }}
                ></div>
                <h1 className="absolute z-1 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold">
                    Our Services
                </h1>
            </div>
            <div className="container mx-auto p-4 my-5">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/3 ">
                        <ServiceList
                            services={services}
                            selectedService={selectedService}
                            onSelectService={setSelectedService}
                        />
                    </div>
                    <div className="w-full md:w-2/3">
                        <ServiceDetails service={selectedService} />
                    </div>
                </div>
            </div>
        </div>
    );
}
