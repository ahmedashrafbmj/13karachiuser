import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ProductItem from "../product-box/ProductBox1";
import CartContext from "../../../helpers/cart/index";
import { Container, Row, Col, Media } from "reactstrap";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import emptySearch from "../../../public/assets/images/empty-search.jpg";
import productimage from "../../../public/assets/images/products/1.jpg";
import Slider from "react-slick";
import axios from "axios";
import { useEffect } from "react";
import baseurl from "../../../helpers/baseurl/baseurl";

const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        stock
        sale
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const TabContent = ({
  data,
  loading,
  startIndex,
  endIndex,
  cartClass,
  backImage,
}) => {
  const context = useContext(CartContext);
  const wishListContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const quantity = context.quantity;

  return (
    <Row className="no-slider">
      {!data ||
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
                <Media
                  src={emptySearch}
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
          <div className="row mx-0 margin-default">
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
        data.products.items
          .slice(startIndex, endIndex)
          .map((product, i) => (
            <ProductItem
              key={i}
              product={product}
              symbol={currency.symbol}
              addCompare={() => compareContext.addToCompare(product)}
              addCart={() => context.addToCart(product, quantity)}
              addWishlist={() => wishListContext.addToWish(product)}
              cartClass={cartClass}
              backImage={backImage}
            />
          ))
      )}
    </Row>
  );
};

const SpecialProducts = ({
  type,
  fluid,
  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage,
}) => {
  const [activeTab, setActiveTab] = useState(type);
  const [res, setRes] = useState();

  const cartContext = useContext(CartContext);
  const [grid, setGrid] = useState("col-xl-3 col-6 col-grid-box");

  const wishListContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const symbol = curContext.state.symbol;
  const currency = curContext.state;
  const quantity = cartContext.quantity;

  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: activeTab,
  //     indexFrom: 0,
  //     limit: 8,
  //   },
  // });
  // const prod  = [
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:1

  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:2
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:3
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:4
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:5
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:6
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:7
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:8
  //   },
  //   {
  //     name:"Souk Galleria Ghilaf E Kaba ",
  //     images:[productimage,productimage,productimage],
  //     price:3,
  //     discountedPrice:"1.5",
  //     brand:"SOUK GALLERIA",
  //     id:9
  //   }
  // ]

  // function chunkArray(arr, chunkSize) {
  //   const chunkedArray = [];
  //   for (let i = 0; i < arr?.length; i += chunkSize) {
  //     chunkedArray.push(arr?.slice(i, i + chunkSize));
  //   }
  //   return chunkedArray;
  // }

  const fetchDataFromServer = async () => {
    try {
      // Send a GET request to your API endpoint
      const response = await axios.get(`${baseurl.url}GetAllProducts`);

      // Handle the response data, e.g., set it in state
      setRes(response.data.posts);
      // setimage(response.data.categories.map((e, i) => `${baseurl.image + e.image[0]}`));
      console.log(response.data, "GetAllProducts");
      const jsonData = JSON.stringify(response.data.posts);
      localStorage.setItem("myData", jsonData);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("GET request failed", error);
    }
  };
  console.error("res", "GetAllProducts");

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchDataFromServer();
  }, []);
  function isMobile() {
    // You can adjust this threshold based on your design's definition of "mobile"
    const mobileWidthThreshold = 768; // For example, consider screens narrower than 768px as mobile

    return window.innerWidth < mobileWidthThreshold;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Default number of products per slide for larger screens
    slidesToScroll: 4, // Default number of products to scroll at a time for larger screens
    responsive: [
      {
        breakpoint: 768, // Adjust this breakpoint to your desired screen size
        settings: {
          slidesToShow: 2, // Number of products per slide for mobile
          slidesToScroll: 2, // Number of products to scroll at a time for mobile
        },
      },
    ],
  };

  return (
    <div>
      <section className={designClass}>
        <Container fluid={fluid}>
          {noTitle ? (
            ""
          ) : (
            <div className={title}>
              <h4>exclusive products</h4>
              <h2 className={inner}>New Arrival</h2>
              {line ? (
                <div className="line"></div>
              ) : hrClass ? (
                <hr role="tournament6"></hr>
              ) : (
                ""
              )}
            </div>
          )}

          {/* <Tabs className="theme-tab">
            <TabList className="tabs tab-title">
              <Tab
                className={activeTab == type ? "active" : ""}
                onClick={() => setActiveTab(type)}
              >
                NEW ARRIVAL
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                FEATURED{" "}
              </Tab>
              <Tab
                className={activeTab == "furniture" ? "active" : ""}
                onClick={() => setActiveTab("furniture")}
              >
                SPECIAL
              </Tab>
            </TabList>

            <TabPanel>
              <TabContent
                data={data}
                loading={loading}
                startIndex={0}
                endIndex={8}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={data}
                loading={loading}
                startIndex={0}
                endIndex={8}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={data}
                loading={loading}
                startIndex={0}
                endIndex={8}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
          </Tabs> */}

          {res?.length !== 0 ? (
            // Group products into sets of 4 for laptops and 1 for mobile
            <div className={`row`}>
              <Slider className="slide-1 home-slider" {...settings}>
                {res?.map((product, j) => (
                  <div className={`col-md-6 col-lg-3 col-sm-12}`} key={j}>
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
                          addWishlist={() => WishlistContext.addToWish(product)}
                          addCart={() =>
                            cartContext.addToCart(product, quantity)
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
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
        </Container>
      </section>
    </div>
  );
};

export default SpecialProducts;
