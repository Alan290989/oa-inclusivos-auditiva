import React, { useState } from "react";
import ActividadAdivinaAnimal from "./ActividadAdivinaAnimal";
import CuestionarioAnimales from "./CuestionarioAnimales";


const AnimalesView = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [actividadCompletada, setActividadCompletada] = useState(false);

  const sections = [
   {
  id: "introduccion",
  title: "Bienvenidos al Reino Animal",
  emoji: "🦁🐵🐍🦜🦋",
  color: "#FFECB3",
  borderColor: "#FFA000",
  content: [
    {
      texto: "El reino animal está lleno de diversidad: animales que vuelan, nadan, corren y trepan. ¡Descubre su mundo!",
      imagenes: [
        "leon.jpg", "elefante.jpg", "mono.jpg", "tigre.jpg", "jirafa.jpg",
        "oso.jpg", "delfin.jpg", "aguila.jpg", "pinguino.jpg", "mariposa.jpg",
        "camaleon.jpg", "rana.jpg", "perro.jpg", "gato.avif", "zorro.jpg"
      ]
    }
  ]
},
    {
  id: "mamiferos",
  title: "Mamíferos",
  emoji: "🐻🐘🦁",
  color: "#FFF3E0",
  borderColor: "#FB8C00",
  content: [
    {
      texto: "Los mamíferos son animales vertebrados que tienen pelo y se alimentan con leche materna.",
      imagenes: [
        "leon.jpg", "elefante.jpg", "tigre.jpg", "oso.jpg", "delfin.jpg",
        "jirafa.jpg", "perro.jpg", "gato.avif"
      ]
    }
  ]
},
{
  id: "aves",
  title: "Aves",
  emoji: "🦅🦜🐧",
  color: "#E3F2FD",
  borderColor: "#2196F3",
  content: [
    {
      texto: "Las aves tienen plumas, pico y la mayoría puede volar. Algunas viven en tierra o agua.",
      imagenes: [
        "aguila.jpg", "colibri.jpg", "pinguino.jpg", "flamenco.jpg", "buho.jpg",
        "pavo_real.jpg", "tucan.jpg", "cuervo.jpg", "canario.jpg"
      ]
    }
  ]
},
{
  id: "reptiles",
  title: "Reptiles",
  emoji: "🐍🦎🐢",
  color: "#E8F5E9",
  borderColor: "#4CAF50",
  content: [
    {
      texto: "Los reptiles son de sangre fría, tienen escamas y se arrastran o nadan.",
      imagenes: [
        "serpiente.jpg", "camaleon.jpg", "cocodrilo.jpg", "iguana.jpg", "tortuga.jpg"
      ]
    }
  ]
}
,
{
  id: "anfibios",
  title: "Anfibios",
  emoji: "🐸🦎",
  color: "#F3E5F5",
  borderColor: "#8E24AA",
  content: [
    {
      texto: "Los anfibios viven parte de su vida en el agua y otra parte en tierra.",
      imagenes: [
        "rana.jpg", "salamandra.jpg", "ajolote.jpg"
      ]
    }
  ]
}
,
{
  id: "peces",
  title: "Peces",
  emoji: "🐠🐟🦈",
  color: "#E1F5FE",
  borderColor: "#0288D1",
  content: [
    {
      texto: "Los peces viven en el agua, tienen aletas y respiran por branquias.",
      imagenes: [
        "pez_payaso.jpg", "tiburon.jpg", "pez_globo.jpg", "pez_angel.jpg", "atún.jpg"
      ]
    }
  ]
}
,
{
  id: "insectos",
  title: "Insectos",
  emoji: "🐞🦋🐜",
  color: "#FFFDE7",
  borderColor: "#FBC02D",
  content: [
    {
      texto: "Los insectos son pequeños, tienen seis patas y algunos pueden volar.",
      imagenes: [
        "mariposa.jpg", "abeja.jpg", "escarabajo.jpg", "hormiga.jpg", "libelula.jpg"
      ]
    }
  ]
}
,
    {
  id: "adivina_animal",
  title: "Actividad: Adivina el animal con señas",
  emoji: "🧩🦁🧠",
  color: "#E8F5E9",
  borderColor: "#43A047",
  activity: "adivina"
},
    {
  id: "cuestionario_final_animales",
  title: "Cuestionario Final de Animales",
  emoji: "📋🧠",
  color: "#FFF3E0",
  borderColor: "#F57C00",
  activity: "cuestionario_animales"
}
,

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
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "16px",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          {oracion.imagenes.map((img, idx) => (
            <img
              key={idx}
              src={`/assets/senas/${img}`}
              alt={`Animal ${idx}`}
              style={{
                width: "100%",
                height: "120px",
                objectFit: "cover",
                borderRadius: "12px",
                border: "2px solid #FFA000",
                backgroundColor: "#fff",
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


{currentData.activity === "adivina" && (
  <div style={{ marginTop: "40px" }}>
    <ActividadAdivinaAnimal onCompletado={() => setActividadCompletada(true)} />
  </div>
)}


{/* Si es la sección de cuestionario */}
{currentData.activity === "cuestionario_animales" && (
  <div style={{ marginTop: "40px" }}>
    <CuestionarioAnimales onCompletado={() => setActividadCompletada(true)} />
  </div>
)}

      </div>
    </div>
  );
};





export default AnimalesView;
