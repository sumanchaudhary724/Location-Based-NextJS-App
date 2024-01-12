import React, { useState } from "react";
import Data from "@/Shared/Data";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  return <div>CategoryList</div>;
};

export default CategoryList;
