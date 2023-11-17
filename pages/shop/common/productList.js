import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import Menu2 from "../../../public/assets/images/mega-menu/2.jpg";
// import { useQuery } from "@apollo/client";
// import { gql } from "@apollo/client";
import FilterContext from "../../../helpers/filter/FilterContext";
import ProductItem from "../../../components/common/product-box/ProductBox1";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import { useRouter } from "next/router";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import productimage from "../../../public/assets/images/products/1.jpg";
import axios from "axios";
import baseurl from "../../../helpers/baseurl/baseurl";
// const GET_PRODUCTS = gql`
//   query products(
//     $type: _CategoryType!
//     $indexFrom: Int!
//     $limit: Int!
//     $color: String!
//     $brand: [String!]!
//     $sortBy: _SortBy!
//     $priceMax: Int!
//     $priceMin: Int!
//   ) {
//     products(
//       type: $type
//       indexFrom: $indexFrom
//       limit: $limit
//       color: $color
//       brand: $brand
//       sortBy: $sortBy
//       priceMax: $priceMax
//       priceMin: $priceMin
//     ) {
//       total
//       hasMore
//       items {
//         id
//         title
//         description
//         type
//         brand
//         category
//         price
//         new
//         sale
//         stock
//         discount
//         variants {
//           id
//           sku
//           size
//           color
//           image_id
//         }
//         images {
//           image_id
//           id
//           alt
//           src
//         }
//       }
//     }
//   }
// `;

const ProductList = ({
  colClass,
  layoutList,
  openSidebar,
  noSidebar,
  params,
}) => {
  const jsonData = localStorage.getItem("myData");
  const addHyphen = (text) => {
    // Use a regular expression to replace spaces with hyphens
    const newText = text.replace(/ /g, "-");
    return newText;
  };
  // Parse the JSON string back to a JavaScript object
  const apiData = JSON.parse(jsonData);
  console.log(apiData[0].category, "apiData");
  console.log(params, "params");
  const fetchDataFromServer = async () => {
    try {
      // Send a GET request to your API endpoint
      const encodedName = addHyphen(params);
      // const encodedName = "Watches";

      console.log(encodedName, "encodedName");
      const response = await axios.get(
        `${baseurl.url}findPostsByCategory/${encodedName}`
      );
      setSortedProducts(response.data);
      console.log(response.data, "GetAllProducts single");
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("GET request failed", error);
    }
  };
  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchDataFromServer();
  }, []);

  console.log(params, "params");
  const [sortedProducts, setSortedProducts] = useState(apiData);
  const filterData = () => {
    const filteredData = apiData.filter((post) => {
      // Check if any of the categories have a name that matches the categoryNameToFind
      return post.category.some((category) => category.name);
    });

    console.log(filteredData, "filteredData");
  };

  filterData();

  // Now, `apiData` contains the data you stored
  // console.log(apiData, "apiData");
  // console.log(colClass, "colClass");
  // const prod = [
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 1,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 2,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 3,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 4,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 5,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 6,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 7,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 8,
  //   },
  //   {
  //     name: "Souk Galleria Ghilaf E Kaba ",
  //     images: [productimage, productimage, productimage],
  //     price: 3,
  //     discountedPrice: "1.5",
  //     brand: "SOUK GALLERIA",
  //     id: 9,
  //   },
  // ];
  const cartContext = useContext(CartContext);
  const quantity = cartContext.quantity;
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const router = useRouter();
  const [limit, setLimit] = useState(50);
  const curContext = useContext(CurrencyContext);
  const [grid, setGrid] = useState(colClass);
  const symbol = curContext.state.symbol;
  // const [sortedProducts, setSortedProducts] = useState(prod);
  const filterContext = useContext(FilterContext);
  const selectedBrands = filterContext.selectedBrands;
  const selectedColor = filterContext.selectedColor;
  const selectedPrice = filterContext.selectedPrice;
  const selectedCategory = filterContext.state;
  const selectedSize = filterContext.selectedSize;

  const [isLoading, setIsLoading] = useState(false);
  const [layout, setLayout] = useState(layoutList);
  const [url, setUrl] = useState();

  // Initialize the sorting criteria state
  const [sortBy, setSortBy] = useState("AscOrder");

  // Function to sort the products based on the selected criteria
  function sortProducts(sortBy) {
    let sortedProducts = [...prod];

    switch (sortBy) {
      case "LowToHigh":
        sortedProducts = sortedProducts.filter(
          (product) => product.price !== undefined
        );
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "HighToLow":
        sortedProducts = sortedProducts.filter(
          (product) => product.price !== undefined
        );
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "AToZ":
        sortedProducts = sortedProducts.filter(
          (product) => product.name !== undefined
        );
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZToA":
        sortedProducts = sortedProducts.filter(
          (product) => product.name !== undefined
        );
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "OldToNew":
        sortedProducts = sortedProducts.filter(
          (product) => product.date !== undefined
        );
        sortedProducts.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "NewToOld":
        sortedProducts = sortedProducts.filter(
          (product) => product.date !== undefined
        );
        sortedProducts.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;

      default:
        break;
    }

    // Set the sorted products in your state
    setSortedProducts(sortedProducts);
    console.log(sortedProducts, sortBy, "hhh");
  }

  // useEffect(() => {
  //   const pathname = window.location.pathname;
  //   setUrl(pathname);
  //   sortProducts();
  //   // router.push(
  //   //   `${pathname}?${filterContext.state}&brand=${selectedBrands}&color=${selectedColor}&size=${selectedSize}&minPrice=${selectedPrice.min}&maxPrice=${selectedPrice.max}`, undefined, { shallow: true }
  //   // );
  // }, [selectedBrands, selectedColor, selectedSize, selectedPrice, sortBy]);

  // var { loading, data, fetchMore } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: selectedCategory,
  //     priceMax: selectedPrice.max,
  //     priceMin: selectedPrice.min,
  //     color: selectedColor,
  //     brand: selectedBrands,
  //     sortBy: sortBy,
  //     indexFrom: 0,
  //     limit: limit,
  //   },
  // });

  const handlePagination = () => {
    setIsLoading(true);
    setTimeout(
      () =>
        fetchMore({
          variables: {
            indexFrom: data.products.items.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult) return prev;
            setIsLoading(false);
            return {
              products: {
                __typename: prev.products.__typename,
                total: prev.products.total,
                items: [
                  ...prev.products.items,
                  ...fetchMoreResult.products.items,
                ],
                hasMore: fetchMoreResult.products.hasMore,
              },
            };
          },
        }),
      1000
    );
  };

  const removeBrand = (val) => {
    const temp = [...selectedBrands];
    temp.splice(selectedBrands.indexOf(val), 1);
    filterContext.setSelectedBrands(temp);
  };

  const removeSize = (val) => {
    const temp = [...selectedSize];
    temp.splice(selectedSize.indexOf(val), 1);
    filterContext.setSelectedSize(temp);
  };

  const removeColor = () => {
    filterContext.setSelectedColor("");
  };

  function sortProducts(sortBy) {
    let sortedProducts1 = [...sortedProducts]; // Copy the initial state

    switch (sortBy) {
      case "LowToHigh":
        sortedProducts1.sort((a, b) => a.discountedPrice - b.discountedPrice);
        break;
      case "HighToLow":
        sortedProducts1.sort((a, b) => b.discountedPrice - a.discountedPrice);
        break;
      case "AToZ":
        sortedProducts1.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "ZToA":
        sortedProducts1.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "OldToNew":
        sortedProducts1.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "NewToOld":
        sortedProducts1.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      default:
        break;
    }

    // Set the sorted products in your state
    setSortedProducts(sortedProducts1);
  }

  useEffect(() => {
    sortProducts("LowToHigh"); // Example: Sorting initially by LowToHigh
  }, []);

  const handleLimitChange = (e) => {
    const selectedLimit = parseInt(e.target.value);

    // Set the selected limit in state
    setLimit(selectedLimit);

    // Instead of slicing, you can filter the products based on the selected limit
    const filteredProducts = apiData.filter(
      (product, index) => index < selectedLimit
    );

    // Update the sortedProducts state with the filtered products
    setSortedProducts(filteredProducts);
  };

  console.log(sortedProducts, "sortedProducts");

  return (
    <Col className="collection-content">
      <div className="page-main-content">
        <Row>
          <Col sm="12">
            <div className="top-banner-wrapper mb-3">
              <a href={null}>
                <Media
                  src={Menu2.src}
                  className="img-fluid blur-up lazyload"
                  alt=""
                />
              </a>
            </div>
            <Row>
              <Col xs="12">
                <ul className="product-filter-tags">
                  {selectedBrands.map((brand, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {brand}
                        <i
                          className="fa fa-close"
                          onClick={() => removeBrand(brand)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {/* {selectedColor ? (
                    <li>
                      <a href={null} className="filter_tag">
                        {selectedColor}
                        <i className="fa fa-close" onClick={removeColor}></i>
                      </a>
                    </li>
                  ) : (
                    ""
                  )} */}
                  {/* {selectedSize.map((size, i) => (
                    <li key={i}>
                      <a href={null} className="filter_tag">
                        {size}
                        <i
                          className="fa fa-close"
                          onClick={() => removeSize(size)}
                        ></i>
                      </a>
                    </li>
                  ))}
                  {
                    <li>
                      <a href={null} className="filter_tag">
                        price: {selectedPrice.min}- {selectedPrice.max}
                      </a>
                    </li>
                  } */}
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
              <div className="product-top-filter">
                {!noSidebar ? (
                  <Row>
                    <Col xl="12">
                      <div
                        className="filter-main-btn"
                        onClick={() => openSidebar()}
                      >
                        <span className="filter-btn btn btn-theme">
                          <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                          Filter
                        </span>
                      </div>
                    </Col>
                  </Row>
                ) : (
                  ""
                )}
                <Row>
                  <Col>
                    <div
                      style={{ border: "1px solid black" }}
                      className="product-filter-content"
                    >
                      {/* <div className="search-count">
                        <h5>
                        {data
                          ? `Showing Products 1-${data.products.items.length} of ${data.products.total}`
                          
                            : "loading"}{" "}
                          Result
                        </h5>
                      </div> */}
                      <div
                        style={{
                          borderLeft: "0px solid black",

                          marginRight: 100,
                          // marginLeft: 50,
                        }}
                        className="collection-view "
                      >
                        <ul>
                          <li>
                            <i
                              className="fa fa-th grid-layout-view"
                              onClick={() => {
                                setLayout("");
                                setGrid("col-lg-3");
                              }}
                            ></i>
                          </li>
                          <li>
                            <i
                              className="fa fa-list-ul list-layout-view"
                              onClick={() => {
                                setLayout("list-view");
                                setGrid("col-lg-12");
                              }}
                            ></i>
                          </li>
                        </ul>
                      </div>

                      {/* <div
                        className="collection-grid-view "
                        style={
                          layout === "list-view"
                            ? { visibility: "visible" }
                            : { visibility: "visible" }
                        }
                      >
                        <ul>
                          <li>
                            <Media
                              src={`/assets/images/icon/2.png`}
                              alt=""
                              className="product-2-layout-view"
                              onClick={() => setGrid("col-lg-6")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/3.png`}
                              alt=""
                              className="product-3-layout-view"
                              onClick={() => setGrid("col-lg-4")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/4.png`}
                              alt=""
                              className="product-4-layout-view"
                              onClick={() => setGrid("col-lg-3")}
                            />
                          </li>
                          <li>
                            <Media
                              src={`/assets/images/icon/6.png`}
                              alt=""
                              className="product-6-layout-view"
                              onClick={() => setGrid("col-lg-2")}
                            />
                          </li>
                        </ul>
                      </div> */}
                      <div
                        style={{
                          borderRight: "1px solid black",
                          borderLeft: "1px solid black",
                        }}
                        className=" product-page-per-view"
                      >
                        <select onChange={handleLimitChange}>
                          <option value="">Select an option</option>
                          <option value="50">50 Products Per Page</option>
                          <option value="60">60 Products Per Page</option>
                          <option value="70">70 Products Per Page</option>

                          <option value="80">80 Products Per Page</option>
                        </select>
                      </div>
                      <div className="product-page-filter">
                        <select
                          onChange={(e) => sortProducts(e.target.value)}
                          value={sortBy}
                        >
                          <option value="AscOrder">Sorting items</option>
                          <option value="LowToHigh">Price: low to high</option>
                          <option value="HighToLow">Price: high to low</option>
                          <option value="AToZ">Alphabetically: A-Z</option>
                          <option value="ZToA">Alphabetically: Z-A</option>
                          <option value="OldToNew">Date: old to new</option>
                          <option value="NewToOld">Date: new to old </option>
                        </select>
                      </div>
                    </div>
                    {/* <ul>
                      {sortedProducts.map((product, index) => (
                        <li key={index}>
                          {product.name} - Price: ${product.price}
                          <br />
                        </li>
                      ))}
                    </ul> */}
                  </Col>
                </Row>
              </div>
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {apiData?.length !== 0 ? (
                    apiData?.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="row mx-0 margin-default mt-4">
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                      <div className="col-xl-3 col-lg-4 col-6">
                        <PostLoader />
                      </div>
                    </div>
                  )}
                  {/* Product Box */}
                  {/* {!data ||
                    !data.products ||
                    !data.products.items ||
                    data.products.items.length === 0 ||
                    loading ? (
                    data &&
                      data.products &&
                      data.products.items &&
                      data.products.items.length === 0 ? (
                      <Col xs="12">
                        <div>
                          <div className="col-sm-12 empty-cart-cls text-center">
                            <img
                              src={`/assets/images/empty-search.jpg`}
                              className="img-fluid mb-4 mx-auto"
                              alt=""
                            />
                            <h3>
                              <strong>Your Cart is Empty</strong>
                            </h3>
                            <h4>Explore more shortlist some items.</h4>
                          </div>
                        </div>
                      </Col>
                    ) : (
                      
                      <div className="row mx-0 margin-default mt-4">
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                        <div className="col-xl-3 col-lg-4 col-6">
                          <PostLoader />
                        </div>
                      </div>
                    )
                  ) : (
                    data &&
                    data.products.items.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <ProductItem
                              des={true}
                              product={product}
                              symbol={symbol}
                              cartClass="cart-info cart-wrap"
                              addCompare={() =>
                                compareContext.addToCompare(product)
                              }
                              addWishlist={() =>
                                wishlistContext.addToWish(product)
                              }
                              addCart={() =>
                                cartContext.addToCart(product, quantity)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    ))
                  )} */}
                </Row>
              </div>
              {/* <div className="section-t-space">
                <div className="text-center">
                  <Row>
                    <Col xl="12" md="12" sm="12">
                      {data && data.products && data.products.hasMore && (
                        <Button
                          className="load-more"
                          onClick={() => handlePagination()}
                        >
                          {isLoading && (
                            <Spinner animation="border" variant="light" />
                          )}
                          Load More
                        </Button>
                      )}
                    </Col>
                  </Row>
                </div>
              </div> */}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default ProductList;
