import React, { FC } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  initial: {},
  enter: {},
  exit: {},
};

interface PagetransitionLayoutProps {
  location: Location;
}

const PagetransitionLayout: FC<PagetransitionLayoutProps> = ({
  children,
  location,
}) => {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PagetransitionLayout;
