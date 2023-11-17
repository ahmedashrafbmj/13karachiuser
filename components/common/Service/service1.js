import React from "react";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
} from "../../../services/script";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "Free shipping",
    service: "Free shipping Nation wide",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "Online service for 24 x 7",
  },
  {
    link: svgoffer,
    title: "Festival offer",
    service: "New online special festival offer",
  },
];

const ServiceLayout = ({ sectionClass }) => {
  return (
    <Container>
      <section className={sectionClass}>
        <Row>
          {Data.map((data, index) => {
            return (
              <Col md="4" className="service-block" key={index}>
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default ServiceLayout;
