"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

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
    sub_description: string;
    image: string;
    details: Details;
}

const services = [
    {
        id: 1,
        title: "Industrial Plant & Machinery",
        description:
            "Induction Furnace, AOD, LRF, EAF, Material Processing Equipment, & Mechanical Press, etc.",
        sub_description:
            "1000+ Industrial Heavy Machinery (Erection & Commissioned)",
        image: "/industrialPlant.jpg",
        details: {
            h1: "Heavy Machinery",
            p1: "Induction Furnace, AOD, LRF, EAF, Material Processing Equipment, Mechanical Press, Mill, Induction Melting Material Handling, Processing & Heavy Machinery etc.",
            h2: "Industry or Plants",
            p2: "Steel, Power, Sponge Iron, Rolling Mill, Foundry, Automobile, Cement, Water Treatment, uct storage atmospheric tanks, bullet Oil & Gas, Sugar, Chemical, Pharmaceutical, Textile, shaped tanks, rectangular tanks. Tyre, Beverage, Breweries & Distilleries Plants etc.",
        },
    },
    {
        id: 2,
        title: "Induction Melting Furnace",
        description: "200+ Furnace & Caster",
        sub_description: "(Eraction & Commissioned)",
        image: "/induction_furnace.avif",
        details: {
            statement:
                "Induction melting furnaces are meticulously crafted to optimize electrical efficiency, utilizing heavy-walled, high-electrically conductive copper tubing. These furnaces are versatile and can be employed with either ceramic (non-conductive) crucibles or conductive options like graphite, clay graphite, or silicon carbide. Each furnace is meticulously designed to cater to the specific melting requirements of our customers, ensuring precise temperature control and maximum efficiency. Our furnaces are adaptable and can be utilized for a wide range of applications, including melting iron and steel, precious metals, ferrous and nonferrous metals; refining high-purity metals and alloys; smelting; and vacuum and controlled atmosphere melting.",
        },
    },
    {
        id: 3,
        title: "Continuous Casting Machine",
        description: "200+ Furnace & Caster",
        sub_description: "(Eraction & Commissioned)",
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
        id: 4,
        title: "Substations & Transformers",
        description: "250+ Substations & 500+ Transformers",
        sub_description: "(Erection & Commissioned)",
        image: "/transformer.jpeg",
        details: {
            capacity:
                "11KV/0.433KV to 220KV/33KV with up to 100MVA Power Transformers & Other Transformers.",
            make: "T&R, Atlanta, Electrotherm, Voltamp, etc.",
            workDescription:
                "GIS, Breakers, Conductors, Poles, Reactors, Capacitors, HT/LT, APFC Panel with wiring, Busbar & Cables, etc.",
        },
    },
    {
        id: 5,
        title: "Pollution Control Systems",
        description: "25+ Pollution System",
        sub_description: "(Fabrication, Erection & Commissioned)",
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
        id: 6,
        title: "HT/LT Panel & Cable",
        description: "1Lac+ Meters HT/LT/FO Control",
        sub_description: "(Cable Laying & Panel Wiring)",
        image: "/ht-panel.jpg",
        details: {
            statement:
                "HT Breaker, Motor & Pump Starter Panel, Busbar, HT/LT & Control Cable, Automation PLC/SCADA, Wiring, Installation & Commissioning.",
        },
    },
    {
        id: 7,
        title: "Industrial Piping",
        description: "1Lac+ Meters Industrial Piping",
        sub_description: "(Fabrication, Erection & Commissioned)",
        image: "/piping.jpg",
        details: {
            statement:
                "High pressure piping for Air, oil & gas, Cooling Towers, Water Treatment, Motor & Pump, Vessels, Compressor etc.",
        },
    },
    {
        id: 8,
        title: "Cranes (EOT, Goliath)",
        description: "700+ Crane (EOT, Goliath & Others)",
        sub_description: "(Erection & Commissioned)",
        image: "/eot-crane.jpeg",
        details: {
            statement:
                "Installation, Fabric maintenance / repairs, new fabrications, Rail Line, DSL, Panel Mounting, Wiring, CT & Rope, Girder, Wheels, etc.",
        },
    },
    {
        id: 9,
        title: "Manpower Consulting",
        description: "15000+ Manpower",
        sub_description: "(Delivered to more than 200 Companies)",
        image: "/manpower-outsource.webp",
        details: {
            statement:
                "We provide complete manpower solutions for the plant and machinery steel engineering, fabrication & erection is a direct ranging from concept to commissioning consequence of our track record of competence & and smooth operation for existing, Greenfield or plant restart.",
        },
    },
];

const OurFocusSection = () => {
    const [selectedService, setSelectedService] =
        React.useState<Service | null>(null);
    const [open, setOpen] = React.useState(false);

    const handleServiceClick = (service: Service) => {
        setSelectedService(service);
        setOpen(true);
    };

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                        OUR EXPERTISE
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Our Focus
                    </h2>
                    <p className="text-lg text-gray-600">
                        We specialize in providing targeted solutions that drive
                        innovation and growth for our clients.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {services.map((service) => (
                            <CarouselItem
                                key={service.id}
                                className="md:basis-1/2 lg:basis-1/3 pl-4 w-full"
                            >
                                <Card
                                    className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border-gray-200 hover:border-red-600/30 group"
                                    onClick={() => handleServiceClick(service)}
                                >
                                    <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                                        <Image
                                            src={
                                                service.image ||
                                                "/placeholder.svg" ||
                                                "/placeholder.svg"
                                            }
                                            alt={service.title}
                                            fill
                                            sizes="100%"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    <CardContent className="p-4 sm:p-8 relative">
                                        <div className="w-12 h-1 bg-red-600 mb-4"></div>
                                        <h3 className="text-xl font-bold mb-3 text-red-600 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="font-semibold">
                                            {service.description}
                                        </p>
                                        <p className="text-sm font-semibold">
                                            {service.sub_description}
                                        </p>
                                        <div className="mt-6 flex items-center text-red-600 font-medium group-hover:gap-2 gap-1 transition-all">
                                            View
                                            <ArrowRight className="h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-10 gap-4">
                        <CarouselPrevious className="relative static h-10 w-10 bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300" />
                        <CarouselNext className="relative static h-10 w-10 bg-white border border-gray-200 hover:bg-gray-100 hover:border-gray-300" />
                    </div>
                </Carousel>

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="sm:max-w-3xl p-0 overflow-hidden max-h-[90vh] w-[95vw] sm:w-auto">
                        {selectedService && (
                            <>
                                <div className="relative w-full h-48 sm:h-64">
                                    <Image
                                        src={
                                            selectedService.image ||
                                            "/placeholder.svg"
                                        }
                                        alt={selectedService.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-4 sm:p-8">
                                        <div className="inline-block bg-red-600 text-white px-3 py-1 text-xs font-medium mb-2 sm:mb-3">
                                            CORE SERVICE
                                        </div>
                                        <DialogTitle className="text-2xl sm:text-3xl font-bold text-white">
                                            {selectedService.title}
                                        </DialogTitle>
                                    </div>
                                </div>

                                <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
                                    <DialogDescription className="text-base sm:text-lg font-bold text-gray-900 mb-6">
                                        <p>{selectedService.description}</p>
                                        <p className="text-sm font-normal mt-2">
                                            {selectedService.sub_description}
                                        </p>
                                    </DialogDescription>

                                    <div className="space-y-4 sm:space-y-6 bg-gray-50 p-4 sm:p-6 rounded-xl">
                                        {selectedService.details.h1 && (
                                            <div>
                                                <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                                                    {selectedService.details.h1}
                                                </h4>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {selectedService.details.p1}
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details.h2 && (
                                            <div>
                                                <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-2">
                                                    {selectedService.details.h2}
                                                </h4>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {selectedService.details.p2}
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details.capacity && (
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 border rounded-md p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-sm font-bold w-fit"
                                                >
                                                    Capacity
                                                </Badge>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {
                                                        selectedService.details
                                                            .capacity
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details.types && (
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 border rounded-md p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-sm font-bold w-fit"
                                                >
                                                    Types
                                                </Badge>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {
                                                        selectedService.details
                                                            .types
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details.make && (
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 border rounded-md p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-sm font-bold w-fit"
                                                >
                                                    Make
                                                </Badge>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {
                                                        selectedService.details
                                                            .make
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details
                                            .workDescription && (
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 border rounded-md p-3">
                                                <Badge
                                                    variant="secondary"
                                                    className="text-sm font-bold w-fit"
                                                >
                                                    Work Description
                                                </Badge>
                                                <p className="text-sm sm:text-base text-gray-900">
                                                    {
                                                        selectedService.details
                                                            .workDescription
                                                    }
                                                </p>
                                            </div>
                                        )}

                                        {selectedService.details.statement && (
                                            <div className="text-sm sm:text-base font-semibold mt-4">
                                                {
                                                    selectedService.details
                                                        .statement
                                                }
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex justify-end mt-6 sm:mt-8 gap-3 sm:gap-4">
                                        <Button
                                            variant="outline"
                                            onClick={() => setOpen(false)}
                                            className="text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2"
                                        >
                                            Close
                                        </Button>
                                        <Link href="/contact">
                                            <Button className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2">
                                                Contact Us
                                                <ExternalLink className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default OurFocusSection;
