import React from "react";
import { FC } from "react";
import styled from "styled-components";

import Prog from "../../images/Protaginist.svg";
import { motion, Variants } from "framer-motion";

const PersonContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: -1;
`;

const Sandbox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5rem;
`;

const Transform = styled(motion.div)`
  position: absolute;
  height: 10rem;
  width: 10rem;
  border: 1px solid red;

  bottom: 0;
  left: 0;
`;

const protaginistVariants: Variants = {
  enter: {
    marginBottom: "-5rem",
    marginLeft: "-5rem",
    scale: 0.8,
    left: "50%",
    bottom: "50%",
  },
  visible: {
    marginBottom: "0rem",
    marginLeft: "0rem",
    scale: 1,
    left: "0%",
    bottom: "0%",
  },
  attack: {
    marginBottom: ["0rem", "0rem", "-5rem", "-5rem"],
    marginLeft: ["0rem", "-5rem", "-5rem", "-5rem"],
    scale: [1, 1.4, 0.6, 0.8],
    left: [null, "50%", "50%", "50%"],
    bottom: [null, "0%", "50%", "50%"],
    filter: ["blur(0px)", "blur(0px)", "blur(8px)", "blur(0px)"],
    transition: {
      ease: ["easeInOut", "anticipate", "linear"],
      duration: 2,
      times: [0, 0.2, 0.4, 1],
    },
  },
};

const Protaginist: FC = () => {
  return (
    <PersonContainer>
      <Sandbox>
        <Transform
          variants={protaginistVariants}
          initial="enter"
          animate="visible"
          exit="attack"
        >
          <Prog />
        </Transform>
      </Sandbox>
    </PersonContainer>
  );
};

export default Protaginist;
