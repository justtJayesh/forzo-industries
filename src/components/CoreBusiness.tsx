"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { setEngine } from "crypto";

// The current implementation of the interfaces is correct.
// The Service interface is an object and it has a property 'details' which is another object of type Details.

interface Details {
    h1?: string;
    h2?: string;
    p1?: string;
    p2?: string;
    capacity?: string;
    make?: string;
    workDescription?: string;
    types?: string;
    statement?: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
    details: Details;
}

const services: Service[] = [
    {
        id: 1,
        title: "Induction Melting Furnace",
        description:
            "State-of-the-art induction melting furnaces for efficient metal processing.",
        image: "/induction_furnace.avif",
        details: {
            h1: "Heavy Machinery",
            p1: "Induction Furnace, AOD, LRF, EAF, Material Processing Equipment, Mechanical Press, Mill, Induction Melting Material Handling, Processing & Heavy Machinery etc.",
            h2: "Industry or Plants",
            p2: "Steel, Power, Sponge Iron, Rolling Mill, Foundry, Automobile, Cement, Water Treatment, uct storage atmospheric tanks, bullet Oil & Gas, Sugar, Chemical, Pharmaceutical, Textile, shaped tanks, rectangular tanks. Tyre, Beverage, Breweries & Distilleries Plants etc.",
        },
    },
    {
        id: 2,
        title: "Continuous Casting Machine",
        description:
            "Advanced continuous casting machines for high-quality metal production.",
        image: "/casting_machine.jpg",
        details: {
            capacity: "Single Strand to Multiple Strand",
            make: "Prime Metal, Electrotherm, Danieli, ISC, etc.",
            workDescription:
                "Fabrication, Apron, Hydraulic Machine System, Pipeline, HT/LT, PLC Panel with wiring, Busbar & Cables, etc.",
            statement: "*We have successfully E&C 3 Strand CCM within 30 Days",
        },
    },
    {
        id: 3,
        title: "Substations & Transformers",
        description:
            "Reliable power distribution solutions for industrial applications.",
        image: "/forzo-images/CCM/ccm3.jpg",
        details: {
            capacity:
                "11KV/0.433KV to 220KV/33KV with up to 100MVA Power Transformers & Other Transformers.",
            make: "T&R, Atlanta, Electrotherm, Voltamp, etc.",
            workDescription:
                "GIS, Breakers, Conductors, Poles, Reactors, Capacitors, HT/LT, APFC Panel with wiring, Busbar & Cables, etc.",
        },
    },
    {
        id: 4,
        title: "Pollution Control Systems",
        description:
            "Eco-friendly systems to minimize environmental impact in industrial processes.",
        image: "/Air-Pollution-Control-System.jpg",
        details: {
            types: "Cassette, Bag Filter, Venturi, Water Treatment & Dust Conveyors, etc.",
            make: "Thermax, Indofan, Electrotherm, Techflow, etc.",
            workDescription:
                "Fabrication, Ducting, Filter Assembly, Air Pipeline, VFD, PLC Panel with wiring, Instrumentation & Cables, etc. E & C and O & M.",
            statement: "*We can provide complete fabrication with material.",
        },
    },
    {
        id: 5,
        title: "HT/LT Panel & Cable",
        description:
            "High-quality electrical panels and cables for industrial power distribution.",
        image: "/ht-panel.jpg",
        details: {
            statement:
                "HT Breaker, Motor & Pump Starter Panel, Busbar, HT/LT & Control Cable, Automation PLC/SCADA, Wiring, Installation & Commissioning.",
        },
    },
    {
        id: 6,
        title: "Industrial Piping",
        description:
            "Comprehensive industrial piping solutions for various applications.",
        image: "/piping.jpg",
        details: {
            statement:
                "High pressure piping for Air, oil & gas, Cooling Towers, Water Treatment, Motor & Pump, Vessels, Compressor etc.",
        },
    },
    {
        id: 7,
        title: "Cranes (EOT, Goliath)",
        description:
            "Heavy-duty cranes for efficient material handling in industrial settings.",
        image: "/eot-crane.jpeg",
        details: {
            statement:
                "Installation, Fabric maintenance / repairs, new fabrications, Rail Line, DSL, Panel Mounting, Wiring, CT & Rope, Girder, Wheels, etc.",
        },
    },
    {
        id: 8,
        title: "Manpower Consulting",
        description:
            "Expert manpower solutions tailored to your industrial needs.",
        image: "/manpower-outsource.webp",
        details: {
            statement:
                "We provide complete manpower solutions for the plant and machinery steel engineering, fabrication & erection is a direct ranging from concept to commissioning consequence of our track record of competence & and smooth operation for existing, Greenfield or plant restart.",
        },
    },
];

const CoreBusiness = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedService, setSelectedService] =
        React.useState<Service | null>(null);

    const openModal = (service: Service) => {
        console.log(service);
        setSelectedService(service);
        setIsModalOpen(true);
    };
    return (
        <>
            <div className="container mx-auto my-2 p-3 w-full bg-red-500/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {services.map((service) => (
                    <div key={service.id} className="min-w-60 px-4">
                        <Card
                            className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            onClick={() => openModal(service)}
                        >
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                {/* <DialogTrigger>Open</DialogTrigger> */}
                {isModalOpen && (
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle className="text-3xl">
                                {selectedService?.title}
                            </DialogTitle>
                            <DialogDescription>
                                {selectedService?.description}
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <Image
                                src={
                                    selectedService?.image || "/placeholder.svg"
                                }
                                alt={"service-image"}
                                width={40}
                                height={40}
                                layout="responsive"
                            />
                        </div>
                        <div className="space-y-2">
                            {selectedService?.details.h1 && (
                                <p>
                                    <span className="font-bold">
                                        {selectedService.details.h1}
                                    </span>
                                    - {selectedService.details.p1}
                                </p>
                            )}
                            {selectedService?.details.h2 && (
                                <p>
                                    <span className="font-bold">
                                        {selectedService.details.h2}
                                    </span>
                                    - {selectedService.details.p2}
                                </p>
                            )}
                            {selectedService?.details.capacity && (
                                <p>
                                    <span className="font-bold">
                                        Capacity -{" "}
                                    </span>
                                    {selectedService.details.capacity}
                                </p>
                            )}
                            {selectedService?.details.types && (
                                <p>
                                    <span className="font-bold">Types - </span>
                                    {selectedService.details.types}
                                </p>
                            )}
                            {selectedService?.details.make && (
                                <p>
                                    <span className="font-bold">Make - </span>
                                    {selectedService.details.make}
                                </p>
                            )}
                            {selectedService?.details.workDescription && (
                                <p>
                                    <span className="font-bold">
                                        Work Description -{" "}
                                    </span>
                                    {selectedService.details.workDescription}
                                </p>
                            )}
                            {selectedService?.details.statement && (
                                <p>{selectedService.details.statement}</p>
                            )}
                        </div>
                    </DialogContent>
                )}
            </Dialog>
        </>
    );
};

export default CoreBusiness;
