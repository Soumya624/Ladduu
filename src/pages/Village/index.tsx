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

const Village = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src="vv (2).png" width="100%" height="100%" />
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <p style={{ }}>
            <br />
              Technology penetration isn’t as rampant in rural and semi-urban areas due to limited infrastructure, language barriers and other cultural differences. We, at Ladduu, want to break those barriers and make lives of rural communities simpler by leveraging technology and facilitating scalable operations!
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ color: "#fcb001", textAlign: "center", textTransform:"capitalize" }}>
        make informed decisions using<br/>our 360⁰ platform
      </h2>
      <p style={{ textAlign: "center" }}>
      We aim to empower and enable the most populous strata of the Indian society (rural & semi-urban dwellers) to make informed decisions using our 360⁰ platform, communicate ideas and establish connections via our user-friendly community and transact digitally for their goods and services on our dynamic marketplace!
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
                Retail
              </p>
              Information about local stores with real-time availability of products
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
                Service Providers
              </p>
              Information about technicians like Electricians, Plumbers, Engineers etc.
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
                Healthcare
              </p>
              Information about local Healthcare Providers like clinics, hospitals, doctors
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
                Government
              </p>
              Information about Employees at local Government bodies like Panchayats
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
                Food Sellers
              </p>
              Information about local food vendors who sell pickles, confectionery etc.
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
      <br />
      <div style={{ textAlign: "center", fontSize: "20px", color: "#2f377c" }}>
        For bookings or queries,
        <a href="tel:+919490780799" style={{ margin: "0 1%", fontFamily:"sans-serif" }}>
          Call
        </a>
        or
        <a href="https://wa.me/919490780799" style={{ margin: "0 1%", fontFamily:"sans-serif" }}>
          Whatsapp
        </a>
        at +91-9490780799
        <br />
        <br />
        <br />
      </div>
    </Container>
  );
};

export default Village;
