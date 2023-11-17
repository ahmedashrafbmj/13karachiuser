import React, { useState, useEffect } from "react";
import Link from "next/link";
import { MENUITEMS } from "../../constant/menu";
// import { Container, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import Router, { useRouter } from "next/router";
import LogoImage from "./logo";
import SearchOverlay from "./search-overlay";
import { Button, Form, FormGroup, Input } from "reactstrap";
import ProductItem from "../../common/product-box/ProductBox1";
import { Get } from "../../../helpers/baseurl/apibasemethod";

const NavBar = () => {
  const { t } = useTranslation();
  const [navClose, setNavClose] = useState({ right: "0px" });
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const [mainCategories, setmainCategories] = useState([]);
  const [subCategories, setsubCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    if (window.innerWidth < 750) {
      setNavClose({ right: "-410px" });
    }
    if (window.innerWidth < 1199) {
      setNavClose({ right: "-300px" });
    }
  }, []);

  const openNav = () => {
    setNavClose({ left: "0px" });
    if (router.asPath == "/layouts/Gym")
      document.querySelector("#topHeader").classList.add("zindex-class");
  };

  const closeNav = () => {
    setNavClose({ right: "-410px" });
    if (router.asPath == "/layouts/Gym")
      document.querySelector("#topHeader").classList.remove("zindex-class");
  };
  // eslint-disable-next-line

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (
      event.target.parentNode.nextElementSibling.classList.contains(
        "opensubmegamenu"
      )
    )
      event.target.parentNode.nextElementSibling.classList.remove(
        "opensubmegamenu"
      );
    else {
      document.querySelectorAll(".menu-content").forEach(function (value) {
        value.classList.remove("opensubmegamenu");
      });
      event.target.parentNode.nextElementSibling.classList.add(
        "opensubmegamenu"
      );
    }
  };

  const [mainmenu, setMainMenu] = useState(MENUITEMS);

  useEffect(() => {
    const currentUrl = location.pathname;
    MENUITEMS.filter((items) => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = (item) => {
    MENUITEMS.filter((menuItem) => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });

    setMainMenu({ mainmenu: MENUITEMS });
  };

  // Click Toggle menu
  const toggletNavActive = (item) => {
    if (!item.active) {
      MENUITEMS.forEach((a) => {
        if (MENUITEMS.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) return false;
          b.children.forEach((c) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }
    item.active = !item.active;
    setMainMenu({ mainmenu: MENUITEMS });
  };

  const openMblNav = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    const nextSibling = event.target.nextElementSibling;

    if (nextSibling) {
      if (nextSibling.classList.contains("opensubmenu")) {
        nextSibling.classList.remove("opensubmenu");
      } else {
        document.querySelectorAll(".nav-submenu").forEach(function (value) {
          value.classList.remove("opensubmenu");
        });
        document
          ?.querySelector(".mega-menu-container")
          ?.classList?.remove("opensubmenu");
        nextSibling.classList.add("opensubmenu");
      }
    }
  };
  const openSearch = () => {
    document.getElementById("search-overlay").style.display = "block";
  };
  const jsonData = localStorage.getItem("myData");

  const apiData = JSON.parse(jsonData);
  console.log(apiData, "apiData");

  const handleSearch = () => {
    // Perform the search logic on apiData based on the searchQuery
    const results = apiData.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
    router.push("/shop/no_sidebar");
    localStorage.setItem("myData", JSON.stringify(results));
  };

  const getData = () => {
    Get("getCategories")
      .then((res) => {
        setmainCategories(res.data.categories);
        console.log(res.data.categories, "resssss");
      })
      .catch((e) => {
        console.error(e);
      });

    Get("getsubCategories")
      .then((res) => {
        setsubCategories(res.data.categories);
        console.log(res.data.categories, "bbb");
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(MENUITEMS, "MENUITEMS");
  return (
    <div>
      <div className="main-navbar">
        <div id="mainnav  " className="hoverrr">
          <div className="toggle-nav" onClick={openNav.bind(this)}>
            <i className="fa fa-bars sidebar-bar"></i>
          </div>
          <ul className="nav-menu sub-title" style={navClose}>
            <li className="back-btn" onClick={closeNav.bind(this)}>
              <div className="mobile-back ">
                <div className="brand-logo">
                  <LogoImage logo={"logo.png"} />
                </div>
                <i className="fa fa-angle-left ps-2" aria-hidden="true"></i>
              </div>
            </li>
            <br />

            <div>
              <div className="searchHide">
                <Form className="ms-3 w-70 form-inline">
                  <FormGroup className="mb-2 mr-sm-2">
                    <Input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Search a Product"
                      style={{ borderRadius: "5px" }}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </FormGroup>
                  <Button
                    type="button"
                    className="btn btn-primary ms-3 mb-2"
                    onClick={handleSearch}
                  >
                    <i className="fa fa-search"></i>
                  </Button>
                </Form>

                {/* {searchResults.length > 0 && (
                  <ul>
                    {searchResults.length > 0 && (
                      <div className="imgwidth">
                        <ul>
                          {searchResults.map((result, index) => (
                            <ProductItem
                              product={result}
                              addCompare={() =>
                                contextCompare.addToCompare(product)
                              }
                              msg={"btnnhi"}
                              imgwidth={"imgwidth"}
                              addWishlist={() =>
                                contextWishlist.addToWish(product)
                              }
                              addCart={() =>
                                context.addToCart(product, quantity)
                              }
                              key={index}
                            />
                          ))}
                        </ul>
                      </div>
                    )}
                  </ul>
                )} */}
              </div>
            </div>

            {mainCategories?.map((menuItem, i) => {
              const filteredSubcategories = subCategories.filter(
                (subCategory) =>
                  subCategory.name
                    .toLowerCase()
                    .includes(menuItem.name.toLowerCase())
              );

              return (
                <li
                  key={i}
                  className={` ${menuItem.megaMenu ? "mega-menu" : ""}`}
                >
                  {menuItem.type == "link" ? (
                    <Link href={menuItem.path}>
                      <a className="nav-link">{t(menuItem?.name)}</a>
                    </Link>
                  ) : (
                    <a className="nav-link" onClick={(e) => openMblNav(e)}>
                      {t(menuItem?.name)}
                      <span className=" ms-3"></span>
                      <span className="sub-arrow ms-5"></span>
                    </a>
                  )}
                  {filteredSubcategories.length > 0 && (
                    <ul className="nav-submenu">
                      {filteredSubcategories.map((childrenItem, index) => {
                        return (
                          <li
                            key={index}
                            className={`${
                              childrenItem.children ? "sub-menu " : ""
                            }`}
                          >
                            <a
                              href={null}
                              onClick={() => toggletNavActive(childrenItem)}
                            >
                              {childrenItem.name}
                              {childrenItem.tag === "new" ? (
                                <span className="new-tag">new</span>
                              ) : (
                                ""
                              )}
                              {/* <i className="fa fa-angle-right ps-2"></i> */}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
