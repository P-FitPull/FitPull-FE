import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import LandingSection from "../components/common/LandingSection";

const MainLandingPage = () => {
  return (
    <LandingLayout>
      <LandingSection bg="#1e1e1e">
        ⭐️ FitPull에 오신 걸 환영합니다!
      </LandingSection>
      <LandingSection bg="#555">
        💻 판매/대여 할 상품을 등록/검색 해보세요!
      </LandingSection>
      <LandingSection bg="#777">🚀 지금 시작해보세요!</LandingSection>
    </LandingLayout>
  );
};

export default MainLandingPage;
