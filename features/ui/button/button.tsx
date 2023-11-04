import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";

// enums for different types
export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
}

export enum ButtonColor {
  primary = "primary",
  secondary = "secondary",
  gray = "gray",
  empty = "empty",
  emptyGray = "emptyGray",
  error = "error",
}

export enum ButtonIconPosition {
  leading = "leading",
  trailing = "trailing",
  iconOnly = "iconOnly",
  none = "none",
}

export function Button({
  size,
  color,
  iconPosition,
  iconName,
  text,
  reverseIcon,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  color: ButtonColor;
  iconPosition: ButtonIconPosition;
  iconName?: string;
  text?: string;
  reverseIcon?: boolean;
}) {
  switch (iconPosition) {
    case ButtonIconPosition.iconOnly:
      return (
        <button
          {...props}
          className={classNames(
            styles.button,
            props.className,
            styles[size],
            styles[color],
          )}
        >
          <img
            className={classNames(
              styles.icon,
              styles[iconPosition],
              reverseIcon ? styles.reverseIcon : styles.icon,
            )}
            src={`/icons/${iconName}.svg`}
          />
        </button>
      );
    case ButtonIconPosition.none:
      return (
        <button
          {...props}
          className={classNames(
            styles.button,
            props.className,
            styles[size],
            styles[color],
          )}
        >
          <div className={styles.text}>{text}</div>
        </button>
      );
    default:
      return (
        <div className={styles.container}>
          <button
            {...props}
            className={classNames(
              styles.button,
              props.className,
              styles[size],
              styles[color],
            )}
          >
            <div className={styles.text}>{text}</div>
            <img
              className={classNames(styles.icon, styles[iconPosition])}
              src={`/icons/${iconName}.svg`}
            />
          </button>
        </div>
      );
  }

  // if (text && (iconPosition != ButtonIconPlacement.none)) {
  //   return (
  //     <div className={styles.container}>
  //       <button {...props} className={classNames(styles.button, props.className, styles[size], styles[color] )}>
  //         <div className={styles.text}>
  //           {text}
  //         </div>
  //           <img
  //             className={classNames(styles.icon, styles[iconPosition])}
  //             src={`/icons/${iconName}.svg`} />
  //       </button>
  //    </div>
  //   );
  // } else if (!text && (iconPosition != ButtonIconPlacement.none)) {
  //   return (
  //     <button {...props} className={classNames(styles.button, props.className, styles[size], styles[color] )}>
  //       <img
  //         className={classNames(styles.icon, styles[iconPosition])}
  //         src={`/icons/${iconName}.svg`} />
  //     </button>
  //   );
  // } else if (text && (iconPosition == ButtonIconPlacement.none)) {
  //   return (
  //     <button {...props} className={classNames(styles.button, props.className, styles[size], styles[color] )}>
  //       <div className={styles.text}>
  //         {text}
  //       </div>
  //     </button>
  //   );
  // }
}
