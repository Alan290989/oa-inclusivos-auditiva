import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const etapasCorrectas = [
  { id: "1", nombre: "Nacimiento", imagen: "nacer.JPG" },
  { id: "2", nombre: "Crecimiento", imagen: "crecer.JPG" },
  { id: "3", nombre: "Reproducción", imagen: "reproducir.JPG" },
  { id: "4", nombre: "Muerte", imagen: "Muerte.JPG" },
];

const ActividadOrdenarEtapasDND = ({ onCompletado }) => {
  const [etapas, setEtapas] = useState(
    [...etapasCorrectas].sort(() => Math.random() - 0.5)
  );
  const [mensaje, setMensaje] = useState("");
  const [completado, setCompletado] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const nuevasEtapas = [...etapas];
    const [moved] = nuevasEtapas.splice(result.source.index, 1);
    nuevasEtapas.splice(result.destination.index, 0, moved);
    setEtapas(nuevasEtapas);
    setMensaje("");
  };

  const verificarOrden = () => {
    const esCorrecto = etapas.every((etapa, index) => etapa.id === etapasCorrectas[index].id);
    setMensaje(esCorrecto ? "✅ ¡Muy bien, orden correcto!" : "❌ El orden no es correcto.");

    if (esCorrecto && !completado) {
      setCompletado(true);
      if (onCompletado) {
        onCompletado(); // <-- Marca como completada en CicloVidaView
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", color: "#333" }}>
        Arrastra las imágenes en el orden correcto del ciclo de vida
      </h3>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="etapas">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{
                padding: 0,
                listStyle: "none",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              {etapas.map((etapa, index) => (
                <Draggable key={etapa.id} draggableId={etapa.id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        userSelect: "none",
                        margin: "12px 0",
                        padding: "16px",
                        borderRadius: "12px",
                        border: "2px solid #00BCD4",
                        backgroundColor: "#E0F7FA",
                        textAlign: "center",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <img
                        src={`/assets/senas/${etapa.imagen}`}
                        alt={`Seña de ${etapa.nombre}`}
                        style={{
                          width: "160px",
                          height: "160px",
                          objectFit: "contain",
                          marginBottom: "12px",
                        }}
                      />
                      <p style={{ fontSize: "18px", fontWeight: "bold", margin: 0 }}>
                        {etapa.nombre}
                      </p>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={verificarOrden}
          style={{
            padding: "10px 24px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Verificar
        </button>
        {mensaje && (
          <p style={{ marginTop: "16px", fontWeight: "bold", color: "#333" }}>
            {mensaje}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActividadOrdenarEtapasDND;
