import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";
import MasterProductDetail from "../../common/product-box/MasterProductDetail";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import ProductItem from "../../common/product-box/ProductBox1";
import { Router, useRouter } from "next/router";

const closeSearch = () => {
  document.getElementById("search-overlay").style.display = "none";
};

const SearchOverlay = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;

  const jsonData = localStorage.getItem("myData");
  const apiData = JSON?.parse(jsonData);

  const handleSearch = () => {
    // Perform the search logic on apiData based on the searchQuery
    const results = apiData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    router.push("/shop/no_sidebar");
    localStorage.setItem("myData", JSON.stringify(results));
  };

  return (
    <div id="search-overlay" className="search-overlay">
      <div>
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">
          ×
        </span>
        <div className="overlay-content">
          <Container>
            <Row>
              <Col xl="12">
                <Form>
                  <FormGroup>
                    <Input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Search a Product"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </FormGroup>
                  <Button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSearch}
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>
                {/* {searchResults.length > 0 && (
                  <div>
                    <h3>Search Results</h3>
                    <ul>
                      {searchResults.map((result, index) => (
                        <ProductItem
                          product={result}
                          productDetail={productDetail}
                          addCompare={() =>
                            contextCompare.addToCompare(product)
                          }
                          addWishlist={() => contextWishlist.addToWish(product)}
                          addCart={() => context.addToCart(product, quantity)}
                          key={index}
                        />
                      ))}
                    </ul>
                  </div>
                )} */}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default SearchOverlay;
