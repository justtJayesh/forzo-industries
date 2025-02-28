type Service = {
    id: number;
    name: string;
    description: string;
};

type ServiceDetailsProps = {
    service: Service;
};

export default function ServiceDetails({ service }: ServiceDetailsProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
        </div>
    );
}
