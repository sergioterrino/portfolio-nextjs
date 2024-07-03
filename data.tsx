import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    // {
    //     id: 1,
    //     logo: <Youtube size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/sergioterrino/",
    },
    // {
    //     id: 3,
    //     logo: <Twitter size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
    {
        id: 4,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/sergioterrino",
    },
    // {
    //     id: 5,
    //     logo: <Twitch size={30} strokeWidth={1} />,
    //     src: "#!",
    // },
];


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

export const dataAboutPage = [
    {
        id: 4,
        title: "FCT - Software Developer",
        subtitle: "Tier1, S.A",
        description: "Desarrollo de nuevas funcionalidades y customizaciones para clientes de Comerzzia. Resolución de gaps en el software. Manejo de incidencias. ",
        date: "03/24 - 06/24",
    },
    {
        id: 3,
        title: "Prácticas 2º curso",
        subtitle: "Tier1, S.A",
        description: "Creación de APIs con Spring y SpringBoot para la integración en comerzzia. Resolución de incidencias y mejoras en el software. Jaspert Reports para la generación de informes. ",
        date: "10/23 - 03/24",
    },
    {
        id: 2,
        title: "Prácticas 1er curso",
        subtitle: "Tier1, S.A",
        description: "Inicio de proyecto en Comerzzia (software propio de Tier1) el cual es una plataforma modular para todos los procesos de venta en el comercio que permite a los retailers optimizar las experiencias de compra de sus clientes.",
        date: "03/23 - 06/23",
    },
    {
        id: 1,
        title: "CFGS Desarrollo de Aplicaciones Web",
        subtitle: "IES Sotero Hernández",
        description: "Formación Dual (966 horas en Centros de Trabajo). Diseño y desarrollo de sitios web y aplicaciones interactivas. Administración de servidores de aplicaciones y bases de datos. Empresa e Iniciativa Emprendedora. Proyecto Integrado de Desarrollo de Aplicaciones Web.",
        date: "09/22 - 06/24",
    },
]

export const dataCounter = [
    {
        id: 1,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Lenguajes de programación",
        lineRight: true,
        lineRightMobile: true,
    },
    // {
    //     id: 1,
    //     endCounter: 80,
    //     text: "Clientes satisfechos",
    //     lineRight: true,
    //     lineRightMobile: false,
    // },
    {
        id: 3,
        endCounter: 4,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 4,
        endCounter: 6,
        text: "Frameworks",
        lineRight: false,
        lineRightMobile: false,
    },
    // {
    //     id: 3,
    //     endCounter: 30,
    //     text: "Premios ganadores",
    //     lineRight: false,
    //     lineRightMobile: false,
    // },
];

export const dataServices = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataLanguages = [
    {
        title: "Java",
        src: "/java.png",
    },
    {
        title: "JavaScript",
        src: "/javascript.png",
    },
    {
        title: "Python",
        src: "/python.png",
    },
    {
        title: "TypeScript",
        src: "/typescript.png",
    },
    {
        title: "SQL",
        src: "/sql.png",
    },
];

export const dataFrameworks = [
    {
        title: "Angular",
        src: "/angular.png",
    },
    {
        title: "Spring",
        src: "/spring1.png",
    },
    {
        title: "Ionic",
        src: "/ionic.png",
    },
    {
        title: "Springboot",
        src: "/springboot.png",
    },
    {
        title: "NextJs",
        src: "/nextjs.png",
    },
    {
        title: "React",
        src: "/react.png",
    },
];

export const dataTools = [
    {
        title: "HTML",
        src: "/html.png",
    },
    {
        title: "CSS",
        src: "/css.png",
    },
    {
        title: "Git",
        src: "/git.png",
    },
    {
        title: "Maven",
        src: "/maven.png",
    },
    {
        title: "TailwindCSS",
        src: "/tailwindcss.png",
    },
    {
        title: "MySQL",
        src: "/mysql.png",
    },
    {
        title: "Firebase",
        src: "/firebase.png",
    },
    {
        title: "Postman",
        src: "/postman.svg",
    },
    {
        title: "JasperReports",
        src: "/jasperreports.png",
    },
];

export const dataPortfolio = [
    {
        id: 2,
        title: "Juego online - Guess Who?",
        description: ["Javascript", "Html", "Css"],
        image: "/adivinaquien.png",
        urlGithub: "",
        urlDemo: "https://adivinaquien.netlify.app/",
    },
    {
        id: 1,
        title: "Juego online - Guess Where?",
        description: ["Angular", "Typescript", "Html", "Css"],
        image: "/adivinadonde2.png",
        urlGithub: "",
        urlDemo: "https://adivinadonde.netlify.app/",
    },
    {
        id: 3,
        title: "Customized Twitter",
        description: ["Java", "Spring Boot", "Angular", "Spring Security"],
        image: "/politik.png",
        urlGithub: "https://github.com/sergioterrino/politik",
        urlDemo: "https://stb-politik.netlify.app/",
    },
    {
        id: 4,
        title: "Ionic mobile app",
        description: ["Ionic", "Firebase", "Angular", "Typescript"],
        image: "/seres2.jpg",
        urlGithub: "",
        urlDemo: "",
    },
    // {
    //     id: 5,
    //     title: "Webs Impactantes",
    //     image: "/image-5.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 6,
    //     title: "Web Dinámica",
    //     image: "/image-6.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
    // {
    //     id: 7,
    //     title: "Dark Web ",
    //     image: "/image-7.jpg",
    //     urlGithub: "#!",
    //     urlDemo: "#!",
    // },
];

export const dataTestimonials = [
    {
        id: 1,
        name: "George Snow",
        description:
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Juan Pérez",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "María García",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Laura Snow",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    {
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },
];