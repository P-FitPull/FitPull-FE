import LandingLayout from "../layouts/LandingLayout/LandingLayout";
import LandingSection from "../components/common/LandingSection";
import FeatureCard from "../components/common/FeatureCard";

const MainLandingPage = () => {
  return (
    <LandingLayout>
      <LandingSection
        bg="linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)"
        subtitle="운동 장비 대여/판매 플랫폼"
      >
        ⭐️ FitPull에 오신 걸 환영합니다!
      </LandingSection>

      <LandingSection
        bg="linear-gradient(135deg, #444 0%, #666 100%)"
        subtitle="FitPull의 주요 기능을 소개합니다"
        isGrid
      >
        <FeatureCard
          icon="🏋️‍♂️"
          title="장비,인력,재능 필요한 모든것을 대여"
          description="필요한 기간만큼 합리적인 가격으로 장비를 대여하세요"
        />
        <FeatureCard
          icon="💰"
          title="중고 장비 거래"
          description="더 이상 사용하지 않는 장비를 판매하거나 구매하세요"
        />
        <FeatureCard
          icon="🔍"
          title="스마트 검색"
          description="원하는 것을 쉽고 빠르게 찾아보세요"
        />
        <FeatureCard
          icon="💬"
          title="실시간 채팅"
          description="판매자와 직접 대화하며 거래를 진행하세요"
        />
      </LandingSection>

      <LandingSection
        bg="linear-gradient(135deg, #666 0%, #888 100%)"
        subtitle="지금 바로 FitPull과 함께 시작하세요"
      >
        🚀 지금 시작해보세요!
      </LandingSection>
    </LandingLayout>
  );
};

export default MainLandingPage;
