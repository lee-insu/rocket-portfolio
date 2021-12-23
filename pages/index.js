import React, { useEffect, useState } from "react";
import Head from "next/head";
import style from "../styles/Stacks.module.css";
import { Col, Divider, Row, List, Card, Modal } from "antd";
import "antd/dist/antd.css";
import { motion } from "framer-motion";
import { stacks } from "../service/data";

const Stacks = () => {
  const data = stacks;
  const useWindowSize = () => {
    const isClient = typeof window === "object";

    const getSize = () => {
      return { width: isClient ? window.innerWidth : undefined };
    };

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }
      const handleResize = () => {
        setWindowSize(getSize());
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  };
  const size = useWindowSize();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [article, getArticle] = useState([]);
  const showModal = (e) => {
    const name = e.target.name;
    setIsModalVisible(true);
    data.map((data) => {
      if (data.title == name) {
        getArticle(data);
      }
    });
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={style.container}>
      <Head>
        <title>로켓 성장 이인수 : 기술</title>
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
        <p className={style.article}>{article.article}</p>
        {article.links ? (
          <div className={style.blog}>관련 블로그 글</div>
        ) : null}
        <ul className={style.link_ul}>
          {article.links
            ? article.links.map((link, i) => (
                <li className={style.link} key={i}>
                  <a href={link.link}>{link.head}</a>
                </li>
              ))
            : null}
        </ul>
      </Modal>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -5 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <Row className={style.row}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider
              className={style.divi_intro}
              orientation="left"
              style={{
                fontFamily: "protendard",
                fontSize: "25px",
                fontWeight: 300,
                color: "#fff",
              }}
            >
              INTRODUCE
            </Divider>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={18} className={style.text}>
            저는 FrontEnd 직군에서 일하는 것을 희망하고 있습니다. <br />
            아래의 기술들은 제가 상상했던 프로젝트를 <br />
            작업하기 위해 배운 기술입니다.
            <br /> 익힌 기술은 더 깊이 있게 이해하려고 노력하고,
            <br /> 최신 기술 트렌드를 자주 찾아보면서 다음 프로젝트에
            <br />
            도움이 될 기술과 코딩 방식을 계속해서 배워나가고 있습니다.
            <br />
            아래는 제가 활용하는 기술, 서비스이며 클릭 시 경험을 읽을 수
            있습니다.
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Divider
              plain
              orientation="left"
              style={{
                fontFamily: "protendard",
                fontSize: "25px",
                fontWeight: 300,
                color: "#fff",
              }}
            >
              STACKS
            </Divider>
          </Col>
          <Col className={style.stack} xs={24} sm={24} md={24} lg={24} xl={18}>
            <List
              grid={{ gutter: [20, 20], column: size.width <= 658 ? 2 : 4 }}
              dataSource={data}
              renderItem={(item) => (
                <List.Item>
                  <Card
                    onClick={(e) => {
                      showModal(e);
                    }}
                    className={style.stacks}
                    style={{
                      width: 130,
                      height: 130,
                      overflow: "hidden",
                      border: "0px ",
                    }}
                    bodyStyle={{ display: "none" }}
                    cover={
                      <img name={item.title} alt={item.title} src={item.img} />
                    }
                  ></Card>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Stacks;
