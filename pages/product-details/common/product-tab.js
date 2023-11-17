import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import {
  Container,
  Row,
  Col,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import Modal from "react-bootstrap/Modal";
import { Form } from "react-bootstrap";
import Image from "./Image";
import { GetById, Post } from "../../../helpers/baseurl/apibasemethod";
import baseurl from "../../../helpers/baseurl/baseurl";

const ProductTab = ({ data }) => {
  console.log(data, "data");
  const [inpdata, setinpData] = useState([]);
  const [img, setimg] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    SubmitReviews();
    setShow(false);
  };
  const [getdata, setgetdata] = useState([]);

  const [activeTab, setActiveTab] = useState("1");
  let RatingStars = [];
  let rating = 5;
  for (var i = 0; i < rating; i++) {
    RatingStars.push(<i className="fa fa-star text-warning" key={i}></i>);
  }
  const SubmitReviews = async () => {
    const formData = new FormData();
    formData.append("reviewTitle", inpdata.reviewTitle);
    formData.append("reviewComment", inpdata.reviewComment);
    formData.append("name", inpdata.name);
    formData.append("rating", inpdata.rating);
    formData.append("email", inpdata.email);
    // formData.append("images", img);
    const filesArray = Array.from(img);
    filesArray.forEach((filess, index) => {
      console.log(filess, "filess");
      formData.append(`images`, filess.originFileObj);
    });
    formData.append("ProductId", data._id);
    formData.append("number", data._id);

    Post("createreview", formData)
      .then((res) => {
        console.log("response", res);
        setShow(false);
        getData();
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getData();
    console.log("Component mounted");
  }, [data]);

  const getData = () => {
    GetById("getAllReview", data?._id)
      .then((res) => {
        setgetdata(res.data.data);
        console.log(res, "responsi");
      })
      .catch((e) => {
        console.log(e, "GetById Eror");
      });
  };

  const OpenModal = () => {
    // console.log("1111")
    setShow(true);
  };

  const ratingChanged = (newRating) => {
    setinpData({
      ...inpdata,
      rating: newRating,
    });
  };
  const handleFileListChange = (newFileList) => {
    setimg(newFileList);
    // You can perform any additional processing with fileList data here
  };
  return (
    <section className="tab-product m-0">
      <Container>
        <Row>
          <Col sm="12" lg="12">
            <Row className="product-page-main m-0">
              <Nav tabs className="nav-material">
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => setActiveTab("1")}
                  >
                    Description
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => setActiveTab("2")}
                  >
                    Details
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => setActiveTab("3")}
                  >
                    video
                  </NavLink>
                </NavItem>
                <NavItem className="nav nav-tabs" id="myTab" role="tablist">
                  <NavLink
                    className={activeTab === "4" ? "active" : ""}
                    onClick={() => setActiveTab("4")}
                  >
                    Write Review
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={activeTab} className="nav-material">
                <TabPane tabId="1">
                  <p className="mb-0 pb-0">{data?.longDescription}</p>
                </TabPane>
                <TabPane tabId="2">
                  <p className="mb-0 pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </TabPane>
                <TabPane tabId="3">
                  <p className="mb-0 pb-0">
                    {" "}
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </TabPane>
                <TabPane className="mt-5" tabId="4">
                  <div className="row rounded dark shadow pb-5">
                    <h3
                      style={{ textAlign: "center" }}
                      className="mt-4
                        mb-3 text-dark"
                    >
                      Customer Reviews
                    </h3>
                    <div className="col-md-3 col-xs-12 text-dark ">
                      <div className="row w-100 mt-5">
                        <div className="d-flex align-items-center">
                          <div
                            style={{ width: "70%", display: "inline-block" }}
                          >
                            {RatingStars}
                          </div>
                          <p
                            style={{
                              width: "75%",
                              fontSize: 12,
                              display: "inline-block",
                              marginTop: "-20px",
                            }}
                            className="text-dark  mb-0"
                          >
                            5.00 out of 5
                          </p>
                        </div>
                      </div>

                      <p
                        style={{ marginTop: "-20px" }}
                        className="mb-5 text-dark"
                      >
                        Based on 39 reviews
                      </p>
                    </div>
                    {/* progress bar */}
                    <div
                      style={{ borderLeft: "1px solid #E0E0E0  ", height: 140 }}
                      className="col-md-5  col-xs-12 "
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "40%" }}>{RatingStars}</div>
                              <div
                                style={{
                                  width: "70%",
                                  marginLeft: 20,
                                  borderRadius: 50,
                                }}
                                className="progress "
                              >
                                <div
                                  className="progress-bar w-100 bg-dark"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-dark mb-4 ms-4">39</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Add more rows as needed */}
                        <div style={{ marginTop: "-45px" }} className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "40%" }}>{RatingStars}</div>
                              <div
                                style={{ width: "60%", borderRadius: 50 }}
                                className="progress"
                              >
                                <div
                                  className="progress-bar w-100 bg-secondary"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-dark mb-4 ms-4">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: "-45px" }} className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "40%" }}>{RatingStars}</div>
                              <div
                                style={{ width: "60%", borderRadius: 50 }}
                                className="progress"
                              >
                                <div
                                  className="progress-bar w-100 bg-secondary"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-dark mb-4 ms-4">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: "-45px" }} className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "40%" }}>{RatingStars}</div>
                              <div
                                style={{ width: "60%", borderRadius: 50 }}
                                className="progress"
                              >
                                <div
                                  className="progress-bar w-100 bg-secondary"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-dark mb-4 ms-4">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{ marginTop: "-45px" }} className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center">
                              <div style={{ width: "40%" }}>{RatingStars}</div>
                              <div
                                style={{ width: "60%", borderRadius: 50 }}
                                className="progress"
                              >
                                <div
                                  className="progress-bar w-100 bg-secondary"
                                  role="progressbar"
                                  aria-valuenow="100"
                                  aria-valuemin="0"
                                  aria-valuemax="100"
                                ></div>
                              </div>
                              <div className="ml-2">
                                <p className="text-dark mb-4 ms-4">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ borderLeft: "1px solid #E0E0E0", height: 140 }}
                      className="col-md-4 col-xs-12"
                    >
                      <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                          <Modal.Title>Write a review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h6 className="text-center mt-2">Rating</h6>
                          <div className="d-flex justify-content-center align-items-center">
                            <p className="mt-3">
                              <ReactStars
                                classNames="text-center"
                                count={5}
                                onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                              />
                            </p>
                          </div>
                          <div>
                            <h6 className="text-center mt-3">
                              Review Title (100)
                            </h6>
                            <div className="mx-3">
                              <input
                                onChange={(e) =>
                                  setinpData({
                                    ...inpdata,
                                    reviewTitle: e.target.value,
                                  })
                                }
                                style={{ maxWidth: "100%", borderRadius: 10 }}
                                type="text"
                                className="form-control"
                                id="reviewTitleInput"
                                placeholder="Give Your Review Title Here"
                              />
                            </div>
                          </div>
                          <div>
                            <h6 className="text-center mt-3">Review</h6>
                            <div className="mx-3">
                              <input
                                onChange={(e) =>
                                  setinpData({
                                    ...inpdata,
                                    reviewComment: e.target.value,
                                  })
                                }
                                style={{ maxWidth: "100%", borderRadius: 10 }}
                                type="text"
                                className="form-control"
                                id="reviewCommentInput"
                                placeholder="Give Your Comment Here"
                              />
                            </div>
                          </div>
                          <div>
                            <h6 className="text-center text-dark mt-3">
                              Video/Picture (optional)
                            </h6>
                            <Image onChange={handleFileListChange} />
                            {/* <div className="ms-5 ">
                              <input
                                onChange={(e) =>
                                  setinpData({
                                    ...inpdata,
                                    reviewComment: e.target.files,
                                  })
                                }
                                style={{ maxWidth: "100%", borderRadius: 10 }}
                                type="file"
                                className="form-control"
                                id="imageInput"
                                placeholder="Upload Video or Picture"
                              />
                            </div> */}
                          </div>
                          <div>
                            <h6 className="text-center text-dark mt-3">
                              Name (displayed publicly like)
                            </h6>
                            <div className="mx-3">
                              <input
                                onChange={(e) =>
                                  setinpData({
                                    ...inpdata,
                                    name: e.target.value,
                                  })
                                }
                                style={{ maxWidth: "100%", borderRadius: 10 }}
                                type="text"
                                className="form-control"
                                id="nameInput"
                                placeholder="Enter Your Name Public"
                              />
                            </div>
                          </div>
                          <div>
                            <h6 className="text-center text-dark mt-3">
                              Email
                            </h6>
                            <div className="mx-3">
                              <input
                                onChange={(e) =>
                                  setinpData({
                                    ...inpdata,
                                    email: e.target.value,
                                  })
                                }
                                style={{ maxWidth: "100%", borderRadius: 10 }}
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="Enter Your Email"
                              />
                            </div>
                          </div>
                        </Modal.Body>

                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Cancel Review
                          </Button>
                          <Button
                            variant="primary"
                            className="bg-dark text-light"
                            onClick={SubmitReviews}
                          >
                            Submit Reviews
                          </Button>
                        </Modal.Footer>
                      </Modal>

                      <button
                        onClick={OpenModal}
                        className="text-light bg-dark"
                        style={{
                          borderRadius: 50,
                          textAlign: "center",
                          marginTop: 50,
                          paddingTop: "2px",
                          fontWeight: "bold",
                          fontSize: 16,
                          marginLeft: 15,
                          width: "80%",
                        }}
                      >
                        {" "}
                        Write A Reiview
                      </button>
                    </div>
                  </div>
                  {/* <div className="row mt-5  ">
                    <select
                      className=" rounded dark shadow form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                    >
                      <option className="text-light">Most Resent</option>
                      <option className="text-light">Highest Rating</option>
                      <option className="text-light">lowest Rating</option>
                      <option className="text-light">Only picture</option>
                      <option className="text-light">Picture First</option>
                      <option className="text-light">Videos First</option>
                      <option className="text-light">Most Helpfull</option>
                    </select>
                  </div> */}
                  <div className="container mt-3">
                    <div className="row">
                      {getdata.map((data) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 mb-3">
                          <div className="card rounded shadow">
                            <div className="card-body">
                              {Array.from({ length: data.rating }).map(
                                (_, i) => (
                                  <i
                                    className="fa fa-star text-warning"
                                    key={i}
                                  ></i>
                                )
                              )}
                              <span
                                className="float-end"
                                style={{ fontSize: 12, marginTop: "10px" }}
                              >
                                1 Month Ago
                              </span>
                              <div className="user-info-container mt-3">
                                <div className="h4 text-dark">
                                  <i className="fa fa-user"></i> {data.name}
                                </div>
                                <div className="image-container mt-3">
                                  {data?.images.map((image, index) => (
                                    <img
                                      src={baseurl.image + image}
                                      key={index}
                                      alt={`Image ${index}`}
                                      className="img-fluid ms-1 image-fixed-height"
                                    />
                                  ))}
                                </div>
                              </div>
                              <p
                                style={{
                                  marginTop: "10px",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                {data.reviewTitle}
                              </p>
                              <p style={{ marginTop: "5px", color: "black" }}>
                                {data.reviewComment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductTab;