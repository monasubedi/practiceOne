import React, { useEffect } from "react";
import { ShoppingCartState } from "../context/context";
import { useSearchParams } from "react-router-dom";

const filterMap = {
  byStock: "FILTER_BY_STOCK",
  byRating: "FILTER_BY_RATING",
  searchQuery: "FILTER_BY_SEARCH",
  sort: "FILTER_BY_PRICE",
};

const Filters = () => {
  const { filterState, filterDispatch } = ShoppingCartState();
  const { byStock, sort } = filterState;

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.size) {
      searchParams.forEach((value, key) => {
        filterDispatch({
          type: filterMap[key],
          payload: value,
        });
      });
    }
  }, []);

  useEffect(() => {
    setSearchParams(filterState);
  }, [filterState]);

  return (
    <div className="flex flex-col w-96 gap-2">
      <span className="font-bold">Filter Products</span>
      <span>
        <input
          type="radio"
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
          }
          className="mr-2"
          id="ascending"
          name="sort"
          checked={sort === "lowToHigh" ? true : false}
        />
        <label htmlFor="ascending">Ascending</label>
      </span>
      <span>
        <input
          type="radio"
          onChange={() =>
            filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
          }
          className="mr-2"
          id="descending"
          name="sort"
          checked={sort === "highToLow" ? true : false}
        />
        <label htmlFor="ascending">Descending</label>
      </span>
      <span>
        <input
          type="checkbox"
          onChange={() =>
            filterDispatch({ type: "FILTER_BY_STOCK", payload: !byStock })
          }
          className="mr-2"
          id="outofstock"
          name="outofstock"
          checked={byStock}
        />
        <label htmlFor="outofstock">Include Out of Stock</label>
      </span>
      <button
        onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
        className="bg-slate-500 text-white mr-3 rounded-sm"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default Filters;
