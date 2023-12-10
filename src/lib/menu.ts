type Menu = {
  name: string;
  link: string;
  icon: string;
};

export const menuItems: Menu[] = [
  {
    name: 'Inicio',
    link: '/',
    icon: 'text-2xl icon-[material-symbols--home-outline-rounded]'
  },
  {
    link: '/project',
    icon: 'text-lg mr-1 icon-[streamline--application-add]',
    name: 'Proyectos'
  }
]
