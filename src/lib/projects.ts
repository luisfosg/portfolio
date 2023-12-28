export type Project = {
  id: string;
  slug: string;
  name: string;
  image: string;
  link?: string;
  repository?: string;
  description: string;
  alert?: string;
  technologies?: string[];
};

export const projects: Project[] = [
  {
    id: '1',
    slug: 'unimapz',
    name: 'UNIMAPZ',
    image: 'https://github.com/TheNewAgeDev/UNIMAPZ/blob/main/.assets/unimapz.png?raw=true',
    link: 'https://unimapz.surge.sh/',
    repository: 'https://github.com/TheNewAgeDev/UNIMAPZ',
    description: `
      <div class="text-lg">Un mapa interactivo del <strong>Instituto Universitario de la Paz - UNIPAZ</strong> <br>
      Conocerá su ubicación e información de interés.</div>
    `,
    alert: 'Mapa realizado en conjunto con varios compañeros de la Universidad',
    technologies: ['Leaflet', 'JavaScript']
  },
]
