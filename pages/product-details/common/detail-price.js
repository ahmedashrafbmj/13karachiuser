import React, { useState, useContext } from "react";
import Link from "next/link";
import sizeChart from "../../../public/assets/images/size-chart.jpg";
import { Modal, ModalBody, ModalHeader, Media, Input } from "reactstrap";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import CountdownComponent from "../../../components/common/widgets/countdownComponent";
import MasterSocial from "./master_social";
import { useEffect } from "react";

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
  const [modal, setModal] = useState(false);
  const [random, setRandom] = useState(false);
  const [randomHour, setRandomHour] = useState(false);
  console.log(randomHour, random, "randomHour");
  function getRandomNumber(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    console.log(randomNumber, "randomNumber");
    setRandom(Number(randomNumber));
  }
  function getRandomNumberHour(min, max) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (max - min + 1)) + min;
    setRandomHour(Number(randomNumber));
  }
  const CurContect = useContext(CurrencyContext);
  const cartContext = useContext(CartContext);

  const symbol = CurContect.state.symbol;
  const toggle = () => setModal(!modal);
  const product = item;
  const context = useContext(CartContext);
  const stock = context.stock;
  const plusQty = context.plusQty;
  const minusQty = context.minusQty;
  const quantity = context.quantity;
  const uniqueColor = [];
  const uniqueSize = [];

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };
  useEffect(() => {
    getRandomNumber(1, 12);
    getRandomNumberHour(1, 12);
  }, [item]);

  return (
    <>
      <div className={`product-right ${stickyClass}`}>
        <h2 className="mt-3"> {product?.name} </h2>
        <span className="mt-3" style={{ fontSize: "19px" }}>
          <del style={{ fontSize: "19px" }}>
            {symbol}
            {product?.price}
          </del>
        </span>
        <span
          className="instock-cls ml-3 mt-3"
          style={{ marginLeft: "10px", fontSize: "19px" }}
        >
          {symbol}
          {product?.discountedPrice}
        </span>

        {product?.variants?.map((vari) => {
          var findItem = uniqueColor.find((x) => x.color === vari.color);
          if (!findItem) uniqueColor.push(vari);
          var findItemSize = uniqueSize.find((x) => x === vari.size);
          if (!findItemSize) uniqueSize.push(vari.size);
        })}
        {/* {changeColorVar === undefined ? (
          <>
            {uniqueColor ? (
              <ul className="color-variant">
                {uniqueColor.map((vari, i) => {
                  return (
                    <li className={vari.color} key={i} title={vari.color}></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            {uniqueColor ? (
              <ul className="color-variant">
                {uniqueColor.map((vari, i) => {
                  return (
                    <li
                      className={vari.color}
                      key={i}
                      title={vari.color}
                      onClick={() => changeColorVar(i)}
                    ></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </>
        )} */}
        <div className="product-description border-product mt-3">
          {/* {product.variants ? (
            <div>
              <h6 className="product-title size-text">
                select size
                <span>
                  <a
                    href={null}
                    data-toggle="modal"
                    data-target="#sizemodal"
                    onClick={toggle}
                  >
                    size chart
                  </a>
                </span>
              </h6>
              <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Sheer Straight Kurta</ModalHeader>
                <ModalBody>
                  <Media src={sizeChart.src} alt="size" className="img-fluid" />
                </ModalBody>
              </Modal>
              <div className="size-box">
                <ul>
                  {uniqueSize.map((data, i) => {
                    return (
                      <li key={i}>
                        <a href={null}>{data}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            ""
          )} */}
          <span
            className="instock mt-5"
            style={{ color: "#2e7d32", fontWeight: "bold" }}
          >
            ✓ {stock}
          </span>
          &nbsp; &nbsp;
          <span className="instock-cls mt-5">
            {random} sold in last {randomHour} hours
          </span>
          <h6 className="product-title mt-4">quantity</h6>
          <div className="qty-box mt-3">
            <div className="input-group">
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-left-minus"
                  onClick={minusQty}
                  data-type="minus"
                  data-field=""
                >
                  <i className="fa fa-angle-left"></i>
                </button>
              </span>
              <Input
                type="text"
                name="quantity"
                value={quantity}
                onChange={changeQty}
                className="form-control input-number"
              />
              <span className="input-group-prepend">
                <button
                  type="button"
                  className="btn quantity-right-plus"
                  onClick={() => plusQty(product)}
                  data-type="plus"
                  data-field=""
                >
                  <i className="fa fa-angle-right"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="product-buttons w-80">
          <a
            style={{ width: "100%", marginLeft: "2%" }}
            href={null}
            className="btn btn-solid col-md-8 col-sm-10"
            onClick={() => cartContext.addToCart(product, quantity)}
          >
            add to cart
          </a>
          <p className="ml-3 mt-2">
            -------------------------Or-------------------------
          </p>

          {/* <br/> */}
          {/* <Link href={`/page/account/checkout`} className="col-md-8 col-sm-10">
            <a className="btn btn-solid col-md-8 col-sm-10">buy now</a>
          </Link> */}
          <a
            style={{ width: "100%" }}
            href={`/page/account/checkout`}
            className="btn btn-solid col-md-8 col-sm-10 mt-2"
          >
            Buy Now
          </a>
        </div>
        <div className="border-product">
          <h6 className="product-title">product details</h6>
          {/* <p>{producst?.longDescription}</p> */}
        </div>
        {/* <div className="border-product">
          <h6 className="product-title">share it</h6>
          <div className="product-icon">
            <MasterSocial />
          </div>
        </div>
        <div className="border-product">
          <h6 className="product-title">Time Reminder</h6>
          <CountdownComponent />
        </div> */}
      </div>
    </>
  );
};

export default DetailsWithPrice;
