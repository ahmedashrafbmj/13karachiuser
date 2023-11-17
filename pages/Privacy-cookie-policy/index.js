import React from "react";
import CommonLayout from "../../components/shop/common-layout";

function PrivacyCookie() {
  return (
    <CommonLayout parent="Home" title="Privacy & Cookie Policy">
      <div>
        <div className="backgroundImg2">
          <div
            style={{ marginTop: "-20%" }}
            className="text-center text-light "
          >
            <h4 className="mt-5 text-light">Home </h4>
            <h1 className="text-light">PRIVACY & COOKIE POLICY</h1>
          </div>
        </div>
        <div style={{}} className="container font ">
          <h3
            style={{
              color: "#000000",
            }}
          >
            Privacy & Cookie Policy
          </h3>
          <div>
            <h5 className="text-muted mt-3">
              At Desire Shopping Store, your privacy and the security of your
              data is our first priority. We will ensure that your privacy is
              protected when using our services. The following privacy policy
              applies to the entirety of Desire Shopping Store customer-facing
              interaction channels including this website and all pages
              associated with the www.fashionera.pk domain. This policy explains
              what we consider to be private data, who has access to it, and how
              that data is used in a secure manner. We will retain your personal
              data only for as long as is necessary for the purposes set out in
              this Privacy Policy. We will retain and use your personal data to
              the extent necessary to comply with our legal obligations (for
              example, if we are required to retain your data to comply with
              applicable laws), resolve disputes, and enforce our legal
              agreements and policies. We will also retain usage data for
              internal analysis purposes. Usage Data is generally retained for a
              shorter period of time, except when this data is used to
              strengthen the security or to improve the quality of our service,
              or we are legally obligated to retain this data for longer time
              periods. After the necessity to keep the data is over, the data is
              deleted from the system immediately and cannot be recovered by any
              users or our employees after this point. Data that has been
              deleted or otherwise destroyed cannot be recovered at any time. A
              sufficient warning is given to the account administrator before
              data are permanently deleted. Data may remain in the systems’
              backup files, which will be deleted periodically. You can also
              request to have your data deleted by reaching out to us at
              care@desireshopping.com.pk. We undertake to perform the deletion
              within one month (30 calendar days). Wherever possible, we will
              aim to complete the request in advance of the deadline.
              <br />
              <br />
              <span className="mt-5">
                We take responsibility for all your personal data (such as your
                name, address, email address, phone number, and date of birth)
                that you provide us with, obtained when you subscribe to our
                newsletter or when you create a personal profile with us to
                place your order.
              </span>
            </h5>
          </div>
        </div>
      </div>
    </CommonLayout>
  );
}

export default PrivacyCookie;
