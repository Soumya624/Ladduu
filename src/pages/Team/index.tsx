import { useState } from "react";
import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Row, Col } from "antd";
import { Card, CardHeader, CardBody, CardFooter } from "react-simple-card";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Team = () => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const onOpenModal1 = () => setOpen1(true);
  const onCloseModal1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const onOpenModal2 = () => setOpen2(true);
  const onCloseModal2 = () => setOpen2(false);

  const [open3, setOpen3] = useState(false);
  const onOpenModal3 = () => setOpen3(true);
  const onCloseModal3 = () => setOpen3(false);

  const [open4, setOpen4] = useState(false);
  const onOpenModal4 = () => setOpen4(true);
  const onCloseModal4 = () => setOpen4(false);

  const [open5, setOpen5] = useState(false);
  const onOpenModal5 = () => setOpen5(true);
  const onCloseModal5 = () => setOpen5(false);
  return (
    <Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row justify="space-between" align="middle">
        <Col lg={11} md={11} sm={12} xs={24}>
          <SvgIcon src="Team.png" width="100%" height="100%" />
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <p style={{ textTransform: "capitalize" }}>
            <br />
            We are a bunch of free spirited professionals inspired by the untapped potential of rural markets and committed to empowering the underrepresented through our common love and belief in technology.
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
                <img src="y1.jpg" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal}>Know More</Button>
                <Modal open={open} onClose={onCloseModal} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      With a Masters in Economics, and a Bachelors with a double
                      major in Economics & Finance from Miami University, Radha
                      began her career as a Junior Economist at IMPLAN. Later,
                      she served in a leadership position for over 3 years
                      growing their SaaS business, and has a rare record of
                      becoming the youngest person to serve in a Directorial
                      position in the company's 40-year history. She also
                      provides consulting for B2B SaaS companies in renewal
                      strategy and global delivery.
                      <br />
                      <br />
                      Staying true to her ambition of empowering Indian rural
                      dwellers, she returned to India and founded Ladduu.
                      Through this, she’s determined to realize her life purpose
                      of impacting at scale and providing an opportunity to the
                      underrepresented. Indian Achievers Forum (IAF) has
                      recognised her as the Young Entrepreneur of the year for
                      2020-2021. Radha is an avid reader, enjoys gardening and
                      designing spaces in her spare time.
                    </p>
                    <a href="https://www.linkedin.com/in/radhajagarlamudi/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
                <img src="y2.jpg" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal1}>Know More</Button>
                <Modal open={open1} onClose={onCloseModal1} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      Sourya Kakarla is a Research Scholar in the Crypto
                      Research Lab, Computer Science Department at IIT
                      Kharagpur, where he has completed his B.Tech and M.Tech
                      studies as well. He has worked at Microsoft for around 2.5
                      years as a Software Development Engineer. His main area of
                      research is Cryptography. He is a co-author of 5 research
                      paper publications even prior to his pursual of doctoral
                      studies. He is a proven hacker, winning multiple
                      college/national level hackathons conducted by Microsoft,
                      IBM, Flipkart etc.
                      <br />
                      <br />
                      Playing football, reading, and writing poems/songs are
                      some of his favourite pastimes. He is passionate about
                      working on projects which seek to alleviate the pain of
                      scanty access to resources in under-developed sections of
                      society.
                    </p>
                    <a href="https://www.linkedin.com/in/sourya-kakarla-8b716197/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
                <img src="y3.png" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal2}>Know More</Button>
                <Modal open={open2} onClose={onCloseModal2} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      Gautam Karajgi has over 18 years of consulting,
                      entrepreneurial management, rural development, operations
                      transformation, and management experience in the corporate
                      and social sector. He presently serves as an advisor on
                      impact and sustainability to ‘Innoterra’- a leading Agri
                      food tech company. Prior to his current role, Gautam has
                      served as a board member and Chief Operations Officer at
                      ‘Maharogi Sewa Samiti, Warora’- one of India’s oldest
                      Non-profit organization, working towards improving the
                      lives of people with leprosy, other disabilities, and
                      rural communities by transforming Anandwan into a ‘SMART
                      Village’.
                      <br />
                      <br />
                      Gautam is passionate about entrepreneurship and technology
                      and its innovative applications for the upliftment of the
                      marginalized communities in rural India. In his previous
                      stint as the Chief Executive Officer at MilkLane Dairy
                      Services he was instrumental in setting up and running a
                      ‘first mile’ milk procurement and supply platform across
                      several villages in southern India benefiting thousands of
                      dairy farmers through innovative, tech enabled and
                      sustainable dairy management practices. Prior to that as
                      India Country Head at Citrus International AG, he set up
                      India’s largest citrus fruit processing plant at Nanded,
                      Maharashtra, offering high-quality Indian citrus fruit
                      concentrate to leading international juice brands and
                      providing market access to more than 10’000 citrus
                      farmers. Earlier as a consultant in McKinsey and Company
                      India, Gautam served some of the leading industrial houses
                      in South Asia helping them to drive operational efficiency
                      and reduce carbon footprint. Gautam started his career as
                      Senior Engineer in Kirloskar Oil Engines and worked in the
                      shop floor and manufacturing engineering department before
                      being nominated as a core member in the dream project team
                      under the leadership of the Chairman and given the mandate
                      to design and setup state of the art engine manufacturing
                      plant in Kolhapur, Maharashtra.
                    </p>
                    <a href="https://www.linkedin.com/in/gautam-karajgi-110ab4148/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
                <img src="y4.png" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal3}>Know More</Button>
                <Modal open={open3} onClose={onCloseModal3} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      Srikanth Nidimusili is a seasoned professional with over
                      12 years of experience in architecting, developing and
                      managing software design in the field of Information
                      Technology. Graduated from Wayne State University, USA and
                      worked as a polyglot in various roles in private and
                      public sectors of judicial and mortgage domains with
                      financial background.
                      <br />
                      <br />
                      Learning something new in technology is what keeps him
                      engaged and motivated. Watching movies and finding
                      solutions for coding problems are his biggest stress
                      busters. Currently residing in Virginia, USA.
                    </p>
                    <a href="https://www.linkedin.com/in/srikanth-nidimusili-2550301b/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
                <img src="y5.png" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal4}>Know More</Button>
                <Modal open={open4} onClose={onCloseModal4} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      Dr Anjali Manoharan, medical doctor - budding
                      pediatrician, graduated from Pondicherry University and
                      post graduation from Royal College of Pediatrics and Child
                      health. She has 3+ years of clinical experience from
                      various leading hospitals around Chennai. She is known for
                      apt clinical skills and empathetic patient care.
                      <br />
                      <br />
                      She has participated in various national conferences and
                      was awarded best paper in oral presentation by prestigious
                      Lady Hardinge Medical college and Indian association of
                      Pediatrics research chapter in 2020 in Adolescent health
                      for social pediatrics. Her original research article was
                      published in IJP, May 2020. Anjali is a teaching volunteer
                      and active fundraiser for an NGO - Ed for all , an
                      initiative to teach underprivileged children in various
                      orphanages and homes in Pondicherry. She believes that she
                      can leverage her expertise to address the need of the hour
                      in the rural healthcare domain.
                    </p>
                    <a href="https://www.linkedin.com/in/anjali-manoharan-7060771b9/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
                <img src="y6.png" alt="" style={{borderRadius:"50%", width:"50%"}}/>
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
                <br />
                <br />
                <Button onClick={onOpenModal5}>Know More</Button>
                <Modal open={open5} onClose={onCloseModal5} center>
                  <div style={{ margin: "2%" }}>
                    <p
                      style={{ fontSize: "14px", textTransform: "capitalize" }}
                    >
                      Akhil Abraham Roy graduated in law in the year 2016 from
                      Amity University, Noida, enrolled with the Bar Council of
                      Delhi. He regularly appears and assists before Supreme
                      Court of India, Delhi High Court, National Consumer
                      Disputes Redressal Commission(NCDRC), National Company Law
                      Tribunal(NCLT), National Company Law Appellate
                      Authority(NCLAT),Competition Commission of India, National
                      Green Tribunal (NGT), various arbitral tribunals and
                      mediation and conciliation forums, arbitration councils
                      including the Delhi International Arbitration Centre(DIAC)
                      and Indian Council of Arbitration (ICA), State and
                      District Consumer Fora’s and various District Courts and
                      has extensively researched on various aspects of law.
                      <br />
                      <br />
                      His areas of practice include matters relating to
                      Companies Act, Securities laws, Arbitration, Indian
                      Contract Act, Environmental Laws, Civil Matters, Consumer
                      Laws, Service Matters, Complaints under Negotiable
                      Instruments Act etc. He enjoys to read, playing & watching
                      sports like football, badminton & cricket. He is part of
                      Samvidhan, a charitable organization.
                    </p>
                    <a href="https://www.linkedin.com/in/akhil-roy-9639b095/" target="_blank" rel="noreferrer"><img src="l1.png" alt="" style={{width:"25%", marginLeft:"37%"}}></img></a>
                  </div>
                </Modal>
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
