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
  },
  {
    id: '3',
    slug: 'iban-generator',
    name: 'IBAN Generator',
    image: '/images/iban-generator.png',
    link: 'https://luisfosg.github.io/tools/iban-generator/',
    repository: 'https://github.com/luisfosg/tools',
    shortDescription: 'Generador de IBANs de prueba con datos bancarios consistentes para la UE',
    description: 'IBAN Generator es una herramienta que genera números IBAN de prueba para países de la Unión Europea, con datos bancarios consistentes como BIC/SWIFT, nombre del banco y código de banco. Ideal para desarrolladores que necesitan datos de prueba realistas para integraciones bancarias.',
    features: [
      'Soporte para 27 países de la UE con sus respectivos formatos IBAN',
      'Generación de IBANs con datos bancarios realistas (BBVA, Santander, CaixaBank, etc.)',
      'Visualización detallada: IBAN, BIC/SWIFT, banco, código de banco, número de cuenta',
      'Formato con y sin espacios para copiar',
      'Historial de IBANs generados',
      'Exportación a JSON'
    ],
    technologies: ['Astro', 'React', 'TypeScript', 'Tailwind CSS']
  }
]
