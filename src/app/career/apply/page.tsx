"use client";

import type React from "react";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
// import { submitApplication } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { AlertCircle, CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

// List of potential positions
const potentialPositions = [
    "Project Manager",
    "Automation Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Maintenance Technician",
    "Process Engineer",
    "Quality Control Specialist",
    "Supply Chain Manager",
    "Industrial Designer",
    "Other",
];

// Form validation schema
const formSchema = z.object({
    fullName: z
        .string()
        .min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z
        .string()
        .min(10, { message: "Please enter a valid phone number." }),
    address: z.string().min(5, { message: "Please enter your full address." }),
    desiredPosition: z
        .string()
        .min(1, { message: "Please select a position." }),
    yearsOfExperience: z.coerce
        .number()
        .min(0, { message: "Years of experience must be a positive number." }),
    coverLetter: z
        .string()
        .min(50, { message: "Cover letter should be at least 50 characters." }),
});

export default function ApplicationForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitResult, setSubmitResult] = useState<{
        success: boolean;
        message: string;
    } | null>(null);
    const [resumeFile, setResumeFile] = useState<File | null>(null);

    // Initialize form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phone: "",
            address: "",
            desiredPosition: "",
            yearsOfExperience: 0,
            coverLetter: "",
        },
    });

    // Handle form submission
    // async function onSubmit(values: z.infer<typeof formSchema>) {
    //     setIsSubmitting(true);
    //     setSubmitResult(null);

    //     try {
    //         // Create FormData object for file upload
    //         const formData = new FormData();

    //         // Add form values to FormData
    //         Object.entries(values).forEach(([key, value]) => {
    //             formData.append(key, value.toString());
    //         });

    //         // Add resume file if selected
    //         if (resumeFile) {
    //             formData.append("resume", resumeFile);
    //         }

    //         // Submit the form
    //         // const result = await submitApplication(formData);
    //         // setSubmitResult(result);

    //         if (result.success) {
    //             form.reset();
    //             setResumeFile(null);
    //             toast({
    //                 title: "Application Submitted",
    //                 description:
    //                     "Your application has been submitted successfully!",
    //             });
    //         } else {
    //             toast({
    //                 variant: "destructive",
    //                 title: "Submission Error",
    //                 description: result.message,
    //             });
    //         }
    //     } catch (error) {
    //         setSubmitResult({
    //             success: false,
    //             message:
    //                 "An unexpected error occurred. Please try again or contact us directly at info@kali.com.",
    //         });
    //         toast({
    //             variant: "destructive",
    //             title: "Submission Error",
    //             description:
    //                 "An unexpected error occurred. Please try again or contact us directly at info@kali.com.",
    //         });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // }

    // Handle resume file change
    function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];

            // Validate file type
            const validTypes = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ];
            if (!validTypes.includes(file.type)) {
                toast.error("Please upload a PDF or Word document.", {
                    description: "Invalid file type",
                });
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("Please upload a file smaller than 5MB.", {
                    description: "File too large",
                });
                return;
            }

            setResumeFile(file);
        }
    }

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="mb-8">
                <Link
                    href="/career"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Careers
                </Link>
            </div>

            <Card className="max-w-3xl mx-auto">
                <CardHeader>
                    <CardTitle className="text-3xl">
                        Submit Your Application
                    </CardTitle>
                    <CardDescription>
                        While we don't have specific openings at the moment,
                        we're always looking for talented individuals. Your
                        application will be sent directly to our HR team at
                        <b>{" "}info@forzo.in</b> and kept on file for future
                        opportunities.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {submitResult && (
                        <Alert
                            className={
                                submitResult.success
                                    ? "bg-green-50 mb-6"
                                    : "bg-red-50 mb-6"
                            }
                        >
                            {submitResult.success ? (
                                <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                                <AlertCircle className="h-4 w-4 text-red-600" />
                            )}
                            <AlertTitle>
                                {submitResult.success
                                    ? "Application Submitted"
                                    : "Submission Error"}
                            </AlertTitle>
                            <AlertDescription>
                                {submitResult.message}
                            </AlertDescription>
                        </Alert>
                    )}

                    <Form {...form}>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="John Doe"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="email"
                                                    placeholder="john.doe@example.com"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="+1 (555) 123-4567"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="desiredPosition"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Desired Position
                                            </FormLabel>
                                            <Select
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                            >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a position" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {potentialPositions.map(
                                                        (position) => (
                                                            <SelectItem
                                                                key={position}
                                                                value={position}
                                                            >
                                                                {position}
                                                            </SelectItem>
                                                        )
                                                    )}
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="address"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="123 Main St, City, State, Zip"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="yearsOfExperience"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Years of Experience
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="number"
                                                    min="0"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <div>
                                    <FormLabel htmlFor="resume">
                                        Resume
                                    </FormLabel>
                                    <Input
                                        id="resume"
                                        type="file"
                                        accept=".pdf,.doc,.docx"
                                        onChange={handleResumeChange}
                                        className="cursor-pointer"
                                        required
                                    />
                                    <FormDescription>
                                        Upload your resume (PDF or Word, max
                                        5MB)
                                    </FormDescription>
                                    {resumeFile && (
                                        <p className="text-sm text-green-600 mt-1">
                                            Selected: {resumeFile.name}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <FormField
                                control={form.control}
                                name="coverLetter"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cover Letter</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Tell us about your experience, skills, and why you're interested in joining our team..."
                                                className="min-h-[150px]"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="text-sm text-gray-500 mb-4">
                                <p>
                                    By submitting this form, you agree that your
                                    application will be sent to info@kali.com
                                    for review.
                                </p>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    "Submit Application"
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
            <Toaster />
        </div>
    );
}
