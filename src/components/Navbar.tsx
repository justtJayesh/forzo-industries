"use client";

import Link from "next/link";
import { ChevronDown, Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Sample services data
const services = [
    { id: 1, name: "Turnkey Projects", href: "/services?id=1" },
    { id: 2, name: "Project Management", href: "/services?id=2" },
    { id: 3, name: "Layout, Design & Engineering", href: "/services?id=3" },
    {
        id: 4,
        name: "Supply, Installation, Erection & Commissioning",
        href: "/services?id=4",
    },
    { id: 5, name: "Industrial Piping & Fabrication", href: "/services?id=5" },
    { id: 6, name: "Revamping & Re-installation", href: "/services?id=6" },
    {
        id: 7,
        name: "Plant Operation & Maintenance Contractor",
        href: "/services?id=7",
    },
    { id: 8, name: "Plant Productivity Improvement", href: "/services?id=8" },
    { id: 9, name: "Industrial Automation (IoT)", href: "/services?id=9" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === "/") {
            return pathname === path;
        }
        return pathname?.startsWith(path);
    };

    return (
        <div className="border-b border-gray-200">
            {/* Top bar */}
            <div className="bg-gray-900 text-white">
                <div className="container mx-auto flex items-center justify-end h-10 text-sm px-6">
                    {/* <div className="hidden md:block">
                        <span className="text-gray-400">
                            Your Work, Our Services
                        </span>
                    </div> */}
                    <div className="flex items-center gap-6">
                        <a
                            href="mailto:info@forzo.in"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                            <span className="hidden sm:inline">Email:</span>{" "}
                            info@forzo.in
                        </a>
                        <a
                            href="tel:+919145400247"
                            className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                        >
                            <span className="hidden sm:inline">Phone:</span>{" "}
                            +91-91454 00247
                        </a>
                    </div>
                </div>
            </div>

            {/* Main navbar */}
            <div className="container flex items-center justify-between h-20 mx-auto px-6">
                <Link href="/" className="flex items-center gap-5">
                    <div>
                        <img
                            src="/forzo_logo.jpg"
                            alt="logo"
                            className="w-10 h-10"
                        />
                    </div>
                    <div>
                        <div className="font-bold text-3xl leading-none text-gray-900">
                            Forzo
                        </div>
                        {/* <div className="text-xs">Your Work, Our Services</div> */}
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link
                        href="/"
                        className={`font-medium transition-colors ${
                            isActive("/")
                                ? "text-red-600"
                                : "text-gray-900 hover:text-red-600"
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`font-medium transition-colors ${
                            isActive("/about")
                                ? "text-red-600"
                                : "text-gray-900 hover:text-red-600"
                        }`}
                    >
                        About
                    </Link>

                    {/* Services dropdown */}
                    <div className="relative group">
                        <button
                            className={`flex items-center gap-1 font-medium transition-colors ${
                                isActive("/services")
                                    ? "text-red-600"
                                    : "text-gray-900 group-hover:text-red-600"
                            }`}
                        >
                            Services{" "}
                            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                        </button>
                        <div className="absolute left-0 top-full z-50 hidden group-hover:block w-[320px] bg-white border border-gray-200 rounded-md shadow-xl p-4">
                            <div className="grid gap-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.name}
                                        href={service.href}
                                        className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-red-600 transition-colors group"
                                    >
                                        {service.name}
                                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/career"
                        className={`font-medium transition-colors ${
                            isActive("/career")
                                ? "text-red-600"
                                : "text-gray-900 hover:text-red-600"
                        }`}
                    >
                        Career
                    </Link>

                    <Link
                        href="/contact"
                        className={`font-medium transition-colors ${
                            isActive("/contact")
                                ? "text-red-600"
                                : "text-gray-900 hover:text-red-600"
                        }`}
                    >
                        Contact
                    </Link>
                </nav>

                {/* CTA Button */}
                {/* <div className="hidden lg:block">
                    <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
                        <Phone className="mr-2 h-4 w-4" />
                        Get a Quote
                    </Button>
                </div> */}

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="right"
                        className="w-full max-w-md p-0 bg-white"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="p-1">
                                        <img
                                            src="/forzo_logo.jpg"
                                            alt="logo"
                                            className="w-8 h-8"
                                        />
                                    </div>
                                    <div className="font-bold text-xl text-gray-900">
                                        Forzo
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {/* <X className="h-6 w-6" /> */}
                                    <span className="sr-only">Close menu</span>
                                </Button>
                            </div>

                            <div className="flex-1 overflow-y-auto py-6 px-6">
                                <div className="space-y-6">
                                    <Link
                                        href="/"
                                        className={`block text-xl font-medium transition-colors ${
                                            isActive("/")
                                                ? "text-red-600"
                                                : "text-gray-900 hover:text-red-600"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        href="/about"
                                        className={`block text-xl font-medium transition-colors ${
                                            isActive("/about")
                                                ? "text-red-600"
                                                : "text-gray-900 hover:text-red-600"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About
                                    </Link>

                                    <Collapsible className="space-y-3">
                                        <CollapsibleTrigger className="flex items-center justify-between w-full text-xl font-medium text-gray-900 hover:text-red-600 transition-colors">
                                            Services
                                            <ChevronDown className="h-5 w-5" />
                                        </CollapsibleTrigger>
                                        <CollapsibleContent className="pl-4 border-l-2 border-red-600 space-y-4 pt-3">
                                            {services.map((service) => (
                                                <Link
                                                    key={service.name}
                                                    href={service.href}
                                                    className="block text-gray-700 hover:text-red-600 transition-colors"
                                                    onClick={() =>
                                                        setIsOpen(false)
                                                    }
                                                >
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </CollapsibleContent>
                                    </Collapsible>

                                    <Link
                                        href="/career"
                                        className={`block text-xl font-medium transition-colors ${
                                            isActive("/career")
                                                ? "text-red-600"
                                                : "text-gray-900 hover:text-red-600"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Career
                                    </Link>
                                    <Link
                                        href="/contact"
                                        className={`block text-xl font-medium transition-colors ${
                                            isActive("/contact")
                                                ? "text-red-600"
                                                : "text-gray-900 hover:text-red-600"
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>

                            {/* <div className="p-6 border-t border-gray-200">
                                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Get a Quote
                                </Button>
                            </div> */}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}
