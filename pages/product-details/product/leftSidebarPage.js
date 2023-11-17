import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import Service from "../common/service";
import NewProduct from "../../shop/common/newProduct";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";
import Filter from "../common/filter";
import { Container, Row, Col, Media } from "reactstrap";
import axios from "axios";
import baseurl from "../../../helpers/baseurl/baseurl";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        alt
        src
      }
    }
  }
`;

const LeftSidebarPage = ({ pathId }) => {
  // var { loading1, data1 } = useQuery(GET_SINGLE_PRODUCTS, {
  //   variables: {
  //     id: parseInt(pathId),
  //   },
  // });
  const [data, setData] = useState();
  const [loading, setloading] = useState(true);
  const addHyphen = (text) => {
    // Use a regular expression to replace spaces with hyphens
    const newText = text.replace(/ /g, "-");
    return newText;
  };
  console.log(pathId, "pathId");
  const fetchDataFromServer = async () => {
    try {
      // Send a GET request to your API endpoint
      const encodedName = addHyphen(pathId);

      console.log(encodedName, "encodedName");
      const response = await axios.get(`${baseurl.url}FindbyId/${encodedName}`);

      // Handle the response data, e.g., set it in state
      setData(response.data.data);
      // setimage(response.data.categories.map((e, i) => `${baseurl.image + e.image[0]}`));
      console.log(response.data, "GetAllProducts single");
      setloading(false);
      // const jsonData = JSON.stringify(response.data.posts);
      // localStorage.setItem('myData', jsonData);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("GET request failed", error);
    }
  };

  console.log(data, "GetAllProducts single data");
  console.log(loading, "GetAllProducts single loading");

  useEffect(() => {
    // Fetch data from the server when the component mounts
    fetchDataFromServer();
  }, []);

  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  var products = {
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [data]);

  const { nav1, nav2 } = state;

  const filterClick = () => {
    document.getElementById("filter").style.left = "-15px";
  };

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };

  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
            <Col sm="2" className="collection-filter" id="filter">
              {/* <Filter /> */}
              <Service />
              {/* <!-- side-bar single product slider start --> */}
              <NewProduct />
              {/* <!-- side-bar single product slider end --> */}
            </Col>
            <Col lg="9" sm="12" xs="12">
              <Container fluid={true}>
                <Row>
                  <Col xl="12" className="filter-col">
                    <div className="filter-main-btn mb-2">
                      <span onClick={filterClick} className="filter-btn">
                        <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                        filter
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="7" className="product-thumbnail">
                    <Slider
                      {...products}
                      asNavFor={nav2}
                      // ref={(slider) => (slider1?.current = slider)}
                      className="product-slick"
                    >
                      {data?.images?.map((vari, index) => {
                        console.log(vari, "vari");
                        return (
                          <div key={index}>
                            <ImageZoom image={vari} />
                          </div>
                        );
                      })}
                    </Slider>
                    <Slider
                      className="slider-nav"
                      {...productsnav}
                      asNavFor={nav1}
                      // ref={(slider) => (slider2?.current = slider)}
                    >
                      {data?.images?.map((vari, index) => (
                        <div key={index}>
                          <Media
                            src={vari}
                            key={index}
                            alt="ahmd"
                            className="img-fluid"
                          />
                        </div>
                      ))}
                    </Slider>
                  </Col>
                  <Col lg="5" className="rtl-text">
                    <DetailsWithPrice
                      item={data}
                      changeColorVar={changeColorVar}
                    />
                  </Col>
                </Row>
                {/* {!data ||
                !data.product ||
                data.product.length === 0 ||
                !loading ? (
                  "loading"
                ) : (
                  <Row>
                    <Col lg="6" className="product-thumbnail">
                      <Slider
                        {...products}
                        asNavFor={nav2}
                        ref={(slider) => (slider1.current = slider)}
                        className="product-slick"
                      >
                        {data.product.images.map((vari, index) => (
                          <div key={index}>
                            <ImageZoom image={vari} />
                          </div>
                        ))}
                      </Slider>
                      <Slider
                        className="slider-nav"
                        {...productsnav}
                        asNavFor={nav1}
                        ref={(slider) => (slider2.current = slider)}
                      >
                        {data.product.images.map((vari, index) => (
                              <div key={index}>
                                <Media
                                  src={`${vari.src}`}
                                  key={index}
                                  alt={vari.alt}
                                  className="img-fluid"
                                />
                              </div>
                            ))
                          }
                      </Slider>
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <DetailsWithPrice
                        item={data.product}
                        changeColorVar={changeColorVar}
                      />
                    </Col>
                  </Row>
                )} */}
              </Container>
            </Col>
          </Row>
          {/* <ProductTab data={data} /> */}
        </Container>
      </div>
    </section>
  );
};

export default LeftSidebarPage;
