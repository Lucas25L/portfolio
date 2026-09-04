import { ICONS } from '../config/icons.config';

/**
* Claves válidas de los iconos disponibles.
*/
export type HeroIcon = keyof typeof ICONS;

/**
 * Modelo de una acción del Hero.
 */
export interface HeroAction {

    // Texto visible del botón.
    label: string;

    // URL asociada a la acción.
    href: string;

    // Clave del icono.
    icon: HeroIcon;

    // Variante visual.
    variant: 'primary' | 'secondary';

    // Indica si el enlace debe descargar el recurso.
    download?: boolean;

    // Destino del enlace.
    target?: '_self' | '_blank';

}