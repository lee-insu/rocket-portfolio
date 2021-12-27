import { Col, Row } from "antd";
import React from "react";
import Introduce from "./Introduce";
import Nav from "./Nav";
import style from "../styles/Layout.module.css";
import "antd/dist/antd.css";
import { motion } from "framer-motion";
import Image from "next/image";
import classnames from "classnames";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <Row gutter={[0, 0]} type="flex" className={style.row}>
      <Col xs={24} sm={24} md={24} lg={8} xl={8} className={style.introduce}>
        <Introduce />
      </Col>
      <Col xs={24} sm={24} md={24} lg={1} xl={1} className={style.nav}>
        <Nav />
      </Col>
      <Col xs={24} sm={24} md={24} lg={15} xl={15} className={style.page}>
        {children}
      </Col>
      <motion.div
        animate={{ opacity: 0.6, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 1 }}
        className={classnames(style.absolute, style.planet1)}
      >
        <Image
          src={"/images/planet1.svg"}
          alt="planet1"
          width={300}
          height={300}
        ></Image>
      </motion.div>
      <motion.div
        animate={{ opacity: 0.35, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 2 }}
        className={classnames(style.absolute, style.planet2)}
      >
        <Image
          src={"/images/planet2.svg"}
          alt="planet2"
          width={350}
          height={350}
        ></Image>
      </motion.div>

      <motion.div
        animate={{ opacity: 0.4, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 1 }}
        className={classnames(style.absolute, style.planet3)}
      >
        <Image
          src={"/images/planet3.svg"}
          alt="planet3"
          width={110}
          height={110}
        ></Image>
      </motion.div>

      <motion.div
        animate={{ opacity: 0.5, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.5 }}
        className={classnames(style.absolute, style.background2)}
      >
        <Image
          src={"/images/background2.svg"}
          alt="background2"
          width={1640}
          height={538}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: 0.2, x: 0, y: 0 }}
        initial={{ opacity: 0, x: -30, y: 50 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7 }}
        className={classnames(style.absolute, style.rocket)}
      >
        <Image
          src={"/images/rocket.svg"}
          alt="background2"
          width={120}
          height={130}
        />
      </motion.div>

      <motion.div
        animate={{ opacity: 0.7, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 1 }}
        className={classnames(style.absolute, style.background1)}
      >
        <Image
          src={"/images/background1.svg"}
          alt="background1"
          width={450}
          height={450}
          className={style.background1_turn}
        />
      </motion.div>
      <motion.div
        animate={{ opacity: 0.7, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        exit={{ opacity: 0, y: -60 }}
        transition={{ duration: 1 }}
        className={classnames(style.absolute, style.background1_copy)}
      >
        <Image
          src={"/images/background1.svg"}
          alt="background1"
          width={450}
          height={450}
          className={style.background1_turn_copy}
        />
      </motion.div>
    </Row>
  );
};

export default Layout;
