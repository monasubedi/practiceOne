import React, { useMemo } from "react";
import { ShoppingCartState } from "../context/context";
import Filters from "../components/filters";

const Home = () => {
  const {
    state: { products, cart },
    dispatch,
    filterState: { byStock, sort, searchQuery },
  } = ShoppingCartState();

  const filterProducts = useMemo(() => {
    let filteredProducts = products;

    if (sort) {
      filteredProducts = products.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }
    if (searchQuery) {
      filteredProducts = products.filter((product, i) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (!byStock) {
      filteredProducts = products.filter((product) => product.inStock);
    }

    return filteredProducts;
  }, [sort, searchQuery, byStock, products]);

  const handleAddtoCart = (product, inCart) => {
    dispatch({
      type: inCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
      payload: product,
    });
  };

  return (
    <div className="py-9 flex">
      <Filters />
      <div className="products">
        {filterProducts?.length > 0 &&
          filterProducts?.map((product) => {
            let inCart = cart.some((p) => p.id === product.id);
            let inStock = product.inStock;
            return (
              <div key={product.id} className="single__product">
                <img src={product.thumbnail} alt={product.title} />
                <p className="mt-3">{product.title}</p>
                <p>${product.price}</p>
                <button
                  onClick={() => handleAddtoCart(product, inCart)}
                  disabled={inStock}
                  className={`py-1 px-2 ${
                    !inCart ? "bg-orange-400" : "bg-blue-400"
                  } rounded-sm`}
                >
                  {!inStock
                    ? inCart
                      ? "Remove from Cart"
                      : "Add to Cart"
                    : "Out of Stock"}
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
