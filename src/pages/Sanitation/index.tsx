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
          <p style={{  }}>
            <br />
            Ladduu provides the best price package for cleaning and disinfecting your Home or Office Space. We are bringing hospital level disinfection services in your area to your doorstep.
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
      Our goal is to keep<br/>your home/office safe
      </h2>
      <p style={{ textAlign: "center" }}>
      Our goal is to keep your home/office safe from coronavirus and other germs by using VHA certified disinfectant chemicals. Our Sanitization experts will arrive at your doorstep at your scheduled time in fully dressed PPE kits equipped with necessary gear to make your experience hassle free and seamless.
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
                Main Services
              </p>
              Our experts will use a combination of spraying pump and manual cleaning best suited for the surface. Our products have no ill effects and are safe for people with lung issues.
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
                  marginBottom:"10px"
                }}
              >
                Commercial Sanitization Services
              </p>
              Services Available for<br/>
              Office Spaces | Function Halls | Hospitals | Panchayats | Stores/Shops
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
                  marginBottom:"10px"
                }}
              >
                Residential Sanitization Services
              </p>
              Services Available for<br/>
              Apartments | Independent homes | Clubhouses | Common areas/Cellars
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
                Fumigation Services
              </p>
              Fogging and cleaning the air that guarantees 99.99% pathogen free surfaces and air. We recommend this service for covid recovered individual's homes and offices.
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
        For bookings or any kind of queries
        <a href="tel:+919490780799" style={{ margin: "0 1%", fontFamily:"sans-serif" }}>
          Call
        </a>
        or
        <a href="https://wa.me/919490780799" style={{ margin: "0 1%", fontFamily:"sans-serif" }}>
          Whatsapp
        </a>
        at +91-949780799
        <br />
        <br />
        <br />
      </div>
    </Container>
  );
};

export default Sanitation;
