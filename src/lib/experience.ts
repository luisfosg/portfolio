type Experience = {
  icon: string;
  name: string;
  date: string;
  description: string;
  isLasted?: boolean;
  link?: {
    url: string;
    icon: string;
    name: string;
  }
}

export const experiences: Experience[] = [
  {
    icon: 'icon-[fxemoji--largebluecircle]',
    name: 'Outsourcing in Davinci Technologies S.A.S',
    date: '1 Enero 2023',
    description: `
     Gestión y desarrollo de proyectos bajo SCRUM, participando en todo el ciclo de vida del software y diseñando soluciones enfocadas en calidad, experiencia de usuario y entrega oportuna de MVPs en colaboración con equipos multidisciplinarios.
    `,
    link: {
      name: 'Visitar Página',
      icon: 'icon-[ph--link-duotone]',
      url: 'https://davinci.tech/'
    },
    isLasted: true
  },
  {
    icon: 'icon-[fxemoji--briefcase]',
    name: 'Freelance',
    date: '10 Enero 2023',
    description: 'Administración y mantenimiento de sitios web y servidores VPS, implementando mejoras continuas para optimizar rendimiento y experiencia de usuario, y resolviendo incidencias técnicas a nivel de desarrollo y configuración.',
    isLasted: true
  },
  {
    icon: 'icon-[fxemoji--snowmountains]',
    name: 'Alpes Solutions S.A.S',
    date: '1 Julio - 30 Diciembre 2023 (6 Meses)',
    description: 'Profundice mis habilidades adquiridas de forma autodidacta, para complementarlas con el trabajo en equipo. adquirí las habilidades blandas básicas en el entorno laboral',
    link: {
      name: 'Visitar Página',
      icon: 'icon-[ph--link-duotone]',
      url: 'https://alpessolutions.com/'
    }
  }
]
