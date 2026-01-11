type Experience = {
  icon: string;
  name: string;
  startDate: string;
  endDate?: string;
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
    name: 'Ciudadela',
    startDate: '2026-01-12',
    description: '',
    isLasted: true,
    link: {
      name: 'Visitar Página',
      icon: 'icon-[ph--link-duotone]',
      url: 'https://ciudadela.eu/'
    }
  },
  {
    icon: 'icon-[fxemoji--briefcase]',
    name: 'Freelance',
    startDate: '2023-01-02',
    description: 'Administración y mantenimiento de sitios web y servidores VPS, implementando mejoras continuas para optimizar rendimiento y experiencia de usuario, y resolviendo incidencias técnicas a nivel de desarrollo y configuración.',
    isLasted: true
  },
  {
    icon: 'icon-[fxemoji--artistpalette]',
    name: 'Outsourcing in Davinci Technologies S.A.S',
    startDate: '2023-01-02',
    endDate: '2026-01-30',
    description: `
     Gestión y desarrollo de proyectos bajo SCRUM, participando en todo el ciclo de vida del software y diseñando soluciones enfocadas en calidad, experiencia de usuario y entrega oportuna de MVPs en colaboración con equipos multidisciplinarios.
    `,
    link: {
      name: 'Visitar Página',
      icon: 'icon-[ph--link-duotone]',
      url: 'https://davinci.tech/'
    }
  },
  {
    icon: 'icon-[fxemoji--snowmountains]',
    name: 'Alpes Solutions S.A.S',
    startDate: '2023-07-01',
    endDate: '2023-12-31',
    description: 'Profundice mis habilidades adquiridas de forma autodidacta, para complementarlas con el trabajo en equipo. adquirí las habilidades blandas básicas en el entorno laboral',
    link: {
      name: 'Visitar Página',
      icon: 'icon-[ph--link-duotone]',
      url: 'https://alpessolutions.com/'
    }
  }
]
