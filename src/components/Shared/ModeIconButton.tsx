import { useEffect, useState } from "react";
import { IconButton, IconButtonProps } from "@spark-ui/icon-button";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { Icon } from "@spark-ui/icon";

export type ModeIconButtonProps = Omit<IconButtonProps, "aria-label">;

export const ModeIconButton = (props: ModeIconButtonProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      aria-label=""
      onClick={handleClick}
      disabled={!isMounted}
      {...props}
    >
      {isMounted && <Icon>{theme === "light" ? <FiMoon /> : <FiSun />}</Icon>}
    </IconButton>
  );
};
