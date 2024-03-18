import { useState } from "react";
import { IoToggle } from "react-icons/io5";
import { LiaToggleOffSolid } from "react-icons/lia";
import { TbFilterCog } from "react-icons/tb";
import CategoryItem from "./CategoryItem";
import styles from "./Category.module.scss";
import { categoryList } from "../../../../data/catagory";

export default function Category() {
  const [toggleFilterButton, setToggleFilterButton] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.categoryContainer}>
      <div className={styles.categoryList}>
        {categoryList.map((item, index) => (
          <CategoryItem
            key={index}
            title={item.title}
            icon={item.icon}
            selected={!!activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <div className={styles.filterContainer}>
        <div className={styles.button}>
          <TbFilterCog size={22} />
          Filters
        </div>
        <div
          className={`${styles.button} ${styles.filterTax}`}
          onClick={() => setToggleFilterButton(!toggleFilterButton)}
        >
          Display total before taxes
          {toggleFilterButton ? (
            <IoToggle size={26} />
          ) : (
            <LiaToggleOffSolid size={26} />
          )}
        </div>
      </div>
    </div>
  );
}
