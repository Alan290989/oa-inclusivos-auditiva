import React, { useState } from "react";

const animales = [
  {
    nombre: "León",
    opciones: ["Tigre", "León", "Gato", "Perro"],
    senia: "Leon seña.JPG",
  },
  {
    nombre: "Elefante",
    opciones: ["Elefante", "Ballena", "Hipopótamo", "Rinoceronte"],
    senia: "elefante seña.JPG",
  },
  {
    nombre: "Delfín",
    opciones: ["Pez", "Foca", "Delfín", "Tiburón"],
    senia: "defin seña.JPG",
  },
];

const ActividadAdivinaAnimal = ({ onCompletado }) => {
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
  const [finalizado, setFinalizado] = useState(false);
  const actual = animales[indice];

  const responder = (opcion) => {
    setSeleccion(opcion);
    const esCorrecta = opcion === actual.nombre;
    setRespuestaCorrecta(esCorrecta);

    if (esCorrecta) {
      setPuntos((prev) => prev + 1);
      setTimeout(() => {
        if (indice + 1 < animales.length) {
          setIndice((prev) => prev + 1);
          setSeleccion(null);
          setRespuestaCorrecta(false);
        } else {
          setFinalizado(true);
          onCompletado && onCompletado();
        }
      }, 1500);
    }
  };

  const intentarDeNuevo = () => {
    setSeleccion(null);
    setRespuestaCorrecta(false);
  };

  const reiniciarActividad = () => {
    setIndice(0);
    setSeleccion(null);
    setPuntos(0);
    setRespuestaCorrecta(false);
    setFinalizado(false);
  };

  if (finalizado) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2 style={{ color: "#4CAF50" }}>🎉 ¡Actividad completada!</h2>
        <p style={{ fontSize: "18px" }}>
          Aciertos: <strong>{puntos} de {animales.length}</strong>
        </p>
        <button
          onClick={reiniciarActividad}
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
          🔁 Reintentar Actividad
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h3>¿Qué animal representa esta seña?</h3>
      <img
        src={`/assets/senas/${actual.senia}`}
        alt="Seña del animal"
        style={{
          height: "200px",
          marginBottom: "20px",
          borderRadius: "12px",
          border: "3px solid #2196F3",
          background: "#fff",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {actual.opciones.map((op, idx) => (
          <button
            key={idx}
            onClick={() => responder(op)}
            disabled={seleccion !== null}
            style={{
              padding: "12px 20px",
              fontSize: "16px",
              borderRadius: "8px",
              border: "2px solid #2196F3",
              backgroundColor:
                seleccion === null
                  ? "#FFF"
                  : op === actual.nombre
                  ? "#4CAF50"
                  : op === seleccion
                  ? "#F44336"
                  : "#FFF",
              color: "#333",
              cursor: seleccion === null ? "pointer" : "default",
            }}
          >
            {op}
          </button>
        ))}
      </div>

      {seleccion !== null && (
        <div style={{ marginTop: "24px" }}>
          {respuestaCorrecta ? (
            <p style={{ color: "#4CAF50", fontWeight: "bold" }}>
              ✅ ¡Correcto! Aciertos: {puntos + 1}
            </p>
          ) : (
            <>
              <p style={{ color: "#F44336", fontWeight: "bold" }}>
                ❌ ¡Respuesta incorrecta!
              </p>
              <button
                onClick={intentarDeNuevo}
                style={{
                  padding: "10px 18px",
                  fontSize: "16px",
                  borderRadius: "8px",
                  backgroundColor: "#FFC107",
                  border: "none",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                🔄 Intentar de nuevo
              </button>
            </>
          )}
        </div>
      )}

      <p style={{ marginTop: "30px", fontWeight: "bold" }}>
        Pregunta {indice + 1} de {animales.length}
      </p>
    </div>
  );
};

export default ActividadAdivinaAnimal;
// ✅ Este componente permite adivinar el animal a partir de su seña
// ✅ Muestra una imagen de la seña y varias opciones de respuesta  