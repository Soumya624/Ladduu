import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          {/* <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language style={{ color: "#fcb001" }}>{t("Contact")}</Language>
              <Large to="/">{t("Tell us everything")}</Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a
                href="https://web.whatsapp.com/"
                style={{ textDecoration: "none" }}
              >
                <Chat style={{ color: "#fcb001" }}>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title style={{ color: "#fcb001" }}>{t("Policy")}</Title>
              <Large to="/privacy" left="true">
                {t("Privacy")}
              </Large>
              <Large left="true" to="/terms">
                {t("Terms and Conditions")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Empty />
              <Large left="true" to="/">
                {t("Support Center")}
              </Large>
              <Large left="true" to="/">
                {t("Customer Support")}
              </Large>
              
            </Col>
          </Row> */}
          <Row justify="space-between" style={{alignItems:"center"}}>
          <Col lg={8} md={8} sm={24} xs={24}  style={{alignItems:"center"}}>
            <LogoContainer style={{marginTop:"2px"}}>
                <SvgIcon
                  src="logonew.png"
                  aria-label="homepage"
                  width="130px"
                  height="130px"
                />
              </LogoContainer>
            </Col>
            <Col lg={10} md={10} sm={24} xs={24} style={{alignItems:"center"}}>
              <Language style={{ color: "#fcb001" }}>{t("Address")}</Language>
              <Para>3-25 Gandi Bazar, Karamchedu</Para>
              <Para>Prakasam Dt. 523168</Para>
              <Para>Andhra Pradesh</Para>
              <Para>Email: <a href="mailto:support@ladduu.com" style={{color: "#442e70", fontWeight:"normal", fontFamily:"sans-serif"}}>support@ladduu.com</a></Para>
              <Para>Phone: <a href="tel:9490780799" style={{color: "#442e70", fontWeight:"normal", fontFamily:"sans-serif"}}>+91-9490780799</a></Para>
            </Col>
            <Col lg={6} md={6} sm={24} xs={24} style={{alignItems:"center"}}>
              <Title style={{ color: "#fcb001" }}>{t("Policy")}</Title>
              <a href="/privacy" style={{color: "#442e70", fontWeight:"normal"}}>
                {t("Privacy")}
              </a><br/>
              <a href="/terms" style={{color: "#442e70"}}>
                {t("Terms and Conditions")}
              </a><br/><br/>
              {/* <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="uk.png"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="India.png"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer> */}
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <br/>
          <p style={{textAlign:"center", fontSize:"15px"}}>Copyright &#169; 2021 Ladduu</p>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
