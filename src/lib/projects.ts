export type Project = {
  id: string;
  slug: string;
  name: string;
  image: string;
  link?: string;
  repository?: string;
  description: string;
  features?: string[];
  architecture?: string;
  alert?: string;
  technologies?: string[];
  shortDescription?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'noteffy',
    name: 'Noteffy',
    image: '/images/noteffy.png',
    link: 'https://luisfosg.github.io/tools/noteffy/',
    repository: 'https://github.com/luisfosg/tools',
    shortDescription: 'Calculadora de notas ponderadas en tiempo real',
    description: 'Noteffy es una calculadora de notas por ponderación que permite a estudiantes calcular su nota final en tiempo real. Soporta múltiples categorías (actividades, exámenes) con pesos personalizados y muestra el progreso de forma visual e interactiva.',
    features: [
      'Cálculo de notas ponderadas en tiempo real',
      'Soporte para múltiples categorías (actividades, exámenes)',
      'Pesos personalizados por ítem',
      'Interfaz responsiva e interactiva',
      'Visualización clara del progreso académico'
    ],
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'pnpm']
  },
  {
    id: '2',
    slug: 'unimapz',
    name: 'UNIMAPZ',
    image: 'https://github.com/TheNewAgeDev/UNIMAPZ/blob/main/.assets/unimapz.png?raw=true',
    link: 'https://unimapz.surge.sh/',
    repository: 'https://github.com/TheNewAgeDev/UNIMAPZ',
    shortDescription: 'Sistema interactivo de navegación universitaria',
    description: 'UNIMAPZ es un sistema de navegación interactivo diseñado específicamente para el Instituto Universitario de la Paz - UNIPAZ. Esta aplicación web ayuda a estudiantes, visitantes y personal a orientarse fácilmente por el campus universitario.',
    features: [
      'Mapa interactivo con zoom y navegación fluida',
      'Información detallada de cada edificio y sala',
      'Búsqueda rápida de ubicaciones',
      'Diseño responsivo para móviles y desktop',
      'Integración con datos geográficos del campus'
    ],
    architecture: 'Desarrollado con tecnologías web modernas para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.',
    alert: 'Proyecto desarrollado en equipo con compañeros universitarios. Algunas funciones pueden tener acceso restringido.',
    technologies: ['Leaflet.js', 'JavaScript ES6+', 'HTML5', 'CSS3', 'OpenStreetMap']
  }
]
