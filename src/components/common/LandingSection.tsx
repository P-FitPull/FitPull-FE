import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";

interface LandingSectionProps {
  children: React.ReactNode;
  bg?: string;
  subtitle?: string;
  isGrid?: boolean;
}

const SectionContainer = styled(motion.div)`
  min-height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const SectionContent = styled.div<{ isGrid?: boolean }>`
  max-width: ${(props) => (props.isGrid ? "1000px" : "800px")};
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
  z-index: 1;
  padding: 0 24px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 960px;
  margin: 3rem auto 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1rem;
    margin-top: 2rem;
    max-width: 400px;
  }
`;

const Title = styled.h2`
  font-size: min(4rem, 5vw);
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  white-space: nowrap;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    font-size: min(2.5rem, 6vw);
    padding: 0 10px;
  }
`;

const Subtitle = styled.p`
  font-size: clamp(1.125rem, 2vw, 1.5rem);
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
  line-height: 1.6;
  width: 100%;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 1.5vw, 1.25rem);
  }
`;

const BackgroundGradient = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.bg};
  z-index: -1;
`;

const LandingSection = ({
  children,
  bg = "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
  subtitle,
  isGrid = false,
}: LandingSectionProps) => {
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
    <SectionContainer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <BackgroundGradient bg={bg} />
      <SectionContent isGrid={isGrid}>
        <Title>{typeof children === "string" ? children : null}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {isGrid && <GridContainer>{children}</GridContainer>}
      </SectionContent>
    </SectionContainer>
  );
};

export default LandingSection;
