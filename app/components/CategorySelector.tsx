import { useState } from "react";
import { Category } from "../dummy/categories.dummy";
interface CategorySelectors {
    category: Category;
}

export default function CategorySelector(props: CategorySelectors) {
    const [selected, setSelected] = useState(false);
    if (selected) {
        return (
            <button
                onClick={() => setSelected(!selected)}
                className="hover:bg-white w-fit text-nowrap hover:text-black p-1 pl-2 pr-2 bg-black text-white shadow rounded-full ml-1 mr-1"
            >
                {props.category.name}
            </button>
        );
    } else {
        return (
            <button
                onClick={() => setSelected(!selected)}
                className="hover:bg-black w-fit text-nowrap hover:text-white p-1 pl-2 pr-2 bg-gray-50 shadow rounded-full ml-1 mr-1"
            >
                {props.category.name}
            </button>
        );
    }
}
