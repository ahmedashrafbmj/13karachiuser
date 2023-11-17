import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
// import { withApollo } from '../../helpers/apollo/apollo';
import { Container, Row } from "reactstrap";
import { useRouter } from "next/router";
import MarketList from "../common/marketList";

const NoSidebar = () => {
  const router = useRouter();
  const category = router.query.area.toLowerCase();

  console.log(category, "iiiiiiiiiiiiiiii");

  return (
    <CommonLayout title={`${category} / Markets`} parent="home">
      <section className="section-b-space ratio_asos">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <MarketList
                colClass="col-xl-3 col-6 col-grid-box"
                noSidebar={true}
                params={category}
              />
            </Row>
          </Container>
        </div>
      </section>
    </CommonLayout>
  );
};

export default NoSidebar;
