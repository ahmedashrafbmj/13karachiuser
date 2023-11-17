import React from "react";
import CommonLayout from "../../components/shop/common-layout";

function Aboutus() {
  return (
    <CommonLayout parent="Home" title="About">
      <div>
        <div className="backgroundImg">
          <div style={{ marginTop: "-20%" }} className=" text-light  ">
            <h4 className=" text-center text-light ">Home </h4>
            <h1 className="text-light ">ABOUT US</h1>
          </div>
        </div>
        <div style={{}} className="container font">
          <h2
            style={{
              color: "#000000",
              borderBottom: "2px solid #000000",
              paddingBottom: "15px",
              display: "inline-block",
            }}
          >
            Our Story
          </h2>
          <div>
            <h5 className="text-muted mt-1">
              Tera Karachi Shopping has been in the retail and wholesale trade of
              luxury goods, such as watches, perfumes, body sprays, testers,
              handbags, fashion accessories and apparel since 2015. We pride
              ourselves on our ability to deliver the best prices, most varied
              selection and finest service. Our goal is and always will be to
              earn the trust and satisfaction of our customers. We understand
              that this means providing the perfect combination of competitive
              pricing, an honest and reliable corps of customer service
              specialists that are always ready to assist. Our success over the
              years can be attributed to our loyal commitment to our customers.
              Whether you’re shopping with us for the first time or are a valued
              repeat customer, we’re here to make your shopping experience as
              easy, reliable and especially fun as possible. But equally as
              important to us is that you are comfortable and confident in
              shopping with us. You can always reach out to our professional
              customer service department online or, for a more personal
              experience, by your Mobile or Telephone. We never compromise on
              quality of our products. We always consider to market factors and
              try on our level best to provide top quality products to our
              customers in very reasonable rates.
            </h5>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}

export default Aboutus;
