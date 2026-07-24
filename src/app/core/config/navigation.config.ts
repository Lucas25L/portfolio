import { NavigationItem } from '../../shared/interfaces/navigation-item.interface';

export const NAVIGATION_ITEMS: ReadonlyArray<NavigationItem> = [
    {
        label: 'Inicio',
        anchor: 'hero',
    },
    {
        label: 'Quién soy',
        anchor: 'about',
    },
    {
        label: 'Stack',
        anchor: 'stack',
    },
    {
        label: 'Proyectos',
        anchor: 'projects',
    },
    {
        label: 'Contacto',
        anchor: 'contact',
    },
];