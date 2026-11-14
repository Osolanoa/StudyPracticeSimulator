(() => {
  "use strict";
  const data = window.MEP_OFFICIAL_DATA;
  const tabs = document.getElementById("packs");
  const item = document.getElementById("item");
  const nav = document.getElementById("navigator");
  const summary = document.getElementById("summary");
  const progressBar = document.getElementById("progress");
  const pdfFrame = document.getElementById("pdf-frame");
  const pdfOpen = document.getElementById("pdf-open");
  const paperTitle = document.getElementById("paper-title");
  const togglePdf = document.getElementById("toggle-pdf");
  const STORAGE = "study_mep9_official_practices_v1";
  let packId = "2026-02";
  let current = 1;
  let saved = {};
  const esc = value => String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
  if (!data || !Array.isArray(data.sets) || data.sets.length !== 3 ||
      data.sets.reduce((sum, set) => sum + set.answers.length, 0) !== 170 ||
      data.sets.some(set => set.answers.some(a => !["A","B","C","D"].slice(0, set.answerCount).includes(a)))) {
    document.getElementById("main").textContent = "No se pudo validar el banco de claves. No se mostrarán resultados sin verificar.";
    return;
  }
  try { saved = JSON.parse(localStorage.getItem(STORAGE) || "{}") || {}; }
  catch (_) { saved = {}; }
  const active = () => data.sets.find(set => set.id === packId);
  const progress = () => {
    if (!saved[packId] || typeof saved[packId] !== "object") saved[packId] = { answers: {}, checked: {} };
    if (!saved[packId].answers) saved[packId].answers = {};
    if (!saved[packId].checked) saved[packId].checked = {};
    return saved[packId];
  };
  const persist = () => { try { localStorage.setItem(STORAGE, JSON.stringify(saved)); } catch (_) {} };
  const observed = n => !!data.reviewNotes?.[packId + ":" + n];
  const solved = (n, p = progress()) => !!p.checked[n];
  const correct = (n, p = progress()) => !observed(n) && solved(n, p) && p.answers[n] === active().answers[n - 1];
  const label = n => "Ítem " + n;
  function category(n) {
    if (packId === "2025") return n <= 12 ? "Números" : n <= 30 ? "Geometría" : n <= 47 ? "Relaciones y Álgebra" : "Estadística y Probabilidad";
    if (packId === "2026-01") return n <= 12 ? "Números" : n <= 30 ? "Geometría" : n <= 47 ? "Relaciones y Álgebra" : "Estadística y Probabilidad";
    return n <= 13 ? "Números" : n <= 32 ? "Geometría" : n <= 50 ? "Relaciones y Álgebra" : "Estadística y Probabilidad";
  }
  function guidance(n) {
    const group = category(n);
    const methods = {
      "Números": [
        "Identifica primero qué se pide: clasificar un número, ubicar una raíz, comparar valores o convertir unidades. Transcribe los símbolos directamente del PDF, especialmente el índice de la raíz, el signo negativo y los exponentes.",
        "Para comparar raíces positivas, busca potencias perfectas cercanas. Para clasificar raíces de índice par, verifica que el radicando sea no negativo. En conversiones, convierte ambos prefijos a potencias de diez antes de operar.",
        "Revisa después cada alternativa numéricamente. Un número irracional tiene decimales no periódicos; un decimal periódico sí puede expresarse como fracción. En este ítem todavía falta documentar el desarrollo algebraico individual."
      ],
      "Geometría": [
        "Haz un esquema con los lados, ángulos y unidades que figuran en el documento oficial. Identifica qué segmento o superficie se está pidiendo antes de elegir una fórmula.",
        "En triángulos rectángulos usa Pitágoras o SOH-CAH-TOA según los datos disponibles. En pirámides y prismas distingue área lateral de total. Si la figura tiene ángulos sin un lado opuesto conocido, puede corresponder la ley de senos o cosenos.",
        "Sustituye las medidas del gráfico original, calcula con las aproximaciones indicadas por el MEP y revisa las unidades. Aún no está comprobada una solución particular para este ítem: consulta la figura en el PDF."
      ],
      "Relaciones y Álgebra": [
        "Identifica si el ejercicio pide una propiedad de función, una factorización, un residuo, una equivalencia de fracciones algebraicas o soluciones de una ecuación. Verifica el enunciado exacto en el PDF porque los exponentes y radicales cambian la operación.",
        "Si es cuadrática, utiliza el vértice, el discriminante o completa cuadrados según convenga; si es factorización, extrae el factor común y busca identidades notables. Si es residuo de P(x) entre (x−a), evalúa P(a).",
        "Comprueba el resultado reinsertándolo en la expresión inicial o contrastándolo con la gráfica. No se ha validado todavía un procedimiento particular para este número de ítem."
      ],
      "Estadística y Probabilidad": [
        "Lee cuidadosamente el total de observaciones y las categorías de la tabla o gráfica del documento. Decide si te piden frecuencia absoluta, frecuencia relativa, porcentaje, variable discreta/continua o probabilidad.",
        "La frecuencia relativa es frecuencia de clase dividida entre total; el porcentaje resulta de multiplicar esa fracción por cien. Para la probabilidad conjunta «A y B», busca la intersección de fila y columna y divide entre el total de participantes si la selección es general.",
        "Distingue conteos (discretos) de mediciones (continuas) y comprueba que las probabilidades estén entre cero y uno. La solución detallada individual de este ítem sigue pendiente de comprobación."
      ]
    };
    return methods[group] || methods["Números"];
  }
  function renderTabs() {
    tabs.innerHTML = data.sets.map(set => '<button type="button" class="pack-tab ' + (set.id === packId ? 'active' : '') +
      '" data-pack="' + esc(set.id) + '" aria-pressed="' + (set.id === packId) + '">' +
      '<strong>' + esc(set.id === "2025" ? "2025" : set.id === "2026-01" ? "2026 · I convocatoria" : "2026 · II convocatoria") +
      '</strong><small>' + set.answers.length + ' ítems · ' + set.answerCount + ' opciones</small></button>').join("");
  }
  function renderSummary() {
    const set = active(), p = progress();
    const checked = set.answers.reduce((count, _, i) => count + Number(solved(i + 1, p)), 0);
    const hits = set.answers.reduce((count, _, i) => count + Number(correct(i + 1, p)), 0);
    const scorable = set.answers.reduce((count, _, i) => count + Number(!observed(i + 1) && solved(i + 1, p)), 0);
    summary.innerHTML = '<div><span class="overline">TU PROGRESO · ' + esc(set.title) + '</span>' +
      '<p><strong>' + checked + ' / ' + set.answers.length + '</strong> corregidas <span class="summary-sep">·</span> ' +
      '<strong>' + hits + '</strong> correctas <span class="summary-sep">·</span> <strong>' +
      (scorable ? Math.round(100 * hits / scorable) : 0) + '%</strong> de acierto entre las puntuables <span class="summary-sep">·</span> ' +
      '<strong>' + (set.answers.length - Object.keys(data.reviewNotes || {}).filter(k => k.startsWith(packId + ":")).length) +
      '</strong> ítems puntuables</p></div>' +
      '<button class="outline reset" id="reset" type="button">Reiniciar esta práctica</button>';
    progressBar.style.width = (checked * 100 / set.answers.length) + "%";
    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("¿Borrar únicamente las respuestas de " + set.title + "?")) {
        saved[packId] = { answers: {}, checked: {} };
        persist(); current = 1; render();
      }
    });
  }
  function renderItem() {
    const set = active(), p = progress();
    const answer = p.answers[current] || "";
    const checked = solved(current, p);
    const right = set.answers[current - 1];
    const detail = data.solutions[packId + ":" + current];
    const reviewNote = data.reviewNotes?.[packId + ":" + current];
    const buttons = ["A","B","C","D"].slice(0, set.answerCount).map(letter =>
      '<button class="choice ' + (answer === letter ? 'chosen' : '') +
      (checked && letter === right ? ' expected' : '') +
      (checked && answer === letter && answer !== right ? ' mistaken' : '') +
      '" type="button" data-answer="' + letter + '" aria-pressed="' + (letter === answer) +
      '"><span class="letter">' + letter + '</span><span>Opción ' + letter + ' del ítem ' + current + ' en el documento</span></button>'
    ).join("");
    const outcome = checked ? '<section class="feedback ' + (reviewNote ? "observed" : (correct(current, p) ? "success" : "error")) + '">' +
      '<h3>' + (reviewNote ? "Ítem observado · no puntuable" : (correct(current, p) ? "✓ Respuesta correcta" : "Respuesta para repasar")) + '</h3>' +
      '<p>Tu selección: <b>' + esc(answer) + '</b> · Solucionario MEP: <b>' + right + '</b>.</p>' +
      (reviewNote ?
        '<div class="worked pending"><p class="overline">REVISIÓN DE CALIDAD DEL ENUNCIADO</p><p>' +
        esc(reviewNote) + '</p></div>' :
        detail && detail.verified ?
        '<div class="worked"><p class="overline">DESARROLLO INDIVIDUAL VERIFICADO</p><h3>' + esc(detail.topic) + '</h3>' +
        '<p>' + esc(detail.procedure) + '</p><p>' + esc(detail.justification) + '</p></div>' :
        '<div class="worked pending"><p class="overline">GUÍA CONCEPTUAL · DESARROLLO INDIVIDUAL PENDIENTE</p>' +
        guidance(current).map(par => '<p>' + esc(par) + '</p>').join("") + '</div>') +
      '</section>' : "";
    item.innerHTML = '<p class="overline">' + esc(set.convocatoria) + ' · ' + esc(category(current)) + '</p>' +
      '<div class="item-title"><div><h2>Ítem ' + current + ' <span>de ' + set.answers.length + '</span></h2>' +
      '<p class="muted">Busca el número <strong>' + current + '</strong> en el PDF y responde aquí con la misma letra.</p></div>' +
      '<label class="jump-label">Ir al ítem <input id="jump" type="number" min="1" max="' + set.answers.length +
      '" value="' + current + '" aria-label="Número de ítem"></label></div>' +
      '<div class="choices">' + buttons + '</div>' +
      '<button id="check" class="primary" type="button" ' + (!answer || checked ? "disabled" : "") +
      '>' + (checked ? "Respuesta corregida" : "Corregir respuesta") + '</button>' +
      outcome + '<div class="stepper"><button id="previous" class="outline" type="button" ' + (current === 1 ? "disabled" : "") +
      '>← Anterior</button><button id="next" class="outline" type="button" ' + (current === set.answers.length ? "disabled" : "") +
      '>Siguiente →</button></div>';
    item.querySelectorAll("[data-answer]").forEach(btn => btn.addEventListener("click", () => {
      p.answers[current] = btn.dataset.answer; delete p.checked[current]; persist(); render();
    }));
    document.getElementById("check").addEventListener("click", () => {
      if (!p.answers[current]) return;
      p.checked[current] = true; persist(); render();
    });
    document.getElementById("previous").addEventListener("click", () => go(current - 1));
    document.getElementById("next").addEventListener("click", () => go(current + 1));
    document.getElementById("jump").addEventListener("change", e => go(+e.target.value));
  }
  function go(number) {
    if (!Number.isInteger(number) || number < 1 || number > active().answers.length) return;
    current = number; render();
  }
  function renderNavigator() {
    const p = progress(), set = active();
    nav.innerHTML = '<div class="navigator-heading"><h3>Navegador de ítems</h3><small>Gris: sin corregir · Plata: correcta · Borde: revisar</small></div><div class="numbers">' +
      set.answers.map((_, i) => {
        const n = i + 1, status = observed(n) ? "observed" : (solved(n, p) ? (correct(n, p) ? "pass" : "fail") : (p.answers[n] ? "picked" : ""));
        return '<button type="button" data-number="' + n + '" aria-label="Ir al ítem ' + n + '" ' +
          'aria-current="' + (current === n ? "true" : "false") + '" class="' + status +
          (current === n ? " current" : "") + '">' + n + '</button>';
      }).join("") + '</div>';
    nav.querySelectorAll("[data-number]").forEach(btn => btn.addEventListener("click", () => go(+btn.dataset.number)));
  }
  function render() { renderTabs(); renderSummary(); renderItem(); renderNavigator(); }
  function selectPack(id) {
    const set = data.sets.find(x => x.id === id);
    if (!set) return;
    packId = id; current = 1;
    paperTitle.textContent = set.title;
    pdfOpen.href = set.url;
    pdfFrame.src = set.url;
    render();
  }
  tabs.addEventListener("click", e => {
    const button = e.target.closest("[data-pack]");
    if (button && button.dataset.pack !== packId) selectPack(button.dataset.pack);
  });
  togglePdf.addEventListener("click", () => {
    const hidden = pdfFrame.hidden = !pdfFrame.hidden;
    togglePdf.textContent = hidden ? "Mostrar vista del PDF" : "Ocultar vista del PDF";
  });
  selectPack(packId);
})();
