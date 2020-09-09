import React, { useState } from "react";
import { FC } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { motion, AnimatePresence, Variants } from "framer-motion";
import MotionImage from "../components/MotionImage";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import Protaginist from "../components/Characters/Protaginist";

const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "inspo" } }) {
      edges {
        node {
          absolutePath
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

const mainVariants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
  },
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
};

const imageVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Container = styled(motion.main)`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  /* This is better for small screens, once min() is better supported */
  /* grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr)); */
  grid-gap: 1rem;
  /* This is the standardized property now, but has slightly less support */
  /* gap: 1rem */
  /* grid-auto-flow: column; */
  justify-items: center;
`;

const ProgPosition = styled(motion.div)`
  position: fixed;
  transform-origin: top left;
`;

const protaginistVariants: Variants = {
  enter: {
    scale: 1,
    left: "50%",
    bottom: "45%",
  },
  visible: {
    scale: [null, 1.5, 1],
    left: [null, "40%", "20%"],
    bottom: [null, "45%", "20%"],
    transition: {
      ease: ["easeInOut", "linear"],
      duration: 0.5,
      times: [0, 0.3, 1],
    },
  },
  retreat: {
    scale: 1,
    left: "0%",
    bottom: "100%",
    transition: {
      ease: "anticipate",
    },
  },
};

const Inspo: FC = () => {
  const data = useStaticQuery(query);

  return (
    <BasicLayout
      title="Inspo"
      description="Inspiration collage for my portfolio design"
    >
      <Container
        variants={mainVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {data.allFile.edges.map(({ node }) => (
          <MotionImage
            key={node.absolutePath}
            fixed={node.childImageSharp.fixed}
            variants={imageVariants}
          />
        ))}
      </Container>
      <ProgPosition
        variants={protaginistVariants}
        initial="enter"
        animate="visible"
        exit="retreat"
      >
        <Protaginist />
      </ProgPosition>
    </BasicLayout>
  );
};

export default Inspo;
