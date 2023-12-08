import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
  Collapse,
} from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";
import tiktok from "../../../public/assets/images/about/tiktok.png";

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  footerLayOut,
  footerSection,
  belowSection,
  belowContainerFluid,
  CopyRightFluid,
  newLatter,
}) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const width = window.innerWidth < 750;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth < 750) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);
  return (
    <div>
      <footer className={footerClass}>
        {/* {newLatter ? (
          <div className={footerLayOut}>
            <Container fluid={containerFluid ? containerFluid : ""}>
              <section className={footerSection}>
                <Row>
                  <Col lg="6">
                    <div className="subscribe">
                      <div>
                        <h4>KNOW IT ALL FIRST!</h4>
                        <p>
                          Never Miss Anything From Multikart By Signing Up To
                          Our Newsletter.
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg="6">
                    <Form className="form-inline subscribe-form">
                      <div className="mx-sm-3">
                        <Input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="Enter your email"
                        />
                      </div>
                      <Button type="submit" className="btn btn-solid">
                        subscribe
                      </Button>
                    </Form>
                  </Col>
                </Row>
              </section>
            </Container>
          </div>
        ) : (
          ""
        )} */}

        <section className={belowSection}>
          <Container fluid={belowContainerFluid ? belowContainerFluid : ""}>
            <Row className="footer-theme partition-f">
              <Col lg="4" md="6">
                <div
                  className={`footer-title ${
                    isOpen && collapse == 1 ? "active" : ""
                  } footer-mobile-title`}
                >
                  <h4
                    onClick={() => {
                      setCollapse(1);
                      setIsOpen(!isOpen);
                    }}
                  >
                    about
                    <span className="according-menu"></span>
                  </h4>
                </div>
                <Collapse
                  isOpen={width ? (collapse === 1 ? isOpen : false) : true}
                >
                  <div className="footer-contant">
                    <div className="footer-logo">
                      <LogoImage logo={logoName} />
                    </div>
                    <p className="text-black">
                    We Help You To Grow Your Business To Something Bigger And Better That It Was Before.
                    </p>
                    <div className="footer-social">
                      <ul>
                        <li>
                          <a
                            href="https://m.facebook.com/profile.php?id=100082254692576&locale2=hi_IN&_rdr"
                            target="_blank"
                          >
                            <i
                              className="fa fa-facebook"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>

                        <li>
                          <a
                            href="https://www.youtube.com/channel/UCLbgQTXcX8BSBQGlvDimaaQ"
                            target="_blank"
                          >
                            <i className="fa fa-youtube" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/fashionerapk_/?fbclid=IwAR16c1C2hN9mWzib5n_mSzgWiWr6azJKzhNxdfslMplZdyWJGa614vu-U40"
                            target="_blank"
                          >
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.tiktok.com/@fashionera.23"
                            target="_blank"
                          >
                            <img
                              className="mb-2"
                              width={20}
                              src="data:image/png;base64,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"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Collapse>
              </Col>
              <Col className="offset-xl-1">
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 2 ? "active" : ""
                    } `}
                  >
                    <h4
                      style={{ color: "#343434" }}
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(2);
                        } else setIsOpen(true);
                      }}
                    >
                      my account
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 2 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a className="text-black">Login</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a className="text-black"> Singup </a>
                          </Link>
                        </li>
                        {/* <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a>accessories</a>
                          </Link>
                        </li>
                        <li>
                          <Link href={`/shop/left_sidebar`}>
                            <a> featured </a>
                          </Link>
                        </li> */}
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    style={{ color: "#343434 " }}
                    className={`footer-title ${
                      isOpen && collapse == 3 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(3);
                        } else setIsOpen(true);
                      }}
                    >
                      why we choose
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 3 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul>
                        <li>
                          <a className="text-black" href="#">
                            shipping & return
                          </a>
                        </li>
                        <li>
                          <a className="text-black" href="#">
                            Terms and conditions
                          </a>
                        </li>
                        <li>
                          <a className="text-black" href="#">
                            privacy and cookie policy
                          </a>
                        </li>
                    
                        <li>
                          <a className="text-black" href="https://api.whatsapp.com/send/?phone=+92%20(347)3709786&text=hy" target="_blank">
                            contact us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
              <Col>
                <div className="sub-title">
                  <div
                    className={`footer-title ${
                      isOpen && collapse == 4 ? "active" : ""
                    } `}
                  >
                    <h4
                      onClick={() => {
                        if (width) {
                          setIsOpen(!isOpen);
                          setCollapse(4);
                        } else setIsOpen(true);
                      }}
                    >
                      store information
                      <span className="according-menu"></span>
                    </h4>
                  </div>
                  <Collapse
                    isOpen={width ? (collapse === 4 ? isOpen : false) : true}
                  >
                    <div className="footer-contant">
                      <ul className="contact-list">
                        <li className="text-black">
                          <i className="fa fa-map-marker"></i>New Challi, ii
                          Chundrigarh Road, Karachi.
                        </li>
                        <li className="text-black">
                          <i className="fa fa-phone"></i>Call Us: +92 (347)
                          3709786
                        </li>
                        <li className="text-black">
                          <i className="fa fa-envelope-o"></i>Email Us:{" "}
                          <a className="text-black" href="#">
                            terakarachi@gmail.com
                          </a>
                        </li>
                        <li className="text-black">
                          <i className="fa fa-fax"></i>Available: Every day 24/7
                        </li>
                      </ul>
                    </div>
                  </Collapse>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <CopyRight
          layout={layoutClass}
          fluid={CopyRightFluid ? CopyRightFluid : ""}
        />
      </footer>
    </div>
  );
};
export default MasterFooter;
