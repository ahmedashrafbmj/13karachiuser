import React from "react";
import MasterServiceContent from "../../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
} from "../../../services/script";
const Data = [
  {
    link: svgFreeShipping,
    title: "Free Shipping",
    service: "Free Shipping Nation Wide",
  },
  {
    link: svgservice,
    title: "24 X 7 Service",
    service: "Online Service for 24 x 7",
  },
  {
    link: svgoffer,
    title: "Festival Offer",
    service: "New Online Special Festival Offer",
  },
  {
    link: svgpayment,
    title: "Online Payment",
    service: "New Online Special Festival Offer",
    lastChild: true,
  },
];

const Service = () => {
  const backClick = () => {
    document.getElementById("filter").style.left = "-365px";
  };

  return (
    <div className="collection-filter-block">
      <div className="collection-mobile-back" onClick={backClick}>
        <span className="filter-back">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
          back
        </span>
      </div>
      <div className="product-service">
        {Data.map((data, index) => {
          return (
            <MasterServiceContent
              key={index}
              link={data.link}
              title={data.title}
              service={data.service}
              lastChild={data.lastChild}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
