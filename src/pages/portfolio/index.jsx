import React, {useState} from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import ImagePopup from "../../components/themetoggle/imagepopup";

export const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
const [selectedImage, setSelectedImage] = useState("");
const [selectedImageDesc, setSelectedImageDesc] = useState("");
const [selectedPhotos, setSelectedPhotos] = useState("");
const openModal = (imgSrc, desc, photos) => {
  setSelectedImage(imgSrc);
  setSelectedImageDesc(desc);
  
  setSelectedPhotos(photos);
  setShowModal(true);
};

const closeModal = () => {
  setShowModal(false);
};

  
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
          
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" onClick={() => openModal(data.img, data.description, data.photos)} />
              <div className="content">
                <p>{data.description}</p>
                <a href="#" onClick={() => openModal(data.img, data.description , data.photos)}>view detail</a>
              </div>
              </div>
            );
          })}
        </div>
        <ImagePopup
          show={showModal}
          handleClose={closeModal}
          imageUrl={selectedImage}
          desc={selectedImageDesc}
          photos={selectedPhotos}
        />

      </Container>
    </HelmetProvider>
  );
  
};


