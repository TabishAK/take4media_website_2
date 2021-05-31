import BigHeading from "./../../components/big_heading/big_heading";
import gallery_1 from "../../images/gallery/gallery_1.jpeg";
import gallery_2 from "../../images/gallery/gallery_2.jpeg";
import { Container } from "react-bootstrap";
import "./blog.scss";

const Blogs = () => {
  return (
    <Container fluid className="blogs mt-5">
      <BigHeading
        headingText="Blogs"
        style={{
          left: "6%",
          width: "23%",
          position: "relative",
        }}
        isRightHeading={true}
      />
      <Container className="img-section">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 img-1">
            <img className="mt-5" src={gallery_1} alt="gallery_photo" />
            <h3>Why we build headless e-commerce on Shopify Plus</h3>
            <center>
              <button className="btn btn-sm">Read More</button>
            </center>
          </div>
          <div className="col-lg-2 col-md-2"></div>

          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 img-2">
            <img className="mt-5" src={gallery_2} alt="gallery_photo" />
            <h3>Why we build headless e-commerce on Shopify Plus</h3>
            <center>
              <button className="btn btn-sm">Read More</button>
            </center>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default Blogs;
