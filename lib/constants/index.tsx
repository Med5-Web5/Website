import { CardProps, PrescriptionDetailsProps, PrescriptionProps } from "../types";
import { HeartPulse, Stethoscope, UserRound } from "lucide-react";

export const Cards: CardProps[] = [
    {
        icon: "/_static/images/empowering.svg",
        title: "Empowering",
        description: "Your medical data is your own, securely stored on the blockchain and accessible only to you.",
        link: "/"
    },
    {
        icon: "/_static/images/seamless.svg",
        title: "Seamless",
        description: "You can share your medical history with healthcare providers seamlessly and securely.",
        link: "/"
    },
    {
        icon: "/_static/images/safety.svg",
        title: "Safety",
        description: "Hospitals can send you prescriptions directly that can be verified, eliminating the risk of forgery.",
        link: "/"
    }
];

export const utilizing = [
    {
        icon: <HeartPulse />,
        title: "Web5 Freedom",
        description: "This is your gateway to a healthcare ecosystem built on user secure connections."
    },
    {
        icon: <Stethoscope />,
        title: "Decentralized Login",
        description: "Med 5 gives you a verifiable, portable digital identity that you own and control."
    },
    {
        icon: <UserRound />,
        title: "Self-Owned Identity",
        description: "Verify your identity directly on a secure blockchain, offering greater security."
    }
];

export const features = [
    {
        icon: "/_static/images/search.svg",
        title: "Search",
        description: "Search for thousands of hospitals amd healthcare institutions"
    },
    {
        icon: "/_static/images/prescription.svg",
        title: "Verified prescription",
        description: " Med 5 lets hospitals send you tamper-proof digital prescriptions directly."
    },
    {
        icon: "/_static/images/consultation.svg",
        title: "Consultation",
        description: "Connects you with a network of doctors, specialists, and healthcare institutions."
    },
    {
        icon: "/_static/images/medical.svg",
        title: "Medical Data",
        description: " Med 5 seamlessly imports your data from existing healthcare systems."
    },
    {
        icon: "/_static/images/healthcare.svg",
        title: "Healthcare Network",
        description: "It's a community of empowered individuals shaping the future of healthcare. Be a part of the Web5 movement"
    },
    {
        icon: "/_static/images/tracking.svg",
        title: "Tracking",
        description: "Become the master of your health data!"
    }
];

export const prescriptions: PrescriptionProps[] = [
    {
        color: "#FB00FF",
        date: "2024-01-03",
        doctor: {
            picture: "/_static/images/avatar.png",
            name: "Brentford Junior",
        },
        message: "Hey, your prescription is ready, you can get your medications now!",
        tags: ["Fever", "Headache", "Upset-Stomach", "Catarrh", "Sore-throat", "Athritis", "PID", "Meningitis"],
        status: "pending"
    },
    {
        color: "#E5FAFF",
        date: "2024-01-12",
        doctor: {
            picture: "/_static/images/avatar.png",
            name: "Cynthia Randel",
        },
        message: "Hey, your prescription is ready, you can get your medications now!",
        tags: ["Fever", "Headache", "Upset-Stomach", "Catarrh", "Sore-throat", "Athritis", "PID", "Meningitis"],
        status: "pending"
    },
    {
        color: "#FB00FF",
        date: "2024-01-09",
        doctor: {
            picture: "/_static/images/avatar.png",
            name: "Brentford Junior",
        },
        message: "Hey, your prescription is ready, you can get your medications now!",
        tags: ["Fever", "Headache", "Upset-Stomach", "Catarrh", "Sore-throat", "Athritis", "PID", "Meningitis"],
        status: "pending"
    },
    {
        color: "#FB00FF",
        date: "2024-01-09",
        doctor: {
            picture: "/_static/images/avatar.png",
            name: "Brentford Junior",
        },
        message: "Hey, your prescription is ready, you can get your medications now!",
        tags: ["Fever", "Headache", "Upset-Stomach", "Catarrh", "Sore-throat", "Athritis", "PID", "Meningitis"],
        status: "pending"
    }
];

export const prescriptionDetails: PrescriptionDetailsProps[] = [
    {
        date: "2024-01-07",
        doctor: {
            picture: "/_static/images/avatar.png",
            name: "Brentford Junior",
        },
        tags: ["Fever", "Headache", "Upset-Stomach", "Catarrh", "Sore-throat", "Athritis", "PID", "Meningitis"],
        drugs:[
            {
                name: "Imodium",
                content: "16 Capsules of 2 mg each"
            }
        ],
        reason:"Your are experiencing symptoms of Diarrhea. Visit the hospital if the symptoms persist after one week of medication use.",
        dosage:"The initial dose is 4mg (two capsules) followed by 2 mg (one capsule) after each unformed stool"
    }
]