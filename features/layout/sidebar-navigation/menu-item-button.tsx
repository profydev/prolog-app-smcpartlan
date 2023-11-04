import React from "react";
import {
  Button,
  ButtonColor,
  ButtonSize,
  ButtonIconPosition,
} from "@features/ui";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  color: ButtonColor;
  size: ButtonSize;
  iconPosition: ButtonIconPosition;
  className?: string;
  text: string;
  iconName: string;
  isCollapsed: boolean;
  onClick: () => void;
};

export function MenuItemButton({
  color,
  size,
  iconPosition,
  className,
  text,
  onClick,
  iconName,
  isCollapsed,
}: MenuItemProps) {
  return (
    <li className={classNames(styles.listItem, className)}>
      <Button
        color={color}
        size={size}
        iconPosition={iconPosition}
        iconName={iconName}
        reverseIcon={isCollapsed}
        className={styles.anchor}
        text={text}
        onClick={onClick}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img
          className={isCollapsed ? styles.iconRight : styles.icon}
          src={iconSrc}
          alt={`${text} icon`}
        />{" "}
        {!isCollapsed && text}{" "} */}
      </Button>
    </li>
  );
}
