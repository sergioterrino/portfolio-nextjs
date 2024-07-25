import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Github, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { title } from "process";

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
        id: 2,
        title: "FCT - Software Developer",
        subtitle: "Tier1, S.A",
        description: [
            "Desarrollo en Comerzzia, una plataforma modular para el comercio retail.",
            "Customizaciones de Backoffices para clientes con Java 8/11, Spring, JSP, Javascript, MySQL, Hibernate.",
            "Personalizar el POS de los clientes con Java 8/11, SpringBoot, JavaFX, FXML, MyBatis.",
            "Desarrollo de API REST con SpringBoot y Spring.",
            "Resolución de incidencias.",
            "Generar informes con Jaspert iReports."
        ],
        date: "06/23 - 06/24",
    },
    {
        id: 1,
        title: "CFGS Desarrollo de Aplicaciones Web",
        subtitle: "IES Sotero Hernández",
        description: [
            "Formación Dual (966 horas en Centros de Trabajo).",
            "Diseño y desarrollo de sitios web y aplicaciones interactivas.",
            "Administración de servidores de aplicaciones y bases de datos.",
            "Empresa e Iniciativa Emprendedora.",
            "Proyecto Integrado de Desarrollo de Aplicaciones Web."
        ],
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
    // Lenguajes --> Java, Ts, Js, SQL, Py,
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
        endCounter: 12,
        text: "Frameworks",
        lineRight: false,
        lineRightMobile: false,
    },
    // Frameworks --> Spring, SpringBoot, JSP, JavaFX, MyBatis, Hibernate,  
    // Angular, Ionic, Express, React, NextJs, TailwindCSS

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
    {
        title: "Express",
        src: "/express1.png",
    },
    {
        title: "Hibernate",
        src: "/hibernate.png",
    },
    {
        title: "MyBatis",
        src: "/mybatis2.png",
    },
    {
        title: "JavaFX",
        src: "/javaFx.png",
    },
    {
        title: "JSP",
        src: "/jsp.png",
    },
    {
        title: "TailwindCSS",
        src: "/tailwindcss.png",
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
        title: 'MongoDB',
        src: '/mongodb.png'
    },
    {
        title: "JasperReports",
        src: "/jasperreports.png",
    },
];

export const dataPortfolio = [
    {
        id: 5,
        title: "Tasks Manager",
        description: "Aplicación web para gestionar tareas. Permite crear, editar y eliminar las tareas.",
        logos: ["nodejs", "react", "express", "mongodb", "tailwindcss"],
        image: "/tasksManager.webp",
        urlGithub: "https://github.com/sergioterrino/tasksManager-backend",
        urlDemo: "https://tasksmanager-frontend.onrender.com/",
    },
    {
        id: 4,
        title: "Customized Twitter",
        description: "Clon Politik de Twitter con funcionalidades básicas como publicar tweets, seguir a otros usuarios, dar like a tweets, etc.",
        logos: ["java", "spring", "angular", "mysql", "hibernate", "maven"],
        image: "/politik.webp",
        urlGithub: "https://github.com/sergioterrino/politik",
        urlDemo: "https://stb-politik.netlify.app/",
    },
    {
        id: 3,
        title: "Juego Online - Guess Where?",
        description: "Juego online tipo Quiz en el que tienes que adivinar la ubicación de un lugar antes de que acabe el tiempo.",
        logos: ["angular", "ts", "html", "css"],
        image: "/adivinadonde.webp",
        urlGithub: "https://github.com/sergioterrino/guesswhere",
        urlDemo: "https://adivinadonde.netlify.app/",
    },
    {
        id: 2,
        title: "Ionic Mobile App",
        description: "Aún no puedo dar detalles pues está en fase de comercialización.",
        logos: ["angular", "ts", "firebase"],
        image: "/seresbg.png",
        urlGithub: "",
        urlDemo: "",
    },
    {
        id: 1,
        title: "Juego Online - Guess Who?",
        description: "Juego online tipo Quiz en el que tienes que adivinar qué cantante escribió el verso antes de 10 segundos.",
        logos: ["js", "html", "css", "netlify"],
        image: "/adivinaquien.webp",
        urlGithub: "https://github.com/sergioterrino/guesswho",
        urlDemo: "https://adivinaquien.netlify.app/",
    },
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