"use client";
import React, { useState } from "react";
import { categories, Category } from "../dummy/categories.dummy";
import CategorySelector from "./CategorySelector";

export default function Header() {
  interface AllButtonProps {
    AllCategorySelector: Boolean;
    StateUpdator: React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface CategorySelectors {
    categories: Category[];
  }

  function AllCategories(props: AllButtonProps) {
    if (props.AllCategorySelector) {
      return (
        <button
          onClick={() => {
            props.StateUpdator(!props.AllCategorySelector);
          }}
          className="hover:bg-white hover:text-black p-1 pl-2 pr-2 bg-black text-white shadow rounded-full mr-1"
        >
          All
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.StateUpdator(!props.AllCategorySelector);
          }}
          className="hover:bg-black hover:text-white p-1 pl-2 pr-2 bg-gray-50 shadow rounded-full mr-1"
        >
          All
        </button>
      );
    }
  }

  function Category(props: CategorySelectors) {
    return props.categories.map((category) => {
      return <CategorySelector category={category} />
    })
  }

  // const profileData = await getProfileData();
  const [allCategorySelector, setAllCategorySelector] = useState(false);

  return (
    <div className="h-16 sticky top-0 left-0 w-full flex flex-row items-center justify-around">
      <img
        src="/profile demo.png"
        alt="Profile Demo"
        className="h-12 w-12 rounded-full shadow"
      />
      <div className="w-10/12 h-12 justify-start overflow-hidden overflow-x-auto no-scrollbar border-4 border-gray-300 bg-gray-300 flex flex-row rounded-full items-center p-4 text-black">
        <AllCategories
          StateUpdator={setAllCategorySelector}
          AllCategorySelector={allCategorySelector}
        />
        <Category categories={categories} />
      </div>
    </div>
  );
}
