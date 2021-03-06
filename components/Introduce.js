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
            로켓은 추진력을 받아 중력을 <br /> 이겨내고 우주까지 날아갑니다.
            <br />
            <br />
            노력과 끈기로 로켓 발사 준비를
            <br /> 하고 발사 했을 땐 잠재력을
            <br /> 폭발적으로 보여줄 수 있는 <br /> 성장 과정을 거치고 있습니다.
            <br />
            <br /> 사용자 관점에서 가설을 세운 기획을 바탕으로
            <br /> 시각디자인을 전공해 UIUX를 설계하고 <br />
            직접 개발해 프로덕트를 만들었습니다. <br />
            배움은 폭 넓고 깊게
            <br /> 시야의 폭을 넓히고 더 성장하는
            <br /> 프로덕트 매니저 이인수입니다.
          </p>
        </Col>
      </Row>
      <Row xl={24} className={style.link} type="flex">
        <Col className={classnames(style.circle, style.color1)}>
          <a href="https://github.com/lee-insu">깃허브</a>
        </Col>

        <Col className={classnames(style.circle, style.color1)} offset={2}>
          <a href="https://velog.io/@lamda">블로그</a>
        </Col>
        <Col className={classnames(style.circle, style.color1)} offset={2}>
          <a href="https://drive.google.com/file/d/1SmfARWAu_siWOJ9ZoyA4UT54vI04DnNw/view">
            이력서
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Introduce;
