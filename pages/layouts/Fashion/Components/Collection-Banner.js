import React, { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "reactstrap";
import banner1 from "../../../../public/assets/images/sub-banner1.jpg";
import banner2 from "../../../../public/assets/images/sub-banner2.jpg";
// import banner2 from "../../../../public/assets/images/sub-banner3.jpg";
import banner4 from "../../../../public/assets/images/sub-banner4.jpg";
import banner5 from "../../../../public/assets/images/sub-banner5.jpg";
import abcd from "../../../../public/assets/images/banners/1.jpeg";
import abcd1 from "../../../../public/assets/images/banners/2.jpeg";
import abcd2 from "../../../../public/assets/images/banners/3.jpeg";
import Heading from "../../../../components/common/heading";
// import banner6 from "../../../../public/assets/images/sub-banner6.jpg";
import { Zoom } from "react-reveal";
import Animate from "../../animation/animation";
import { Fade } from "react-reveal";
import { Get } from "../../../../helpers/baseurl/apibasemethod";
import baseurl from "../../../../helpers/baseurl/baseurl";

const DataWatches = [
  {
    img: banner1,
    about: "men",
    offer: "10% off",
    title: "WOMEN'S WATCHES",
    link: "/shop/WOMEN'S WATCHES",
    class: "p-right text-center",
  },

  {
    img: banner2,
    about: "women",
    offer: "10% off",
    title: "MEN'S WATCHES",
    link: "/shop/MEN'S WATCHES",
    class: "p-right text-center",
  },
  {
    img: banner2,
    about: "women",
    title: "WATCHES",

    offer: "10% off",
    link: "/shop/WATCHES",
    class: "p-right text-center",
  },
];
const DataPerfeumes = [
  {
    img: banner4,
    about: "men",
    offer: "10% off",
    link: "/shop/MEN'S PERFUMES",
    class: "p-right text-center",
    title: "MEN'S PERFUMES",
  },
  {
    img: banner5,
    about: "women",
    offer: "10% off",
    link: "/shop/WOMEN'S PERFUMES",
    class: "p-right text-center",
    title: "WOMEN'S PERFUMES",
  },
  {
    img: banner5,
    about: "women",
    offer: "10% off",
    link: "/shop/PERFUMES",
    class: "p-right text-center",
    title: "PERFUMES",
  },
];

const bannerdata = [
  {
    img: abcd,
    link: "abcd",
    type: "right",
  },
  {
    img: abcd1,
    link: "abcd",
    type: "left",
  },
  {
    img: abcd2,
    link: "abcd",
    type: "right",
  },
];

const MasterCollectionBanner = ({
  img,
  about,
  offer,
  link,
  classes,
  title,
}) => {
  
  return (
    <Col md="4">
      <Link href={`/shop/area/${title}`}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <Media src={img} className="img-fluid" style={{width:"100%",height:"45vh"}} alt="" />
            {/* <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
              </div>
            </div> */}
            <div>
              <h4
                className="mt-3 ani text-center"
                style={{
                  color: "#241E1E",
                  fontfamily: "Outfit, Sans-serif",
                  fontSize: "22px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                }}
              >
                {title}
              </h4>
              <p
                className="ani text-center"
                style={{
                  color: "#555555",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                }}
              >
                <b>Timeless beauty on her wrist</b>
              </p>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

// const Banners = ({ img, link, classes }) => {
//   return (
//     <Col md="4">
//       <Link href={link}>
//         <a>
//           <div className={`collection-banner ${classes}`}>
//             <Media src={img} className="img-fluid" alt="" />
//             <div className="contain-banner">
//               <div>
//                 <h4>aa</h4>
//                 <h2>aaa</h2>
//               </div>
//             </div>
//             {/* <h4 className="mt-3" style={{ color: "#241E1E", fontfamily: "Outfit, Sans-serif", fontSize: "22px", fontWeight: "700", textTransform: "uppercase" }}>WOMEN'S WATCHES</h4>
//             <p style={{ color: "#555555", fontSize: "inherit", fontFamily: "inherit" }}>
//               <b>

//                 Timeless beauty on her wrist
//               </b>
//             </p> */}
//           </div>
//         </a>
//       </Link>
//     </Col>
//   );
// };

const CollectionBanner = () => {
  const [areas,setAreas] = useState();
  const [categories,setCategories] = useState();
  const getData = () => {
    Get("getArea")
      .then((res) => {
        setAreas(res.data.areas);
        console.log(res.data, "resssss");
      })
      .catch((e) => {
        console.error(e);
      });

    Get("getCategories")
      .then((res) => {
        setCategories(res.data.categories);
        console.log(res.data.categories, "bbb");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Fragment>
        {/*collection banner*/}
        <Heading
          title="title1 section-t-space"
          inner="title-inner1"
          hrClass={false}
          heading={"featured Areas"}
        />
        <Animate animationType={Zoom}>
          <section className="pb-0">
            <Container>
              <Row className="partition2">
                {areas?.map((data, i) => {
                  return (
                    <MasterCollectionBanner
                      key={i}
                      img={baseurl.image + data?.images[0]}
                      about={data?.about}
                      link={data?.link}
                      offer={data?.offer}
                      classes={data?.class}
                      title={data.name}
                    />
                  );
                })}
              </Row>
            </Container>
          </section>
          <div>
            <Heading
              title="title1 section-t-space"
              inner="title-inner1"
              hrClass={false}
              heading={"featured Categories"}
            />
            {/* <h4 className="mt-5 text-center title1" style={{color:"#241E1E",fontfamily: "Outfit, Sans-serif",fontSize:"30px",fontWeight:"800",textTransform:"uppercase"}}>Perfeumes</h4> */}

            {/* <div className="line"></div>  */}
            {/* <hr role="tournament6"></hr> */}
          </div>
        </Animate>

        <Animate animationType={Zoom}>
          <section className="pb-0">
            <Container>
              <Row className="partition2">
                {categories?.map((data, i) => {
                  return (
                    <MasterCollectionBanner
                      key={i}
                      img={baseurl.image + data?.images[0]}
                      about={data?.about}
                      link={data?.link}
                      offer={data?.offer}
                      classes={data?.class}
                      title={data?.name}
                    />
                  );
                })}
              </Row>
            </Container>
          </section>
        </Animate>
        {/*collection banner end*/}
        <section className="pb-0">
          <Container>
            <Row className="partition2">
              {bannerdata?.map((e, i) => {
                const { img, type } = e;
                console.log(type, "direction");
                console.log(e.img);
                return (
                  <>
                    {type === "right" ? (
                      <Animate animationType={Fade} right big>
                        <img
                          src={e.img.src}
                          className="imagesbanner"
                          // style={{
                          //   marginTop: "40px",
                          //   height: "45vh",
                          //   width: "100%",
                          // }}
                        />
                      </Animate>
                    ) : (
                      <Animate animationType={Fade} left big>
                        <img
                          src={e.img.src}
                          className="imagesbanner"
                          // style={{
                          //   marginTop: "40px",
                          //   height: "45vh",
                          //   width: "100%",
                          // }}
                        />
                      </Animate>
                    )}

                    <br />
                  </>
                );
              })}
            </Row>
          </Container>
        </section>
      </Fragment>
    </>
  );
};

export default CollectionBanner;
