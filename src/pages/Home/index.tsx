import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import { Button } from "antd/lib/radio";
import { Button as Button1 } from "../../common/Button";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
	      section1={IntroContent.section1}
        button={IntroContent.button}
        icon="Village.png"
        id="intro"
      />
      <br />
      <h2 style={{ color: "#fcb001", textAlign: "center" }}>
        Impact 1 Million
        <br />
        Rural Dwellers by 2022
      </h2>
      <p style={{ textAlign: "center", fontSize: "20px", color: "#2b3379" }}>
        • Empower small entrepreneurs to expand markets
        <br />
        • Mechanize farm procedures to reduce cost of production in agriculture
        <br />
        • Digitize local information to build inclusive and future-ready
        communities
      </p>
      {/* <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      /> */}
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="vv (2).png"
        id="about"
      />
      {/* <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        button={MissionContent.button}
        icon="drone.png"
        id="mission"
      /> */}
      <ContentBlock
        type="right"
        title={ProductContent.title}
        content={ProductContent.text}
        section={ProductContent.section}
        icon="rural.png"
        id="product"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
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

export default Home;
