// import React, { useState, useEffect } from "react";
// import NavBar from "./common/navbar";
// import SideBar from "./common/sidebar";
// import Cart from "../containers/Cart";
// import CartContainer from "../containers/CartContainer";
// import TopBarDark from "./common/topbar-dark";
// import { Media, Container, Row, Col } from "reactstrap";
// import LogoImage from "./common/logo";
// import search from "../../public/assets/images/icon/search.png";
// import settings from "../../public/assets/images/icon/setting.png";
// import cart from "../../public/assets/images/icon/cart.png";
// import Currency from "./common/currency";
// import { useRouter } from "next/router";
// import SearchOverlay from "./common/search-overlay";
// import MidBarDark from "./common/midnavbar";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faSearch, faHome } from "@fortawesome/free-solid-svg-icons";

// const HeaderOne = ({
//   logoName,
//   headerClass,
//   topClass,
//   noTopBar,
//   direction,
// }) => {
//   const router = useRouter();

//   /*=====================
//      Pre loader
//      ==========================*/
//   useEffect(() => {
//     // setTimeout(function () {
//     //   document.querySelectorAll(".loader-wrapper").style = "display:none";
//     // }, 2000);

//     if (router.asPath !== "/layouts/Christmas")
//       window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleScroll = () => {
//     let number =
//       window.pageXOffset ||
//       document.documentElement.scrollTop ||
//       document.body.scrollTop ||
//       0;
//     if (number >= 300) {
//       if (window.innerWidth < 581)
//         document.getElementById("sticky").classList.remove("fixed");
//       else document.getElementById("sticky").classList.add("fixed");
//     } else document.getElementById("sticky").classList.remove("fixed");
//   };
//   let circle = [];
//   let circle1 = 3;
//   for (var i = 0; i < circle1; i++) {
//     circle.push(<i className="fa fa-dot-circle-o" key={i}></i>);
//   }

//   const openNav = () => {
//     var openmyslide = document.getElementById("mySidenav");
//     if (openmyslide) {
//       openmyslide.classList.add("open-side");
//     }
//   };
//   const openSearch = () => {
//     document.getElementById("search-overlay").style.display = "block";
//   };

//   // eslint-disable-next-line
//   // const load = () => {
//   //   setIsLoading(true);
//   //   fetch().then(() => {
//   //     // deal with data fetched
//   //     setIsLoading(false);
//   //   });
//   // };

//   return (
//     <div>
//       <SearchOverlay />
//       {/* <MidBarDark topClass={topClass}/> */}
//       <header id="sticky" className={`sticky ${headerClass}`}>
//         {noTopBar ? "" : <TopBarDark topClass={topClass} />}
//         <div className="mobile-fix-option"></div>
//         {/*Top Header Component*/}

//         <Container>
//           <Row>
//             <Col>
//               <div className="main-menu">
//                 <div className="menu-left">
//                   <div className="navbar">
//                     <div className="mobile-hide">
//                       <a href={null} onClick={openNav}>
//                         <div className="bar-style">
//                           {/* <i
//                             className="fa fa-bars sidebar-bar"
//                             aria-hidden="true"
//                           ></i> */}
//                         </div>
//                       </a>
//                       {/* SideBar Navigation Component */}
//                       <SideBar />
//                     </div>
//                   </div>
//                   <div className="brand-logo">
//                     <LogoImage logo={logoName} />
//                   </div>
//                 </div>
//                 <div className="menu-right pull-right">
//                   <NavBar />
//                   {/*Top Navigation Bar Component*/}

//                   <div className="icon-nav " style={{ textAlign: "center" }}>
//                     <ul
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <div className="icoms " style={{ position: "fixed" }}>
//                         <li
//                           className="onhover-div mobile-search mt-5"
//                           style={{ display: "flex", alignItems: "center" }}
//                         >
//                           <div
//                             style={{
//                               display: "flex",
//                               alignItems: "center",
//                             }}
//                           >
//                             <div
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                               }}
//                             >
//                               <i
//                                 className="fa fa-home "
//                                 style={{
//                                   position: "absolute",
//                                   top: " -2px",
//                                   right: "47vh",
//                                   fontSize: "30px",
//                                 }}
//                               ></i>
//                             </div>
//                             <div
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 margin: "0 50px",
//                               }}
//                             >
//                               <i
//                                 style={{
//                                   position: "absolute",
//                                   top: "2px",
//                                   left: "-55px",
//                                 }}
//                                 className="fa fa-shopping-basket"
//                               ></i>
//                             </div>

//                             {direction === undefined ? (
//                               <CartContainer
//                                 layout={direction}
//                                 icon={cart.src}
//                               />
//                             ) : (
//                               ""
//                             )}

//                             <div
//                               style={{
//                                 display: "flex",
//                                 flexDirection: "column",
//                                 alignItems: "center",
//                                 margin: "0 15px",
//                               }}
//                             >
//                               <i
//                                 style={{
//                                   position: "relative",
//                                   top: "-2px",
//                                   left: "-20px",
//                                 }}
//                                 className="fa fa-search ahmed"
//                                 onClick={openSearch}
//                               ></i>
//                             </div>
//                             <div
//                               style={{
//                                 margin: "0 20px",
//                                 fontSize: "10px",
//                                 position: "relative",
//                                 left: "-20px",
//                               }}
//                             >
//                               {circle}
//                             </div>
//                           </div>
//                         </li>
//                       </div>
//                     </ul>
//                     {/* Other components */}
//                     {direction === undefined ? (
//                       // <></>
//                       <CartContainer layout={direction} icon={cart.src} />
//                     ) : (
//                       ""
//                       // <Cart layout={direction} icon={cart.src} />
//                     )}
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </header>
//     </div>
//   );
// };

// export default HeaderOne;

import React, { useState, useEffect } from "react";
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import Cart from "../containers/Cart";
import CartContainer from "../containers/CartContainer";
import TopBarDark from "./common/topbar-dark";
import { Media, Container, Row, Col } from "reactstrap";
import LogoImage from "./common/logo";
import search from "../../public/assets/images/icon/search.png";
import settings from "../../public/assets/images/icon/setting.png";
import cart from "../../public/assets/images/icon/cart.png";
import Currency from "./common/currency";
import { useRouter } from "next/router";
import SearchOverlay from "./common/search-overlay";

const HeaderOne = ({
  logoName,
  headerClass,
  topClass,
  noTopBar,
  direction,
}) => {
  const router = useRouter();

  /*=====================
     Pre loader
     ==========================*/
  useEffect(() => {
    setTimeout(function () {
      document.querySelectorAll(".loader-wrapper").style = "display:none";
    }, 2000);

    if (router.asPath !== "/layouts/Christmas")
      window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  let circle = [];
  let circle1 = 3;
  for (var i = 0; i < circle1; i++) {
    circle.push(
      <i
        style={{ fontSize: "15px" }}
        className="fa fa-dot-circle-o"
        key={i}
      ></i>
    );
  }

  const handleScroll = () => {
    let number =
      window.pageXOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number >= 300) {
      if (window.innerWidth < 581)
        document.getElementById("sticky").classList.remove("fixed");
      else document.getElementById("sticky").classList.add("fixed");
    } else document.getElementById("sticky").classList.remove("fixed");
  };

  const openNav = () => {
    var openmyslide = document.getElementById("mySidenav");
    if (openmyslide) {
      openmyslide.classList.add("open-side");
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };

  const load = () => {
    setIsLoading(true);
    fetch().then(() => {
      // deal with data fetched
      setIsLoading(false);
    });
  };

  return (
    <div>
      <SearchOverlay />
      <header id="sticky" className={`sticky ${headerClass}`}>
        <div className="mobile-fix-option"></div>
        {/*Top Header Component*/}
        {noTopBar ? "" : <TopBarDark topClass={topClass} />}

        <Container>
          <Row>
            <Col>
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <a href={null} onClick={openNav}>
                      <div className="bar-style mt-4">
                        <i
                          className="fa fa-bars sidebar-bar"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </a>
                    <SideBar />
                  </div>
                  <div className="brand-logo ">
                    <LogoImage logo={logoName} />
                  </div>
                </div>
                <div className="menu-right pull-right">
                  {/*Top Navigation Bar Component*/}
                  <NavBar />

                  <div>
                    <div className="icon-nav">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div>
                            <div
                              style={{
                                position: "relative",
                                top: "25px",
                                left: "-22px",
                              }}
                            >
                              <Media
                                src={search.src}
                                onClick={openSearch}
                                className="img-fluid"
                                alt=""
                              />
                            </div>

                            <i
                              style={{
                                fontSize: "29px",
                                // marginTop: "-10px",
                                position: "relative",
                                top: "14px",
                                marginRight: "-60px",
                              }}
                              className="fa fa-home "
                            ></i>
                            <i
                              style={{
                                // marginTop: "-10px",
                                position: "relative",
                                top: "12px",
                                left: "100px",
                              }}
                              onClick={() => alert("hii")}
                              className="fa fa-shopping-basket"
                            ></i>
                            <span
                              style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                              }}
                            >
                              <i
                                onClick={openSearch}
                                style={{
                                  position: "relative",
                                  left: "200px",
                                  top: "13px",
                                }}
                                className="fa fa-search "
                              ></i>
                            </span>
                            <div
                              style={{
                                position: "relative",
                                left: "260px",
                                top: "-5px",
                              }}
                            >
                              {circle}
                            </div>
                          </div>
                        </li>
                        {/* <Currency icon={settings.src} /> */}
                        {/*Header Cart Component */}
                        <div style={{ marginTop: "-98px", marginLeft: "20px" }}>
                          {direction === undefined ? (
                            // <></>
                            <CartContainer layout={direction} icon={cart.src} />
                          ) : (
                            <Cart layout={direction} icon={cart.src} />
                          )}
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </header>

      {/* <SearchOverlay /> */}
    </div>
  );
};

export default HeaderOne;
