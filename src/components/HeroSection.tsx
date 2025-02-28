"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const HeroSection = () => {
    return (
        <div className="relative bg-gray-900 overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="sm:text-center lg:text-left"
                        >
                            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">
                                    Innovative Solutions for
                                </span>{" "}
                                <span className="block text-indigo-600 xl:inline">
                                    Industrial Excellence
                                </span>
                            </h1>
                            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Forzo Industrial Solutions delivers cutting-edge
                                technology and expertise to drive your
                                industrial processes forward.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="rounded-md shadow"
                                >
                                    <Button size="lg" className="w-full">
                                        Get Started
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-3 sm:mt-0 sm:ml-3"
                                >
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="w-full"
                                    >
                                        Learn More
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    alt="Industrial machinery"
                />
            </div>
        </div>
    );
};

export default HeroSection;
