import React, { useRef } from "react";
import html2canvas from "html2canvas";

const CertificadoAnimal = ({ nombre = "Estudiante" }) => {
  const certificadoRef = useRef();

  const descargarImagen = () => {
    html2canvas(certificadoRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "certificado_animales.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div
        ref={certificadoRef}
        style={{
          width: "800px",
          margin: "0 auto",
          padding: "40px",
          backgroundColor: "#FFF8E1",
          border: "10px dashed #FF9800",
          borderRadius: "24px",
          fontFamily: "'Comic Sans MS', cursive",
          position: "relative",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#F57C00", marginBottom: "8px" }}>
          🏆 Certificado de Logro
        </h1>
        <p style={{ fontSize: "20px", color: "#5D4037" }}>
          Se otorga a:
        </p>
        <h2 style={{ fontSize: "28px", color: "#4CAF50", margin: "10px 0" }}>
          {nombre}
        </h2>
        <p style={{ fontSize: "18px", color: "#333", margin: "20px 0" }}>
          Por completar el módulo del <strong>Reino Animal</strong> con esfuerzo y dedicación. 🐶🐱🐸🐘🦁
        </p>
        <p style={{ fontSize: "16px", color: "#888" }}>
          Fecha: {new Date().toLocaleDateString()}
        </p>
        <img
          src="/assets/sello-kids.png"
          alt="Sello"
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            width: "100px",
          }}
        />
      </div>

      <button
        onClick={descargarImagen}
        style={{
          marginTop: "24px",
          padding: "12px 20px",
          fontSize: "16px",
          backgroundColor: "#FF9800",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          cursor: "pointer",
        }}
      >
        📥 Descargar Certificado
      </button>
    </div>
  );
};

export default CertificadoAnimal;
