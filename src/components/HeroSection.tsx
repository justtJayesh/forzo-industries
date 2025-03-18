"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HyperText } from "./magicui/hyper-text";

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden h-[600px] md:h-[700px]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <Image
                    fill
                    sizes="100%"
                    className="object-cover"
                    src="/landingImgs/landingImg4.jpg"
                    alt="Industrial machinery"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 h-full container mx-auto px-6 flex items-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block bg-red-600 text-white px-4 text-2xl font-medium mb-6">
                            <HyperText
                                animateOnHover={false}
                                className="text-xl"
                            >
                                INDUSTRIAL EXCELLENCE SINCE 1998
                            </HyperText>
                        </div>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                        Innovative Solutions for Industrial Excellence
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-xl text-gray-300 mb-10 max-w-2xl"
                    >
                        Forzo Industrial Solutions delivers cutting-edge
                        technology and expertise to drive your industrial
                        processes forward with precision and reliability.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link href="/services">
                            <Button
                                size="lg"
                                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                            >
                                Explore Our Services
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white hover:bg-black/10 hover:text-white px-8 py-6 text-lg"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
