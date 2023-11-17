import React, { useState, useContext, useEffect } from "react";
import { Col, Row, Media, Button, Spinner } from "reactstrap";
import Menu2 from "../../../public/assets/images/mega-menu/2.jpg";
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
import MarketItem from "../../../components/common/product-box/AreaBox";

const MarketList = ({
  colClass,
  layoutList,
  openSidebar,
  noSidebar,
  params,
}) => {
    const jsonData = localStorage.getItem("myData");
    // const apiData = JSON?.parse(jsonData);
    const [apiData, setapiData] = useState(JSON?.parse(jsonData));
    const [areaImage, setareaImage] = useState();
    
  const addHyphen = (text) => {
    // Use a regular expression to replace spaces with hyphens
    const newText = text.replace(/ /g, "-");
    return newText;
  };
  // Parse the JSON string back to a JavaScript object
//   console.log(apiData[0].category, "apiData");
  console.log(params, "params");
  const fetchDataFromServer = async () => {
    try {
      // Send a GET request to your API endpoint
      const encodedName = addHyphen(params);
      // const encodedName = "Watches";

      console.log(encodedName, "encodedName");
      const response = await axios.get(
        `${baseurl.url}getMarket`
      );
      const filterItem  =response.data.market?.filter((e,i)=>e?.areaDetails.name === params) 
      setapiData(filterItem);
      setareaImage(baseurl.image + filterItem[0]?.areaDetails.images[0]);
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
                         
                        ></i>
                      </a>
                    </li>
                  ))}
              
                </ul>
              </Col>
            </Row>
            <div className="collection-product-wrapper">
            
              <div className={`product-wrapper-grid ${layout}`}>
                <Row>
                  {apiData?.length !== 0 ? (
                    apiData?.map((product, i) => (
                      <div className={grid} key={i}>
                        <div className="product">
                          <div>
                            <MarketItem
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
                               </Row>
              </div>
           
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default MarketList;
