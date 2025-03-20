import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Rashik Industries Pvt. Ltd",
        img: "/partner-company-logos/R-logo.png",
    },
    {
        name: "Guardian Castings Pvt. Ltd",
        img: "/partner-company-logos/guardian-logo.jpg",
    },
    {
        name: "Kalika Steels Alloys Pvt. Ltd",
        img: "/partner-company-logos/kalika-steels-logo.png",
    },
    {
        name: "SRJ Petty Steels Pvt. Ltd",
        img: "/partner-company-logos/srj-logo.png",
    },
    {
        name: "Mahalaxmi TMT Pvt. Ltd",
        img: "/partner-company-logos/mhlaxmi-logo.jpeg",
    },
    {
        name: "African Foundries Ltd.",
        img: "/partner-company-logos/afl-logo.jpg",
    },
    {
        name: "Radha Smelters Pvt. Ltd",
        img: "/partner-company-logos/radha-logo.jpg",
    },
    {
        name: "Bhagyalaxmi Rolling Mill Pvt. Ltd",
        img: "/partner-company-logos/blrm.jpeg",
    },
    {
        name: "Aman Rolling Mills Pvt. Ltd",
        img: "/partner-company-logos/aman-mil.png",
    },
    {
        name: "Fortune Metaliks Pvt. Ltd",
        img: "/partner-company-logos/fortune-group.webp",
    },
    {
        name: "Madhav KRG Group",
        img: "/partner-company-logos/madhavkgrgroup.webp",
    },
    {
        name: "Metarolls Ispat Pvt Ltd",
        img: "/partner-company-logos/metaroll.png",
    },
    {
        name: "Sunflag Iron & Steel Co. Ltd",
        img: "/partner-company-logos/sunflag.png",
    },
    {
        name: "Suryadev Alloys & Power Plant Pvt. Ltd",
        img: "/partner-company-logos/suryadev.jpeg",
    },
    {
        name: "Vardhman Special Steel Ltd",
        img: "/partner-company-logos/vardhmansteels_logo.jpeg",
    },
    {
        name: "Vivan Steel Pvt. Ltd.",
        img: "/partner-company-logos/vivan-right-steel.png",
    },
    {
        name: "Viraj Profiles Ltd. ",
        img: "/partner-company-logos/vpl.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name }: { img: string; name: string }) => {
    return (
        <figure
            className={cn(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex items-center space-x-4 w-full h-full">
                <div className="w-20 h-20 flex items-center justify-center">
                    <img
                        alt="projects-logo"
                        src={img}
                        className="max-w-full max-h-full object-contain"
                    />
                </div>
                <p className="font-bold">{name}</p>
            </div>
        </figure>
    );
};

export function MarqueeComp() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.name} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}
