import React, { useState } from "react";
import ActividadAdivinaPlanta from "./ActividadAdivinaPlanta";
import CuestionarioPlantas from "./CuestionarioPlantas";

const PlantasView = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [actividadCompletada, setActividadCompletada] = useState(false);

  const sections = [
    {
      id: "introduccion",
      title: "Bienvenidos al Reino Vegetal",
      emoji: "🌱🌿🌼🌳🌻",
      color: "#E8F5E9",
      borderColor: "#388E3C",
      content: [
        {
          texto: "Las plantas son seres vivos que producen su propio alimento mediante la fotosíntesis. Existen millones de especies con formas, colores y tamaños distintos.",
          imagenes: [
            "girasol.jpg", "rosa.jpg", "helecho.jpg", "cactus.jpg", "bambú.jpg",
            "palmera.jpg", "tulipan.jpg", "clavel.jpg", "orquidea.jpg", "lavanda.jpg"
          ]
        }
      ]
    },
    {
  id: "partes_planta",
  title: "Partes de la Planta",
  emoji: "🌿🌸🌱",
  color: "#E8F5E9",
  borderColor: "#4CAF50",
  content: [
    {
      texto: "Las plantas tienen partes muy importantes que las ayudan a vivir y crecer.",
      imagenes: [
        "planta_completa.jpg"  // Imagen de la planta señalada completa
      ]
    },
    {
      texto: "La raíz se encuentra bajo la tierra. Absorbe el agua y los nutrientes.",
      imagenes: ["raiz_seña.JPG"]
    },
    {
      texto: "El tallo sostiene la planta y transporta el agua.",
      imagenes: ["tallo_seña.JPG"]
    },
    {
      texto: "Las hojas ayudan a la planta a respirar y hacer su alimento.",
      imagenes: ["hoja_seña.JPG"]
    },
    {
      texto: "La flor ayuda a reproducirse y atraer insectos.",
      imagenes: ["flor_seña.JPG"]
    },
    {
      texto: "Algunas plantas tienen frutos que protegen las semillas.",
      imagenes: ["fruto_seña.JPG"]
    },
  ]
}
,
    {
      id: "plantas_florecimiento",
      title: "Plantas con flores",
      emoji: "🌺🌼🌸",
      color: "#FFF8E1",
      borderColor: "#FBC02D",
      content: [
        {
          texto: "Las plantas con flores se reproducen mediante semillas y embellecen el entorno. Sus flores pueden atraer insectos para la polinización.",
          imagenes: [
            "girasol.jpg", "rosa.jpg", "tulipan.jpg", "clavel.jpg", "orquidea.jpg"
          ]
        }
      ]
    },
    {
      id: "plantas_sin_flores",
      title: "Plantas sin flores",
      emoji: "🌿🍃🌾",
      color: "#E0F7FA",
      borderColor: "#00ACC1",
      content: [
        {
          texto: "Estas plantas no tienen flores. Se reproducen por esporas u otros métodos. Ejemplos incluyen helechos y musgos.",
          imagenes: [
            "helecho.jpg", "musgo.jpg", "cola_de_caballo.jpg"
          ]
        }
      ]
    },
    {
      id: "plantas_acuaticas",
      title: "Plantas Acuáticas",
      emoji: "💧🌱🐠",
      color: "#E3F2FD",
      borderColor: "#1976D2",
      content: [
        {
          texto: "Viven en el agua o en zonas muy húmedas. Algunas flotan y otras están ancladas al fondo.",
          imagenes: [
            "loto.jpg", "nenufar.jpg", "alga.jpg"
          ]
        }
      ]
    },
    {
      id: "plantas_medicinales",
      title: "Plantas Medicinales",
      emoji: "🌿🧪💊",
      color: "#F3E5F5",
      borderColor: "#8E24AA",
      content: [
        {
          texto: "Han sido usadas por siglos para tratar enfermedades. Muchas medicinas modernas provienen de estas plantas.",
          imagenes: [
            "manzanilla.jpg", "aloe.jpg", "menta.jpg", "eucalipto.jpg", "romero.jpg"
          ]
        }
      ]
    },
    {
      id: "adivina_planta",
      title: "Actividad: Adivina la planta con señas",
      emoji: "🧩🌿🧠",
      color: "#E8F5E9",
      borderColor: "#43A047",
      activity: "adivina"
    },
    {
      id: "cuestionario_final_plantas",
      title: "Cuestionario Final de Plantas",
      emoji: "📋🧠",
      color: "#FFF3E0",
      borderColor: "#F57C00",
      activity: "cuestionario_plantas"
    }
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
    <div style={{ minHeight: "100vh", backgroundColor: "#F1F8E9", padding: "16px", fontFamily: "Arial, sans-serif" }}>
      {/* Menú superior */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: "24px", backgroundColor: "white", borderRadius: "16px",
        padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <button style={{
          padding: "10px 18px", borderRadius: "12px", border: "2px solid #4CAF50",
          backgroundColor: "white", color: "#4CAF50", fontWeight: "bold", fontSize: "16px"
        }}>
          🏡 Inicio
        </button>

        <h1 style={{ fontWeight: "bold", color: "#2E7D32", textAlign: "center", fontSize: "24px" }}>
          <span style={{ fontSize: "28px" }}>{currentData.emoji}</span> CICLO DE VIDA DE LAS PLANTAS
        </h1>

        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={handlePrevious} disabled={currentSection === 0} style={{
            width: "40px", height: "40px", borderRadius: "50%", border: "none",
            backgroundColor: currentSection === 0 ? "#e0e0e0" : "#81C784",
            color: "white", fontSize: "20px", cursor: currentSection === 0 ? "not-allowed" : "pointer"
          }}>←</button>

          <button onClick={handleNext}
            disabled={currentSection === sections.length - 1 || (currentData.activity && !actividadCompletada)}
            style={{
              width: "40px", height: "40px", borderRadius: "50%", border: "none",
              backgroundColor: currentSection === sections.length - 1 ? "#e0e0e0" : "#4CAF50",
              color: "white", fontSize: "20px", cursor: "pointer"
            }}>→</button>
        </div>
      </div>

      {/* Indicador */}
      <div style={{ textAlign: "center", marginBottom: "16px" }}>
        <div style={{
          backgroundColor: "#eee", height: "20px", borderRadius: "10px",
          overflow: "hidden", margin: "0 auto 24px", maxWidth: "400px"
        }}>
          <div style={{
            height: "100%", width: `${((currentSection + 1) / sections.length) * 100}%`,
            backgroundColor: "#4CAF50", transition: "width 0.3s ease"
          }} />
        </div>
        {sections.map((_, index) => (
          <span key={index} style={{
            display: "inline-block", width: "10px", height: "10px", margin: "0 4px",
            borderRadius: "50%", backgroundColor: index === currentSection ? "#66BB6A" : "#ccc"
          }} />
        ))}
      </div>

      {/* Contenido */}
      <div style={{
        backgroundColor: currentData.color, border: `4px solid ${currentData.borderColor}`,
        borderRadius: "24px", padding: "32px", maxWidth: "1000px", margin: "0 auto"
      }}>
        <h2 style={{ textAlign: "center", fontWeight: "bold", color: "#2E7D32", fontSize: "28px", marginBottom: "24px" }}>
          {currentData.title}
        </h2>

        {currentData.content && currentData.content.map((oracion, index) => (
          <div key={index} style={{ marginBottom: "40px" }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "16px", justifyContent: "center", marginBottom: "24px"
            }}>
              {oracion.imagenes.map((img, idx) => (
                <img
                  key={idx}
                  src={`/assets/senas/${img}`}
                  alt={`Planta ${idx}`}
                  style={{
                    width: "100%", height: "120px", objectFit: "cover",
                    borderRadius: "12px", border: "2px solid #A5D6A7", backgroundColor: "#fff"
                  }}
                />
              ))}
            </div>
            <p style={{
              textAlign: "center", fontSize: "20px", fontFamily: "'Comic Sans MS', cursive",
              color: "#4E342E", maxWidth: "800px", margin: "0 auto",
              borderBottom: "1px dotted #ccc", paddingBottom: "4px"
            }}>
              {oracion.texto}
            </p>
          </div>
        ))}

        {/* Actividad: Adivina planta */}
        {currentData.activity === "adivina" && (
          <div style={{ marginTop: "40px" }}>
            <ActividadAdivinaPlanta onCompletado={() => setActividadCompletada(true)} />
          </div>
        )}

        {/* Cuestionario final */}
        {currentData.activity === "cuestionario_plantas" && (
          <div style={{ marginTop: "40px" }}>
            <CuestionarioPlantas onCompletado={() => setActividadCompletada(true)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantasView;
