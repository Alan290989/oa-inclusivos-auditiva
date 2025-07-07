import React, { useState } from "react";
import ActividadUnirSenas from "./ActividadUnirSenas";
import CuestionarioView from "./CuestionarioView";
import ActividadOrdenarEtapasDND from "./ActividadOrdenarEtapasDND";



const CicloVidaView = () => {
  const [currentSection, setCurrentSection] = useState(0);

const [actividadCompletada, setActividadCompletada] = useState(false);

  const sections = [
    {
      id: "humanos",
      title: "Ciclo de Vida Humano en Lengua de Señas",
      emoji: "👶👦👨👴",
      color: "#FFF",
      borderColor: "#F44336",
      content: [
        {
          texto: "El ciclo vital es el conjunto de cambios",
          imagenes: ["Ciclo_Vital.png", "Conjunto.png", "cambiar.JPG"],
        },
        {
          texto: "durante la vida de los seres",
          imagenes: ["durante.JPG", "vida.JPG", "seres.JPG"],
        },
        {
          texto: "humanos, animales y plantas",
          imagenes: ["humano.JPG", "animal.JPG", "planta.JPG"],
        },
        {
          texto: "Las etapas del ciclo vital son:",
          imagenes: ["Etapa.JPG", "Ciclo_Vital.png", "seres.JPG"],
        },
      ],
    },
    {
  id: "etapas_generales",
  title: "Etapas del Ciclo de Vida en Lengua de Señas",
  emoji: "👶👦👨👴",
  color: "#FFFDE7",
  borderColor: "#FFC107",
  content: [
    {
      texto: "Todos los seres vivos nacen",
      imagenes: ["todo.JPG", "seres.JPG", "nacer.JPG"],
    },
    {
      texto: "crecen poco a poco con el tiempo",
      imagenes: ["crecer.JPG", "poco a poco.JPG", "tiempo.JPG"],
    },
    {
      texto: "se reproducen para tener descendencia",
      imagenes: ["reproducir.JPG", "Tener.JPG", "descendencia.JPG"],
    },
    {
      texto: "y finalmente mueren",
      imagenes: ["finalmente.JPG", "Muerte.JPG"],
    },
  ],
},

    {
      id: "mamiferos",
      title: "Ciclo de Vida de los Mamíferos",
      emoji: "🐕🐈🐘🦁",
      color: "#E3F2FD",
      borderColor: "#1976D2",
      stages: [
        {
          name: "Cachorro/Cría",
          image: "🐶",
          description:
            "Los cachorros nacen y toman leche de su mamá. No pueden ver al nacer.",
        },
        {
          name: "Juvenil",
          image: "🐕",
          description:
            "Los jóvenes mamíferos aprenden a cazar, buscar comida y juegan mucho.",
        },
        {
          name: "Adulto",
          image: "🦁",
          description:
            "Los mamíferos adultos pueden tener sus propias crías y cuidar de su familia.",
        },
        {
          name: "Anciano",
          image: "🐘",
          description:
            "Los mamíferos ancianos son sabios y a veces lideran a su grupo.",
        },
      ],
    },
  {
  id: "actividad_final",
  title: "Actividad: Une la Imagen con la Seña",
  emoji: "🧠🤟",
  color: "#EDE7F6",
  borderColor: "#673AB7",
  activity: "senas",
},
{
  id: "actividad_dnd",
  title: "Actividad: Arrastra las Etapas en Orden",
  emoji: "🧠🧩",
  color: "#E0F2F1",
  borderColor: "#009688",
  activity: "ordenar_dnd",
},


{
  id: "cuestionario_final",
  title: "Cuestionario Final del Ciclo de Vida",
  emoji: "❓🧠",
  color: "#FFF3E0",
  borderColor: "#FB8C00",
  activity: "cuestionario"
},


  ];

  const currentData = sections[currentSection];

  const handleNext = () => {
  if (currentSection < sections.length - 1) {
    setCurrentSection(currentSection + 1);
    setActividadCompletada(false);
  }
};

  const handlePrevious = () => {
  if (currentSection > 0) {
    setCurrentSection(currentSection - 1);
    setActividadCompletada(false);
  }
};

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF8E1",
        padding: "16px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Menú superior */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "16px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "2px solid #6750a4",
            backgroundColor: "white",
            color: "#6750a4",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          🏠 Inicio
        </button>

        <h1
          style={{
            fontWeight: "bold",
            color: "#5D4037",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: 0,
            fontSize: "24px",
          }}
        >
          <span style={{ fontSize: "28px" }}>{currentData.emoji}</span>
          CICLO DE VIDA
        </h1>

        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={handlePrevious}
            disabled={currentSection === 0}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              backgroundColor: currentSection === 0 ? "#e0e0e0" : "#9E9E9E",
              color: "white",
              fontSize: "20px",
              cursor: currentSection === 0 ? "not-allowed" : "pointer",
            }}
          >
            ←
          </button>
          <button
             onClick={handleNext}
  disabled={
    currentSection === sections.length - 1 ||
    (currentData.activity && !actividadCompletada)
  }
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                currentSection === sections.length - 1 ? "#e0e0e0" : "#4CAF50",
              color: "white",
              fontSize: "20px",
              cursor:
                currentSection === sections.length - 1
                  ? "not-allowed"
                  : "pointer",
            }}
          >
            →
          </button>
        </div>
      </div>

      {/* Indicador */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        {/* Barra de progreso */}
<div style={{
  backgroundColor: "#eee",
  height: "20px",
  borderRadius: "10px",
  overflow: "hidden",
  margin: "0 auto 24px",
  maxWidth: "400px",
}}>
  <div style={{
    height: "100%",
    width: `${((currentSection + 1) / sections.length) * 100}%`,
    backgroundColor: "#4CAF50",
    transition: "width 0.3s ease",
  }} />
</div>

        {sections.map((_, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              width: "10px",
              height: "10px",
              margin: "0 4px",
              borderRadius: "50%",
              backgroundColor:
                index === currentSection ? "#F44336" : "#ccc",
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div
        style={{
          backgroundColor: currentData.color,
          border: `4px solid ${currentData.borderColor}`,
          borderRadius: "24px",
          padding: "32px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#3E2723",
            fontSize: "28px",
            marginBottom: "24px",
          }}
        >
          {currentData.title}
        </h2>

        {/* Si es sección de señas */}
        {currentData.content && (
          <>
            {currentData.content.map((oracion, index) => (
              <div key={index} style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                    flexWrap: "wrap",
                    marginBottom: "16px",
                  }}
                >
                  {oracion.imagenes.map((img, idx) => (
                  <img
                    key={idx}
                    src={`/assets/senas/${img}`}
                    alt={`Seña ${img.replace(".png", "")}`}
                    style={{
                      width: "160px",
                      height: "160px",
                      borderRadius: "16px",
                      objectFit: "contain",
                      border: "2px solid #ccc",
                      backgroundColor: "#fff",
                      padding: "8px",
                    }}
                  />
                ))}

                </div>
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "20px",
                    fontFamily: "'Comic Sans MS', cursive",
                    color: "#444",
                    maxWidth: "800px",
                    margin: "0 auto",
                    borderBottom: "1px dotted #ccc",
                    paddingBottom: "4px",
                  }}
                >
                  {oracion.texto}
                </p>
              </div>
            ))}
          </>
        )}

        {/* Si es sección de mamíferos */}
        {currentData.stages && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {currentData.stages.map((etapa, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  padding: "16px",
                  textAlign: "center",
                  border: `2px solid ${currentData.borderColor}`,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                  {etapa.image}
                </div>
                <h3 style={{ color: currentData.borderColor }}>{etapa.name}</h3>
                <p style={{ color: "#4E342E", fontSize: "16px" }}>
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Si es la sección de actividad */}
{/* Si es la sección de actividad con señas */}
{currentData.activity === "senas" && (
  <div style={{ marginTop: "40px" }}>
    <ActividadUnirSenas onCompletado={() => setActividadCompletada(true)} />
  </div>
)}


{currentData.activity === "ordenar_dnd" && (
  <div style={{ marginTop: "40px" }}>
    <ActividadOrdenarEtapasDND onCompletado={() => setActividadCompletada(true)} />
  </div>
)}

{/* Si es la sección de cuestionario */}
{currentData.activity === "cuestionario" && (
  <div style={{ marginTop: "40px" }}>
<CuestionarioView onCompletado={() => setActividadCompletada(true)} />
  </div>
)}

      </div>
    </div>
  );
};

export default CicloVidaView;
