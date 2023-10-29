import React from "react";
import { Button } from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  isCollapsed: boolean;
  onClick: () => void;
};

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button className={styles.anchor} onClick={onClick}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={isCollapsed ? styles.iconRight : styles.icon}
          src={iconSrc}
          alt={`${text} icon`}
          // style={{ transform: isCollapsed ? "rotate(180deg)" : "" }}
        />{" "}
        {!isCollapsed && text}{" "}
      </Button>
    </li>
  );
}
