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

const About = () => {
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src="graphs.svg" width="100%" height="100%" />
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <p style={{ textTransform: "capitalize"}}>
            <br/>
            We aim to empower and enable the most populous strata of the Indian
            society (rural and semi-urban dwellers) to make informed decisions
            using our 360-view database, communicate ideas and establish
            connections via our user-friendly community and transact digitally
            for their goods and services on our dynamic marketplace.
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
        Impact 1 Million
        <br />
        Rural Dwellers by
        <br />
        2022
      </h2>
      <p style={{ textAlign: "center" }}>
        LADDUU is an organization committed to revolutionize how
        <br />
        people consume content, communicate thoughts and
        <br />
        transact for goods/services in a rural and semi-urban setup
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
                Our Vision
              </p>
              To reshape the small town-village ecosystem by empowering rural
              dwellers to create opportunities by introducing breakthrough
              technologies. Even to Reduce the gap in living standards between
              rural and urban India and to make living in small towns more
              <br />
              Desirable and fun.
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
                Our Values
              </p>
              We are driven by following five key values that define us and that
              act as cornerstones for our enterprise.
              <br />
              <br />
              Empathy | Respect | Innovation | Inclusiveness | Empowerment
            </CardBody>
            <br />
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
                Our Achievement
              </p>
              10,000 consumers have been contacted and their feedback has been
              collated through a survey. This has endowed us with a firm
              understanding of the mind of the sub urban and rural heartland.
              This knowledge has given us cutting edge acumen and confidence in
              the success of this venture.
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

export default About;
