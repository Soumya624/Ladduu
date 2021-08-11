import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  ServiceWrapper,
  MinPara,
  MinTitle,
} from "./styles";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  section,
  section1,
  id,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6 style={{ color: "#fcb001" }}>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <div
                            style={{
                              display: item.icon === null ? "none" : "block",
                            }}
                          >
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                          </div>
                          <div
                            style={{
                              display: item.title === null ? "none" : "block",
                            }}
                          >
                            <MinTitle>{t(item.title)}</MinTitle>
                          </div>
                          <div
                            style={{
                              display: item.content === null ? "none" : "block",
                            }}
                          >
                            <MinPara>{t(item.content)}</MinPara>
                          </div>
                          <div
                            style={{
                              display: item.href === null ? "none" : "block",
                            }}
                          >
                            <MinPara>
                              <a href={t(item.href)}>Learn More</a>
                            </MinPara>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ServiceWrapper>
              <Row justify="space-between">
                  {typeof section1 === "object" &&
                    section1.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={24}>
                          <div
                            style={{
                              display: item.icon === null ? "none" : "block",
                            }}
                          >
                            <SvgIcon
                              src={item.icon}
                              width="60px"
                              height="60px"
                            />
                          </div>
                          <div
                            style={{
                              display: item.title === null ? "none" : "block",
                            }}
                          >
                            <MinTitle>{t(item.title)}</MinTitle>
                          </div>
                          <div
                            style={{
                              display: item.content === null ? "block" : "block",
                            }}
                          >
                            <p>Presenting the first <b style={{fontWeight:"normal", color:"#fcb001"}}>Virtual Village</b> - <b style={{fontWeight:"normal", color:"#fcb001"}}>Data</b>, <b style={{fontWeight:"normal", color:"#fcb001"}}>Trade</b> and <b style={{fontWeight:"normal", color:"#fcb001"}}>Community</b> - all in one place!</p>
                          </div>
                          <div
                            style={{
                              display: item.href === null ? "none" : "block",
                            }}
                          >
                            <MinPara>
                              <a href={t(item.href)}>Learn More</a>
                            </MinPara>
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => {
                          if (item.url !== null) {
                            scrollTo("about");
                          } else {
                            scrollTo("contact");
                          }
                        }}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
