import styled from "styled-components";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  width: 100%;
  min-height: 220px;
  justify-content: center;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  position: relative;
  isolation: isolate;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1px;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.15),
      rgba(255, 255, 255, 0.05)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 1024px) {
    padding: 1.75rem 1rem;
    min-height: 200px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem 0.875rem;
    min-height: 180px;
  }
`;

const Icon = styled.div`
  font-size: 2.75rem;
  margin-bottom: 1.25rem;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    height: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
    margin-bottom: 0.875rem;
    height: 2.25rem;
  }
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  max-width: 220px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    line-height: 1.4;
    max-width: 200px;
  }
`;

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;
