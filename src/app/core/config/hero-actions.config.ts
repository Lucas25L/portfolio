import { HeroAction } from '../models/hero-action.model';

export const HERO_ACTIONS: readonly HeroAction[] = [
    {
        label: 'Descargar CV',
        href: 'assets/cv/Lucas-Lopez-CV.pdf',
        icon: 'download',
        variant: 'primary',
        target: '_self'
    },
    {
        label: 'GitHub',
        href: 'https://github.com/',
        icon: 'github',
        variant: 'secondary',
        target: '_blank'
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/',
        icon: 'linkedin',
        variant: 'secondary',
        target: '_blank'
    }
];