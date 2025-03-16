"use client";

import { useState } from "react";
import { ArrowUpRight, Asterisk, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getAllServices } from "@/lib/services-data";

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(1);
    const services = getAllServices();
    const activeServiceData = services.find((s) => s.id === activeService);
    console.log("specific Data: ", activeServiceData?.serviceProvider);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div>
                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                            WHAT WE OFFER
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900">
                            Our Services
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-gray-900 mt-6 md:mt-0 group font-medium"
                        aria-label="Read more about our services"
                    >
                        <span>View all services</span>
                        <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left section */}
                    <div className="lg:col-span-1">
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-8 text-gray-900">
                                Our Expertise
                            </h3>
                            <div className="space-y-3">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() =>
                                            setActiveService(service.id)
                                        }
                                        className={`w-full text-left py-4 px-6 rounded-lg flex justify-between items-center transition-all ${
                                            activeService === service.id
                                                ? "bg-red-600 text-white shadow-lg"
                                                : "bg-white text-gray-700 hover:bg-gray-100"
                                        }`}
                                        aria-pressed={
                                            activeService === service.id
                                        }
                                    >
                                        <span className="font-medium">
                                            {service.service}
                                        </span>
                                        <ChevronRight
                                            className={`w-5 h-5 transition-transform ${
                                                activeService === service.id
                                                    ? "rotate-90 text-white"
                                                    : ""
                                            }`}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right section */}
                    <div className="lg:col-span-2">
                        {activeServiceData && (
                            <div className="bg-gray-50 relative rounded-2xl shadow-lg p-10 h-full">
                                <div className="mb-8">
                                    <span className="text-sm text-gray-500 mb-2 block">
                                        Service{" "}
                                        {activeServiceData.id
                                            .toString()
                                            .padStart(2, "0")}
                                    </span>
                                    <h3 className="text-3xl font-bold mb-6 text-gray-900">
                                        {activeServiceData.service}
                                    </h3>
                                    <div className="w-20 h-1 bg-red-600 mb-8"></div>
                                    <p className="text-gray-700 mb-10 text-lg leading-relaxed">
                                        {activeServiceData.description}
                                    </p>
                                </div>

                                {/* Key features or Service Providers */}
                                {activeServiceData.features ? (
                                    <div>
                                        <h4 className="text-xl font-bold mb-6 text-gray-900">
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeServiceData.features?.map(
                                                (feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-4 bg-white p-4 rounded-lg"
                                                    >
                                                        <div className="mt-1 min-w-4 h-4 w-4 rounded-full bg-red-600"></div>
                                                        <span className="text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-12">
                                        <h3 className="text-2xl font-bold mb-6 text-gray-900">
                                            {
                                                activeServiceData
                                                    .serviceProvider?.title
                                            }
                                        </h3>
                                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                            {
                                                activeServiceData
                                                    .serviceProvider
                                                    ?.description
                                            }
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            {activeServiceData.serviceProvider?.otherServices.map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-2 bg-white p-6 rounded-lg hover:shadow-md transition-all"
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
                                        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                                            {
                                                activeServiceData
                                                    .serviceProvider
                                                    ?.subDescription
                                            }
                                        </p>
                                    </div>
                                )}
                                {/* <div>
                                    <h4 className="text-xl font-bold mb-6 text-gray-900">
                                        Key Features
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {activeServiceData.features?.map(
                                            (feature, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-start gap-4 bg-white p-4 rounded-lg"
                                                >
                                                    <div className="mt-1 min-w-4 h-4 w-4 rounded-full bg-red-600"></div>
                                                    <span className="text-gray-700">
                                                        {feature}
                                                    </span>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div> */}

                                <div className="mt-10 absolute bottom-10 right-10">
                                    <Link
                                        href={`/services?id=${activeServiceData.id}`}
                                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-red-700 transition-colors"
                                        aria-label={`Learn more about ${activeServiceData.service}`}
                                    >
                                        Know More
                                        <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

// (

//                                     )})
