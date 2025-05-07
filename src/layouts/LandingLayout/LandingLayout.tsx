import React from "react";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <header style={styles.header}>
        <h1 style={styles.logo}>FITPULL</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};

const styles = {
  header: {
    position: "fixed" as const,
    top: 0,
    left: 0,
    width: "100%",
    height: "60px",
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(8px)",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    padding: "0 20px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  logo: {
    fontSize: "20px",
    fontWeight: 600,
    color: "#333",
  },
};

export default LandingLayout;
