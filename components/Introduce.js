import { Col, Row, Avatar, Image } from "antd";
import "antd/dist/antd.css";
import style from "../styles/Introduce.module.css";

const Introduce = () => {
  return (
    <div className={style.container}>
      <Row gutter={[8, 0]} className={style.row}>
        <Col xl={8}>
          <Avatar
            src={<Image src="https://joeschmoe.io/api/v1/random" />}
            style={{
              backgroundColor: "#ffffff",
            }}
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 64,
              xl: 94,
              xxl: 120,
            }}
          />
        </Col>
        <Col>
          <Col xl={32} className={style.hello}>
            안녕하세요
          </Col>
          <Col xl={32} className={style.sub_title}>
            로켓 성장 FE 이인수입니다
          </Col>
        </Col>
        <Col xl={24} className={style.text}>
          <p>
            로켓은 추진력을 받아 중력을 <br /> 이겨내고 우주까지 날아갑니다.
            <br />
            <br />
            노력과 끈기로 로켓 발사 준비를
            <br /> 하고 발사 했을 땐 잠재력을
            <br /> 폭발적으로 보여줄 수 있는 <br /> 성장 과정을 거치고 있습니다.
            <br />
            <br /> 그만큼 성장하기 위해 끝없는 노력과
            <br /> 새로운 것에 대한 배움으로 <br />
            익힌 것은 더 깊게, <br />
            새로운 것은 폭 넓게,
            <br /> 개발의 시야를 넓히고 더 성장하는
            <br /> 프로트엔드 개발자 이인수입니다.
          </p>
        </Col>
        <Row className={style.au} type="flex">
          <Col>a</Col>
          <Col offset={4}>b</Col>
          <Col offset={4}>c</Col>
        </Row>
      </Row>
    </div>
  );
};

export default Introduce;
