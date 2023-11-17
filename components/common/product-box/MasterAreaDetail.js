import Link from "next/link";
import React from "react";

const MasterAreaDetail = ({
  product,
  productDetail,
  currency,
  // uniqueTags,
  detailClass,
  // title,
  // des,
  // variantChangeByColor,
  addCart,
  msg,
  img,
}) => {
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star" key={i}></i>);
  }

  return (
    <Link href={`/product-details/` + product.name}>
      <div
        style={{
          position: img === "imgwidth" ? "relative" : "",
          top: img === "imgwidth" ? "-150px" : "",
          left: img === "imgwidth" ? "50px" : "",
        }}
        className={`product-detail ${productDetail} ${detailClass}`}
      >
        <div className="product-container mt-2">
       
          <span
            className="text-center mt-"
            style={{
              fontFamily: "Oswald, sans-serif",
              color: "#000",
              fontSize: "12px",
              lineHeight: "20px",
              fontWeight: 500,
              textTransform: "capitalize",
              display: "block",
              marginBottom: "4px",
              lineHeight: "20px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
            }}
          >
            {product.name}
          </span>
        

          {/* <h4>{`$${product.price}`}</h4> */}
          <h4 className="text-center mt-1">
            <del>
              <span
                className="money"
                style={{
                  textDecoration: "line-through", // New styles
                  color: "#969696",
                  marginRight: "10px",
                  fontSize: "14px",
                  fontWeight: "800",
                }}
              >
          
              </span>
            </del>
            {/* <span style={{ color: "#e7040f", fontSize: "14px" }}>
              {currency.symbol}
              {product.discountedPrice}
            </span> */}
          </h4>
          <div
            style={{
              marginTop: msg === "btnnhi" ? "20px" : "",
              width: msg === "btnnhi" ? "150px " : "",
            }}
            className="button-container"
          >
            {/* <button
              className="centered-button mt-2 product-button"
              onClick={() => addCart(product)}
            >
              ADD TO CART
            </button> */}
          </div>

          {/* {title !== "Product style 4" ? (
          <div className="rating">{RatingStars}</div>
        ) : (
          ""
        )}
        <h6>{product.title}</h6>
        {des ? <p>{product.description}</p> : ""}
        <h4>
          {currency.symbol}
          {(
            (product.price - (product.price * product.discount) / 100) *
            currency.value
          ).toFixed(2)}
          <del>
            <span className="money">
              {currency.symbol}
              {(product.price * currency.value).toFixed(2)}
            </span>
          </del>
        </h4>

        {product.variants.map((vari) => {
          var findItem = uniqueTags.find((x) => x.color === vari.color);
          if (!findItem) uniqueTags.push(vari);
        })}

        {product.type === "jewellery" ||
        product.type === "nursery" ||
        product.type === "beauty" ||
        product.type === "electronics" ||
        product.type === "goggles" ||
        product.type === "watch" ||
        product.type === "pets" ? (
          ""
        ) : (
          <>
            {title !== "Product style 4" && uniqueTags[0].color ? (
              <ul className="color-variant">
                {uniqueTags.map((vari, i) => {
                  return (
                    <li
                      className={vari.color}
                      key={i}
                      title={vari.color}
                      onClick={() =>
                        variantChangeByColor(vari.image_id, product.images)
                      }
                    ></li>
                  );
                })}
              </ul>
            ) : (
              ""
            )}
          </>
        )} */}
        </div>
      </div>
    </Link>
  );
};

export default MasterAreaDetail;
