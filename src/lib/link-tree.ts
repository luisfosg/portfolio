export type Link = {
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
    background: 'bg-black',
    username: 'luisfosg',
  },
  {
    icon: 'icon-[bi--linkedin]',
    iconSize: 'text-lg',
    link: 'https://www.linkedin.com/in/luisfosg/',
    name: 'LinkedIn',
    background: 'bg-blue-500',
    username: 'luisfosg',
  },
  {
    icon: 'icon-[akar-icons--x-fill]',
    iconSize: 'text-lg',
    link: 'https://x.com/luisfosg_',
    name: 'X',
    background: 'bg-black',
    username: 'luisfosg_',
  },
  {
    icon: 'icon-[mdi-light--email]',
    iconSize: 'text-2xl',
    color: 'text-black',
    link: 'mailto:luisfosgdev@gmail.com',
    samePage: true,
    name: 'Correo',
    background: 'bg-white',
    username: 'luisfosgdev@gmail.com',
  },
  {
    icon: 'icon-[simple-icons--linktree]',
    background: 'bg-green-400',
    color: 'text-black',
    link: 'https://linktr.ee/luisfosg',
    name: 'Linktree',
    username: 'luisfosg',
    iconSize: 'text-xl'
  }
]
