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

const Sanitation = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src="Sanitation2.png" width="100%" height="100%" />
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <p style={{ textTransform: "capitalize" }}>
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "#fcb001", textAlign: "center" }}>
        The Standard Lorem
        <br />
        Ipsum Passage
      </h2>
      <p style={{ textAlign: "center" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
        <br />
        sed do eiusmod tempor incididunt ut labore et dolore
        <br />
        magna aliqua
      </p>
      <br />
      <br />
      <br />
      <Carousel responsive={responsive}>
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
            {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
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
            {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
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
            {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
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
            {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
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
            {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
          </Card>
        </div>
        {/* <div style={{padding:"2%"}}>
          <Card style={{borderRadius:"20px", border:"1px solid #fbc001"}}>
            <CardHeader style={{border:"none"}}>Header</CardHeader>
            <CardBody style={{border:"none"}}>Body</CardBody>
            <CardFooter style={{border:"none"}}>Footer</CardFooter>
          </Card>
        </div> */}
      </Carousel>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Sanitation;
