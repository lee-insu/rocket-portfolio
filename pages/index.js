import Head from "next/head";
import Image from "next/image";
import { Col, Row, Divider, Modal } from "antd";
import "antd/dist/antd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from "swiper";
import style from "../styles/Home.module.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { useState } from "react";

SwiperCore.use([EffectCards]);

export default function Home() {
  const contents = [
    {
      id: 1,
      title: "heyapp",
      content: "dsakdkkdakdsakdkdsas",
      image: "/images/ex2.png",
    },
    {
      id: 2,
      title: "howtofeel",
      content: "asdasdjaskldasdkal",
      image: "/images/ex2.png",
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [article, getArticle] = useState([]);

  const showModal = (e) => {
    const name = e.target.name;
    setIsModalVisible(true);
    contents.map((content) => {
      if (content.id == name) {
        getArticle(content);
      }
    });
  };

  console.log(article);
  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={style.container}>
      <Head>
        <title>로켓 성장 이인수 : 프로젝트</title>
      </Head>
      <Modal
        className={style.modal}
        title={article.title}
        visible={isModalVisible}
        onOk={handleOk}
        okText="닫기"
        cancelButtonProps={{ style: { display: "none" } }}
        bodyStyle={{
          backgroundColor: "#1a1325",
        }}
        okButtonProps={{
          style: {
            backgroundColor: "#642ab5",
            border: "0px solid #434343",
            boxShadow: "none",
            borderRadius: "5px",
            color: "#fff",
          },
        }}
        closable={false}
      >
        <p>{article.content}</p>
      </Modal>
      <Row gutter={[0, 12]}>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <Divider
            orientation="left"
            style={{
              fontFamily: "protendard",
              fontSize: "25px",
              fontWeight: 300,
              color: "#fff",
            }}
          >
            PROJECT
          </Divider>
        </Col>
        <motion.div
          animate={{ scale: [0.75, 1] }}
          transition={{ duration: 0.8 }}
        >
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Swiper effect={"cards"} grabCursor={true} className="mySwiper">
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>헤이앱 디자인 UIUX 분석 사이트</div>
                    <div>2021.08 ~ 2021.09</div>
                    <div>javascript,react,firebase,redux</div>
                  </div>
                  <img
                    name="1"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/ex2.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>헤이앱 디자인 UIUX 분석 사이트</div>
                    <div>2021.08 ~ 2021.09</div>
                    <div>javascript,react,firebase,redux</div>
                  </div>
                  <img
                    name="2"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/ex1.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
          </Col>
        </motion.div>
      </Row>
    </div>
  );
}
