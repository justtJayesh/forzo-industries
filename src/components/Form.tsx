// "use client";
// import { useState } from "react";
// import { toast } from "sonner";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//     Form,
//     FormControl,
//     FormDescription,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { PhoneInput } from "@/components/ui/phone-input";
// import { Textarea } from "@/components/ui/textarea";

// const formSchema = z.object({
//     name_3366101655: z.string().min(1).min(3).max(100),
//     name_3360687682: z.string(),
//     name_1004191866: z.string().min(10),
//     name_3387535895: z.string().min(5),
// });

// export default function MyForm() {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//     });

//     function onSubmit(values: z.infer<typeof formSchema>) {
//         try {
//             console.log(values);
//             toast(
//                 <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//                     <code className="text-white">
//                         {JSON.stringify(values, null, 2)}
//                     </code>
//                 </pre>
//             );
//         } catch (error) {
//             console.error("Form submission error", error);
//             toast.error("Failed to submit the form. Please try again.");
//         }
//     }

//     return (
//         <Form {...form}>
//             <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="space-y-8 max-w-3xl mx-auto py-10"
//             >
//                 <FormField
//                     control={form.control}
//                     name="name_3366101655"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Full Name</FormLabel>
//                             <FormControl>
//                                 <Input placeholder="" type="text" {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 Enter you full name.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     control={form.control}
//                     name="name_3360687682"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Email</FormLabel>
//                             <FormControl>
//                                 <Input placeholder="" type="email" {...field} />
//                             </FormControl>
//                             <FormDescription>
//                                 Enter you email Id.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     control={form.control}
//                     name="name_1004191866"
//                     render={({ field }) => (
//                         <FormItem className="flex flex-col items-start">
//                             <FormLabel>Phone number</FormLabel>
//                             <FormControl className="w-full">
//                                 <PhoneInput
//                                     placeholder=""
//                                     {...field}
//                                     defaultCountry="TR"
//                                 />
//                             </FormControl>
//                             <FormDescription>
//                                 Enter your phone number.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />

//                 <FormField
//                     control={form.control}
//                     name="name_3387535895"
//                     render={({ field }) => (
//                         <FormItem>
//                             <FormLabel>Message</FormLabel>
//                             <FormControl>
//                                 <Textarea
//                                     placeholder=""
//                                     className="resize-none"
//                                     {...field}
//                                 />
//                             </FormControl>
//                             <FormDescription>
//                                 Feel free to drop in any queries.
//                             </FormDescription>
//                             <FormMessage />
//                         </FormItem>
//                     )}
//                 />
//                 <Button type="submit">Submit</Button>
//             </form>
//         </Form>
//     );
// }
