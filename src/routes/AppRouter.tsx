import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLandingPage from "../pages/MainLandingPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Landing" element={<MainLandingPage />} />
        {/* 나중에 다른 페이지도 여기에 추가 하면될듯 */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
