import React, { useState, useEffect } from "react";
import { jsPDF } from "jspdf";
// Banco completo de preguntas (20 como ejemplo)
const bancoPreguntas = [
  {
    texto: "¿Cuál es la primera etapa del ciclo de vida humano?",
    opciones: ["Adulto", "Niño", "Bebé", "Anciano"],
    correcta: "Bebé",
  },
  {
    texto: "¿Qué etapa sigue después de ser niño?",
    opciones: ["Anciano", "Adulto", "Bebé", "Cría"],
    correcta: "Adulto",
  },
  {
    texto: "¿Cuál es la última etapa del ciclo de vida?",
    opciones: ["Juvenil", "Cachorro", "Adulto", "Anciano"],
    correcta: "Anciano",
  },
  {
    texto: "¿Qué hacemos durante la etapa adulta?",
    opciones: ["Jugamos mucho", "Nacemos", "Cuidamos a nuestra familia", "Tomamos leche materna"],
    correcta: "Cuidamos a nuestra familia",
  },
  {
    texto: "¿Cuál de estos NO es una etapa del ciclo humano?",
    opciones: ["Niño", "Anciano", "Adolescente", "Flor"],
    correcta: "Flor",
  },
  {
    texto: "¿En qué etapa aprendemos a caminar y hablar?",
    opciones: ["Anciano", "Bebé", "Adulto", "Ninguna"],
    correcta: "Bebé",
  },
  {
    texto: "¿Quiénes suelen ir a trabajar y mantener a la familia?",
    opciones: ["Niños", "Bebés", "Adultos", "Ancianos"],
    correcta: "Adultos",
  },
  {
    texto: "¿Qué hacemos en la vejez?",
    opciones: ["Ir al colegio", "Jugar con muñecos", "Descansar y contar historias", "Llorar mucho"],
    correcta: "Descansar y contar historias",
  },
  {
    texto: "¿Qué etapa sigue después del nacimiento?",
    opciones: ["Anciano", "Niñez", "Juventud", "Adultez"],
    correcta: "Niñez",
  },
  {
    texto: "¿Quién necesita más cuidado y atención constante?",
    opciones: ["Niños", "Bebés", "Adultos", "Ancianos"],
    correcta: "Bebés",
  },
  {
    texto: "¿Qué etapa se caracteriza por jugar, aprender y crecer rápidamente?",
    opciones: ["Anciano", "Niño", "Adulto", "Viejo"],
    correcta: "Niño",
  },
  {
    texto: "¿Cuál es la etapa donde usualmente se forma una familia?",
    opciones: ["Anciano", "Adulto", "Niño", "Bebé"],
    correcta: "Adulto",
  },
  {
    texto: "¿Qué etapa es sinónimo de sabiduría y experiencia?",
    opciones: ["Niño", "Adulto", "Anciano", "Bebé"],
    correcta: "Anciano",
  },
  {
    texto: "¿Cuál es una actividad común de un niño?",
    opciones: ["Trabajar", "Jugar", "Cuidar hijos", "Pagar cuentas"],
    correcta: "Jugar",
  },
  {
    texto: "¿Qué etapa ya no crece físicamente pero sigue aprendiendo?",
    opciones: ["Adulto", "Anciano", "Niño", "Bebé"],
    correcta: "Anciano",
  },
  {
    texto: "¿Qué etapa representa la madurez?",
    opciones: ["Niñez", "Adultez", "Vejez", "Nacimiento"],
    correcta: "Adultez",
  },
  {
    texto: "¿Quiénes usan pañales normalmente?",
    opciones: ["Ancianos", "Niños", "Bebés", "Adultos"],
    correcta: "Bebés",
  },
  {
    texto: "¿Cuál es la mejor etapa para trabajar y estudiar?",
    opciones: ["Adultez", "Vejez", "Infancia", "Nacimiento"],
    correcta: "Adultez",
  },
  {
    texto: "¿Qué etapa está llena de recuerdos y descanso?",
    opciones: ["Adultez", "Niñez", "Vejez", "Bebé"],
    correcta: "Vejez",
  },
  {
    texto: "¿Cuál de estas etapas viene justo antes de la vejez?",
    opciones: ["Niñez", "Juventud", "Adultez", "Bebé"],
    correcta: "Adultez",
  },
];

function obtenerPreguntasAleatorias(cantidad) {
  const copia = [...bancoPreguntas];
  const seleccionadas = [];

  while (seleccionadas.length < cantidad && copia.length > 0) {
    const index = Math.floor(Math.random() * copia.length);
    seleccionadas.push(copia.splice(index, 1)[0]);
  }

  return seleccionadas;
}

const CuestionarioView = () => {
  const [preguntas, setPreguntas] = useState([]);
  const [indice, setIndice] = useState(0);
  const [seleccionada, setSeleccionada] = useState(null);
  const [puntos, setPuntos] = useState(0);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    const seleccionadas = obtenerPreguntasAleatorias(5);
    setPreguntas(seleccionadas);
  }, []);

  const responder = () => {
    if (seleccionada === preguntas[indice].correcta) {
      setPuntos((prev) => prev + 1);
    }

    if (indice < preguntas.length - 1) {
      setIndice((prev) => prev + 1);
      setSeleccionada(null);
    } else {
      setFinalizado(true);
    }
  };

  const reiniciar = () => {
    const nuevas = obtenerPreguntasAleatorias(5);
    setPreguntas(nuevas);
    setIndice(0);
    setSeleccionada(null);
    setPuntos(0);
    setFinalizado(false);
  };

  const aprobar = () => {
    return puntos >= 4; // criterio para aprobar
  };

const generarCertificadoPDF = () => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  const width = doc.internal.pageSize.getWidth();
  const height = doc.internal.pageSize.getHeight();

  // Colores vivos
  const colorPrimario = "#FF6F61"; // salmón
  const colorSecundario = "#FFD54F"; // amarillo
  const colorTexto = "#3E2723"; // marrón oscuro

  // Fondo con degradado (simple)
  doc.setFillColor(255, 243, 224); // fondo crema suave
  doc.rect(0, 0, width, height, "F");

  // Borde decorativo (rectángulo doble)
  doc.setDrawColor(colorPrimario);
  doc.setLineWidth(6);
  doc.rect(20, 20, width - 40, height - 40);

  doc.setDrawColor(colorSecundario);
  doc.setLineWidth(3);
  doc.rect(30, 30, width - 60, height - 60);

  // Título grande y animado
  doc.setFont("helvetica", "bold");
  doc.setFontSize(36);
  doc.setTextColor(colorPrimario);
  doc.text(" Certificado de Aprendizaje ", width / 2, 90, { align: "center" });

  // Texto principal
  doc.setFont("helvetica", "normal");
  doc.setFontSize(22);
  doc.setTextColor(colorTexto);
  doc.text("Este certificado reconoce que", width / 2, 140, { align: "center" });

  // Nombre personalizado
  doc.setFont("helvetica", "bolditalic");
  doc.setFontSize(28);
  doc.setTextColor(colorPrimario);
  doc.text("¡La participante Genesis! ", width / 2, 180, { align: "center" });

  // Texto adicional
  doc.setFont("helvetica", "normal");
  doc.setFontSize(20);
  doc.setTextColor(colorTexto);
  doc.text("ha completado con éxito el cuestionario del", width / 2, 220, { align: "center" });
  doc.text("Ciclo de Vida Humano", width / 2, 250, { align: "center" });

  // Puntaje (usa variables reales en tu código)
  doc.setFontSize(18);
  doc.text(`Puntaje obtenido: ${puntos} / ${preguntas.length}`, width / 2, 290, { align: "center" });

  // Fecha
  const fecha = new Date().toLocaleDateString();
  doc.setFontSize(16);
  doc.setTextColor("#6D4C41");
  doc.text(`Fecha: ${fecha}`, width / 2, 320, { align: "center" });

  // Firma simple con línea
  doc.setDrawColor(colorPrimario);
  doc.setLineWidth(2);
  doc.line(width / 2 - 150, 380, width / 2 + 150, 380);
  doc.setFontSize(16);
  doc.setTextColor(colorTexto);
  doc.text("Instructor: Equipo Educativo", width / 2, 400, { align: "center" });

  // Guardar archivo
  doc.save("certificado-animado-ciclo-vida.pdf");
};


  if (preguntas.length === 0) return <p>Cargando preguntas...</p>;

  return (
    <div style={{ padding: "24px", backgroundColor: "#E0F7FA", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#006064" }}>📝 Cuestionario de Ciclo de Vida</h2>

      {!finalizado ? (
        <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#FFFFFF", padding: "24px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
          <h3 style={{ color: "#004D40" }}>{preguntas[indice].texto}</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {preguntas[indice].opciones.map((opcion, i) => (
              <li key={i} style={{ margin: "12px 0" }}>
                <label style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <input
                    type="radio"
                    name="opcion"
                    value={opcion}
                    checked={seleccionada === opcion}
                    onChange={() => setSeleccionada(opcion)}
                  />
                  {opcion}
                </label>
              </li>
            ))}
          </ul>
          <button
            onClick={responder}
            disabled={!seleccionada}
            style={{
              padding: "10px 20px",
              backgroundColor: "#00796B",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: seleccionada ? "pointer" : "not-allowed",
              marginTop: "16px",
              fontWeight: "bold",
            }}
          >
            Responder
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h3 style={{ fontSize: "24px", color: "#004D40" }}>🎉 ¡Has finalizado el cuestionario!</h3>
          <p style={{ fontSize: "20px" }}>
            Tu puntaje fue: <strong>{puntos} / {preguntas.length}</strong>
          </p>

          {aprobar() ? (
            <>
              <p style={{ fontSize: "22px", color: "#43A047", fontWeight: "bold" }}>
                🎉 ¡Felicidades! Puedes descargar tu certificado.
              </p>
              <button
                onClick={generarCertificadoPDF}
                style={{
                  padding: "12px 24px",
                  backgroundColor: "#43A047",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                🎓 Descargar Certificado PDF
              </button>
            </>
          ) : (
            <p style={{ marginTop: "20px", color: "#D32F2F" }}>
              No alcanzaste el puntaje necesario para el certificado. Intenta nuevamente.
            </p>
          )}

          <div style={{ marginTop: "24px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={reiniciar}
              style={{
                padding: "10px 20px",
                backgroundColor: "#FF9800",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🔄 Reiniciar Cuestionario
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CuestionarioView;