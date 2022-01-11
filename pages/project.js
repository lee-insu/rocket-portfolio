import Head from "next/head";
import Image from "next/image";
import { Col, Row, Divider, Modal } from "antd";
import "antd/dist/antd.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from "swiper";
import style from "../styles/Project.module.css";
import "swiper/css";
import "swiper/css/effect-cards";
import { motion } from "framer-motion";
import { useState } from "react";
import { contents } from "../service/data";

SwiperCore.use([EffectCards]);

export default function Home() {
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
        <div className={style.modal_content}>
          <p>사용한 기술 / 툴: {article.stack}</p>

          <p>{article.content}</p>
          <p>{article.sub}</p>
          <div>관련 링크</div>
          <ul>
            {article.links
              ? article.links.map((link, i) => (
                  <li key={i}>
                    <a href={link.a}>{link.head}</a>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </Modal>
      <Row gutter={[0, 12]}>
        <Col xs={0} sm={0} md={0} lg={24} xl={24}>
          <Divider
            orientation="left"
            style={{
              fontFamily: "pretendard",
              fontSize: "25px",
              fontWeight: 100,
              color: "#fff",
            }}
          >
            PROJECT
          </Divider>
        </Col>
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 1, y: -5 }}
          exit={{ opacity: 1, y: 20 }}
          transition={{ duration: 1 }}
        >
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Swiper effect={"cards"} grabCursor={true} className="mySwiper">
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>헤이앱 - 디자인 UIUX 분석 사이트</div>
                    <div>2021.09.03 ~ 2021.11.02</div>
                    <div>React.js, Firebase, Redux, Figma</div>
                  </div>
                  <img
                    name="1"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/1.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>코인앵무새 - 크립토 랜덤 게임과 커뮤니티</div>
                    <div>2021.07.20 ~ 2021.09.01</div>
                    <div>React.js, Firebase, Redux</div>
                  </div>
                  <img
                    name="3"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/3.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>OHCO!- 날씨에 따라 코디를 추천해주는 서비스</div>
                    <div>2021.05.16 ~ 2021.06.13</div>
                    <div>React.js, Firebase</div>
                  </div>

                  <img
                    name="2"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/2.png"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={style.back}>
                  <div className={style.script}>
                    <div>오늘의 기분 - 표정을 통해 감정을 알려주는 사이트</div>
                    <div>2021.02.18 ~ 2021.03.11</div>
                    <div>JavaScript, Flask, MySQL, EC2</div>
                  </div>
                  <img
                    name="4"
                    onClick={(e) => showModal(e)}
                    className={style.img}
                    src="/images/4.png"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </motion.div>
      </Row>
    </div>
  );
}
