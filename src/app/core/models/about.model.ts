/* ==========================================
    About Highlight
========================================== */

/* Representa una tarjeta destacada de la sección About. */
export interface AboutHighlight {
    title: string;
    description: string;
}


/* ==========================================
    About
========================================== */

/* Representa la configuración completa de la sección About. */
export interface About {
    title: string;
    subtitle: string;
    description: string[];
    highlights: AboutHighlight[];
}
