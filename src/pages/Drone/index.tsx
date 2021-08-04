import { lazy } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "antd";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { SvgIcon } from "../../common/SvgIcon";
import { Button as Button1 } from "../../common/Button";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Drone = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src="drone.png" width="100%" height="100%" />
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <p style={{  }}>
            <br />
            Our goal is to keep your home/office safe from coronavirus and other germs by using VHA certified disinfectant chemicals. Our Sanitization experts will arrive at your doorstep at your scheduled time in fully dressed PPE kits equipped with necessary gear to make your experience hassle free and seamless!
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "#fcb001", textAlign: "center", textTransform:"capitalize", fontSize:"30px"}}>
      Did you know that a drone can service a piece of land 20<br/>times faster than the manual labor at half the cost?
      </h2>
      {/* <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <br />
        sed do eiusmod tempor incididunt ut labore et dolore
        <br />
        magna aliqua
      </p> */}
      <br />
      <br />
      <br />
      {/* <Carousel responsive={responsive}>
        <div style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "20px", border: "1px solid #fbc001" }}>
            <CardBody
              style={{
                border: "none",
                textTransform: "capitalize",
                color: "#2f377c",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#fcb001",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </CardBody>
          </Card>
        </div>

        <div style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "20px", border: "1px solid #fbc001" }}>
            <CardBody
              style={{
                border: "none",
                textTransform: "capitalize",
                color: "#2f377c",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#fcb001",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </CardBody>
          </Card>
        </div>
        <div style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "20px", border: "1px solid #fbc001" }}>
            <CardBody
              style={{
                border: "none",
                textTransform: "capitalize",
                color: "#2f377c",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#fcb001",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </CardBody>
          </Card>
        </div>
        <div style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "20px", border: "1px solid #fbc001" }}>
            <CardBody
              style={{
                border: "none",
                textTransform: "capitalize",
                color: "#2f377c",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#fcb001",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </CardBody>
          </Card>
        </div>
        <div style={{ padding: "2%" }}>
          <Card style={{ borderRadius: "20px", border: "1px solid #fbc001" }}>
            <CardBody
              style={{
                border: "none",
                textTransform: "capitalize",
                color: "#2f377c",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "#fcb001",
                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                Lorem Ipsum
              </p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </CardBody>
          </Card>
        </div>
      </Carousel> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
      <div style={{ textAlign: "center", fontSize: "20px", color: "#2f377c" }}>
        For bookings or any kind of queries
        <a href="tel:+919490780799" style={{ marginLeft: "1%" }}>
          <Button1>Call Here</Button1>
        </a>
        <br />
        <br />
        <br />
      </div>
    </Container>
  );
};

export default Drone;
