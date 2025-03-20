import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-white p-2 rounded-md">
                                <Image
                                    src="/forzo_logo.jpg"
                                    alt="logo"
                                    width={60}
                                    height={60}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">
                                    Forzo Industrial Solutions Pvt. Ltd.
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Your Work, Our Services
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-red-600">
                            Company
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Contact</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link
                                    href="/careers"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Careers</span>
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Blog</span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-red-600">
                            Services
                        </h3>
                        <ul className="space-y-4">
                            <li>
                                <Link
                                    href="/services?id=1"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Turnkey Project</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services?id=2"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Project Management</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services?id=3"
                                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2 group"
                                >
                                    <ArrowRight className="h-4 w-0 group-hover:w-4 overflow-hidden transition-all duration-300" />
                                    <span>Layout, Design & Engineering</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/services"
                                    className="text-red-500 flex items-center gap-2 hover:gap-3 transition-all font-medium"
                                >
                                    <span>View All Services</span>
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-xl font-bold relative pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-12 after:bg-red-600">
                            Contact
                        </h3>
                        <div className="space-y-5">
                            <div className="flex gap-3">
                                <MapPin className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                                <address className="not-italic text-gray-400">
                                    Office No. 705, 706 & 707, 7th Floor Park
                                    Plaza Business Center, Porwal Road, Pune,
                                    Maharashtra - 411047
                                </address>
                            </div>

                            <div className="flex gap-3">
                                <Mail className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                                <div className="space-y-1">
                                    <a
                                        href="mailto:forzo@yahoo.com"
                                        className="text-gray-400 hover:text-white transition-colors block"
                                    >
                                        info@forzo.in
                                    </a>
                                    <a
                                        href="mailto:info@forzo.in"
                                        className="text-gray-400 hover:text-white transition-colors block"
                                    >
                                        forzohr@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Phone className="h-5 w-5 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-gray-400">
                                        +91-9689110131
                                    </p>
                                    <p className="text-gray-400">
                                        +91-91454 00247
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5 ">
                                <Link href="https://www.linkedin.com/company/forzo-industrial-solutions-pvt-ltd/posts/?feedView=all">
                                    <AiOutlineLinkedin
                                        size={28}
                                        className=" text-red-500 flex-shrink-0 mt-3"
                                    />
                                </Link>
                                <Link href="#">
                                    <AiOutlineFacebook
                                        size={28}
                                        className="text-red-500 flex-shrink-0 mt-3"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} Forzo Industrial
                        Solutions. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
