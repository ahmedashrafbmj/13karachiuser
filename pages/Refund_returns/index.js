import React from "react";
import CommonLayout from "../../components/shop/common-layout";

function refundReturns() {
  return (
    <CommonLayout parent="Home" title="Return Policy">
      <div>
        <div className="backgroundImg2">
          <div style={{ marginTop: "-20%" }} className="text-center text-light">
            <h4 className="mt-5 text-light">Home </h4>
            <h1 className="text-light">REFUND AND RETURNS POLICY</h1>
          </div>
        </div>
        <div style={{}} className="container font ">
          <h3
            style={{
              color: "#000000",
            }}
          >
            Return Policy
          </h3>
          <h4
            style={{
              color: "#000000",
            }}
          >
            Return and Exchange Policy
          </h4>
          <div>
            <h5 className="text-muted mt-3">
              <ul style={{}}>
                <li>
                  - If your product is damaged, defective, or incomplete at the
                  time of delivery, please file a return request within 2 days
                  of delivery.
                </li>
                <li className="mt-3">
                  - Please contact Customer Service at
                  care@desireshopping.com.pk, indicating the item(s) you would
                  like to return and the reason.
                </li>
                <li className="mt-3 ">
                  - Attach packaging pictures along with the product pictures
                  from different angles. Your request will be forwarded to the
                  quality assurance department within four working days to
                  resolve the matter. In case any incorrect product has been
                  delivered to you or any fault is found in the ordered product
                  after delivery. So, we will only exchange the delivered
                  product with the similar type of new product. If any minor
                  fault is diagnose in your product after delivery. So, the same
                  product will be repaired and shall redeliver to you. If you
                  dislike product after receiving the order or your mind has
                  been changed to buy another product. In that case your product
                  will be replaced with another product. However, you have to
                  bare more than Rs.600 difference of amount for another product
                  which you will select. Any product that will be dispatched to
                  customer after reparation or replacement in that case customer
                  has to pay the delivery charges Rs.300.
                </li>
              </ul>
            </h5>
          </div>
          <div style={{}} className="container mt-5">
            <h3
              style={{
                color: "#000000",
                marginTop: "2%",
              }}
            >
              Shipping Damages / Broken Items:{" "}
            </h3>
            <div>
              <h5 className="text-muted mt-3">
                Desire Shopping Store takes the best possible measures in
                providing sustainable packaging but since some of the perfumes
                items are fragile, and can be damaged by the shipping company
                during the transit, you need to share the proof of damage within
                1 days of receiving those items, and we will not return or
                exchange such items, but we will provide you a discount coupon
                equivalent to the damage happened. We will require 7-10 business
                days to settle these claims.
              </h5>
            </div>
          </div>
          <div style={{}} className="container mt-5">
            <h3
              style={{
                color: "#000000",
                marginTop: "2%",
              }}
            >
              Reserved Rights Regarding Returns
            </h3>
            <div>
              <h5 className="text-muted mt-3">
                We reserve the right to solely define and limit, refuse, and/or
                reject returns from customers at any time due to:
              </h5>
              <ul className="mt-3">
                <li>
                  - An irregular or excessive returns history indicative of
                  “wardrobing;”
                </li>
                <li className="mt-3">
                  - An irregular or excessive returns history involving worn,
                  altered, laundered, damaged, or missing items; or
                </li>
                <br />
                <li className="mt-3">
                  - Potential fraudulent or criminal activity
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}

export default refundReturns;
