"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";

const About = () => {
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <section className="py-20 bg-gray-50">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl font-bold text-center mb-12"
                >
                    About Forzo Industrial Solutions
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div variants={itemVariants}>
                        <p className="text-lg mb-6">
                            Forzo Industrial Solutions Pvt. Ltd. was established
                            in Pune, India in 1998. With over 30 years of
                            experience in the Secondary Steel Industry, we have
                            maintained an excellent reputation in the market,
                            particularly for our Erection & Commissioning work.
                        </p>
                        <p className="text-lg mb-6">
                            We have served more than 200 companies and currently
                            have 2500+ live manpower working under
                            Payroll/Contract in plants across India, ranging
                            from workers to senior management.
                        </p>
                        <p className="text-lg">
                            Our presence spans across the country with
                            representatives or branches in Mumbai, Nashik,
                            Jalna, Nagpur, Mandi Govindgarh, Bengaluru, and many
                            more locations in India.
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Our Vision</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        To be the PREFERRED partner for Manpower
                                        Solutions in the industrial sector.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Our Mission</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription>
                                        To deliver quality & value through
                                        maintaining a quality management system
                                        that provides our clients with superior
                                        products and services.
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
