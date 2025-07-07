import React, { useState, useEffect } from "react";

const data = [
  {
    nombre: "Bebé",
    imagenes: ["bebe1.jpeg", "bebe2.jpeg", "bebe3.png"],
    sena: "bebe.png",
  },
  {
    nombre: "Niño",
    imagenes: ["niño1.webp", "niño2.png", "niño3.png"],
    sena: "nino.png",
  },
  {
    nombre: "Adulto",
    imagenes: ["adulto1.png", "adulto2.webp", "adulto 3.png"],
    sena: "adulto-seña.png",
  },
  {
    nombre: "Viejo",
    imagenes: ["viejo1.jpg", "viejo2.jpg", "viejo3.png"],
    sena: "viejo.jpeg",
  },
];

const ActividadUnirSenas = ({ onCompletado }) => {
  const [respuestas, setRespuestas] = useState({});
  const [dragging, setDragging] = useState(null);
  const [verificado, setVerificado] = useState(false);
  const [senasOrdenadas, setSenasOrdenadas] = useState([]);
  const [personasConImagen, setPersonasConImagen] = useState([]);

  // Este useEffect se ejecuta al montar el componente
 useEffect(() => {
  const seleccionadas = data.map((item) => ({
    nombre: item.nombre,
    imagen: item.imagenes[Math.floor(Math.random() * item.imagenes.length)],
    sena: item.sena,
  }));

  setPersonasConImagen(seleccionadas);

  const ordenAleatorio = [...seleccionadas]
    .map(({ nombre, sena }) => ({ nombre, sena }))
    .sort(() => Math.random() - 0.5);

  setSenasOrdenadas(ordenAleatorio);
}, []);


  const handleDrop = (nombre) => {
    if (!verificado) {
      setRespuestas({ ...respuestas, [nombre]: dragging });
      setDragging(null);
    }
  };

  const checkCorrecto = (nombre) => respuestas[nombre] === nombre;

  const totalCorrectas = data.filter((item) => checkCorrecto(item.nombre)).length;

  const reiniciar = () => {
  setRespuestas({});
  setVerificado(false);
  setDragging(null);

  const nuevasPersonas = data.map((item) => ({
    nombre: item.nombre,
    imagen: item.imagenes[Math.floor(Math.random() * item.imagenes.length)],
    sena: item.sena,
  }));

  setPersonasConImagen(nuevasPersonas);

  const ordenAleatorio = [...nuevasPersonas]
    .map(({ nombre, sena }) => ({ nombre, sena }))
    .sort(() => Math.random() - 0.5);

  setSenasOrdenadas(ordenAleatorio);
};


  // ... el return que ya tienes sigue igual ...


  return (
    <div style={{ padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h3 style={{ textAlign: "center", fontSize: "24px", color: "#4E342E" }}>
        Arrastra la imagen en lengua de señas sobre la persona correspondiente
      </h3>

      <div
        style={{
          display: "flex",
          gap: "48px",
          justifyContent: "center",
          marginTop: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Imágenes de personas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {personasConImagen.map((item) => (
            <div
              key={item.nombre}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(item.nombre)}
              style={{
                position: "relative",
                border: "3px dashed #607D8B",
                borderRadius: "12px",
                padding: "16px",
                width: "200px",
                height: "200px",
                backgroundColor: verificado
                  ? checkCorrecto(item.nombre)
                    ? "#C8E6C9"
                    : "#FFCDD2"
                  : "#FFF",
              }}
            >
              <img
                src={`/assets/senas/${item.imagen}`}
                alt={item.nombre}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
              {/* Mostrar seña colocada si existe */}
              {respuestas[item.nombre] && (
                <img
                  src={`/assets/senas/${
                    data.find((d) => d.nombre === respuestas[item.nombre])?.sena
                  }`}
                  alt={`Seña de ${item.nombre}`}
                  style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "8px",
                    width: "60px",
                    height: "60px",
                    borderRadius: "8px",
                    border: "2px solid #607D8B",
                    backgroundColor: "#FFF",
                    padding: "4px",
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Señales de señas en orden fijo */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {senasOrdenadas.map((sena) => (
            <img
              key={sena.nombre}
              src={`/assets/senas/${sena.sena}`}
              alt={`Seña ${sena.nombre}`}
              draggable={!verificado}
              onDragStart={() => setDragging(sena.nombre)}
              style={{
                width: "160px",
                height: "160px",
                border: "2px solid #607D8B",
                borderRadius: "12px",
                objectFit: "contain",
                backgroundColor: "#ECEFF1",
                cursor: verificado ? "not-allowed" : "grab",
                padding: "8px",
                opacity: Object.values(respuestas).includes(sena.nombre)
                  ? 0.4
                  : 1, // efecto visual si ya está usada
              }}
            />
          ))}
        </div>
      </div>

      {/* Botones */}
      <div style={{ textAlign: "center", marginTop: "32px" }}>
        {!verificado ? (
          <button
              onClick={() => {
            setVerificado(true);
            const todasCorrectas = data.every((item) => checkCorrecto(item.nombre));
            if (todasCorrectas) {
              onCompletado?.(); // Llama al padre si está definido
            }
          }}
            style={{
              padding: "12px 24px",
              fontSize: "18px",
              borderRadius: "8px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ✅ Verificar Respuestas
          </button>
        ) : (
          <>
            <p style={{ fontSize: "20px", color: "#4E342E" }}>
              Puntaje: {totalCorrectas} / {data.length}
            </p>
            <button
              onClick={reiniciar}
              style={{
                padding: "12px 24px",
                fontSize: "18px",
                borderRadius: "8px",
                backgroundColor: "#FF9800",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🔄 Reiniciar Actividad
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ActividadUnirSenas;
