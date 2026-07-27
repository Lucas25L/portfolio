import { Project } from '../models/project.model';
import { STACK_ITEMS } from './stack-items.config';

export const PROJECTS_CONFIG: Project[] = [
    {
        title: 'Sistema de Comprobantes',

        summary:
            'Gestión de comprobantes mediante una aplicación Full Stack.',

        technicalFocus:
            'Angular 21 + Django REST Framework + API REST + JWT.',

        description:
            'Sistema que permite administrar comprobantes mediante operaciones CRUD sobre una API REST segura, aplicando autenticación basada en JWT y una arquitectura cliente-servidor desacoplada.',

        imageUrl: 'assets/images/projects/sistema-comprobantes.png',

        technologies: [
            STACK_ITEMS.angular,
            STACK_ITEMS.typescript,
            STACK_ITEMS.html,
            STACK_ITEMS.css,
            STACK_ITEMS.djangorest,
            STACK_ITEMS.postgresql,
            STACK_ITEMS.postman
        ],

        githubUrl: 'https://github.com/tu-usuario/sistema-comprobantes'
    },
    {
        title: 'API Sistema Bancario',

        summary:
            'API desarrollada en Java aplicando Programación Orientada a Objetos y patrones de diseño.',

        technicalFocus:
            'Arquitectura basada en POO, principios SOLID, patrones de diseño y procesamiento de datos desde archivos JSON.',

        description:
            'Proyecto orientado al modelado del dominio bancario mediante una arquitectura mantenible y extensible, aplicando encapsulamiento, herencia, polimorfismo y patrones de diseño para desacoplar la lógica de negocio.',

        imageUrl: 'assets/images/projects/api-sistema-bancario.jpg',

        technologies: [
            STACK_ITEMS.java
        ],

        githubUrl: 'https://github.com/tu-usuario/api-sistema-bancario'
    },
    {
        title: 'Sonómetro',

        summary:
            'Aplicación móvil Android para monitorear niveles de sonido en tiempo real.',

        technicalFocus:
            'Aplicación desarrollada en Java para Android, integrada con ESP32 y Firebase Realtime Database.',

        description:
            'Proyecto que integra una aplicación Android con un dispositivo ESP32 para registrar y visualizar mediciones de sonido en tiempo real, utilizando Firebase como base de datos NoSQL para sincronizar la información.',

        imageUrl: 'assets/images/projects/sonometro.jpg',

        technologies: [
            STACK_ITEMS.java,
            STACK_ITEMS.firebase,
            STACK_ITEMS.arduino
        ],

        githubUrl: 'https://github.com/tu-usuario/sonometro'
    }
];