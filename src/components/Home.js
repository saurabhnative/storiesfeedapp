import React, { useState } from "react";
import "./Home.css";
import vaccineNames from "../dataSource/vaccinesNames";
import CreditsComponent from "./CreditsComponent";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [isCreditsPopUpOpen, setCreditsPopUpOpen] = useState(false);
  const history = useHistory();
  function redirectToStory(categoryItem) {
    history.push(`/story/${categoryItem.name.toLowerCase()}`);
  }
  function renderCategoryItem() {
    return vaccineNames.map((categoryItem) => {
      return (
        <div
          className="flex justify-center items-center flex-col mt-4 cursor-pointer"
          key={categoryItem.name + categoryItem.iconName}
          onClick={() => redirectToStory(categoryItem)}
        >
          <div className="category-outer-circle flex justify-center items-center">
            <div className="category-inner-circle flex justify-center items-center">
              <img src={categoryItem.iconName} width="40" />
            </div>
          </div>
          <div className="font-bold">{categoryItem.name}</div>
        </div>
      );
    });
  }
  return (
    <div>
      <div className="header text-white flex justify-center items-center text-2xl font-bold">
        <div>Covid Vaccines Information</div>
        <div
          className="fixed top-3 right-1 cursor-pointer"
          onClick={() => setCreditsPopUpOpen(true)}
        >
          <i className="material-icons text-3xl">info</i>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 w-screen flex justify-center items-center max-w-screen-md">
          {renderCategoryItem()}
        </div>
      </div>
      {isCreditsPopUpOpen ? (
        <CreditsComponent setCreditsPopUpOpen={setCreditsPopUpOpen} />
      ) : null}
    </div>
  );
}
