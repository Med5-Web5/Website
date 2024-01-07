export interface CardProps {
    icon: string;
    title: string;
    description: string;
    link: string;
}

export interface FeatureProps {
    icon: string ;
    title: string;
    description: string;
};

export interface PrescriptionProps {
    color: string;
    date: string;
    doctor: {
        picture: string;
        name: string;
    };
    message: string;
    tags: string[];
    status: "pending" | "accepted"
}

export interface PrescriptionDetailsProps {
    date: string;
    doctor: {
        picture: string;
        name: string;
    };
    tags: string[];
    drugs: {
        name: string;
        content: string;
    }[];
    reason: string;
    dosage: string;
}