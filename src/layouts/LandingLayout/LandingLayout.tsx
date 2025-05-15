import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Main = styled.main`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  scroll-behavior: smooth;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const HeaderContent = styled.header`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0 auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 12px;
  margin-left: auto;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

interface NavButtonProps {
  $isHovered: boolean;
}

const NavButton = styled.button<NavButtonProps>`
  padding: 8px 20px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.$isHovered ? "#555" : "#333")};
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isSignupHovered, setIsSignupHovered] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <Logo>FITPULL</Logo>
          <Nav>
            <NavButton
              $isHovered={isLoginHovered}
              onMouseEnter={() => setIsLoginHovered(true)}
              onMouseLeave={() => setIsLoginHovered(false)}
            >
              로그인
            </NavButton>
            <NavButton
              $isHovered={isSignupHovered}
              onMouseEnter={() => setIsSignupHovered(true)}
              onMouseLeave={() => setIsSignupHovered(false)}
            >
              회원가입
            </NavButton>
          </Nav>
        </HeaderContent>
      </HeaderContainer>
      <Main>{children}</Main>
    </Container>
  );
};

export default LandingLayout;
