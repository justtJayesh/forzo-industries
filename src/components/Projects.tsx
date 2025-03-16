"use client";

import { motion } from "motion/react";
import { MarqueeComp } from "./MarqueeComp";

const Projects = () => {
    const projects = [
        {
            name: "Mahalaxmi TMT Pvt. Ltd.(Sangam TMT) Wardha, Nagpur",
            description:
                "4 nos. 40 MT Induction Melting Furnace and 2 nos. 6/11 4 strand CCM.",
        },
        {
            name: "SRJ Petty Steels Pvt. Ltd. (Shri Om TMT). Jalna",
            description:
                "1 nos. 40 MT Induction Melting Furnace, 2 nos. 30 MT Induction Melting Furnace and 2 nos. 6/9/15 Bullet Caster.",
        },
        {
            name: "Kalika Steels Alloys Pvt. Ltd. Jalna",
            description:
                "1 nos. 40 MT Induction Melting Furnace, 1 nos. 30 MT Induction Melting Furnace.",
        },
        {
            name: "Guardian Castings Pvt. Ltd. Wada",
            description:
                "1 nos. 30 MT Induction Melting Furnace and 1 nos. 6/11 3 strand CCM.",
        },
        {
            name: "Rashik Industries Pvt. Ltd. Mandi Gobindgarh",
            description:
                "1 nos. 30 MT Induction Melting Furnace and 1 nos. 6/9/15 2 strand CCM",
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
                    Major Projects
                </motion.h2>
                <div>
                    <MarqueeComp />
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
