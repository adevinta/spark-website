import { Icon } from "@spark-ui/icon";
import { IconButton, IconButtonProps } from "@spark-ui/icon-button";
import { BurgerMenu } from "@spark-ui/icons";
import { useState } from "react";

import { LayoutNavDrawer } from "./LayoutNavDrawer";

export type LayoutNavButtonProps = Omit<IconButtonProps, "aria-label">;

export const LayoutNavButton = (props: LayoutNavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <>
      <IconButton aria-label="Menu" onClick={handleClick} {...props}>
        <Icon>
          <BurgerMenu />
        </Icon>
      </IconButton>

      <LayoutNavDrawer open={isOpen} onOpenChange={handleOpenChange} />
    </>
  );
};
