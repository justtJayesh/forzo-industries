"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

interface CardCarousalProps {
    data: {
        title: string;
        description: string;
        image: string;
    }[];
}

export default function CardCarousal({ data }: CardCarousalProps) {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                {data.map((serv, index) => (
                    <CarouselItem
                        key={index}
                        className="pl-1 md:basis-1/2 lg:basis-1/2"
                    >
                        <Card className="h-[500px]">
                            <CardContent className="p-6 h-full flex flex-col">
                                <div className="relative h-[80%] mb-4">
                                    <img
                                        src={serv.image}
                                        alt={`${serv.title}`}
                                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                    {serv.title}
                                </h3>
                                <p className="text-muted-foreground flex-grow">
                                    {serv.description}
                                </p>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
