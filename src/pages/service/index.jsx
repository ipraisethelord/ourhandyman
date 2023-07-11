import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta, 
  services,
  contactConfig,
} from "../../content_option";

export const Service = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Service | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-1 mt-1 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Service <span style={{ color: 'red' }}>{contactConfig.YOUR_FONE}</span></h1> 
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
         
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
      
        <Row className="sec_sp">
  <Col lg="7">
    {services.map((data, i) => {
      return (
        <div className="service_ py-4" key={i}>
          <h5 className="service__title">{data.title}</h5>
          <p className="service_desc">{data.description}</p>
        </div>
      );
    })}
  </Col>
</Row>

      </Container>
    </HelmetProvider>
  );
};
