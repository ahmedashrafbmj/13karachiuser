import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const TopBarDark = ({ topClass, fluid }) => {
  const router = useRouter();
  // const firebaseLogout = () => {
  //   localStorage.setItem('user', false)
  //   router.push("/page/account/login-auth");
  // };
  return (
    <div className={topClass}>
      <Container fluid={fluid}>
        <Row>
          <Col lg="6">
            <div className="header-contact">
              <ul>
                <li
                  className="topbartext text-dark"
                  style={{ fontWeight: "bold" }}
                >
                  Welcome To Our Market Place 13Karachi
                </li>
                <li className="topbartext text-dark">
                  <i
                    className="fa fa-phone text-white "
                    style={{ fontWeight: "bold" }}
                    aria-hidden="true"
                  ></i>
                  Call Us: +92 (320) 9248578
                </li>
              </ul>
            </div>
          </Col>
          <Col lg="6" className="text-end">
            <ul className="header-dropdown userr">
              <li
                className="mobile-wishlist topbartext"
                style={{ fontWeight: "bold" }}
              >
                {/* <Link href="/page/account/wishlist">
                  <a>
                    <i
                      className="fa fa-heart"
                      aria-hidden="true"
                      style={{ fontWeight: "bold" }}
                    ></i>{" "}
                    wishlist
                  </a>
                </Link> */}
              </li>
              <li
                className="onhover-dropdown mobile-account"
                style={{ fontWeight: "bold" }}
              >
                <Link href="/page/account/login">
                  <a className="text-dark">
                    <i
                      className="fa fa-user"
                      aria-hidden="true"
                      style={{ fontWeight: "bold" }}
                    ></i>{" "}
                    Login
                  </a>
                </Link>
              </li>
              <li
                className="onhover-dropdown mobile-account "
                style={{ fontWeight: "bold" }}
              >
                <Link href="/page/account/register">
                  {/* <div className="userr"> */}
                  <a className="text-dark ">
                    <i
                      className="fa fa-user  "
                      aria-hidden="true"
                      style={{ fontWeight: "bold" }}
                    ></i>{" "}
                    Register
                  </a>
                  {/* </div> */}
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBarDark;
