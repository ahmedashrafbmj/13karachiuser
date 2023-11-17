import React from "react";
import CommonLayout from "../../components/shop/common-layout";
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductList from "./common/productList";
import { Container, Row } from "reactstrap";
import { useRouter } from "next/router";

const NoSidebar = () => {
  const router = useRouter();
  const category = router.query.no_sidebar.toLowerCase();

  console.log(category, "iiiiiiiiiiiiiiii");

  return (
    <CommonLayout title="perfumes " parent="home">
      <section className="section-b-space ratio_asos">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <ProductList
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
