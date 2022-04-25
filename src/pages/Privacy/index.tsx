import { lazy } from "react";
// import IntroContent from "../../content/IntroContent.json";
// import MiddleBlockContent from "../../content/MiddleBlockContent.json";
// import AboutContent from "../../content/AboutContent.json";
// import MissionContent from "../../content/MissionContent.json";
// import ProductContent from "../../content/ProductContent.json";
// import ContactContent from "../../content/ContactContent.json";

// const Contact = lazy(() => import("../../components/ContactForm"));
// const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
// const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
// const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Terms = () => {
  return (
    <Container>
      <br />
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Overview
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        This privacy policy ("policy") will help you understand how Ladduu
        ("us", "we", "our") uses and protects the data you provide to us when
        you visit and use ladduu.com ("website", "service"). We reserve the
        right to change this policy at any given time, of which you will be
        promptly updated. If you want to make sure that you are up to date with
        the latest changes, we advise you to frequently visit this page.
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        What User Data We Collect
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        When you visit our Website, we may collect the following data:
        <ul>
          <br />
          <li>Your IP address</li>
          <li>Your First Name and Last Name</li>
          <li>Your Business Name</li>
          <li>
            Your contact information, residential/business address, location,
            phone number and email address
          </li>
          <li>Other information such as interests and preferences</li>
          <li>Data profile regarding your online behavior on our website</li>
        </ul>
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Why We Collect Your Data
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        We are collecting your data for several reasons:
        <ul>
          <br />
          <li>To better understand your needs</li>
          <li>To improve our services and products</li>
          <li>
            To send you promotional emails containing the information we think
            you will find interesting
          </li>
          <li>
            To contact you to fill out surveys and participate in other types of
            market research
          </li>
          <li>
            To customize our website according to your online behavior and
            personal preferences
          </li>
        </ul>
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Safeguarding and Securing the Data
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        Ladduu is committed to securing your data and keeping it confidential.
        Ladduu has done all in its power to prevent data theft, unauthorized
        access, and disclosure by implementing the latest technologies and
        software, which help us safeguard all the information we collect online.
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Our Cookie Policy
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        Once you agree to allow our website to use cookies, you also agree to
        use the data it collects regarding your online behavior (analyze web
        traffic, web pages you spend the most time on, and websites you visit).
        The data we collect by using cookies is used to customize our website to
        your needs. Please note that cookies don't allow us to gain control of
        your computer in any way. They are strictly used to monitor which pages
        you find useful and which you do not so that we can provide a better
        experience for you. If you want to disable cookies, you can do it by
        accessing the settings of your internet browser however the
        functionality of the website might be compromised.
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Links to Other Websites
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        Our website contains links that lead to other websites. If you click on
        these links ladduu.com is not held responsible for your data and privacy
        protection. Visiting those websites is not governed by this privacy
        policy agreement. Make sure to read the privacy policy documentation of
        the website you go to from our website.
      </p>
      <br />
      <h4 style={{ color: "#fcb001", textAlign: "center", fontSize: "30px" }}>
        Restricting the Collection of your Personal Data
      </h4>
      <p
        style={{
          color: "#2f377c",
          fontSize: "15px",
          textTransform: "capitalize",
        }}
      >
        At some point, you might wish to restrict the use and collection of your
        personal data. You can achieve this by doing the following: If you have
        already agreed to share your information with us, feel free to contact
        us via email and we will be more than happy to change this for you.
        Ladduu will not lease, sell or distribute your personal information to
        any third parties, unless we have your permission. We might do so if the
        law forces us. Your personal information will be used when we need to
        send you promotional materials if you agree to this privacy policy.
        <br />
        <br />
        Privacy Policy last updated on: 17 June 2021
      </p>
      <br />
      <br />
      <br />
      {/* <ScrollToTop /> */}
    </Container>
  );
};

export default Terms;
