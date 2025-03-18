"use client";

import { useState } from "react";
import { ArrowUpRight, Asterisk, ChevronRight } from "lucide-react";
import Link from "next/link";
import { getAllServices } from "@/lib/services-data";
import { motion } from "motion/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const ServicesSection = () => {
    const [activeService, setActiveService] = useState(1);
    const services = getAllServices();
    const activeServiceData = services.find((s) => s.id === activeService);
    console.log("specific Data: ", activeServiceData?.serviceProvider);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                        WHAT WE OFFER
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        We provide comprehensive, personalized solutions
                        tailored to each client&apos;s unique needs, ensuring
                        timely delivery and ongoing support to exceed
                        expectations.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left section */}
                    <div className="lg:col-span-1">
                        {/* Mobile Dropdown */}
                        <div className="lg:hidden mb-6">
                            <Select
                                value={activeService.toString()}
                                onValueChange={(value) =>
                                    setActiveService(Number(value))
                                }
                            >
                                <SelectTrigger className="w-full bg-gray-50 border-gray-200">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    {services.map((service) => (
                                        <SelectItem
                                            key={service.id}
                                            value={service.id.toString()}
                                            className="py-3"
                                        >
                                            {service.service}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Desktop List View */}
                        <div className="hidden lg:block bg-gray-50 rounded-2xl p-8 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold mb-8 text-gray-900">
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
                            <div className="bg-gray-50 relative rounded-2xl shadow-lg p-6 sm:p-10">
                                {/* Header Section */}
                                <div className="mb-8">
                                    <span className="text-sm text-gray-500 mb-3 block">
                                        Service{" "}
                                        {activeServiceData.id
                                            .toString()
                                            .padStart(2, "0")}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                                        {activeServiceData.service}
                                    </h3>
                                    <div className="w-20 h-1 bg-red-600 mb-6"></div>
                                    {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-5">
                                        {activeServiceData.description}
                                    </p> */}
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {activeServiceData.longDescription1}
                                    </p>
                                    {/* <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {activeServiceData.longDescription2}
                                    </p> */}
                                </div>

                                {/* Features Section */}
                                {activeServiceData.features ? (
                                    <div className="mb-20">
                                        <h4 className="text-lg sm:text-xl font-bold mb-4 text-gray-900">
                                            Key Features
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {activeServiceData.features?.map(
                                                (feature, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-3 bg-white p-3 sm:p-4 rounded-lg"
                                                    >
                                                        <div className="mt-1.5 min-w-3 h-3 w-3 rounded-full bg-red-600"></div>
                                                        <span className="text-sm sm:text-base text-gray-700">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="mb-20">
                                        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
                                            {
                                                activeServiceData
                                                    .serviceProvider?.title
                                            }
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                                            {
                                                activeServiceData
                                                    .serviceProvider
                                                    ?.description
                                            }
                                        </p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            {activeServiceData.serviceProvider?.otherServices?.map(
                                                (item, index) => (
                                                    <div
                                                        key={index}
                                                        className="flex items-start gap-2 bg-white p-4 sm:p-6 rounded-lg hover:shadow-md transition-all"
                                                    >
                                                        <div className="flex-shrink-0">
                                                            <Asterisk
                                                                color="#ff1f1f"
                                                                className="h-5 w-5"
                                                            />
                                                        </div>
                                                        <span className="text-sm sm:text-base text-gray-700 font-bold">
                                                            {item}
                                                        </span>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {
                                                activeServiceData
                                                    .serviceProvider
                                                    ?.subDescription
                                            }
                                        </p>
                                    </div>
                                )}

                                {/* Button Section - Absolute positioning with bottom padding space */}
                                <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10">
                                    <Link
                                        href={`/services?id=${activeServiceData.id}`}
                                        className="inline-flex items-center justify-center rounded-md bg-red-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white shadow-lg hover:bg-red-700 transition-colors"
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
