import { useRouter } from "next/router";
import { useContext, useState, useEffect } from "react";
import { Routes } from "@config/routes";
import classNames from "classnames";
import { NavigationContext } from "./navigation-context";
import { MenuItemLink } from "./menu-item-link";
import styles from "./sidebar-navigation.module.scss";

const menuItems = [
  { text: "Projects", iconSrc: "/icons/projects.svg", href: Routes.projects },
  { text: "Issues", iconSrc: "/icons/issues.svg", href: Routes.issues },
  { text: "Alerts", iconSrc: "/icons/alert.svg", href: Routes.alerts },
  { text: "Users", iconSrc: "/icons/users.svg", href: Routes.users },
  { text: "Settings", iconSrc: "/icons/settings.svg", href: Routes.settings },
];

export function SidebarNavigation() {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileForm, setMobileForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // making assumption that mobile devices will be less than 768 px in width; would need to ascertain through extensive user testing
      setMobileForm(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div
      className={classNames(
        styles.container,
        isSidebarCollapsed && styles.isCollapsed,
      )}
    >
      <div
        className={classNames(
          styles.fixedContainer,
          isSidebarCollapsed && styles.isCollapsed,
        )}
      >
        <header className={styles.header}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={
              isSidebarCollapsed && !isMobileForm
                ? "/icons/logo-small.svg"
                : "/icons/logo-large.svg"
            }
            alt="logo"
            className={styles.logo}
          />
        </header>
        <div
          className={classNames(
            styles.menuOverlay,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        />
        <nav
          className={classNames(
            styles.nav,
            isMobileMenuOpen && styles.isMobileMenuOpen,
          )}
        >
          <ul className={styles.linkList}>
            {menuItems.map((menuItem, index) => (
              <MenuItemLink
                key={index}
                {...menuItem}
                isCollapsed={isSidebarCollapsed}
                iconReversable={false}
                isActive={router.pathname === menuItem.href}
              />
            ))}
          </ul>
          <ul className={styles.list}>
            <MenuItemLink
              text="Support"
              iconSrc="/icons/support.svg"
              isCollapsed={isSidebarCollapsed}
              iconReversable={false}
              href="mailto:support@prolog-app.com?subject=Support Request"
              isActive={false}
            />
            <div
              onClick={() => {
                toggleSidebar(), setMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              <MenuItemLink
                text="Collapse"
                iconSrc="/icons/arrow-left.svg"
                isCollapsed={isSidebarCollapsed}
                iconReversable={true}
                href=""
                isActive={false}
                className={styles.collapseMenuItem}
              />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}
