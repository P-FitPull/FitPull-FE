import React from "react";
import AppRouter from "./routes/AppRouter"; // 만든 라우터 불러오기
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
}

export default App;
