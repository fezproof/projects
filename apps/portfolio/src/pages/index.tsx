import React, { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";
import Protaginist from "../components/Characters/Protaginist";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const ProgPosition = styled(motion.div)`
  position: fixed;
  transform-origin: top left;
`;

const protaginistVariants: Variants = {
  hidden: {
    scale: 1,
    bottom: "100%",
    left: "0%",
    transition: {
      ease: "anticipate",
    },
  },
  visible: {
    scale: 1,
    bottom: "0%",
    left: "0%",
  },
  attack: {
    scale: [1, 1, 0.8, 1],
    left: [null, "40%", "50%", "50%"],
    bottom: [null, "0%", "45%", "45%"],
    filter: ["blur(0px)", "blur(0px)", "blur(8px)", "blur(0px)"],
    transition: {
      ease: ["easeInOut", "anticipate", "linear"],
      duration: 2,
      times: [0, 0.2, 0.4, 1],
    },
  },
};

const Index: FC = () => {
  return (
    <BasicLayout
      title="Home"
      description="Ben Chidlow is an aspiring full stack developer based in Perth Western Australia"
    >
      <Protaginist />
      <motion.h1 exit={{ opacity: 0 }}>This is a page</motion.h1>
    </BasicLayout>
  );
};

export default Index;
