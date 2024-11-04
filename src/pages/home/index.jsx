import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PlayerComponent from '../../components/player';

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex mt-1 mt-lg-10 mb-2 mb-lg-0">
          <div
            className="h_bg-image order-1 order-lg-2 h-100"
            style={{ backgroundImage: `url(${introdata.your_img_url})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-start mt-3 mt-lg-0">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1 orange">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                        introdata.animated.fourth,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p
                  className="mb-1"
                  dangerouslySetInnerHTML={{
                    __html: introdata.description.replace(
                      /916-289-4652/g,
                      '<span style="color: red; font-weight: bold; font-size: larger;">916-289-4652</span>'
                    ),
                  }}
                ></p>

                <div className="intro_btn-action pb-5">
                  <Container>
                    <Row>
                      <Col xs="12" lg="auto" className="mb-3">
                        <Link to="/portfolio" className="text_2">
                          <div id="button_p" className="ac_btn btn">
                            Portfolio
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs="12" lg="auto" className="mb-3">
                        <Link to="/service">
                          <div id="button_h" className="ac_btn btn">
                            Service
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                      </Col>
                      <Col xs="12" lg="auto" className="mb-3">
                        <Link to="/contact">
                          <div id="button_h" className="ac_btn btn">
                            Contact
                            <div className="ring one"></div>
                            <div className="ring two"></div>
                            <div className="ring three"></div>
                          </div>
                        </Link>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="align-self-left">
                  <PlayerComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
