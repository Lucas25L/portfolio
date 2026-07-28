import { Contact } from '../models/contact.model';

export const CONTACT_CONFIG: Contact = {
    title: 'Contacto',
    description:
        'Si creés que puedo aportar valor a tu equipo, estaré encantado de conversar.',
    links: [
        {
            label: 'GitHub',
            url: 'https://github.com/TU_USUARIO',
            icon: 'assets/icons/github.svg',
            ariaLabel: 'Visitar mi perfil de GitHub',
            external: true,
        },
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/TU_USUARIO',
            icon: 'assets/icons/linkedin.svg',
            ariaLabel: 'Visitar mi perfil de LinkedIn',
            external: true,
        },
        {
            label: 'Gmail',
            url: 'mailto:llucasariel57@email.com',
            icon: 'assets/icons/gmail.svg',
            ariaLabel: 'Enviar un correo electrónico',
            external: false,
        },
    ],
};