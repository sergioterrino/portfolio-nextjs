"use client"

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { motion, AnimatePresence } from "framer-motion"

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          variants={transitionVariantsPage} //por si quiero una transicion de la página
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="fixed top-0 bottom-0 right-full w-screen z-30 bg-[#2e2257]"
        ></motion.div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionPage;