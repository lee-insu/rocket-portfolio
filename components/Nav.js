import style from "../styles/Nav.module.css";
import { Col, Row } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBookOpen,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
const Nav = () => {
  const router = useRouter();

  return (
    <nav className={style.nav}>
      <Row gutter={[0, 0]} type="flex" className={style.container}>
        <Col xs={8} sm={8} md={8} lg={24} xl={24} className={style.project}>
          <Link href="/">
            <a style={{ display: "flex" }}>
              <FontAwesomeIcon
                icon={faCode}
                className={router.pathname == "/" ? style.active : "null"}
              />
              <div
                className={classnames(
                  style.sub,
                  router.pathname == "/" ? style.active : "null"
                )}
              >
                Project
              </div>
            </a>
          </Link>
          <div className={style.tooltip}>Project</div>
        </Col>
        <Col xs={8} sm={8} md={8} lg={24} xl={24} className={style.stacks}>
          <Link href="/stacks">
            <a style={{ display: "flex" }}>
              <FontAwesomeIcon
                icon={faBookOpen}
                className={router.pathname == "/stacks" ? style.active : "null"}
              />
              <div
                className={classnames(
                  style.sub,
                  router.pathname == "/stacks" ? style.active : "null"
                )}
              >
                Stacks
              </div>
            </a>
          </Link>
          <div className={style.tooltip}>Stacks</div>
        </Col>
        <Col xs={8} sm={8} md={8} lg={24} xl={24} className={style.activity}>
          <Link href="/activity">
            <a style={{ display: "flex" }}>
              <FontAwesomeIcon
                icon={faUserCircle}
                className={
                  router.pathname == "/activity" ? style.active : "null"
                }
              />
              <div
                className={classnames(
                  style.sub,
                  router.pathname == "/activity" ? style.active : "null"
                )}
              >
                Activity
              </div>
            </a>
          </Link>
          <div className={style.tooltip}>Activity</div>
        </Col>
      </Row>
    </nav>
  );
};

export default Nav;
