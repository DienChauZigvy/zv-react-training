import classNames from "classnames/bind";
import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ElementType;
  el?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  title,
  className: externalClassName = "",
  onClick,
  icon: Icon,
  el,
}) => {
  const cx = classNames.bind(styles);
  const buttonClass = cx(
    styles.button,
    ...(externalClassName ? externalClassName.split(" ") : []),
  );
  return (
    <button className={buttonClass} onClick={onClick}>
      {Icon && <Icon size={24} className={styles.icon} />}
      {el && el}
      <div className={styles.title}>{title}</div>
    </button>
  );
};

export default Button;
