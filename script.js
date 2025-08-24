// Recetas Naturales STP - JS Mejorado para concurso
// Autor: STP J, L, R

const recetasBase = {
  cicatricure: {
    id: "cicatricure",
    titulo: { es: "🧴 Cicatricure Casero", en: "🧴 Homemade Cicatricure" },
    tipo: "grasa",
    img: "img/cicatricure.jpg",
    ingredientes: {
      es: ["Gel de aloe vera", "Aceite de coco", "Miel pura"],
      en: ["Aloe vera gel", "Coconut oil", "Pure honey"]
    },
    preparacion: {
      es: ["Mezcla 2 cucharadas de aloe con 1 de aceite de coco.", "Agrega 1 cucharadita de miel."],
      en: ["Mix 2 tablespoons of aloe with 1 of coconut oil.", "Add 1 teaspoon of honey."]
    },
    consejos: {
      es: ["Aplicar en la noche sobre cicatrices limpias.", "Dejar actuar por 30 minutos y enjuagar.", "Usar 3 veces por semana."],
      en: ["Apply at night on clean scars.", "Leave on for 30 minutes and rinse.", "Use 3 times a week."]
    },
    advertencia: {
      es: "⚠️ No usar si eres alérgico al coco. Evitar aplicar sobre piel irritada.",
      en: "⚠️ Do not use if you are allergic to coconut. Avoid applying on irritated skin."
    },
    color: "#f4dada"
  },
  antiestrias: {
    id: "antiestrias",
    titulo: { es: "💪 Antiestrías Natural", en: "💪 Natural Anti-stretch marks" },
    tipo: "seca",
    img: "img/antiestrias.jpg",
    ingredientes: {
      es: ["Puré de plátano", "Aceite de oliva", "Avena molida"],
      en: ["Mashed banana", "Olive oil", "Ground oats"]
    },
    preparacion: {
      es: ["Tritura 1 plátano maduro.", "Agrega 1 cda de aceite y 1 cda de avena."],
      en: ["Mash 1 ripe banana.", "Add 1 tbsp of oil and 1 tbsp of oats."]
    },
    consejos: {
      es: ["Aplica en zonas con estrías con masajes circulares.", "Déjalo 20 minutos y retira con agua tibia."],
      en: ["Apply on areas with stretch marks using circular massages.", "Leave for 20 minutes and remove with warm water."]
    },
    advertencia: {
      es: "⚠️ Realiza una prueba en una pequeña área de la piel para evitar reacciones adversas.",
      en: "⚠️ Perform a patch test on a small skin area to avoid adverse reactions."
    },
    color: "#ffe4b3"
  },
  hidratante: {
    id: "hidratante",
    titulo: { es: "💧 Hidratante de Pepino", en: "💧 Cucumber Moisturizer" },
    tipo: "mixta",
    img: "img/hidratante.jpg",
    ingredientes: {
      es: ["Medio pepino", "Yogur natural", "Miel cruda"],
      en: ["Half cucumber", "Plain yogurt", "Raw honey"]
    },
    preparacion: {
      es: ["Licúa el pepino pelado.", "Mezcla con 2 cdas de yogur y 1 cdita de miel."],
      en: ["Blend the peeled cucumber.", "Mix with 2 tbsp of yogurt and 1 tsp of honey."]
    },
    consejos: {
      es: ["Ideal para hidratar por la mañana.", "Aplicar 15 minutos y enjuagar con agua fría."],
      en: ["Ideal for morning hydration.", "Apply for 15 minutes and rinse with cold water."]
    },
    advertencia: {
      es: "⚠️ El pepino y la miel pueden causar leve irritación en piel muy sensible.",
      en: "⚠️ Cucumber and honey may cause slight irritation on very sensitive skin."
    },
    color: "#ccf2e7"
  },
  exfoliante: {
    id: "exfoliante",
    titulo: { es: "🌾 Exfoliante de Azúcar", en: "🌾 Sugar Scrub" },
    tipo: "sensible",
    img: "img/exfoliante.jpg",
    ingredientes: {
      es: ["Azúcar morena", "Aceite de coco", "Limón"],
      en: ["Brown sugar", "Coconut oil", "Lemon"]
    },
    preparacion: {
      es: ["Mezcla 2 cdas de azúcar con 1 cda de aceite.", "Agrega unas gotas de limón (opcional)."],
      en: ["Mix 2 tbsp of sugar with 1 tbsp of oil.", "Add a few drops of lemon (optional)."]
    },
    consejos: {
      es: ["Masajear suavemente una vez por semana.", "Evitar el sol si usas limón."],
      en: ["Massage gently once a week.", "Avoid sun exposure if you use lemon."]
    },
    advertencia: {
      es: "⚠️ El limón puede aumentar la sensibilidad al sol. Usar solo de noche y con precaución.",
      en: "⚠️ Lemon can increase sun sensitivity. Use only at night and with caution."
    },
    color: "#ffe9c6"
  },
  labios: {
    id: "labios",
    titulo: { es: "💋 Bálsamo para Labios", en: "💋 Lip Balm" },
    tipo: "labios",
    img: "img/labios.jpg",
    ingredientes: {
      es: ["Manteca de cacao", "Aceite de oliva", "Miel"],
      en: ["Cocoa butter", "Olive oil", "Honey"]
    },
    preparacion: {
      es: ["Derrite la manteca y mézclala con miel y aceite.", "Deja enfriar y usa como bálsamo."],
      en: ["Melt the butter and mix it with honey and oil.", "Let cool and use as a balm."]
    },
    consejos: {
      es: ["Úsalo en las noches para labios suaves."],
      en: ["Use at night for soft lips."]
    },
    advertencia: {
      es: "⚠️ Asegúrate de no ser alérgico a ninguno de los ingredientes antes de usarlo.",
      en: "⚠️ Make sure you are not allergic to any of the ingredients before using."
    },
    color: "#f8d1e0"
  },
  cabello: {
    id: "cabello",
    titulo: { es: "🦰 Mascarilla Capilar Natural", en: "🦰 Natural Hair Mask" },
    tipo: "cabello",
    img: "img/cabello.jpg",
    ingredientes: {
      es: ["Gel de sábila", "Aceite de ricino", "Romero"],
      en: ["Aloe gel", "Castor oil", "Rosemary"]
    },
    preparacion: {
      es: ["Licúa 4 cdas de sábila con 2 de aceite.", "Agrega infusión de romero."],
      en: ["Blend 4 tbsp of aloe with 2 of oil.", "Add rosemary infusion."]
    },
    consejos: {
      es: ["Aplica en cuero cabelludo limpio.", "Deja actuar 30 min y enjuaga."],
      en: ["Apply on clean scalp.", "Leave for 30 min and rinse."]
    },
    advertencia: {
      es: "⚠️ Evita el contacto con los ojos. Si tu cuero cabelludo es muy sensible, reduce la cantidad de romero.",
      en: "⚠️ Avoid contact with eyes. If your scalp is very sensitive, reduce the amount of rosemary."
    },
    color: "#d9f0c7"
  },
  arcilla: {
    id: "arcilla",
    titulo: { es: "🍃 Mascarilla de Arcilla Verde", en: "🍃 Green Clay Mask" },
    tipo: "grasa",
    img: "img/arcilla.jpg",
    ingredientes: {
      es: ["Arcilla verde en polvo", "Agua destilada o de rosas"],
      en: ["Green clay powder", "Distilled or rose water"]
    },
    preparacion: {
      es: ["Mezcla una cucharada de arcilla con agua hasta formar una pasta.", "Aplica en el rostro evitando el contorno de ojos y labios."],
      en: ["Mix a tablespoon of clay with water to form a paste.", "Apply to the face avoiding the eye and lip contour."]
    },
    consejos: {
      es: ["Deja secar por 10-15 minutos y enjuaga con agua tibia.", "Usar una vez por semana para piel grasa."],
      en: ["Let it dry for 10-15 minutes and rinse with warm water.", "Use once a week for oily skin."]
    },
    advertencia: {
      es: "⚠️ Puede resecar en exceso pieles secas o sensibles. Si sientes tirantez o ardor, enjuaga inmediatamente.",
      en: "⚠️ May overly dry out dry or sensitive skin. If you feel tightness or stinging, rinse immediately."
    },
    color: "#b0cf8d"
  },
  aguacate: {
    id: "aguacate",
    titulo: { es: "🥑 Mascarilla de Aguacate y Miel", en: "🥑 Avocado and Honey Mask" },
    tipo: "seca",
    img: "img/aguacate.jpg",
    ingredientes: {
      es: ["1/2 aguacate maduro", "1 cucharada de miel", "1 cucharadita de aceite de oliva"],
      en: ["1/2 ripe avocado", "1 tablespoon of honey", "1 teaspoon of olive oil"]
    },
    preparacion: {
      es: ["Tritura el aguacate hasta obtener un puré.", "Mezcla con la miel y el aceite hasta que quede suave."],
      en: ["Mash the avocado into a puree.", "Mix with honey and oil until smooth."]
    },
    consejos: {
      es: ["Aplica sobre el rostro limpio y deja actuar por 20 minutos.", "Ideal para nutrir e hidratar la piel seca."],
      en: ["Apply to clean face and leave on for 20 minutes.", "Ideal for nourishing and hydrating dry skin."]
    },
    advertencia: {
      es: "⚠️ El aceite de oliva puede no ser adecuado para pieles con tendencia a acné. Realiza una prueba en una zona pequeña.",
      en: "⚠️ Olive oil may not be suitable for acne-prone skin. Perform a patch test."
    },
    color: "#d9ffc6"
  },
  tonico: {
    id: "tonico",
    titulo: { es: "🌹 Tónico de Manzanilla y Rosas", en: "🌹 Chamomile and Rose Toner" },
    tipo: "sensible",
    img: "img/tonico.jpg",
    ingredientes: {
      es: ["Infusión de manzanilla", "Agua de rosas"],
      en: ["Chamomile infusion", "Rose water"]
    },
    preparacion: {
      es: ["Enfría una taza de infusión de manzanilla.", "Mezcla la infusión con media taza de agua de rosas en una botella con spray."],
      en: ["Cool a cup of chamomile infusion.", "Mix the infusion with half a cup of rose water in a spray bottle."]
    },
    consejos: {
      es: ["Usar después de la limpieza para calmar y tonificar la piel.", "Guardar en el refrigerador para prolongar su vida útil."],
      en: ["Use after cleansing to soothe and tone the skin.", "Store in the refrigerator to prolong its shelf life."]
    },
    advertencia: {
      es: "⚠️ Si la piel se irrita, suspende el uso. Usar solo manzanilla si se es sensible a las rosas.",
      en: "⚠️ If skin irritation occurs, discontinue use. Use chamomile only if you are sensitive to roses."
    },
    color: "#e6e1f0"
  }
};
const textos = {
  es: {
    bienvenida: "Bienvenido a Recetas Naturales STP",
    sub: "💚 Elige tu tipo de piel y descubre recetas caseras perfectas para ti 💚",
    principal: "🌿 Belleza Casera 🌸",
    guardar: "Receta guardada localmente.",
    favoritoA: "Agregada a favoritos.",
    favoritoQ: "Quitada de favoritos.",
    recetaPDF: "Descargando PDF...",
    compartir: "Enlace copiado o compartido",
    testimonio: "¡Gracias por tu testimonio!",
    recetaPers: "Receta personalizada guardada.",
    idioma: "Idioma cambiado.",
    modoOscuro: "Modo oscuro activado",
    modoClaro: "Modo claro activado",
    filtro: "Filtrado por",
    buscar: "Buscar receta...",
    añadir: "➕ Añadir receta",
    testimonioBtn: "💬 Testimonio",
    testimonios: "💬 Testimonios",
    cerrar: "Cerrar ventana",
    guardarBtn: "Guardar",
    ingredientes: "Ingredientes",
    preparacion: "Preparación",
    consejos: "Consejos de aplicación",
    advertencia: "Advertencia"
  },
  en: {
    bienvenida: "Welcome to Natural Recipes STP",
    sub: "💚 Choose your skin type and discover homemade recipes for you 💚",
    principal: "🌿 Homemade Beauty 🌸",
    guardar: "Recipe saved locally.",
    favoritoA: "Added to favorites.",
    favoritoQ: "Removed from favorites.",
    recetaPDF: "Downloading PDF...",
    compartir: "Link copied or shared",
    testimonio: "Thanks for your review!",
    recetaPers: "Custom recipe saved.",
    idioma: "Language changed.",
    modoOscuro: "Dark mode on",
    modoClaro: "Light mode on",
    filtro: "Filtered by",
    buscar: "Search recipe...",
    añadir: "➕ Add recipe",
    testimonioBtn: "💬 Testimony",
    testimonios: "💬 Reviews",
    cerrar: "Close window",
    guardarBtn: "Save",
    ingredientes: "Ingredients",
    preparacion: "Preparation",
    consejos: "Tips",
    advertencia: "Warning"
  }
};
const estado = {
  idioma: localStorage.getItem("idioma") || "es",
  modoOscuro: JSON.parse(localStorage.getItem("modoOscuro") || "false"),
  favoritos: JSON.parse(localStorage.getItem("favoritos") || "[]"),
  recetasPersonalizadas: JSON.parse(localStorage.getItem("recetasPersonalizadas") || "[]"),
  testimonios: JSON.parse(localStorage.getItem("testimonios") || "[]"),
  recetaActual: "",
  recetas: {}
};
const dom = {
  portada: document.getElementById("portada"),
  barraSuperior: document.getElementById("barraSuperior"),
  controlesSuperiores: document.getElementById("controlesSuperiores"),
  botonesRecetas: document.getElementById("botonesRecetas"),
  contenedorRecetaActiva: document.getElementById("contenedorRecetaActiva"),
  accionesReceta: document.getElementById("accionesReceta"),
  notaMedidas: document.getElementById("notaMedidas"),
  pieLegal: document.getElementById("pieLegal"),
  testimonios: document.getElementById("testimonios"),
  modalPersonalizada: document.getElementById("modalPersonalizada"),
  modalTestimonio: document.getElementById("modalTestimonio"),
  toast: document.getElementById("toast"),
  musicaFondo: document.getElementById("musicaFondo"),
  filtroPiel: document.getElementById("filtroPiel"),
  busquedaReceta: document.getElementById("busquedaReceta"),
  favoritoBtn: document.getElementById("favoritoBtn"),
  musicaBtn: document.getElementById("musicaBtn"),
};
document.addEventListener("DOMContentLoaded", () => {
  estado.recetas = { ...recetasBase, ...estado.recetasPersonalizadas.reduce((acc, r) => ({ ...acc, [r.id]: r }), {}) };
  if (estado.modoOscuro) document.body.classList.add("modo-oscuro");
  setIdiomaTextos();
  renderBotonesRecetas();
  renderTestimonios();
  document.getElementById("entrarBtn").addEventListener('click', iniciarApp);
  dom.filtroPiel.addEventListener('change', filtrarRecetas);
  dom.busquedaReceta.addEventListener('input', filtrarRecetas);
  document.getElementById("modoBtn").addEventListener('click', alternarModo);
  document.getElementById("anadirRecetaBtn").addEventListener('click', abrirModalPersonalizada);
  document.getElementById("anadirTestimonioBtn").addEventListener('click', abrirModalTestimonio);
  document.getElementById("favoritoBtn").addEventListener('click', toggleFavorito);
  document.getElementById("musicaBtn").addEventListener('click', alternarMusica);
  document.getElementById("idiomaBtn").addEventListener('click', cambiarIdioma);
  document.getElementById("descargarTxtBtn").addEventListener('click', descargarReceta);
  document.getElementById("descargarPdfBtn").addEventListener('click', descargarRecetaPDF);
  document.getElementById("compartirBtn").addEventListener('click', compartirReceta);
  document.getElementById("guardarPersonalizadaBtn").addEventListener('click', guardarPersonalizada);
  document.getElementById("guardarTestimonioBtn").addEventListener('click', guardarTestimonio);
  document.querySelectorAll('.modal-cerrar').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal');
      if (modal) modal.classList.add('oculto');
    });
  });
});
function setIdiomaTextos() {
  const currentTextos = textos[estado.idioma];
  document.getElementById("bienvenidaTitulo").textContent = currentTextos.bienvenida;
  document.getElementById("bienvenidaSub").textContent = currentTextos.sub;
  document.getElementById("tituloPrincipal").textContent = currentTextos.principal;
  dom.busquedaReceta.placeholder = currentTextos.buscar;
  document.querySelectorAll('[id^="anadirRecetaBtn"]').forEach(b => b.innerText = currentTextos.añadir);
  document.querySelectorAll('[id^="anadirTestimonioBtn"]').forEach(b => b.innerText = currentTextos.testimonioBtn);
  if (dom.modalTestimonio) dom.modalTestimonio.querySelector("h2").innerText = currentTextos.testimonios;
  if (dom.modalPersonalizada) dom.modalPersonalizada.querySelector("h2").innerText = currentTextos.añadir;
  document.querySelectorAll('.modal-cerrar').forEach(b => b.setAttribute("aria-label", currentTextos.cerrar));
  document.querySelectorAll('[id^="guardar"]').forEach(b => b.innerText = currentTextos.guardarBtn);
  if (dom.testimonios) dom.testimonios.querySelector("h2").innerText = currentTextos.testimonios;
}
function renderBotonesRecetas() {
  dom.botonesRecetas.innerHTML = "";
  Object.values(estado.recetas).forEach(receta => {
    const btn = document.createElement("button");
    btn.innerText = receta.titulo[estado.idioma] || receta.titulo["es"];
    btn.setAttribute("tabindex", "0");
    btn.setAttribute("aria-label", btn.innerText);
    btn.onclick = () => mostrarReceta(receta.id);
    if (estado.favoritos.includes(receta.id)) btn.dataset.favorito = "true";
    dom.botonesRecetas.appendChild(btn);
  });
  filtrarRecetas();
}
function renderRecetaActiva() {
  if (!estado.recetaActual) estado.recetaActual = Object.keys(estado.recetas)[0];
  const receta = estado.recetas[estado.recetaActual];
  if (!receta) {
    dom.contenedorRecetaActiva.innerHTML = "<p>Receta no encontrada.</p>";
    return;
  }
  const advertenciaHtml = receta.advertencia ? `
    <div class="advertencia">
      <h3>⚠️ ${textos[estado.idioma].advertencia}</h3>
      <p>${receta.advertencia[estado.idioma]}</p>
    </div>` : "";
  dom.contenedorRecetaActiva.innerHTML = `
    <section class="receta mostrar animada" id="${receta.id}" data-piel="${receta.tipo}" role="region" aria-label="${receta.titulo[estado.idioma] || receta.titulo['es']}">
    <div class="contenido-receta" style="background-color:${receta.color}">
      <img src="${receta.img}" alt="${receta.titulo[estado.idioma] || receta.titulo["es"]}" class="img-receta" loading="lazy">
      <h2>${receta.titulo[estado.idioma] || receta.titulo["es"]}</h2>
      <h3>🌿 ${textos[estado.idioma].ingredientes}:</h3>
      <ul>${receta.ingredientes[estado.idioma].map(i => `<li>✅ ${i}</li>`).join("")}</ul>
      <h3>🛠️ ${textos[estado.idioma].preparacion}:</h3>
      <ol>${receta.preparacion[estado.idioma].map(p => `<li>${p}</li>`).join("")}</ol>
      <h3>📌 ${textos[estado.idioma].consejos}:</h3>
      <ul>${receta.consejos[estado.idioma].map(c => `<li>💡 ${c}</li>`).join("")}</ul>
      ${advertenciaHtml}
    </div>
    </section>
  `;
  setFavoritoBtn();
}
function filtrarRecetas() {
  const tipo = dom.filtroPiel.value;
  const q = dom.busquedaReceta.value.trim().toLowerCase();
  Object.values(estado.recetas).forEach(receta => {
    let visible = (tipo === "todas" || receta.tipo === tipo);
    if (q) {
      const txt = (receta.titulo[estado.idioma] + " " + (receta.ingredientes[estado.idioma] || []).join(" ")).toLowerCase();
      visible = visible && txt.includes(q);
    }
    const btn = Array.from(dom.botonesRecetas.children).find(b => b.innerText === (receta.titulo[estado.idioma] || receta.titulo["es"]));
    if (btn) btn.style.display = visible ? "" : "none";
  });
}
function iniciarApp() {
  dom.portada.classList.add("oculto");
  dom.barraSuperior.classList.remove("oculto");
  dom.botonesRecetas.classList.remove("oculto");
  dom.contenedorRecetaActiva.classList.remove("oculto");
  dom.controlesSuperiores.classList.remove("oculto");
  dom.notaMedidas.classList.remove("oculto");
  dom.pieLegal.classList.remove("oculto");
  dom.accionesReceta.classList.remove("oculto");
  dom.testimonios.classList.remove("oculto");
  mostrarBienvenida();
  mostrarReceta(Object.keys(estado.recetas)[0]);
}
function mostrarReceta(id) {
  estado.recetaActual = id;
  renderRecetaActiva();
  window.scrollTo({ top: 150, behavior: "smooth" });
}
function setFavoritoBtn() {
  const esFav = estado.favoritos.includes(estado.recetaActual);
  dom.favoritoBtn.dataset.favorito = esFav ? "true" : "false";
  dom.favoritoBtn.innerText = esFav ? "★ Favorito" : "🤍 Favorito";
}
function toggleFavorito() {
  const idx = estado.favoritos.indexOf(estado.recetaActual);
  if (idx === -1) {
    estado.favoritos.push(estado.recetaActual);
    showToast(textos[estado.idioma].favoritoA);
  } else {
    estado.favoritos.splice(idx, 1);
    showToast(textos[estado.idioma].favoritoQ);
  }
  localStorage.setItem("favoritos", JSON.stringify(estado.favoritos));
  setFavoritoBtn();
  renderBotonesRecetas();
}
function abrirModalPersonalizada() {
  dom.modalPersonalizada.classList.remove("oculto");
}
function cerrarModalPersonalizada() {
  dom.modalPersonalizada.classList.add("oculto");
}
function guardarPersonalizada() {
  const id = "pers_" + Date.now();
  const titulo = document.getElementById("nuevaTitulo").value.trim();
  const tipo = document.getElementById("nuevaTipo").value.trim().toLowerCase();
  const img = document.getElementById("nuevaImg").value.trim() || "img/personalizada.jpg";
  const ingredientes = document.getElementById("nuevaIngredientes").value.split(",").map(x => x.trim());
  const preparacion = document.getElementById("nuevaPreparacion").value.split(";").map(x => x.trim());
  const consejos = document.getElementById("nuevaConsejos").value.split(";").map(x => x.trim());
  if (!titulo || !tipo || ingredientes.length < 1 || preparacion.length < 1) {
    showToast("Completa toda la información.");
    return;
  }
  const nueva = {
    id,
    titulo: { [estado.idioma]: titulo },
    tipo,
    img,
    ingredientes: { [estado.idioma]: ingredientes },
    preparacion: { [estado.idioma]: preparacion },
    consejos: { [estado.idioma]: consejos.filter(c => c) },
    color: "#e4ffd4",
  };
  estado.recetas[id] = nueva;
  estado.recetasPersonalizadas.push(nueva);
  localStorage.setItem("recetasPersonalizadas", JSON.stringify(estado.recetasPersonalizadas));
  cerrarModalPersonalizada();
  renderBotonesRecetas();
  mostrarReceta(id);
  showToast(textos[estado.idioma].recetaPers);
}
function compartirReceta() {
  const receta = estado.recetas[estado.recetaActual];
  let text = `${receta.titulo[estado.idioma] || receta.titulo["es"]}\n\n`;
  text += `${textos[estado.idioma].ingredientes}: ${receta.ingredientes[estado.idioma].join(", ")}\n`;
  text += `${textos[estado.idioma].preparacion}: ${receta.preparacion[estado.idioma].join(". ")}\n`;
  text += `${textos[estado.idioma].consejos}: ${receta.consejos[estado.idioma].join(". ")}\n`;
  if (receta.advertencia) {
    text += `\n${textos[estado.idioma].advertencia}: ${receta.advertencia[estado.idioma]}\n`;
  }
  if (navigator.share) {
    navigator.share({ title: receta.titulo[estado.idioma], text, url: window.location.href });
    showToast(textos[estado.idioma].compartir);
  } else {
    navigator.clipboard.writeText(text + "\n" + window.location.href);
    showToast(textos[estado.idioma].compartir);
  }
}
function descargarReceta() {
  const receta = estado.recetas[estado.recetaActual];
  let text = `${receta.titulo[estado.idioma] || receta.titulo["es"]}\n\n`;
  text += `${textos[estado.idioma].ingredientes}: ${receta.ingredientes[estado.idioma].join(", ")}\n`;
  text += `${textos[estado.idioma].preparacion}: ${receta.preparacion[estado.idioma].join(". ")}\n`;
  text += `${textos[estado.idioma].consejos}: ${receta.consejos[estado.idioma].join(". ")}\n`;
  if (receta.advertencia) {
    text += `\n${textos[estado.idioma].advertencia}: ${receta.advertencia[estado.idioma]}\n`;
  }
  const blob = new Blob([text], { type: "text/plain" });
  const enlace = document.createElement("a");
  enlace.href = URL.createObjectURL(blob);
  enlace.download = `${estado.recetaActual}-receta.txt`;
  enlace.click();
}
function descargarRecetaPDF() {
  showToast(textos[estado.idioma].recetaPDF);
  const receta = estado.recetas[estado.recetaActual];
  const { jspdf } = window.jspdf;
  const doc = new jspdf();
  let y = 18;
  doc.setFontSize(24);
  doc.text(receta.titulo[estado.idioma] || receta.titulo["es"], 10, y);
  y += 10;
  doc.setFontSize(14);
  doc.text((textos[estado.idioma].ingredientes + ": " + receta.ingredientes[estado.idioma].join(", ")), 10, y);
  y += 10;
  doc.text((textos[estado.idioma].preparacion + ": " + receta.preparacion[estado.idioma].join(". ")), 10, y);
  y += 10;
  doc.text((textos[estado.idioma].consejos + ": " + receta.consejos[estado.idioma].join(". ")), 10, y);
  if (receta.advertencia) {
    y += 10;
    doc.text((textos[estado.idioma].advertencia + ": " + receta.advertencia[estado.idioma]), 10, y);
  }
  doc.save(`${estado.recetaActual}-receta.pdf`);
}
function guardar() { showToast(textos[estado.idioma].guardar); }
function imprimirReceta() { window.print(); }
function mostrarBienvenida() { showToast("🌿 " + (estado.idioma === "es" ? "¡Bienvenido/a a tu recetario natural!" : "Welcome to your natural recipes!"), 2200); }
function showToast(msg, ms = 1800) {
  dom.toast.innerText = msg;
  dom.toast.classList.add("mostrar");
  setTimeout(() => dom.toast.classList.remove("mostrar"), ms);
}
function alternarMusica() {
  if (dom.musicaFondo.paused) {
    dom.musicaFondo.volume = 0.2;
    dom.musicaFondo.play();
    dom.musicaBtn.innerText = "🔊";
    showToast("🎵 Música activada");
  } else {
    dom.musicaFondo.pause();
    dom.musicaBtn.innerText = "🎵";
    showToast("🔇 Música pausada");
  }
}
function alternarModo() {
  estado.modoOscuro = !estado.modoOscuro;
  document.body.classList.toggle("modo-oscuro", estado.modoOscuro);
  localStorage.setItem("modoOscuro", estado.modoOscuro);
  showToast(textos[estado.idioma][estado.modoOscuro ? "modoOscuro" : "modoClaro"]);
}
function cambiarIdioma() {
  estado.idioma = estado.idioma === "es" ? "en" : "es";
  localStorage.setItem("idioma", estado.idioma);
  setIdiomaTextos();
  renderBotonesRecetas();
  renderRecetaActiva();
  filtrarRecetas();
  showToast(textos[estado.idioma].idioma);
}
function abrirModalTestimonio() {
  dom.modalTestimonio.classList.remove("oculto");
}
function cerrarModalTestimonio() {
  dom.modalTestimonio.classList.add("oculto");
}
function guardarTestimonio() {
  const nombre = document.getElementById("nombreTestimonio").value.trim() || "Anónimo";
  const texto = document.getElementById("textoTestimonio").value.trim();
  if (!texto) {
    showToast("Escribe tu experiencia.");
    return;
  }
  estado.testimonios.unshift({ nombre, texto, fecha: new Date().toLocaleDateString() });
  localStorage.setItem("testimonios", JSON.stringify(estado.testimonios));
  cerrarModalTestimonio();
  renderTestimonios();
  showToast(textos[estado.idioma].testimonio);
}
function renderTestimonios() {
  const ul = document.getElementById("listaTestimonios");
  if (!ul) return;
  ul.innerHTML = "";
  estado.testimonios.slice(0, 10).forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${t.nombre}</strong> <em>(${t.fecha})</em>:<br>${t.texto}`;
    ul.appendChild(li);
  });
}
document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    cerrarModalPersonalizada();
    cerrarModalTestimonio();
  }
  if (e.key === "Enter" || e.key === " ") {
    const btn = document.activeElement;
    if (btn && btn.tagName === "BUTTON") btn.click();
  }
});