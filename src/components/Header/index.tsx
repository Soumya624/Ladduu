import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import i18n from "i18next";
import Select from 'react-select';
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer
} from "./styles";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const options = [
  { value: 'EN', label: <div > <SvgIcon
  src="uk.png"
  aria-label="homepage"
  width="30px"
  height="30px"
/></div> },
  { value: 'TEL', label: <div> <SvgIcon
  src="India.png"
  aria-label="homepage"
  width="30px"
  height="30px"
/></div> }
]

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={(e) => {e.preventDefault(); window.location.href='/about';}}>
          <Span >{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={(e) => {e.preventDefault(); 
          if(window.location.pathname==='/')
          {
            scrollTo("about");
          }
          else
          {
            window.location.href='/';
          }}}>
          <Span>{t("Services")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={(e) => {e.preventDefault(); window.location.href='/team';}}>
          <Span>{t("Team")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Login")}</Button>
          </Span>
        </CustomNavLinkSmall>

        <CustomNavLinkSmall style={{color:"white"}}>
          Language
        <Select options={options}   defaultValue={options[0]} />
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage" style={{marginTop:"2.2%"}}>
            <SvgIcon src="logonew1.png" width="170px" height="60px"/>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
