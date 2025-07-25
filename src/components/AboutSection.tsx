"use client";

import { Card, CardContent, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section className="mx-auto py-20 bg-gray-50">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-4 mb-16"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                        OUR HISTORY
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About Us
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        We are a dedicated team focused on delivering innovative
                        solutions and exceptional service.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-8 ">
                    <motion.div variants={itemVariants}>
                        <p className="text-lg md:text-xl">
                            <span className="font-bold">
                                Forzo Industrial Solutions Pvt. Ltd.
                            </span>{" "}
                            was established in Pune, India in the year 1998.{" "}
                            <span className="font-bold">30+ Years </span>
                            of experience in the Secondary Steel Industry with
                            maintaining a very good reputation in the market and
                            being well known for the Erection & Commissioning
                            work. We have an envious inventory of{" "}
                            <span className="font-bold">
                                15000+ manpower/staff{" "}
                            </span>
                            served to more than
                            <span className="font-bold">
                                {" "}
                                200+ companies.
                            </span>{" "}
                            In the Steel Industry,{" "}
                            <span className="font-bold">
                                1600 live manpower working
                            </span>{" "}
                            under Payroll/Contract in the plant ranging from
                            worker to senior management.
                        </p>
                        <p className="text-lg md:text-xl">
                            Over the years we have spread across the country
                            having representatives or branches at{" "}
                            <span className="font-bold">
                                {" "}
                                Mumbai, Nashik, Jalna, Nagpur, Mandi Govindgarh
                                and Bengaluru and many more places in India.
                            </span>
                        </p>
                    </motion.div>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-evenly gap-10 mt-5">
                        {/* 
                        // * Vision Card
                        */}
                        <motion.div
                            variants={itemVariants}
                            className="max-w-96 hover:shadow-lg cursor-pointer transition-all duration-300 rounded-xl"
                        >
                            <Card className="h-full space-y-5">
                                <div className="relative w-full h-44 flex justify-center items-center rounded-t-lg overflow-hidden">
                                    <Image
                                        src="/mission.jpg"
                                        alt="mission Image"
                                        fill
                                        sizes="100%"
                                        className="rounded-t-lg opacity-50"
                                    />
                                    {/* <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/70 rounded-t-lg"></div> */}
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <p className="absolute text-2xl text-white font-bold z-50">
                                        Our Vision
                                    </p>
                                </div>
                                <CardContent>
                                    <CardDescription className="text-md">
                                        To be the PREFERRED partner for the
                                        Manpower Solutions. Lorem ipsum dolor
                                        sit amet consectetur adipisicing elit.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                            {/* <Card>
                                <CardHeader>
                                    <CardTitle>Our Vision</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        To be the PREFERRED partner for Manpower
                                        Solutions in the industrial sector.
                                    </CardDescription>
                                </CardContent>
                            </Card> */}
                        </motion.div>
                        {/* 
                        // * Mission Card
                        */}
                        <motion.div
                            variants={itemVariants}
                            className="max-w-96 hover:shadow-lg cursor-pointer transition-all duration-300 rounded-xl"
                        >
                            <Card className="h-full space-y-5">
                                <div className="relative w-full h-44 flex justify-center items-center rounded-t-lg overflow-hidden">
                                    <Image
                                        priority={false}
                                        src={"/vision.jpg"}
                                        alt="Vision Image"
                                        fill
                                        sizes="100%"
                                        className="rounded-t-lg opacity-50"
                                    />
                                    {/* <div className="absolute top-0 left-0 w-full h-full bg-neutral-900/70 
                                    rounded-t-lg"></div> */}
                                    <div className="absolute inset-0 bg-black/60"></div>
                                    <p className="absolute text-2xl text-white font-bold z-50">
                                        Our Mission
                                    </p>
                                </div>
                                <CardContent>
                                    <CardDescription className="text-md">
                                        To deliver quality & value through
                                        maintaining a quality management system
                                        that provides our clients with quality
                                        products{" "}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
            <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto"
            >
                <Link href="/about">
                    <div className="flex items-center justify-center gap-2 text-red-600 font-medium duration-300 cursor-pointer px-4 group">
                        <span>Learn more about our journey</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                </Link>
            </motion.div>
        </section>
    );
};

export default AboutSection;
