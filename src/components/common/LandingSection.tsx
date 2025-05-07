import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

interface LandingSectionProps {
  children: React.ReactNode;
  bg?: string;
}

const LandingSection = ({ children, bg = "#111" }: LandingSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      style={{
        height: "100vh",
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "2rem",
        fontWeight: 600,
        padding: "0 20px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default LandingSection;
