/* Banco MEP de 9.º: 170 ejercicios autónomos y explicados, adaptados de los cuadernillos oficiales. */
(function () {
  "use strict";
  const source = window.MEP_OFFICIAL_DATA;
  const packs = [
    { id:"2025", tag:"MEP25", items:window.MEP_INLINE_2025, label:"Práctica 2025" },
    { id:"2026-01", tag:"MEP26-I", items:window.MEP_INLINE_2026_01, label:"Primera convocatoria 2026" },
    { id:"2026-02", tag:"MEP26-II", items:window.MEP_INLINE_2026_02, label:"Segunda convocatoria 2026" }
  ];
  const domainLabels = {
    numeros:"Números", geometria:"Geometría", algebra:"Relaciones y Álgebra",
    estadistica:"Estadística y Probabilidad"
  };
  const domainAt = (pack, n) => {
    if (pack === "2025") return n <= 12 ? "numeros" : n <= 30 ? "geometria" : n <= 46 ? "algebra" : "estadistica";
    if (pack === "2026-01") return n <= 12 ? "numeros" : n <= 30 ? "geometria" : n <= 46 ? "algebra" : "estadistica";
    return n <= 13 ? "numeros" : n <= 32 ? "geometria" : n <= 50 ? "algebra" : "estadistica";
  };
  const studyTips = {
    numeros: {
      clue:"Distingue el índice del radical, el signo del radicando, las cotas y los prefijos decimales.",
      memory:"Una raíz de índice par exige radicando no negativo. Las raíces exactas pueden ser racionales; las irracionales tienen decimales infinitos no periódicos. Mega=10⁶, giga=10⁹, nano=10⁻⁹ y pico=10⁻¹².",
      tip:"Comienza por calcular potencias perfectas o convertir a una única unidad. Evalúa cada alternativa en lugar de adivinar por su aspecto."
    },
    geometria: {
      clue:"Distingue lado, altura, hipotenusa, apotema, perímetro, área lateral y área total.",
      memory:"Pitágoras: cateto²+cateto²=hipotenusa². SOH: sen=opuesto/hipotenusa; CAH: cos=adyacente/hipotenusa; TOA: tan=opuesto/adyacente. Área lateral de prisma: perímetro de base × altura.",
      tip:"Marca los lados opuesto y adyacente tomando como referencia el ángulo señalado. Verifica unidades: longitud en m, área en m²."
    },
    algebra: {
      clue:"Identifica el tipo de función, ecuación o expresión y observa qué valor se pide.",
      memory:"Para f(x)=ax²+bx+c, c=f(0); el signo de a determina la apertura de la parábola; Δ=b²−4ac indica la cantidad de raíces reales. Factoriza antes de cancelar fracciones algebraicas.",
      tip:"Sustituye el valor hallado en el enunciado original para comprobarlo. Antes de cancelar factores verifica restricciones del denominador."
    },
    estadistica: {
      clue:"Distingue frecuencias, porcentajes y probabilidades condicionales o conjuntas; fíjate en la población de referencia.",
      memory:"Frecuencia relativa=f/n. Porcentaje=100f/n. Probabilidad conjunta de A y B: casos en la intersección / casos totales. Contar unidades produce variables discretas; medir magnitudes, continuas.",
      tip:"Comprueba el tamaño muestral, los límites de cada intervalo y si la pregunta dice 'y', 'o' o 'dado que'."
    }
  };
  const check = (condition, message) => { if (!condition) throw new Error("MEP9 banco oficial: " + message); };
  check(source && Array.isArray(source.sets), "faltan soluciones oficiales");
  check(packs.every(p => Array.isArray(p.items)), "falta un cuadernillo transcrito");
  const questions = [];
  packs.forEach(pack => {
    const official = source.sets.find(set => set.id === pack.id);
    check(!!official && official.answers.length === pack.items.length, "recuento en " + pack.id);
    pack.items.forEach((item, index) => {
      const n = index + 1, key = pack.id + ":" + n, letter = official.answers[index];
      const exception = key === "2025:42";
      const solution = exception ? {
        topic:"División de polinomios: ítem original con inconsistencia",
        procedure:"La práctica impresa plantea (x² − 8) ÷ (x − 2). Dividimos el polinomio: x²−8=(x−2)(x+2)−4. Por lo tanto, el cociente algebraico completo es x+2−4/(x−2), para x distinto de 2. No puede simplificarse a un polinomio como 2x+4 ni −2x−4, porque queda un resto de −4.",
        justification:"En el material impreso, las alternativas originales no reflejan este resultado. Para evitar enseñarte una respuesta falsa, adaptamos la opción B a 'hay una inconsistencia y ninguna es correcta'. Esta respuesta es correcta para la versión corregida mostrada en el simulador."
      } : source.solutions[key];
      check(!!solution && !!item.question && item.n === n, "ítem o desarrollo inexistente " + key);
      check(item.options.length === official.answerCount && item.options.every(x => typeof x === "string" && x.trim()), "opciones " + key);
      const correctIndex = letter.charCodeAt(0) - 65;
      check(correctIndex >= 0 && correctIndex < item.options.length, "clave fuera de rango " + key);
      const domain = domainAt(pack.id,n), notes = studyTips[domain], correctText = item.options[correctIndex];
      const options = item.options.map((value,i) => ({ id:String.fromCharCode(65+i), text:value }));
      const context = "Pregunta " + n + " de " + pack.label + ". " + domainLabels[domain] + ".";
      const intro = "Primero identifica lo que pide el problema y los datos que proporciona. " +
        "No basta con reconocer una fórmula: hay que aplicarla a las cantidades de este ejercicio.";
      const fullExplanation = [
        "CONTEXTO\n" + context,
        "PASO 1 — Interpretación del problema\n" + intro + " " + item.question,
        "PASO 2 — Desarrollo matemático completo\n" + solution.procedure,
        "PASO 3 — Comprobación y selección de la respuesta\n" +
          "El valor o la afirmación que satisface el enunciado es: " + correctText +
          " (alternativa " + letter + "). " + solution.justification,
        "PASO 4 — Cómo resolver problemas semejantes\n" + notes.memory +
          " " + notes.tip
      ].join("\n\n");
      const explanations = {};
      options.forEach(opt => {
        if (opt.id === letter) {
          explanations[opt.id] = "CORRECTA — " + opt.text +
            ". Esta respuesta es consistente con el desarrollo: " + solution.procedure +
            " " + solution.justification;
        } else {
          explanations[opt.id] = "INCORRECTA — " + opt.text +
            ". No es la opción que satisface todos los datos del enunciado. La alternativa que sí cumple es " +
            letter + ": " + correctText + ". Para comprobar la diferencia, repite el razonamiento matemático: " +
            solution.procedure + " " + solution.justification +
            " Consejo: " + notes.tip;
        }
      });
      questions.push({
        id:pack.tag + "-" + String(n).padStart(3,"0"),
        sourceId:key,
        sourceYear:official.year,
        sourceConvocatoria:official.convocatoria,
        domain, domainName:domainLabels[domain],
        topic:solution.topic, difficulty:n <= 13 ? "easy" : n < 35 ? "medium" : "hard",
        type:"single-choice",
        question:item.question,
        options,correctAnswers:[letter],
        explanation:fullExplanation,
        optionExplanations:explanations,
        keyClue:notes.clue,
        mentalModel:notes.memory,
        examTip:notes.tip,
        reference:pack.label + ", ítem " + n + " (adaptación didáctica del MEP)",
        sourceUrl:official.url,
        tags:[domain,pack.id,"practica-mep","explicacion-detallada"]
      });
    });
  });
  check(questions.length === 170 && new Set(questions.map(q => q.id)).size === 170, "170 IDs únicos requeridos");
  window.COURSE_QUESTIONS = questions;
})();
