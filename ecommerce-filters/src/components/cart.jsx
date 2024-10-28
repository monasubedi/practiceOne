import React, { useMemo } from "react";
import { ShoppingCartState } from "../context/context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = ShoppingCartState();

  const total = useMemo(() => {
    return cart.reduce((acc, cur) => (acc + cur.price) * cur.qty, 0);
  }, [cart]);

  return (
    <div className="flex flex-col gap-5">
      <div className="text-center text-2xl mt-6">Sub-total:${total}</div>
      {cart.length > 0 &&
        cart.map((product) => {
          return (
            <div
              key={product.id}
              className="h-36 flex items-center justify-between border-2 p-5"
            >
              <img
                className="h-full w-48 object-contain"
                src={product.thumbnail}
                alt={product.title}
              />
              <span>{product.title}</span>
              <span>${product.price}</span>
              <div className="flex items-center gap-3">
                <button
                  className="bg-slate-200 p-3 rounded-sm"
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_PRODUCT_QTY",
                      payload: { qty: product.qty + 1, id: product.id },
                    })
                  }
                >
                  ➕{" "}
                </button>
                <span> {product.qty}</span>

                <button
                  className="bg-slate-200 p-3 rounded-sm"
                  onClick={() =>
                    dispatch({
                      type: "CHANGE_PRODUCT_QTY",
                      payload: { qty: product.qty - 1, id: product.id },
                    })
                  }
                >
                  ➖
                </button>
              </div>
              <button
                className="bg-blue-300 py-1 px-2 rounded-sm"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: product })
                }
              >
                Remove from cart
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Cart;
