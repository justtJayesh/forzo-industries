import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

// Values data
const values = [
    {
        title: "Excellence",
        description:
            "We strive for excellence in everything we do, delivering high-quality solutions that exceed expectations.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Innovation",
        description:
            "We embrace innovation and creative thinking to solve complex industrial challenges.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Integrity",
        description:
            "We conduct our business with the highest ethical standards, honesty, and transparency.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Safety",
        description:
            "We prioritize the safety and well-being of our employees, clients, and communities.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Collaboration",
        description:
            "We believe in the power of teamwork and collaboration to achieve exceptional results.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Sustainability",
        description:
            "We are committed to sustainable practices that minimize environmental impact.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
];

// Benefits data
const benefits = [
    {
        title: "Competitive Compensation",
        description:
            "We offer industry-leading salaries and performance-based bonuses to reward your contributions.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Health & Wellness",
        description:
            "Comprehensive health insurance coverage for you and your family, plus wellness programs to keep you at your best.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Professional Development",
        description:
            "Continuous learning opportunities, including training programs, certifications, and career advancement paths.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
    {
        title: "Work-Life Balance",
        description:
            "Flexible scheduling options, generous paid time off, and family-friendly policies to help you thrive both at work and at home.",
        icon: <ArrowRight className="h-8 w-8 text-primary" />,
    },
];

export default function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[500px] w-full overflow-hidden">
                <Image
                    src="/landingImgs/landingImg2.jpg"
                    alt="Industrial workplace"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center text-center">
                    <div className="max-w-4xl px-6">
                        <div className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-medium mb-6">
                            JOIN OUR TEAM
                        </div>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6">
                            Careers at FORZO
                        </h1>
                        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Build your career with a leader in industrial
                            solutions and make an impact
                        </p>
                        <Link href="/career/apply">
                            <Button
                                size="lg"
                                className="bg-red-600 hover:bg-red-700"
                            >
                                Submit Your Resume
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Why Join Us Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-red-600 font-semibold mb-2">
                            WHY CHOOSE FORZO
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Join Our Growing Team
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            At FORZO, we believe our people are our greatest
                            asset. We're looking for talented individuals who
                            share our passion for excellence and innovation in
                            the industrial sector.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {value.title}
                                </h3>
                                <p className="text-gray-700">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Current Openings Section */}
            <div className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-red-600 font-semibold mb-2">
                            OPPORTUNITIES
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Join Our Talent Pool
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            While we don't have specific openings at the moment,
                            we're always looking for talented individuals to
                            join our team. Submit your resume to be considered
                            for future opportunities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <FileText className="h-8 w-8 text-red-600" />
                                </div>
                                <CardTitle>Submit Your Resume</CardTitle>
                                <CardDescription>
                                    Share your qualifications with us
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6">
                                    Send us your resume and we'll keep it on
                                    file for future opportunities that match
                                    your skills and experience.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <Mail className="h-8 w-8 text-red-600" />
                                </div>
                                <CardTitle>Email Notification</CardTitle>
                                <CardDescription>
                                    Stay informed about opportunities
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6">
                                    We'll contact you when positions that match
                                    your qualifications become available.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="text-center">
                            <CardHeader>
                                <div className="mx-auto bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                                    <Users className="h-8 w-8 text-red-600" />
                                </div>
                                <CardTitle>Join Our Network</CardTitle>
                                <CardDescription>
                                    Become part of our community
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-700 mb-6">
                                    Connect with our team and stay updated on
                                    company news and industry developments.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/career/apply">
                            <Button
                                size="lg"
                                className="bg-red-600 hover:bg-red-700"
                            >
                                Submit Your Resume
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <div className="text-red-600 font-semibold mb-2">
                            EMPLOYEE BENEFITS
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Work With Us
                        </h2>
                        <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            We offer a comprehensive benefits package designed
                            to support your professional growth, personal
                            well-being, and work-life balance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-700">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Take the Next Step?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join our team of talented professionals and be part of
                        our mission to deliver exceptional industrial solutions.
                    </p>
                    <Link href="/career/apply">
                        <Button
                            size="lg"
                            className="bg-red-600 hover:bg-red-700"
                        >
                            Submit Your Resume
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
