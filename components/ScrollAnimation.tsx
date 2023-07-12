import { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ContentProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  animateFrom: object;
  animateTo: object;
  delay: number;
}

export default function ScrollAnimation({
  children,
  width = "fit-content",
  animateFrom,
  animateTo,
  delay,
}: ContentProps) {
  const mainControls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} className={`${width} relative`}>
      {/* overflow-hidden */}
      <motion.div
        variants={{
          hidden: { opacity: 0, ...animateFrom },
          visible: { opacity: 1, ...animateTo },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          type: "spring",
          stiffness: 100,
          duration: 1,
          delay: delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
