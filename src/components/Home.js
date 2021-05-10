import React from "react";
import "./Home.css";
import categoryItems from "../dataSource/categories";
export default function Home() {
  function renderCategoryItem() {
    return categoryItems.map((categoryItem) => {
      return (
        <div
          className="flex justify-center items-center flex-col mt-4"
          key={categoryItem.name}
        >
          <div className="category-outer-circle flex justify-center items-center">
            <div className="category-inner-circle flex justify-center items-center">
              <i className="material-icons text-4xl">{categoryItem.iconName}</i>
            </div>
          </div>
          <div className="font-bold">{categoryItem.name}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="header text-white flex justify-center items-center text-3xl font-bold">
        Stories Feed
      </div>
      <div className="grid grid-cols-3">{renderCategoryItem()}</div>
    </div>
  );
}
