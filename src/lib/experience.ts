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
    icon: 'icon-[fxemoji--lowerleftpaintbrush]',
    name: 'Alpes Solutions S.A.S - Outsourcing Davinci',
    date: '1 Enero 2023',
    description: `
      Involucrado en diversos proyectos de la empresa, trabajando en equipo, cumpliendo con asignaciones y aportando ideas que ayudan en el desarrollo ágil y cumplimiento satisfactorio de las actividades.
    `,
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
