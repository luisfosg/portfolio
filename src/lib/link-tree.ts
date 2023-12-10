type Link = {
  icon: string;
  iconSize?: string;
  link: string;
  samePage?: boolean
  name: string,
  color?: string,
  username: string;
  background: string,
}

export const links: Link[] = [
  {
    icon: 'icon-[ph--github-logo]',
    link: 'https://github.com/luisfosg',
    name: 'GitHub',
    background: 'bg-black/50',
    username: 'luisfosg',
  },
  {
    icon: 'icon-[bi--linkedin]',
    iconSize: 'text-lg',
    link: 'https://www.linkedin.com/in/luisfosg/',
    name: 'LinkedIn',
    background: 'bg-blue-500/20',
    username: 'luisfosg',
  },
  {
    icon: 'icon-[akar-icons--x-fill]',
    iconSize: 'text-lg',
    link: 'https://twitter.com/luisfosg_',
    name: 'Twitter',
    background: 'bg-black/50',
    username: 'luisfosg_',
  },
  {
    icon: 'icon-[mdi-light--email]',
    iconSize: 'text-xl',
    link: 'mailto:luisfosgdev@gmail.com',
    samePage: true,
    name: 'Correo',
    background: 'bg-white/30',
    username: 'luisfosgdev@gmail.com',
  }
]
