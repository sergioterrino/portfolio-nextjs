import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { title } from "process";
import dataJson from './public/data.json';

// Crear el mapeo de iconos para las redes sociales
const iconMap: { [key: string]: React.ReactNode } = {
    'LinkedIn': <Linkedin size={30} strokeWidth={1} />,
    'GitHub': <Github size={30} strokeWidth={1} />,
    'Youtube': <Youtube size={30} strokeWidth={1} />,
    'Twitter': <Twitter size={30} strokeWidth={1} />,
    'Twitch': <Twitch size={30} strokeWidth={1} />,
};

export const socialNetworks = dataJson.socialNetworks.map((network: any) => ({
    id: network.id,
    logo: iconMap[network.title] || <Github size={30} strokeWidth={1} />,
    src: network.src,
}));


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    // {
    //     id: 5,
    //     title: "Home",
    //     icon: <Speech size={25} color="#fff" strokeWidth={1} />,
    //     link: "/testimonials",
    // },
];

export const dataAboutPage = dataJson.aboutExperience;

export const dataCounter = dataJson.counter;

export const dataServices = dataJson.services.map((service: any) => ({
    title: service.title,
    icon: <Crop />,
    description: service.description,
}));

export const dataLanguages = dataJson.languages;

export const dataFrameworks = dataJson.frameworks;

export const dataTools = dataJson.tools;

export const dataPortfolio = dataJson.portfolio;

export const dataTestimonials = dataJson.testimonials;