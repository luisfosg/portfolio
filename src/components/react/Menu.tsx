'use client';

import { useEffect, useState, useCallback } from "react";

type Props = {};

const Menu: React.FC<Props> = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(prevState => {
      const newState = !prevState;
      localStorage.setItem("isOpenMenu", newState.toString());
      document.getElementById("app")?.classList.toggle("menu-open", newState);
      return newState;
    });
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prevState => {
      const newMode = !prevState;
      const theme = newMode ? "dark" : "light";
      document.documentElement.classList.toggle("dark", newMode);
      localStorage.setItem("theme", theme);
      return newMode;
    });
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const isDark = storedTheme === "dark";
    setIsDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);

    const savedIsOpen = localStorage.getItem("isOpenMenu") === "true";
    setIsOpenMenu(savedIsOpen);
    document.getElementById("app")?.classList.toggle("menu-open", savedIsOpen);
  }, []);

  return (
    <section className="flex items-center">
      <div
        onClick={toggleMenu}
        className="hover:bg-white/20 cursor-pointer flex justify-center items-center p-2 rounded-lg"
      >
        <span
          className={`${
            isOpenMenu
              ? "icon-[solar--menu-dots-circle-bold]"
              : "icon-[solar--menu-dots-circle-linear]"
          } text-white dark:text-white/60 text-2xl`}
          role="img"
          aria-hidden="true"
        />
      </div>

      <div
        onClick={toggleDarkMode}
        className="hover:bg-white/20 cursor-pointer flex justify-center items-center p-2 rounded-lg"
      >
        <span
          className={`${
            isDarkMode
              ? "icon-[material-symbols-light--dark-mode]"
              : "icon-[material-symbols-light--dark-mode-outline]"
          } text-white dark:text-white/60 text-2xl`}
          role="img"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default Menu;
