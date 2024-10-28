import React from "react";
import { ShoppingCartState } from "../context/context";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    filterState: { searchQuery },
    filterDispatch,
    state: { cart },
  } = ShoppingCartState();
  return (
    <nav className="h-5 flex items-center justify-between">
      <Link to={"/"}>
        <h2 className="text-2xl font-mono">E-commerce filters</h2>
      </Link>
      <input
        value={searchQuery}
        onChange={(e) =>
          filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value })
        }
        type="text"
        className="p-2"
        placeholder="Search a product"
      />
      <Link to={"/cart"}>
        <button className="p-2 bg-slate-500 text-white rounded-sm">
          Cart({cart.length})
        </button>
      </Link>
    </nav>
  );
};

export default Header;
