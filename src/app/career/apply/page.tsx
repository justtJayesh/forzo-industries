"use client";

import type React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

import { CheckCircle, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";

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
    coverLetter: z.string().optional(),
});

// Define the allowed MIME types with a type for better TypeScript support
type AcceptedMimeTypes =
    | "application/pdf"
    | "application/msword"
    | "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    | "application/vnd.oasis.opendocument.text"
    | "text/plain"
    | "application/rtf"
    | "image/jpeg"
    | "image/png"
    | "image/gif"
    | "image/webp"
    | "image/svg+xml"
    | "image/tiff";

// Accepted resume file types and their MIME types
const ACCEPTED_FILE_TYPES: Record<AcceptedMimeTypes, string> = {
    // Document formats
    "application/pdf": "PDF",
    "application/msword": "DOC",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        "DOCX",
    "application/vnd.oasis.opendocument.text": "ODT",
    "text/plain": "TXT",
    "application/rtf": "RTF",
    "image/jpeg": "JPG/JPEG",
    "image/png": "PNG",
    "image/gif": "GIF",
    "image/webp": "WEBP",
    "image/svg+xml": "SVG",
    "image/tiff": "TIFF",
};

export default function ApplicationForm() {
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

    // Change from pdfFile to resumeFile to be more generic
    const [resumeFile, setResumeFile] = useState<File | null>(null);
    // Track the file format for display
    const [fileFormat, setFileFormat] = useState<string>("");

    // Add these state variables at the top of your component
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    // Handle form submission
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Check if resume file is uploaded
        if (!resumeFile) {
            toast.error("Please upload your resume before submitting");
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData();

        // Add all form fields to FormData
        Object.entries(values).forEach(([key, value]) => {
            formData.append(key, value.toString());
        });

        formData.append("resume", resumeFile);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            setShowSuccessDialog(true);
            // Reset form and file
            form.reset();
            setResumeFile(null);
            setFileFormat("");
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    }

    // Add a function to handle resume file changes
    function handleResumeChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const fileType = file.type as AcceptedMimeTypes;

            // Validate file type
            if (!Object.keys(ACCEPTED_FILE_TYPES).includes(fileType)) {
                toast.error(
                    `Please upload a supported file format (${Object.values(
                        ACCEPTED_FILE_TYPES
                    ).join(", ")})`
                );
                return;
            }

            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                toast.error("File size should be less than 5MB");
                return;
            }

            setResumeFile(file);
            setFileFormat(ACCEPTED_FILE_TYPES[fileType] || "Unknown format");
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
                        While we don&apos;t have specific openings at the
                        moment, we&apos;re always looking for talented
                        individuals. Your application will be sent directly to
                        our HR team at
                        <b> forzohr@gmail.in</b> and kept on file for future
                        opportunities.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
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
                                                    placeholder="+91"
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
                                                Desired Department
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

                            <div className="mb-6 space-y-2">
                                <FormLabel htmlFor="resume">
                                    Upload Resume{" "}
                                    <span className="text-red-600">*</span>
                                </FormLabel>
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx,.odt,.txt,.rtf,.jpg,.jpeg,.png,.gif,.webp,.svg,.tiff"
                                    onChange={handleResumeChange}
                                    className="cursor-pointer"
                                    required
                                />
                                {resumeFile && (
                                    <p className="text-sm text-green-600 mt-1">
                                        Selected: {resumeFile.name} (
                                        {fileFormat})
                                    </p>
                                )}
                                {!resumeFile && (
                                    <p className="text-sm text-amber-600 mt-1">
                                        Please upload your resume before
                                        submitting
                                    </p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                    Supported formats: PDF, DOC, DOCX, ODT, TXT,
                                    RTF, JPG, JPEG, PNG, GIF, WEBP, SVG, TIFF
                                    (Max 5MB)
                                </p>
                            </div>
                            <div className="text-sm text-gray-500 mb-4">
                                <p>
                                    By submitting this form, you agree that your
                                    application will be sent to{" "}
                                    <b>forzohr@gmail.com</b> for review.
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
            <Dialog
                open={showSuccessDialog}
                onOpenChange={setShowSuccessDialog}
            >
                <DialogContent className="sm:max-w-md">
                    <div className="flex flex-col items-center text-center">
                        <div className="rounded-full bg-green-100 p-3 mb-4">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <DialogTitle className="text-xl font-semibold mb-2">
                            Application Submitted!
                        </DialogTitle>
                        <DialogDescription className="mb-6">
                            Thank you for your interest in joining our team. We
                            will review your application and get back to you
                            soon.
                        </DialogDescription>
                        <Link href="/">
                            <Button
                                className="bg-red-600 hover:bg-red-700"
                                onClick={() => setShowSuccessDialog(false)}
                            >
                                Back to Home
                            </Button>
                        </Link>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
