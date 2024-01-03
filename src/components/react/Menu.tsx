import { useState } from "react"

type Props = {
}

const Menu: React.FC<Props> = ({  }: Props) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <section className="flex items-center">
      <div onClick={() => setIsOpenMenu(!isOpenMenu)} className="hover:bg-white/20 cursor-pointer flex justify-center items-center p-2 rounded-lg">
        <span className={`${isOpenMenu ? 'icon-[solar--menu-dots-circle-bold]' : 'icon-[solar--menu-dots-circle-linear]'} text-white/60 text-2xl`} role="img" aria-hidden="true" />
      </div>

      <div onClick={() => setIsDarkMode(!isDarkMode)} className="hover:bg-white/20 cursor-pointer flex justify-center items-center p-2 rounded-lg">
        <span className={`${isDarkMode ? 'icon-[material-symbols-light--dark-mode]' : 'icon-[material-symbols-light--dark-mode-outline]'} text-white/60 text-2xl`} role="img" aria-hidden="true" />
      </div>
    </section>
  )
}

export default Menu
