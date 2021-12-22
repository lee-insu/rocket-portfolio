import { Col, Divider, Row, List, Card } from "antd";
import Head from "next/head";
import style from "../styles/Activity.module.css";
import "antd/dist/antd.css";
import InfiniteScroll from "react-infinite-scroll-component";

const Activity = () => {
  const data = [
    {
      title: "Ant Design Title 1",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "tigsadmalksdksaldjksaljdsadjklasdjskldjkalsdjkladalkdlkadjsak",
    },
    {
      title: "Ant Design Title 2",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 3",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 4",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 4",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 4",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 4",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
    {
      title: "Ant Design Title 4",
      during: "2020~ 2020",
      stacks: "react,react,react,react",
      des: "ff",
    },
  ];
  return (
    <div className={style.container}>
      <Head>
        <title>로켓 성장 이인수 : 활동</title>
      </Head>
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
                    <div className={style.stacks}>
                      사용한 기술: {item.stacks}
                    </div>
                    <br />
                    <p className={style.des}>{item.des}</p>
                  </Card>
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </Col>
      </Row>
    </div>
  );
};

export default Activity;
