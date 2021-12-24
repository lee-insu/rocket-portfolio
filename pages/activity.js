import { Col, Divider, Row, List, Card } from "antd";
import Head from "next/head";
import style from "../styles/Activity.module.css";
import "antd/dist/antd.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { motion } from "framer-motion";
import { activity } from "../service/data";

const Activity = () => {
  const data = activity;
  return (
    <div className={style.container}>
      <Head>
        <title>로켓 성장 이인수 : 활동</title>
      </Head>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -5 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1 }}
      >
        <Row>
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
              ACTIVITY
            </Divider>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <InfiniteScroll
              className={style.scroll}
              dataLength={data.length}
              height={700}
            >
              <List
                grid={{ column: 1 }}
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Card
                      bordered={false}
                      style={{
                        width: "auto",
                        backgroundColor: "rgba(6, 1, 8, 0.5)",
                        color: "#fff",
                        borderRadius: "10px",
                      }}
                    >
                      <div className={style.title}>{item.title}</div>
                      <div className={style.during}>
                        작업(운영) 기간: {item.during}
                      </div>
                      {item.stacks ? (
                        <div className={style.stacks}>
                          사용한 기술: {item.stacks}
                        </div>
                      ) : null}
                      <br />
                      <p className={style.des}>{item.des}</p>
                      {item.links ? (
                        <p className={style.related}>
                          <div className={style.link_title}>관련 링크</div>
                          <ul className={style.link_ul}>
                            {item.links.map((link, i) => (
                              <li className={style.link_li} key={i}>
                                <a href={link.a}>{link.head}</a>
                              </li>
                            ))}
                          </ul>
                        </p>
                      ) : null}
                    </Card>
                  </List.Item>
                )}
              />
            </InfiniteScroll>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Activity;
