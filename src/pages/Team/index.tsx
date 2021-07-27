import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Row, Col } from "antd";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import { SvgIcon } from "../../common/SvgIcon";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Team = () => {
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
          <p style={{ textTransform: "capitalize" }}>
            <br />
            Goal of our team is to keep your home/office safe from coronavirus
            and other germs by using VHA certified disinfectant chemicals. Our
            Sanitization experts will arrive at your doorstep at your scheduled
            time in fully dressed PPE kits equipped with necessary gear to make
            your experience hassle free and seamless.
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Radha S Jagarlamudi
                </p>
                Founder - CEO
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Sourya Kakarla
                </p>
                Chief Technology Officer (CTO)
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Gautam Karajgi
                </p>
                Mentor
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
      </Row>
      <Row justify="space-between" align="middle">
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Srikanth Nidimusili
                </p>
                Advisor - Technology
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Anjali Manoharan
                </p>
                Advisor - Healthcare
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
        <Col lg={8} md={8} sm={12} xs={24}>
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
                <SvgIcon src="p3.png" width="50%" height="50%" />
                <br />
                <br />
                <p
                  style={{
                    color: "#fcb001",
                    textAlign: "center",
                    fontSize: "25px",
                    marginBottom: "0px",
                  }}
                >
                  Akhil Abraham
                </p>
                Legal Advisor
              </CardBody>
              {/* <CardFooter style={{border:"none"}}>Footer</CardFooter> */}
            </Card>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default Team;
