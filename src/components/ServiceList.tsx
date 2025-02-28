import { Button } from "@/components/ui/button";

type Service = {
    id: number;
    name: string;
    description: string;
};

type ServiceListProps = {
    services: Service[];
    selectedService: Service;
    onSelectService: (service: Service) => void;
};

export default function ServiceList({
    services,
    selectedService,
    onSelectService,
}: ServiceListProps) {
    return (
        <div className="space-y-2">
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            {services.map((service) => (
                <Button
                    key={service.id}
                    variant={
                        service.id === selectedService.id
                            ? "default"
                            : "outline"
                    }
                    className="w-full justify-start"
                    onClick={() => onSelectService(service)}
                >
                    {service.name}
                </Button>
            ))}
        </div>
    );
}
