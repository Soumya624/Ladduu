import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import {Card,Pho,Row} from "./styles";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Team = () => {
  return (
    
    <Container>
      <ScrollToTop />
      <Row>
      <Card>
      <Pho src={`/img/svg/Radha_Jagarlamudi.jpg`}  />
      <text>RADHA S JAGARLAMUDI</text>
      <text> Founder - CEO</text>
      <p>Details</p>
      </Card>
      <Card>
      <Pho src={`/img/svg/sourya.jpg`}  />
      <text>SOURYA KAKARLA</text>
      <text> Chief Technology Officer (CTO)</text>
      <p>Details</p>
      </Card>
      </Row>
      <Row>
      <Card>
      <Pho src={`/img/svg/gautam.png`}  />
      <text>GAUTAM KARAJGI</text>
      <text> Mentor</text>
      <p>Details</p>
      </Card>
      <Card>
      <Pho src={`/img/svg/srikanth.png`}  />
      <text>SRIKANTH NIDIMUSILI</text>
      <text> Advisor - Technology </text>
      <p>Details</p>
      </Card>
      </Row>
      <Row>
      <Card>
      <Pho src={`/img/svg/anjali.png`}  />
      <text>ANJALI MANOHARAN</text>
      <text> Advisor - Healthcare</text>
      <p>Details</p>
      </Card>
      <Card>
      <Pho src={`/img/svg/akhil.png`}  />
      <text>AKHIL ABRAHAM ROY</text>
      <text> Legal Advisor </text>
      <p>Details</p>
      </Card>
      </Row>
    </Container>
   
    
  );
};

export default Team;
