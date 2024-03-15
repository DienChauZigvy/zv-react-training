import { IconType } from "react-icons";
import styles from "./CategoryItem.module.scss";

export interface CategoryItemProps {
  title: string;
  icon: IconType;
  selected?: boolean;
}

export default function CategoryItem({
  title,
  icon: Icon,
  selected,
}: CategoryItemProps) {
  return (
    <div
      className={`${styles.containerCategoryItem} ${selected ? styles.selectedCategoryItem : null}`}
    >
      <Icon className={styles.icon} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
