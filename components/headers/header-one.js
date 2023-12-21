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
                  <div className="iconProfile" style={{
                    display: 'none',
                    position: 'relative',
                    placeItems: 'center',
                    placeContent: 'center',
                    marginLeft: '282px',
                  }}>
                    <svg viewBox="0 0 24 24" height='24px' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
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
