import React, { useContext, useState } from "react";
import { Media, Container, Form, Row, Col } from "reactstrap";
import CartContext from "../../../../helpers/cart";
import paypal from "../../../../public/assets/images/paypal.png";
import { PayPalButton } from "react-paypal-button-v2";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CurrencyContext } from "../../../../helpers/Currency/CurrencyContext";
import Image from "next/image";
import Progrerss from "../Progress";
import { Post } from "../../../../helpers/baseurl/apibasemethod";

const CheckoutPage = () => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.state;
  const cartTotal = cartContext.cartTotal;
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const [inpdata, setinpdata] = useState([]);
  const [obj, setObj] = useState({});
  const [payment, setPayment] = useState("cod");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // initialise the hook
  const router = useRouter();
  console.log(register, "register");
  const checkhandle = (value) => {
    setPayment(value);
  };
  console.log(cartItems, "cartItems");

  const onSubmit = (data) => {
    console.log(data, "dataaaa");
    if (data !== "") {
      // alert("You submitted the form and stuff!");
      // router.push({
      //   pathname: "/page/order-success",
      //   state: { items: cartItems, orderTotal: cartTotal, symbol: symbol },
      // });
    } else {
      errors.showMessages();
    }
  };

  // const setStateFromInput = (event) => {
  //   obj[event.target.name] = event.target.value;
  //   setObj(obj);
  // };
  const placeOrder = () => {
    const formData = new FormData();
    formData.append("name", inpdata.name);
    formData.append("email", inpdata.email);
    formData.append("lastName", inpdata.lastName);
    formData.append("address", inpdata.address);
    formData.append("contact[0]", inpdata.contact[0]);
    formData.append("contact[1]", inpdata.contact[1]);
    formData.append("totalprice", cartTotal);
    cartItems.map((e, i) =>
      formData.append(`products[${i}][productId]`, e?._id)
    );
    cartItems.map((e, i) =>
      formData.append(`products[${i}][quantity]`, e?.qty)
    );
    Post("Checkout", formData)
      .then((res) => {
        console.log(res, "resss");
        alert("You submitted the form and stuff!");
        router.push({
          pathname: "/page/order-success",
          state: { items: res },
        });
      })
      .catch((e) => {
        console.log(e);
      });
    console.log(inpdata, "inpdata");
  };
  console.log(inpdata.number, "inpdata.number");

  return (
    <section className="section-b-space">
      <Container>
        <Progrerss curren={2} />

        <div className="checkout-page mt-5">
          <div className="checkout-form">
            {/* <Form onSubmit={handleSubmit(onSubmit)}> */}
            <Row>
              <Col lg="6" sm="12" xs="12">
                <div className="checkout-title">
                  <h3>Billing Details</h3>
                </div>
                <div className="row check-out">
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-label">First Name*</div>
                    <input
                      type="text"
                      // className={`${errors.firstName ? "error_border" : ""}`}
                      name="first_name"
                      onChange={(e) => {
                        console.log(e, "eeeeeeeeee");
                        setinpdata({ ...inpdata, name: e.target.value });
                      }}
                      // {...register("first_name", { required: true })}
                    />
                    <span className="error-message">
                      {errors.firstName && "First name is required"}
                    </span>
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-label">Last Name</div>
                    <input
                      type="text"
                      onChange={(e) =>
                        setinpdata({ ...inpdata, lastName: e.target.value })
                      }
                      // className={`${errors.last_name ? "error_border" : ""}`}
                      name="last_name"
                      // {...register("last_name", { required: true })}
                    />
                    <span className="error-message">
                      {errors.last_name && "Last name is required"}
                    </span>
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-label">Contact 1*</div>
                    <input
                      onChange={(e) => {
                        setinpdata({
                          ...inpdata,
                          contact: [e.target.value],
                        });
                      }}
                      type="text"
                      name="phone"
                      className={`${errors.phone ? "error_border" : ""}`}
                      // {...register("phone", { pattern: /\d+/ })}
                    />
                    <span className="error-message">
                      {errors.phone && "Please enter number for phone."}
                    </span>
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-label">Contact 2 (optional)</div>
                    <input
                      type="text"
                      name="phone"
                      onChange={(e) => {
                        setinpdata({
                          ...inpdata,
                          contact: [...inpdata.contact, e.target.value],
                        });
                      }}
                      // className={`${errors.phone ? "error_border" : ""}`}
                      // {...register("phone", { pattern: /\d+/ })}
                    />
                    <span className="error-message">
                      {errors.phone && "Please enter number for phone."}
                    </span>
                  </div>
                  <div className="form-group col-md-6 col-sm-6 col-xs-12">
                    <div className="field-label">Email Address (optional)</div>
                    <input
                      //className="form-control"
                      className={`${errors.email ? "error_border" : ""}`}
                      onChange={(e) =>
                        setinpdata({
                          ...inpdata,
                          email: e.target.value, // Update number at index 0
                        })
                      }
                      type="text"
                      name="email"
                      // {...register("email", {
                      //   required: true,
                      //   pattern: /^\S+@\S+$/i,
                      // })}
                    />
                    <span className="error-message">
                      {errors.email && "Please enter proper email address ."}
                    </span>
                  </div>
                  {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Country</div>
                      <select name="country" {...register("country", { required: true })}>
                        <option>India</option>
                        <option>South Africa</option>
                        <option>United State</option>
                        <option>Australia</option>
                      </select>
                    </div> */}
                  <div className="form-group col-md-12 col-sm-12 col-xs-12">
                    <div className="field-label">Address*</div>
                    <input
                      //className="form-control"
                      className={`${errors.address ? "error_border" : ""}`}
                      type="text"
                      onChange={(e) =>
                        setinpdata({
                          ...inpdata,
                          address: e.target.value,
                        })
                      }
                      name="address"
                      // {...register("address", {
                      //   required: true,
                      //   min: 20,
                      //   max: 120,
                      // })}
                      placeholder="Street address"
                    />
                    <span className="error-message">
                      {errors.address && "Please right your address ."}
                    </span>
                  </div>
                  {/* <div className="form-group col-md-12 col-sm-12 col-xs-12">
                      <div className="field-label">Town/City</div>
                      <input
                        //className="form-control"
                        type="text"
                        className={`${errors.city ? "error_border" : ""}`}
                        name="city"
                        {...register('city', { required: true })}
                        onChange={setStateFromInput}
                      />
                      <span className="error-message">
                        {errors.city && "select one city"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">State / County</div>
                      <input
                        //className="form-control"
                        type="text"
                        className={`${errors.state ? "error_border" : ""}`}
                        name="state"
                        {...register('state', { required: true })}
                        onChange={setStateFromInput}
                      />
                      <span className="error-message">
                        {errors.state && "select one state"}
                      </span>
                    </div>
                    <div className="form-group col-md-12 col-sm-6 col-xs-12">
                      <div className="field-label">Postal Code</div>
                      <input
                        //className="form-control"
                        type="text"
                        name="pincode"
                        className={`${errors.pincode ? "error_border" : ""}`}
                        {...register('pincode', { pattern: /\d+/ })}
                      />
                      <span className="error-message">
                        {errors.pincode && "Required integer"}
                      </span>
                    </div> */}
                  {/* <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                      <input
                        type="checkbox"
                        name="create_account"
                        id="account-option"
                      />
                      &ensp;{" "}
                      <label htmlFor="account-option">Create An Account?</label>
                    </div> */}
                </div>
              </Col>
              <Col lg="6" sm="12" xs="12">
                {cartItems && cartItems.length > 0 > 0 ? (
                  <div className="checkout-details">
                    <div className="order-box">
                      <div className="title-box">
                        <div>
                          Product Details <span>Total</span>
                        </div>
                      </div>
                      <ul className="qty">
                        {cartItems.map((item, index) => (
                          <li key={index}>
                            {item.name} × {item.qty}{" "}
                            <span>
                              {symbol}
                              {item.total}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <ul className="sub-total">
                        <li>
                          Subtotal{" "}
                          <span className="count">
                            {symbol}
                            {cartTotal}
                          </span>
                        </li>
                        <li>
                          Shipping
                          <div className="shipping">
                            <div className="shopping-option">
                              <input
                                type="checkbox"
                                name="free-shipping"
                                id="free-shipping"
                                checked
                              />
                              <label htmlFor="free-shipping">
                                Free Shipping
                              </label>
                            </div>
                            {/* <div className="shopping-option">
                                <input
                                  type="checkbox"
                                  name="local-pickup"
                                  id="local-pickup"
                                />
                                <label htmlFor="local-pickup">
                                  Local Pickup
                                </label>
                              </div> */}
                          </div>
                        </li>
                      </ul>
                      <ul className="total">
                        <li>
                          Total{" "}
                          <span className="count">
                            {symbol}
                            {cartTotal}
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="payment-box">
                      <div className="upper-box">
                        <div className="payment-options">
                          {/* <ul>
                              <li>
                                <div className="radio-option stripe">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-2"
                                    defaultChecked={true}
                                    onClick={() => checkhandle("cod")}
                                  />
                                  <label htmlFor="payment-2">COD</label>
                                </div>
                              </li>
                              <li>
                                <div className="radio-option paypal">
                                  <input
                                    type="radio"
                                    name="payment-group"
                                    id="payment-1"
                                    onClick={() => checkhandle("paypal")}
                                  />
                                  <label htmlFor="payment-1">
                                    PayPal
                                    <span className="image">
                                      <Media src={paypal.src} alt="" />
                                    </span>
                                  </label>
                                </div>
                              </li>
                            </ul> */}
                        </div>
                      </div>
                      {cartTotal !== 0 ? (
                        <div className="text-end">
                          {payment === "cod" ? (
                            <button
                              type="submit"
                              onClick={placeOrder}
                              className="btn-solid btn"
                            >
                              Place Order
                            </button>
                          ) : (
                            <PayPalButton
                              amount="0.01"
                              onSuccess={(details, data) => {
                                alert(
                                  "Transaction completed by " +
                                    details.payer.name.given_name
                                );

                                return fetch("/paypal-transaction-complete", {
                                  method: "post",
                                  body: JSON.stringify({
                                    orderID: data.orderID,
                                  }),
                                });
                              }}
                            />
                          )}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
            {/* </Form> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckoutPage;
