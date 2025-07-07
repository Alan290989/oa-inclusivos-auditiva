import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export async function generarCertificadoPDF(nombre = "Estudiante") {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [842, 595], // tamaño A4 horizontal en px
  });

  // Fondo decorativo
  doc.setFillColor("#FFF8E1");
  doc.rect(0, 0, 842, 595, "F");

  doc.setFont("helvetica", "normal");

  doc.setTextColor("#F57C00");

  doc.setFontSize(28);
  doc.text("Certificado de Logro", 280, 80);

  doc.setTextColor("#000");
  doc.setFontSize(18);
  doc.text("Se otorga a:", 360, 140);

  doc.setTextColor("#4CAF50");
  doc.setFontSize(24);
  doc.text(nombre, 300, 180);

  doc.setTextColor("#000");
  doc.setFontSize(30);
  doc.text("Por completar con éxito el módulo del Reino Animal ",
    180,
    230
  );

  doc.setTextColor("#555");
  doc.setFontSize(14);
  doc.text("Fecha: " + new Date().toLocaleDateString(), 340, 280);

  // Imagen decorativa (sello infantil)
  const img = new Image();
  img.src = "../assets/senas/sello-kids.jpeg"; // asegúrate de tener esta imagen

  await new Promise((resolve) => {
    img.onload = () => {
      doc.addImage(img, "PNG", 650, 420, 120, 120);
      resolve();
    };
  });

  doc.save("certificado_animales.pdf");
}
