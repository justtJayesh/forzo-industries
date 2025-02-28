"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Magnetic } from "@/components/ui/magnetic";

const Career = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div variants={itemVariants}>
                        <h2 className="text-4xl font-bold mb-6">
                            Career Opportunities
                        </h2>
                        <p className="text-lg mb-8">
                            Join our team and become part of an organization
                            that values innovation, expertise, and excellence.
                            At Forzo, we offer opportunities to grow your career
                            in a dynamic and collaborative environment. With a
                            focus on professional development, training, and
                            hands-on experience, we empower our employees to
                            reach their full potential.
                        </p>
                        <div className="w-fit">
                            <Magnetic
                                intensity={0.2}
                                springOptions={{ bounce: 0.1 }}
                                actionArea="global"
                                range={200}
                            >
                                <Button>Join Us</Button>
                            </Magnetic>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <motion.img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Career opportunities"
                            className="rounded-lg shadow-lg"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Career;
