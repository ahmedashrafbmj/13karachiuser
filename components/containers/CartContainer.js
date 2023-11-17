import React, { useContext, Fragment } from "react";
import Link from "next/link";
import CartHeader from "../headers/common/cart-header";
import CartContext from "../../helpers/cart";
import { Media } from "reactstrap";
import { CurrencyContext } from "../../helpers/Currency/CurrencyContext";
import SearchOverlay from "../headers/common/search-overlay";

const CartContainer = ({ icon }) => {
  const context = useContext(CartContext);
  const currContext = useContext(CurrencyContext);
  const symbol = currContext.state.symbol;
  const cartList = context.state;
  const total = context.cartTotal;
  let circle = [];
  let circle1 = 3;
  for (var i = 0; i < circle1; i++) {
    circle.push(
      <i
        style={{ fontSize: "15px" }}
        className="fa fa-dot-circle-o"
        key={i}
      ></i>
    );
  }
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  return (
    <Fragment>
      <li className="onhover-div mobile-cart">
        <div className="cart-qty-cls">{cartList.length}</div>
        <Link href="/page/account/cart" className="cart-link">
          <div style={{ marginRight: "-10px" }}>
            <div className="cart-icon ">
              <span className="cartmedia1">
                {/* <i
                    style={{
                      marginTop: "10px",
                      position: "relative",
                      left: "-50px",
                    }}
                    onClick={() => alert("hii")}
                    className="fa fa-shopping-basket"
                  ></i> */}
              </span>
              <Media src={icon} className="img-fluid" alt="" />
              <span className="cartmedia">
                <i
                  style={{
                    // marginTop: "0px",
                    position: "relative",
                    left: "-110px",
                    top: "-6px",
                  }}
                  className="fa fa-shopping-cart mb-2"
                ></i>
              </span>
            </div>

            {/* <p className="cart-text mt-1 text-light ">Cart</p> */}
          </div>
        </Link>
        <ul className="show-div shopping-cart">
          {cartList.map((item, index) => {
            console.log(item, "item");
            return (
              <CartHeader
                key={index}
                item={item}
                total={total}
                symbol={symbol}
              />
            );
          })}
          {cartList.length > 0 ? (
            <div>
              <li>
                <div className="total">
                  <h5>
                    subtotal :{" "}
                    <span>
                      {symbol}
                      {total}
                    </span>
                  </h5>
                </div>
              </li>
              <li>
                <div className="buttons view-cart">
                  <Link href={`/page/account/cart`}>
                    <a>view cart</a>
                  </Link>
                  <Link href={`/page/account/checkout`}>
                    <a className="checkout">checkout</a>
                  </Link>
                </div>
              </li>
            </div>
          ) : (
            <li>
              <h5>Your cart is currently empty.</h5>
            </li>
          )}
        </ul>
      </li>
    </Fragment>
  );
};

export default CartContainer;
