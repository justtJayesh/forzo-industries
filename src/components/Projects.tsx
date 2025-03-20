"use client";

import { motion } from "motion/react";
import { MarqueeComp } from "./MarqueeComp";

const Projects = () => {
    // const projects = [
    //     {
    //         name: "Mahalaxmi TMT Pvt. Ltd.(Sangam TMT) Wardha, Nagpur",
    //         description:
    //             "4 nos. 40 MT Induction Melting Furnace and 2 nos. 6/11 4 strand CCM.",
    //     },
    //     {
    //         name: "SRJ Petty Steels Pvt. Ltd. (Shri Om TMT). Jalna",
    //         description:
    //             "1 nos. 40 MT Induction Melting Furnace, 2 nos. 30 MT Induction Melting Furnace and 2 nos. 6/9/15 Bullet Caster.",
    //     },
    //     {
    //         name: "Kalika Steels Alloys Pvt. Ltd. Jalna",
    //         description:
    //             "1 nos. 40 MT Induction Melting Furnace, 1 nos. 30 MT Induction Melting Furnace.",
    //     },
    //     {
    //         name: "Guardian Castings Pvt. Ltd. Wada",
    //         description:
    //             "1 nos. 30 MT Induction Melting Furnace and 1 nos. 6/11 3 strand CCM.",
    //     },
    //     {
    //         name: "Rashik Industries Pvt. Ltd. Mandi Gobindgarh",
    //         description:
    //             "1 nos. 30 MT Induction Melting Furnace and 1 nos. 6/9/15 2 strand CCM",
    //     },
    // ];

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
        <section className="py-20">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="container mx-auto px-4"
            >
                <motion.div
                    variants={itemVariants}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                        NOTABLE ACHIEVEMENTS
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Major Projects
                    </h2>
                    <p className="text-base md:text-lg text-gray-600">
                        Explore our showcase of successful projects that
                        demonstrate our expertise, innovation, and commitment to
                        excellence across various industries and technical
                        challenges.
                    </p>
                </motion.div>
                <div>
                    <MarqueeComp />
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
