import { HeroAction } from '../models/hero-action.model';

export const HERO_ACTIONS: readonly HeroAction[] = [
    {
        label: 'Descargar CV',
        href: 'assets/cv/CV_Lucas_Lopez.pdf',
        icon: 'download',
        variant: 'primary',
        target: '_self'
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Lucas25L',
        icon: 'github',
        variant: 'secondary',
        target: '_blank'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/lucas-ariel-l%C3%B3pez-11a202339/',
        icon: 'linkedin',
        variant: 'secondary',
        target: '_blank'
    }
];