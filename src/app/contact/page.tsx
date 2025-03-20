"use client";

import type React from "react";

import {
    Building,
    Phone,
    Mail,
    MapPin,
    ArrowRight,
    Loader2,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("message", formData.message);

        try {
            const response = await fetch("/api/send-message", {
                method: "POST",
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            toast.success("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
        } catch (error) {
            console.log(error);
            toast.error("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Industrial Building"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-6">
                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                            GET IN TOUCH
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            We&apos;re here to help and answer any questions you
                            might have about our industrial solutions.
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info & Form */}
            <div className="py-24">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-5 gap-16">
                        {/* Contact Information */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <div className="text-red-600 font-semibold mb-4">
                                    REACH OUT
                                </div>
                                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                                    Let&apos;s Start a Conversation
                                </h2>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start">
                                        <div className="bg-gray-100 p-4 rounded-full">
                                            <Building className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                                                Head Office
                                            </h3>
                                            <p className="text-gray-600">
                                                Office No. 705, 706 & 707, 7th
                                                Floor Park Plaza Business
                                                Center,
                                                <br />
                                                Porwal Road, Pune, Maharashtra -
                                                411047
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="bg-gray-100 p-4 rounded-full">
                                            <Phone className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                                                Phone
                                            </h3>
                                            <p className="text-gray-600">
                                                +91-9689110131
                                            </p>
                                            <p className="text-gray-600">
                                                +91-9145400247
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="bg-gray-100 p-4 rounded-full">
                                            <Mail className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                                                Email
                                            </h3>
                                            <a
                                                href="mailto:info@forzo.in"
                                                className="text-red-600 hover:underline"
                                            >
                                                info@forzo.in
                                            </a>
                                            <br />
                                            <a
                                                href="mailto:forzo@yahoo.com"
                                                className="text-red-600 hover:underline"
                                            >
                                                forzohr@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start">
                                        <div className="bg-gray-100 p-4 rounded-full">
                                            <MapPin className="h-6 w-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg mb-2">
                                                Branch Offices
                                            </h3>
                                            <p className="text-gray-600">
                                                Mumbai • Nashik • Jalna • Nagpur
                                                • Raipur • Mandi Govindgarh •
                                                Bengaluru
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 p-8 bg-gray-100 rounded-2xl">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                                        Company Details
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                            <p className="text-gray-600">
                                                <span className="font-medium text-gray-900">
                                                    CIN:
                                                </span>{" "}
                                            </p>
                                            <p>U74999PN2022PTC207711</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-600"></div>
                                            <p className="text-gray-600">
                                                <span className="font-medium text-gray-900">
                                                    GSTIN:
                                                </span>{" "}
                                            </p>
                                            <p>27AAECF8877D1ZA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-3">
                            <div className="bg-gray-100 rounded-2xl p-10 md:p-16">
                                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                                    Send us a Message
                                </h3>
                                <form
                                    className="space-y-8"
                                    onSubmit={handleSubmit}
                                >
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-red-600 outline-none transition-colors bg-white dark:bg-white text-gray-900 dark:text-gray-900"
                                            required
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-red-600 outline-none transition-colors bg-white dark:bg-white text-gray-900 dark:text-gray-900"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="phone"
                                                className="block text-sm font-medium text-gray-700 mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-red-600 outline-none transition-colors bg-white dark:bg-white text-gray-900 dark:text-gray-900"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-gray-700 mb-2"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            rows={6}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-4 rounded-lg border-0 focus:ring-2 focus:ring-red-600 outline-none transition-colors bg-white dark:bg-white text-gray-900 dark:text-gray-900"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-red-600 py-4 px-8 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-medium disabled:opacity-70"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="h-5 w-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="h-5 w-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Section */}
        </main>
    );
}
