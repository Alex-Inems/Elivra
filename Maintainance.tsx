// components/Maintainance.tsx
import React from "react";

export default function Maintainance() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f7f7f7",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#b00020" }}>
  Temporarily Unavailable
</h1>
<p style={{ fontSize: "1.1rem", color: "#555" }}>
  This site has been temporarily disabled while we review recent activities.
</p>
<p style={{ fontSize: "0.95rem", color: "#777", marginTop: "15px" }}>
  Please check back later. We appreciate your understanding and patience.
</p>


    </div>
  );
}
