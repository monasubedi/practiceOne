import { createContext, useContext, useEffect, useReducer } from "react";
import { filterReducer, shoppingCartReducer } from "./reducer";

const ShoppingCart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(shoppingCartReducer, {
    products: [],
    cart:[]
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byRating: 0,
    searchQuery: "",
    sort:"lowToHigh"   
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      if (data && data.products) {
        dispatch({ type: "FETCH_PRODUCTS", payload: data.products });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ShoppingCart.Provider
      value={{ state, filterState, dispatch, filterDispatch }}
    >
      {children}
    </ShoppingCart.Provider>
  );
};

export const ShoppingCartState = () => {
  return useContext(ShoppingCart);
};

export default Context;
