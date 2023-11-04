import Link from "next/link";
import React from "react";
import classNames from "classnames";
import styles from "./menu-item-link.module.scss";

type MenuItemProps = {
  text: string;
  iconSrc: string;
  href: string;
  isActive: boolean;
  isCollapsed: boolean;
  iconReversable: boolean;
  className?: string;
};

export function MenuItemLink({
  text,
  href,
  iconSrc,
  isActive,
  isCollapsed,
  iconReversable,
  className,
}: MenuItemProps) {
  return (
    <li
      className={classNames(
        styles.listItem,
        isActive && styles.active,
        className,
      )}
    >
      <Link className={styles.anchor} href={href}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={
            isCollapsed && iconReversable ? styles.iconRight : styles.icon
          }
          src={iconSrc}
          alt={`${text} icon`}
        />{" "}
        {!isCollapsed && text}
      </Link>
    </li>
  );
}
