import React from "react";
import Img, { FixedObject, FluidObject } from "gatsby-image";
import { FC } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import styled from "styled-components";

interface MotionImageProps extends HTMLMotionProps<"div"> {
  fixed?: FixedObject | FixedObject[];
  fluid?: FluidObject | FluidObject[];
}

const MotionImage: FC<MotionImageProps> = ({ fixed, fluid, ...rest }) => {
  return (
    <motion.div {...rest}>
      <Img fixed={fixed} fluid={fluid} />
    </motion.div>
  );
};

export default MotionImage;
