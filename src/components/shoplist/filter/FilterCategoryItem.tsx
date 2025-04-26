import { useUrlParams } from "@/hooks/useUrlParams";
import { Category } from "@/types/api";
import React from "react";

interface Props {
  isActive?: boolean;
  category?: Category | undefined;
  setActiveCategory: (categoryId: number) => void;
  activeCategory?: number
}

const FilterCategoryItem = (props: Props) => {
  const { category, isActive,setActiveCategory, activeCategory } = props;
  const [toggleSubCategories, setToggleSubCategories] = React.useState(
    category?.subCategories?.find((item) => item.id === activeCategory) !==
      undefined
  );

  const hasSubCategories = React.useMemo(() => {
    if (
      !category ||
      !category?.subCategories ||
      category?.subCategories?.length === 0
    )
      return false;
    return true;
  }, [category?.subCategories]);

  const handleItemClick = () => {
    if (!hasSubCategories) {
      setActiveCategory(category?.id || 0);
      return undefined;
    } else {
      setToggleSubCategories((prev) => !prev);
    }
  };

  return (
    <li
      className={`list-item py-1 cursor-pointer ${isActive && "text-blue-500"}`}
    >
      <span onClick={handleItemClick}>
        {hasSubCategories ? (toggleSubCategories ? "- " : "+ ") : ""}
        {category?.name}
      </span>

      {hasSubCategories && toggleSubCategories && (
        <ul>
          {category?.subCategories?.map((item) => (
            <li
              key={item?.id}
              className={`${item?.id === activeCategory && "text-blue-500"}`}
              onClick={() => {
                setActiveCategory(item?.id || 0);
              }

              }
            >
              {item?.name}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default FilterCategoryItem;
