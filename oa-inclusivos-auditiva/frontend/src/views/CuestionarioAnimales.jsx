import React, { useState } from "react";
import { generarCertificadoPDF } from "../utils/descargarCertificado";


const preguntas = [
  {
    pregunta: "¿Qué animal es un mamífero?",
    opciones: ["Tiburón", "Ballena", "Pingüino", "Serpiente"],
    correcta: "Ballena",
  },
  {
    pregunta: "¿Qué animal pone huevos?",
    opciones: ["Perro", "Gato", "Águila", "Delfín"],
    correcta: "Águila",
  },
  {
    pregunta: "¿Cuál es un animal acuático?",
    opciones: ["León", "Elefante", "Delfín", "Gato"],
    correcta: "Delfín",
  },
  {
    pregunta: "¿Cuál es un insecto?",
    opciones: ["Tortuga", "Mariposa", "Zorro", "Jirafa"],
    correcta: "Mariposa",
  },
];

const CuestionarioAnimales = ({ onCompletado }) => {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  const actual = preguntas[indice];

  const responder = (opcion) => {
    setSeleccion(opcion);
    if (opcion === actual.correcta) setPuntos(puntos + 1);

    setTimeout(() => {
      if (indice + 1 < preguntas.length) {
        setIndice(indice + 1);
        setSeleccion(null);
      } else {
        setFinalizado(true);
      }
    }, 1000);
  };

  if (finalizado) {
  const todoCorrecto = puntos === preguntas.length;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: todoCorrecto ? "#4CAF50" : "#F44336" }}>
        {todoCorrecto ? "🎉 ¡Felicidades!" : "❗ Inténtalo de nuevo"}
      </h2>

      <p style={{ fontSize: "18px", margin: "16px 0" }}>
        Has completado el cuestionario de animales.
      </p>

      <p style={{ fontSize: "22px", fontWeight: "bold" }}>
        Puntaje: {puntos} / {preguntas.length}
      </p>

      {todoCorrecto ? (
        <button
          onClick={() => {
            generarCertificadoPDF("Genesis Valdivieso");
            onCompletado && onCompletado();
          }}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            fontSize: "16px",
            borderRadius: "8px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          📥 Descargar Certificado
        </button>
      ) : (
        <>
          <p style={{ fontSize: "16px", color: "#D32F2F", marginTop: "12px" }}>
            Debes responder correctamente todas las preguntas para obtener el certificado.
          </p>
          <button
            onClick={() => {
              // Reinicia el cuestionario
              setIndice(0);
              setSeleccion(null);
              setPuntos(0);
              setFinalizado(false);
            }}
            style={{
              marginTop: "16px",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              backgroundColor: "#FFC107",
              border: "none",
              cursor: "pointer",
            }}
          >
            🔄 Reintentar
          </button>
        </>
      )}
    </div>
  );
}


  // ✅ Este bloque muestra las preguntas
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h3>{actual.pregunta}</h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {actual.opciones.map((op, idx) => (
          <button
            key={idx}
            onClick={() => responder(op)}
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #1976D2",
              backgroundColor:
                seleccion === null
                  ? "#FFF"
                  : op === actual.correcta
                  ? "#4CAF50"
                  : op === seleccion
                  ? "#F44336"
                  : "#FFF",
              color: "#333",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {op}
          </button>
        ))}
      </div>
      <p style={{ marginTop: "16px" }}>
        Pregunta {indice + 1} de {preguntas.length}
      </p>
    </div>
  );
};

export default CuestionarioAnimales;
