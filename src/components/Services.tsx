"use client";

// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
import { motion } from "motion/react";
import CardCarousal from "./CardCarousal";

const Services = () => {
    const services = [
        {
            title: "Induction Melting Furnace",
            description:
                "State-of-the-art induction melting furnaces for efficient metal processing.",
            image: "/forzo-images/CCM/ccm1.jpg",
        },
        {
            title: "Continuous Casting Machine",
            description:
                "Advanced continuous casting machines for high-quality metal production.",
            image: "/forzo-images/CCM/ccm2.jpg",
        },
        {
            title: "Substations & Transformers",
            description:
                "Reliable power distribution solutions for industrial applications.",
            image: "/forzo-images/CCM/ccm3.jpg",
        },
        {
            title: "Pollution Control Systems",
            description:
                "Eco-friendly systems to minimize environmental impact in industrial processes.",
            image: "/forzo-images/CCM/ccm4.jpg",
        },
        {
            title: "HT/LT Panel & Cable",
            description:
                "High-quality electrical panels and cables for industrial power distribution.",
            image: "/forzo-images/CCM/ccm5.jpg",
        },
        {
            title: "Industrial Piping",
            description:
                "Comprehensive industrial piping solutions for various applications.",
            image: "/forzo-images/CCM/ccm6.jpg",
        },
        {
            title: "Cranes (EOT, Goliath)",
            description:
                "Heavy-duty cranes for efficient material handling in industrial settings.",
            image: "/forzo-images/CCM/ccm7.jpg",
        },
        {
            title: "Manpower Consulting",
            description:
                "Expert manpower solutions tailored to your industrial needs.",
            image: "/forzo-images/CCM/ccm8.jpg",
        },
    ];

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
        <section className="py-20 bg-white">
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
                    Our Services
                </motion.h2>

                <motion.div variants={containerVariants} className="w-full">
                    <CardCarousal data={services} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Services;
