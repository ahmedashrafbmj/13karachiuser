import React, { useState, useEffect } from "react";
import Context from "./index";
import { toast } from "react-toastify";

const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem("cartList");
    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(getLocalCartItems());
  const [cartTotal, setCartTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stock, setStock] = useState("InStock");

  useEffect(() => {
    const Total = cartItems.reduce((a, b) => {
      console.log("Current item:", b); // Log the current item if needed
      return a + (b.total || 0);
    }, 0);
    console.log("running", cartItems);
        setCartTotal(Total);

    localStorage.setItem("cartList", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add Product To Cart
  const addToCart = (item, quantity) => {
    // toast.success("Product Added Successfully !");
    const index = cartItems.findIndex((itm) => itm._id === item._id);

    if (index !== -1) {
      cartItems[index] = {
        ...item,
        qty: quantity,
        total: Number(item.discountedPrice) * Number(quantity),
      };
      setCartItems([...cartItems]);
    } else {
      const product = {
        ...item,
        qty: quantity,
        total: Number(item.discountedPrice ),
      };
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (item) => {
    // toast.error("Product Removed Successfully !");
    setCartItems(cartItems.filter((e) => e._id !== item._id));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStock("InStock");
    }
  };

  const plusQty = (item) => {
   
      setQuantity(quantity + 1);
   
  };

  // Update Product Quantity
  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex((itm) => itm._id === item._id);
      if (index !== -1) {
        cartItems[index] = {
          ...item,
          qty: Number(quantity) ,
          total: item.discountedPrice * Number(quantity),
        };
        setCartItems([...cartItems]);
        // toast.info("Product Quantity Updated !");
      } else {
        const product = {
          ...item,
          qty: Number(quantity),
          total: (item.discountedPrice - (item.discountedPrice * item.discount) / 100) * quantity,
        };
        setCartItems([...cartItems, product]);
        toast.success("Product Added Updated !");
      }
    } else {
      toast.error("Enter Valid Quantity !");
    }
  };

  return (
    <Context.Provider
      value={{
        ...props,
        state: cartItems,
        cartTotal,
        setQuantity,
        quantity,
        stock,
        addToCart: addToCart,
        removeFromCart: removeFromCart,
        plusQty: plusQty,
        minusQty: minusQty,
        updateQty: updateQty,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default CartProvider;
