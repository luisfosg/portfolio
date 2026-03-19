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
