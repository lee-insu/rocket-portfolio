import { Col, Row, Avatar, Image } from "antd";
import "antd/dist/antd.css";
import style from "../styles/Introduce.module.css";
import classnames from "classnames";

const Introduce = () => {
  return (
    <div className={style.container}>
      <Row gutter={{ xs: 8, sm: 8, md: 8, xl: 8 }} className={style.row}>
        <Col xl={3} md={3} lg={6} xl={6} xxl={8} className={style.title_img}>
          <Avatar
            src="/images/merocket.png"
            style={{
              backgroundColor: "#fff",
            }}
            size={{
              xs: 64,
              sm: 64,
              md: 72,
              lg: 94,
              xl: 94,
              xxl: 120,
            }}
          />
        </Col>
        <Col sm={12} md={12} lg={18} xl={18} xxl={16}>
          <Col xl={24} xxl={24} className={style.title}>
            안녕하세요
          </Col>
          <Col lg={24} xl={24} xxl={24} className={style.sub_title}>
            로켓 성장 PM 이인수입니다
          </Col>
        </Col>
        <Col
          xs={0}
          sm={0}
          md={24}
          lg={24}
          xl={24}
          xxl={24}
          className={style.text}
        >
          <p>
            우리의 사용자를 이해하고, 사용자가 원하는
            <br /> 서비스를 만들기 위해 사용자를 인터뷰하고
            <br /> 데이터를 사용해 서비스의 문제점을
            <br /> 도출, 해결 방안을 제시했습니다.
            <br />
            문제점을 토대로 `오늘학교` 서비스에서 <br />
            타이머,숙제 공유 기능을
            <br />
            개발 경험을 토대로 기획했고
            <br /> 프로젝트를 팀원들과 <br />
            진행 상황 공유, R&R, 우선순위를 명확히 해<br />
            진행한 경험이 있습니다.
          </p>
        </Col>
      </Row>
      <Row xl={24} className={style.link} type="flex">
        <Col className={classnames(style.circle, style.color1)}>
          <a href="https://github.com/lee-insu">깃허브</a>
        </Col>

        <Col className={classnames(style.circle, style.color1)} offset={2}>
          <a href="https://drive.google.com/file/d/1rO1xwRvTD52xB0BAnCAXmcxz1qN5EWis/view?usp=sharing">
            포트폴리오
          </a>
        </Col>
        <Col className={classnames(style.circle, style.color1)} offset={2}>
          <a href="https://drive.google.com/file/d/1av_fTb9aeeHtnUHfeVgeeBWgUiamSCK1/view?usp=share_link">
            이력서
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Introduce;
