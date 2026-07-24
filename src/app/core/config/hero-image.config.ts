/**
 * Configuración de la imagen principal del Hero.
 * Mantiene separada la referencia del recurso visual
 * respecto al componente.
 */
export const HERO_IMAGE = {
  // Ruta del recurso
    src: 'assets/images/profile.png', // Nunca debemos usar rutas relativas desde el componente. Angular sirve los assets desde la raíz.

  // Texto alternativo para accesibilidad
    alt: 'Lucas López - Backend Developer'

} as const;