import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Loading() {
    return (
        <div className="container mx-auto py-12 px-4">
            <div className="text-center mb-12">
                <Skeleton className="h-10 w-[300px] mx-auto mb-4" />
                <Skeleton className="h-6 w-[400px] mx-auto mb-6" />
                <Skeleton className="h-10 w-[120px] mx-auto" />
            </div>

            <div className="mb-12">
                <Skeleton className="h-8 w-[200px] mb-6" />

                {[1, 2, 3].map((i) => (
                    <Card key={i} className="mb-6">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:items-center justify-between">
                                <div>
                                    <Skeleton className="h-8 w-[200px] mb-2" />
                                    <div className="flex flex-wrap gap-4">
                                        <Skeleton className="h-4 w-[100px]" />
                                        <Skeleton className="h-4 w-[80px]" />
                                        <Skeleton className="h-4 w-[120px]" />
                                    </div>
                                </div>
                                <Skeleton className="h-10 w-[100px] mt-4 md:mt-0" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-4 w-full mb-4" />
                            <Skeleton className="h-4 w-full mb-4" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div>
                                    <Skeleton className="h-6 w-[120px] mb-2" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                </div>
                                <div>
                                    <Skeleton className="h-6 w-[120px] mb-2" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-full" />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="bg-muted p-8 rounded-lg text-center">
                <Skeleton className="h-8 w-[300px] mx-auto mb-4" />
                <Skeleton className="h-4 w-[400px] mx-auto mb-6" />
                <Skeleton className="h-10 w-[180px] mx-auto" />
            </div>
        </div>
    );
}
