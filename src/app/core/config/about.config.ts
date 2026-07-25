import { About } from "../models/about.model";

export const ABOUT_CONFIG: About = {

    title: 'Sobre mí',

    subtitle: 'Desarrollador Backend en formación.',

    description: [
        'Actualmente curso la Tecnicatura Superior en Desarrollo de Software, donde adquirí una sólida base en programación orientada a objetos, bases de datos y desarrollo de aplicaciones.',

        'Busco mi primera oportunidad profesional como Backend Developer para seguir aprendiendo, aportar valor a un equipo de desarrollo y continuar creciendo como desarrollador.'
    ],
    highlights: [
        {
            title: 'Backend',
            description: 'Desarrollo aplicaciones utilizando Java, Spring Boot, Django y bases de datos relacionales.'
        },
        {
            title: 'Arquitectura',
            description: 'Me interesa construir software limpio, reutilizable y fácil de mantener aplicando buenas prácticas.'
        },
        {
            title: 'Aprendizaje continuo',
            description: 'Busco mejorar constantemente mediante proyectos reales y nuevas tecnologías.'
        }
    ]
};