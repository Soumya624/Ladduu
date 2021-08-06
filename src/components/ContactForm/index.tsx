import { Row, Col } from "antd";
import { useState } from "react";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import axios from 'axios';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    validate
  ) as any;

  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left">
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right">
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={(e) => {
                    setName(e.target.value);
                    console.log(e.target.value);
                    console.log(name);
                  }}
                  value={name}
                />
                {/* <ValidationType type="name" /> */}
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                    console.log(email);
                  }}
                  value={email}
                />
                {/* <ValidationType type="email" /> */}
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  name="Description"
                  type="text"
                  onChange={(e) => {
                    setText(e.target.value);
                    console.log(e.target.value);
                    console.log(text);
                  }}
                  value={text}
                />
                {/* <ValidationType type="message" /> */}
              </Col>
              <ButtonContainer>
                <Button name="submit" onClick={()=>{
                  // console.log(name);
                  // console.log(email);
                  // console.log(text);
                  // let formData= new FormData();
                  let formData= {
                    "name": name,
                    "email": email,
                    "message": text
                  }
                  // console.log(formData);
                  const url= "https://formsubmit.co/ajax/support@ladduu.com";
                  axios.post(url,formData)
                  .then(res=> console.log(res.data))
                  .catch(err=> console.log(err));  
                }}>{t("Submit")}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
