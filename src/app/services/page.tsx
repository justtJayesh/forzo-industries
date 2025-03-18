"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Asterisk, Check } from "lucide-react";
import services from "@/lib/services-data"; // Import the services array

export default function ServicesPage() {
    const searchParams = useSearchParams();
    const serviceId = searchParams.get("id")
        ? Number.parseInt(searchParams.get("id")!)
        : null;
    const [activeServiceId, setActiveServiceId] = useState<number | null>(
        serviceId || 1
    );

    // Add this useEffect to handle scrolling
    useEffect(() => {
        const contentElement = document.getElementById("service-content");
        if (contentElement) {
            contentElement.scrollIntoView({ behavior: "smooth" });
        }
    }, [activeServiceId]);

    // Helper function to get service by ID
    const getServiceById = (id: number) => {
        return services.find((service) => service.id === id) || null;
    };

    const activeService = activeServiceId
        ? getServiceById(activeServiceId)
        : null;

    useEffect(() => {
        if (serviceId) {
            setActiveServiceId(serviceId);
        }
    }, [serviceId]);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src="/landingImgs/landingImg3.jpg"
                    alt="Industrial facility"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-6">
                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                            INDUSTRIAL EXPERTISE
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Comprehensive industrial solutions tailored to your
                            specific needs
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Content */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {/* Sidebar */}
                        <div className="md:col-span-1 lg:col-span-1">
                            <div className="sticky top-24">
                                <div className="text-red-600 font-semibold mb-4">
                                    EXPLORE
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                                    Our Services
                                </h2>

                                {/* Mobile Dropdown */}

                                {/* Desktop List View */}
                                <div className="space-y-2">
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() =>
                                                setActiveServiceId(service.id)
                                            }
                                            className={`w-full text-left py-4 px-6 rounded-md transition-colors flex justify-between items-center ${
                                                activeServiceId === service.id
                                                    ? "bg-red-600 text-white"
                                                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                            }`}
                                        >
                                            <span className="font-medium">
                                                {service.service}
                                            </span>
                                            {activeServiceId === service.id && (
                                                <ArrowRight className="h-5 w-5" />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="md:col-span-2 lg:col-span-2">
                            {activeService && (
                                <div
                                    id="service-content"
                                    className="bg-white p-8 rounded-2xl shadow-lg"
                                >
                                    <div className="inline-block bg-gray-100 text-red-600 px-4 py-1 text-sm font-medium mb-6">
                                        SERVICE{" "}
                                        {activeService.id
                                            .toString()
                                            .padStart(2, "0")}
                                    </div>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                        {activeService.service}
                                    </h2>
                                    <div className="w-20 h-1 bg-red-600 mb-8"></div>

                                    {/* Service Description */}
                                    <div className="mb-12">
                                        {activeService.longDescription1 && (
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {activeService.longDescription1}
                                            </p>
                                        )}

                                        {activeService.longDescription2 && (
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {activeService.longDescription2}
                                            </p>
                                        )}
                                        {activeService.longDescription3 && (
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {activeService.longDescription3}
                                            </p>
                                        )}
                                    </div>

                                    <div className="mb-12 flex justify-center">
                                        <Image
                                            src={
                                                activeService.image ||
                                                "/placeholder.svg"
                                            }
                                            alt="pm-imge"
                                            width={500}
                                            height={500}
                                        />
                                    </div>

                                    {/* Key Features */}
                                    {activeService.features &&
                                        activeService.features.length > 0 && (
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                    Key Features
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {activeService.features.map(
                                                        (feature, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-start gap-4 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all"
                                                            >
                                                                <div className="flex-shrink-0">
                                                                    <Check className="h-6 w-6 text-red-600" />
                                                                </div>
                                                                <span className="text-gray-700">
                                                                    {feature}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Core Services Categories */}
                                    {activeService.coreServicesCategory &&
                                        activeService.coreServicesCategory
                                            .length > 0 && (
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                    Core Service Categories
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {activeService.coreServicesCategory.map(
                                                        (category, index) => (
                                                            <div
                                                                key={index}
                                                                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all"
                                                            >
                                                                <h4 className="text-lg font-semibold text-red-600 mb-2">
                                                                    {
                                                                        category.title
                                                                    }
                                                                </h4>
                                                                <p className="text-gray-700">
                                                                    {
                                                                        category.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Services Offered */}
                                    {activeService.servicesOffered &&
                                        activeService.servicesOffered.length >
                                            0 && (
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                    Services Offered
                                                </h3>
                                                <div className="space-y-8">
                                                    {activeService.servicesOffered.map(
                                                        (service, index) => (
                                                            <div
                                                                key={index}
                                                                className="bg-gray-50 p-6 rounded-lg"
                                                            >
                                                                <h4 className="text-xl font-semibold text-red-600 mb-4">
                                                                    {
                                                                        service.title
                                                                    }
                                                                </h4>
                                                                <ul className="space-y-2">
                                                                    {service.points.map(
                                                                        (
                                                                            point,
                                                                            idx
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    idx
                                                                                }
                                                                                className="flex items-start gap-3"
                                                                            >
                                                                                <Check className="h-5 w-5 text-red-600 mt-0.5" />
                                                                                <span className="text-gray-700">
                                                                                    {
                                                                                        point
                                                                                    }
                                                                                </span>
                                                                            </li>
                                                                        )
                                                                    )}
                                                                </ul>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/*  */}

                                    {/* Value Proposition */}
                                    {activeService.valueProposition &&
                                        activeService.valueProposition.length >
                                            0 && (
                                            <div className="mb-12">
                                                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                    Our Value Proposition
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    {activeService.valueProposition.map(
                                                        (value, index) => (
                                                            <div
                                                                key={index}
                                                                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all"
                                                            >
                                                                <h4 className="text-lg font-semibold text-red-600 mb-2">
                                                                    {
                                                                        value.title
                                                                    }
                                                                </h4>
                                                                <p className="text-gray-700">
                                                                    {
                                                                        value.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        )}

                                    {/* Service Contract */}
                                    {activeService.serviceProvider && (
                                        <div className="mb-12">
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                {
                                                    activeService
                                                        .serviceContract?.title
                                                }
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {
                                                    activeService
                                                        .serviceContract
                                                        ?.description
                                                }
                                            </p>

                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {
                                                    activeService
                                                        .serviceContract
                                                        ?.detailedDescription
                                                }
                                            </p>
                                        </div>
                                    )}

                                    {/* Service Provider */}
                                    {activeService.serviceProvider && (
                                        <div className="mb-12">
                                            <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                                {
                                                    activeService
                                                        .serviceProvider.title
                                                }
                                            </h3>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {
                                                    activeService
                                                        .serviceProvider
                                                        .description
                                                }
                                            </p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                                {activeService.serviceProvider.otherServices?.map(
                                                    (item, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-start gap-2 bg-gray-50 p-6 rounded-lg hover:shadow-md transition-all"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                {/* <Check className="h-6 w-6 text-red-600" /> */}
                                                                <Asterisk
                                                                    color="#ff1f1f"
                                                                    className="h-6 w-6"
                                                                />
                                                            </div>
                                                            <span className="text-gray-700 font-bold">
                                                                {item}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                                {
                                                    activeService
                                                        .serviceProvider
                                                        .subDescription
                                                }
                                            </p>
                                        </div>
                                    )}

                                    {/* Conclusion */}
                                    {activeService.conclusion && (
                                        <div className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                                            {/* <h3 className="text-xl font-bold mb-3 text-gray-900">
                                                Why Choose FORZO
                                            </h3> */}
                                            <p className="text-gray-700 italic">
                                                {activeService.conclusion}
                                            </p>
                                        </div>
                                    )}

                                    {/* CTA */}
                                    <div className="mt-12">
                                        <Link
                                            href="/contact"
                                            className="inline-flex items-center justify-center rounded-md bg-red-600 px-8 py-4 text-lg font-medium text-white shadow-lg hover:bg-red-700 transition-colors"
                                        >
                                            Request a Consultation
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
