import React from "react";
import Slider from "react-slick";
import MasterBanner from "../../Fashion/Components/MasterBanner";

const Data = [
  {
    img: "home19",
    title: "welcome to fashion",
    desc: "men fashion",
    link: "#",
  },
  {
    img: "home20",
    title: "welcome to fashion",
    desc: "Top collection",
    link: "#",
  },
];

const settings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000
};

const HomeSlider = () => {
  return (
    <section className="p-0">
      <Slider className="slide-1 home-slider" {...settings}>
        {Data.map((data, i) => {
          return (
            <MasterBanner
              key={i}
              img={data.img}
              link={data.link}
              title={data.title}
              desc={data.desc}
            />
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeSlider;
