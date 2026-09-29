/* Ejercicios originales; IDs y orden estables para el progreso local. */
window.COURSE_QUESTIONS = [
  {
    "id": "MEP9-NUM-001",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Clasificación de números",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "¿Cuál de estos números es irracional?",
    "options": [
      {
        "id": "A",
        "text": "√49"
      },
      {
        "id": "B",
        "text": "√2"
      },
      {
        "id": "C",
        "text": "−3/4"
      },
      {
        "id": "D",
        "text": "0,125"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Un número racional puede escribirse como una fracción de enteros con denominador distinto de cero.\n\n√49 = 7, −3/4 ya es una fracción y 0,125 = 1/8. Los tres son racionales.\n\nEn cambio, √2 no es una fracción de enteros: su desarrollo decimal es infinito y no periódico. Por eso es irracional. Que aparezca una raíz no basta para clasificar un número; primero se revisa si esa raíz es exacta.",
    "optionExplanations": {
      "A": "Incorrecta. √49 = 7 = 7/1; tener el símbolo de raíz no lo convierte en irracional.",
      "B": "Correcta. √2 tiene decimales infinitos sin un período repetitivo y no puede expresarse como fracción de enteros.",
      "C": "Incorrecta. −3/4 es una fracción de enteros: es racional aunque sea negativo.",
      "D": "Incorrecta. 0,125 = 125/1000 = 1/8; un decimal finito es racional."
    },
    "keyClue": "Hay raíces exactas y una raíz no exacta de un entero positivo.",
    "mentalModel": "Racional: fracción de enteros.\nIrracional: no se expresa como esa fracción.",
    "examTip": "Calcula las raíces exactas antes de clasificar los números.",
    "reference": "Clasificación de números",
    "tags": [
      "numeros",
      "clasificacion-de-numeros"
    ]
  },
  {
    "id": "MEP9-GEO-001",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Teorema de Pitágoras",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Un triángulo rectángulo tiene catetos de 6 cm y 8 cm. ¿Cuánto mide la hipotenusa?",
    "options": [
      {
        "id": "A",
        "text": "14 cm"
      },
      {
        "id": "B",
        "text": "100 cm"
      },
      {
        "id": "C",
        "text": "10 cm"
      },
      {
        "id": "D",
        "text": "7 cm"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "En un triángulo rectángulo, la hipotenusa es el lado opuesto al ángulo de 90°. Aplicamos Pitágoras:\n\nc² = a² + b²\nc² = 6² + 8²\nc² = 36 + 64 = 100\nc = √100 = 10.\n\nLa hipotenusa mide 10 cm. El resultado es mayor que cada cateto, como debe ocurrir. El número 100 representa c² en cm²; todavía hay que sacar la raíz para obtener una longitud.",
    "optionExplanations": {
      "A": "Incorrecta. 14 es 6 + 8; Pitágoras suma cuadrados, no longitudes directamente.",
      "B": "Incorrecta. 100 es c²; falta calcular su raíz cuadrada.",
      "C": "Correcta. 6² + 8² = 100 y √100 = 10 cm.",
      "D": "Incorrecta. 7 cm sería menor que el cateto de 8 cm; la hipotenusa debe ser el lado mayor."
    },
    "keyClue": "Triángulo rectángulo con los dos catetos conocidos.",
    "mentalModel": "cateto² + cateto² = hipotenusa².",
    "examTip": "Identifica la hipotenusa antes de sustituir valores.",
    "reference": "Teorema de Pitágoras",
    "tags": [
      "geometria",
      "teorema-de-pitagoras"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "6 cm",
        "vertical": "8 cm",
        "hypotenuse": "c"
      },
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-001",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Evaluación de expresiones cuadráticas",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Si f(x) = x² − 3x + 2, ¿cuánto vale f(−1)?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "−2"
      },
      {
        "id": "C",
        "text": "4"
      },
      {
        "id": "D",
        "text": "6"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Sustituimos cada x por −1 usando paréntesis:\nf(−1) = (−1)² − 3(−1) + 2.\n\nCalculamos las potencias y los productos antes de sumar:\n(−1)² = 1 y −3(−1) = 3.\n\nEntonces f(−1) = 1 + 3 + 2 = 6.\n\nEl valor de entrada es −1 y el valor de salida es 6. Los paréntesis ayudan a conservar el signo del número que reemplaza a x.",
    "optionExplanations": {
      "A": "Incorrecta. Puede surgir al tratar −3(−1) como −3; el producto de dos negativos es positivo.",
      "B": "Incorrecta. No respeta los signos de la potencia y del producto.",
      "C": "Incorrecta. Omite un término o calcula (−1)² con signo incorrecto.",
      "D": "Correcta. 1 + 3 + 2 = 6 después de sustituir x = −1."
    },
    "keyClue": "Se pide el valor de una función en x = −1.",
    "mentalModel": "Sustituir → potencias y productos → sumas.",
    "examTip": "Escribe el número negativo entre paréntesis al sustituirlo.",
    "reference": "Evaluación de expresiones cuadráticas",
    "tags": [
      "algebra",
      "evaluacion-de-expresiones-cuadraticas"
    ]
  },
  {
    "id": "MEP9-EST-001",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Variables estadísticas",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "En una encuesta se registra el medio de transporte que usa cada estudiante: bus, automóvil, bicicleta o caminata. ¿Qué tipo de variable es?",
    "options": [
      {
        "id": "A",
        "text": "Cuantitativa continua"
      },
      {
        "id": "B",
        "text": "Cualitativa"
      },
      {
        "id": "C",
        "text": "Cuantitativa discreta"
      },
      {
        "id": "D",
        "text": "Numérica porque hay cuatro categorías"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Los valores de la variable son categorías: bus, automóvil, bicicleta y caminata. Describen cómo viaja cada persona; no son medidas ni cantidades.\n\nPor eso la variable es cualitativa. Es posible contar cuántas personas pertenecen a cada categoría, pero ese conteo es la frecuencia y no cambia el tipo de variable original. Tener cuatro categorías no significa que cada respuesta sea un número.",
    "optionExplanations": {
      "A": "Incorrecta. Una variable continua sería una medida, como la distancia recorrida, no el nombre del transporte.",
      "B": "Correcta. Las respuestas son categorías y no cantidades.",
      "C": "Incorrecta. Una variable discreta sería un conteo, como el número de viajes.",
      "D": "Incorrecta. La cantidad de categorías no convierte las respuestas en valores numéricos."
    },
    "keyClue": "Las respuestas son nombres de categorías.",
    "mentalModel": "Categorías → cualitativa; cantidades o medidas → cuantitativa.",
    "examTip": "Clasifica lo que se registra de cada estudiante, no el conteo final de respuestas.",
    "reference": "Variables estadísticas",
    "tags": [
      "estadistica",
      "variables-estadisticas"
    ]
  },
  {
    "id": "MEP9-NUM-002",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Orden de números reales",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Cuál lista ordena −3/2, −1,4 y √4 de menor a mayor?",
    "options": [
      {
        "id": "A",
        "text": "−1,4 < −3/2 < √4"
      },
      {
        "id": "B",
        "text": "√4 < −3/2 < −1,4"
      },
      {
        "id": "C",
        "text": "−3/2 < −1,4 < √4"
      },
      {
        "id": "D",
        "text": "−3/2 < √4 < −1,4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Conviene expresar los números en formas fáciles de comparar:\n−3/2 = −1,5 y √4 = 2.\n\nEn la recta numérica, −1,5 está a la izquierda de −1,4. Entre números negativos, el que está más lejos de cero hacia la izquierda es menor. El número positivo 2 es mayor que ambos.\n\nEntonces −1,5 < −1,4 < 2. Al volver a las expresiones originales, obtenemos −3/2 < −1,4 < √4.",
    "optionExplanations": {
      "A": "Incorrecta. Invierte el orden de los negativos: −1,5 es menor que −1,4.",
      "B": "Incorrecta. Coloca el número positivo 2 antes de números negativos.",
      "C": "Correcta. −3/2 = −1,5 y √4 = 2, por lo que este orden coincide con la recta numérica.",
      "D": "Incorrecta. Ubica 2 entre dos números negativos; 2 debe quedar al final."
    },
    "keyClue": "Se pide ordenar de menor a mayor, incluyendo números negativos.",
    "mentalModel": "Más a la izquierda → menor número.",
    "examTip": "Convierte fracciones y raíces exactas para comparar; cuida el orden de los negativos.",
    "reference": "Orden de números reales",
    "tags": [
      "numeros",
      "orden-de-numeros-reales"
    ],
    "visual": {
      "type": "number-line",
      "min": -2,
      "max": 3,
      "points": [
        {
          "value": -1.5,
          "label": "−3/2"
        },
        {
          "value": -1.4,
          "label": "−1,4"
        },
        {
          "value": 2,
          "label": "√4"
        }
      ],
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-002",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Cateto desconocido",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "La hipotenusa de un triángulo rectángulo mide 13 cm y un cateto mide 5 cm. ¿Cuánto mide el otro cateto?",
    "options": [
      {
        "id": "A",
        "text": "12 cm"
      },
      {
        "id": "B",
        "text": "18 cm"
      },
      {
        "id": "C",
        "text": "√194 cm"
      },
      {
        "id": "D",
        "text": "8 cm"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Esta vez conocemos la hipotenusa y un cateto. Si b es el otro cateto:\n\n5² + b² = 13²\n25 + b² = 169\nb² = 169 − 25 = 144\nb = √144 = 12.\n\nEl cateto mide 12 cm y es menor que la hipotenusa de 13 cm. La resta aparece al despejar b²; sumar 13² + 5² calcularía otra hipotenusa, que no es lo solicitado.",
    "optionExplanations": {
      "A": "Correcta. 13² − 5² = 144 y √144 = 12 cm.",
      "B": "Incorrecta. Suma 13 + 5, y produciría un cateto mayor que la hipotenusa.",
      "C": "Incorrecta. Suma los cuadrados conocidos; aquí debe restarse el cuadrado del cateto.",
      "D": "Incorrecta. 13 − 5 = 8 no aplica Pitágoras; se restan cuadrados y luego se saca raíz."
    },
    "keyClue": "Se conoce la hipotenusa y se busca un cateto.",
    "mentalModel": "cateto = √(hipotenusa² − otro cateto²).",
    "examTip": "Un cateto calculado debe ser menor que la hipotenusa.",
    "reference": "Cateto desconocido",
    "tags": [
      "geometria",
      "cateto-desconocido"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "5 cm",
        "vertical": "b",
        "hypotenuse": "13 cm"
      },
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-002",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Factor común",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "¿Cuál es la factorización completa de 6x² + 9x?",
    "options": [
      {
        "id": "A",
        "text": "3x(2x + 3)"
      },
      {
        "id": "B",
        "text": "3(2x² + 3x)"
      },
      {
        "id": "C",
        "text": "x(6x + 9)"
      },
      {
        "id": "D",
        "text": "3x(2x² + 3)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Ambos términos tienen como factor común el número 3 y la variable x. Extraemos 3x:\n\n6x²/(3x) = 2x y 9x/(3x) = 3.\nPor eso 6x² + 9x = 3x(2x + 3).\n\nDentro del paréntesis ya no queda un factor común no trivial. Para comprobar, distribuimos:\n3x · 2x + 3x · 3 = 6x² + 9x.\n\nLas expresiones que solo extraen 3 o solo extraen x son equivalentes, pero no constituyen la factorización completa pedida.",
    "optionExplanations": {
      "A": "Correcta. Extrae el máximo factor común 3x y deja 2x + 3 sin factor común adicional.",
      "B": "Incorrecta. Es equivalente, pero todavía puede extraerse x del paréntesis.",
      "C": "Incorrecta. Es equivalente, pero dentro queda un factor común 3.",
      "D": "Incorrecta. Al distribuir produce 6x³ + 9x, no la expresión original."
    },
    "keyClue": "Se pide factorización completa, y ambos términos contienen 3x.",
    "mentalModel": "Factor común = divisor numérico común × variables comunes.",
    "examTip": "Comprueba si el paréntesis todavía tiene un factor que pueda extraerse.",
    "reference": "Factor común",
    "tags": [
      "algebra",
      "factor-comun"
    ]
  },
  {
    "id": "MEP9-EST-002",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Frecuencia absoluta",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Las cantidades de libros leídos por seis estudiantes fueron 2, 3, 2, 4, 3 y 2. ¿Cuál es la frecuencia absoluta del valor 2?",
    "options": [
      {
        "id": "A",
        "text": "2"
      },
      {
        "id": "B",
        "text": "6"
      },
      {
        "id": "C",
        "text": "1/2"
      },
      {
        "id": "D",
        "text": "3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "La frecuencia absoluta de un valor cuenta cuántas veces aparece.\n\nEn la lista 2, 3, 2, 4, 3, 2, el número 2 aparece en la primera, tercera y sexta posición: son 3 veces.\n\nPor tanto, su frecuencia absoluta es 3. El valor estudiado es 2 libros, pero eso no significa que su frecuencia también sea 2. La frecuencia relativa sería 3/6 = 1/2; aquí se pide el conteo, no la proporción.",
    "optionExplanations": {
      "A": "Incorrecta. 2 es el valor de la variable, no cuántas veces aparece.",
      "B": "Incorrecta. 6 es la cantidad total de observaciones.",
      "C": "Incorrecta. 1/2 es la frecuencia relativa de 2, no su frecuencia absoluta.",
      "D": "Correcta. El número 2 aparece exactamente tres veces."
    },
    "keyClue": "Se pide frecuencia absoluta de un valor específico.",
    "mentalModel": "Frecuencia absoluta = número de apariciones.",
    "examTip": "Cuenta las repeticiones; no confundas el dato con su frecuencia.",
    "reference": "Frecuencia absoluta",
    "tags": [
      "estadistica",
      "frecuencia-absoluta"
    ]
  },
  {
    "id": "MEP9-GEO-003",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Aplicación de Pitágoras",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Una escalera de 10 m se apoya en una pared vertical. Su base está a 6 m de la pared y el suelo es horizontal. ¿A qué altura llega?",
    "options": [
      {
        "id": "A",
        "text": "16 m"
      },
      {
        "id": "B",
        "text": "4 m"
      },
      {
        "id": "C",
        "text": "64 m"
      },
      {
        "id": "D",
        "text": "8 m"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "La pared y el suelo forman un ángulo recto. La escalera es la hipotenusa de 10 m, la distancia horizontal es un cateto de 6 m y la altura h es el otro.\n\nh² + 6² = 10²\nh² = 100 − 36 = 64\nh = √64 = 8.\n\nLlega a 8 m de altura. El dibujo ayuda a distinguir la escalera inclinada de la altura vertical. Restar las longitudes, 10 − 6, no representa la relación entre los lados.",
    "optionExplanations": {
      "A": "Incorrecta. Suma la escalera y la distancia al muro; la altura no se obtiene así.",
      "B": "Incorrecta. 10 − 6 = 4 omite los cuadrados de Pitágoras.",
      "C": "Incorrecta. 64 es h², no la altura; falta √64.",
      "D": "Correcta. √(10² − 6²) = 8 m."
    },
    "keyClue": "Pared vertical y suelo horizontal; la escalera es el lado inclinado.",
    "mentalModel": "Escalera = hipotenusa; altura = cateto.",
    "examTip": "Convierte la situación en un triángulo y asigna cada medida a su lado.",
    "reference": "Aplicación de Pitágoras",
    "tags": [
      "geometria",
      "aplicacion-de-pitagoras"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "6 m",
        "vertical": "h",
        "hypotenuse": "10 m"
      },
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-003",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Factorización de trinomios",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Factoriza x² + 5x + 6.",
    "options": [
      {
        "id": "A",
        "text": "(x + 1)(x + 6)"
      },
      {
        "id": "B",
        "text": "(x + 2)(x + 3)"
      },
      {
        "id": "C",
        "text": "(x − 2)(x − 3)"
      },
      {
        "id": "D",
        "text": "(x + 5)(x + 1)"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Buscamos dos números cuyo producto sea 6 y cuya suma sea 5.\n\n2 · 3 = 6 y 2 + 3 = 5.\nEntonces x² + 5x + 6 = (x + 2)(x + 3).\n\nLo comprobamos multiplicando:\n(x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.\n\nAmbos signos son positivos porque la suma y el producto buscados son positivos. No basta con acertar el producto; también debe coincidir el coeficiente del término x.",
    "optionExplanations": {
      "A": "Incorrecta. Da x² + 7x + 6: acierta el producto, pero no la suma.",
      "B": "Correcta. 2 y 3 suman 5 y multiplican 6.",
      "C": "Incorrecta. Da x² − 5x + 6; el término lineal tiene signo equivocado.",
      "D": "Incorrecta. Da x² + 6x + 5; no coinciden ni la suma ni el término constante."
    },
    "keyClue": "Trinomio de coeficiente principal 1.",
    "mentalModel": "Producto = término constante; suma = coeficiente de x.",
    "examTip": "Verifica suma y producto de los dos números.",
    "reference": "Factorización de trinomios",
    "tags": [
      "algebra",
      "factorizacion-de-trinomios"
    ]
  },
  {
    "id": "MEP9-NUM-003",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Estimación de raíces",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Entre cuáles enteros consecutivos se encuentra √50?",
    "options": [
      {
        "id": "A",
        "text": "Entre 5 y 6"
      },
      {
        "id": "B",
        "text": "Entre 6 y 7"
      },
      {
        "id": "C",
        "text": "Entre 8 y 9"
      },
      {
        "id": "D",
        "text": "Entre 7 y 8"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Buscamos dos cuadrados perfectos consecutivos que rodeen a 50.\n7² = 49 y 8² = 64.\n\nComo 49 < 50 < 64, al tomar raíces cuadradas positivas queda 7 < √50 < 8. No hace falta calcular todos los decimales. √50 está muy cerca de 7 porque 50 está muy cerca de 49, pero no es exactamente 7.",
    "optionExplanations": {
      "A": "Incorrecta. 5² = 25 y 6² = 36; 50 no está entre esos cuadrados.",
      "B": "Incorrecta. 6² = 36 y 7² = 49; 50 es mayor que ambos.",
      "C": "Incorrecta. 8² = 64 ya es mayor que 50, de modo que √50 es menor que 8.",
      "D": "Correcta. 49 < 50 < 64 implica 7 < √50 < 8."
    },
    "keyClue": "La raíz no es exacta y se buscan enteros consecutivos.",
    "mentalModel": "a² < n < b² → a < √n < b, si a y b son positivos.",
    "examTip": "Rodea el radicando con cuadrados perfectos.",
    "reference": "Estimación de raíces",
    "tags": [
      "numeros",
      "estimacion-de-raices"
    ]
  },
  {
    "id": "MEP9-GEO-004",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Distancia en el plano",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Cuál es la distancia entre A(1, 2) y B(5, 5)?",
    "options": [
      {
        "id": "A",
        "text": "7 unidades"
      },
      {
        "id": "B",
        "text": "5 unidades"
      },
      {
        "id": "C",
        "text": "25 unidades"
      },
      {
        "id": "D",
        "text": "√7 unidades"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Las diferencias horizontal y vertical forman los catetos de un triángulo rectángulo:\nΔx = 5 − 1 = 4 y Δy = 5 − 2 = 3.\n\nPor Pitágoras:\nd = √[(5 − 1)² + (5 − 2)²]\nd = √(4² + 3²) = √(16 + 9) = √25 = 5.\n\nLa distancia directa entre los puntos mide 5 unidades. Sumar 4 + 3 da el recorrido por dos segmentos perpendiculares, no el segmento recto que une A con B.",
    "optionExplanations": {
      "A": "Incorrecta. 4 + 3 = 7 mide un recorrido horizontal y vertical, no la distancia directa.",
      "B": "Correcta. √(4² + 3²) = 5 unidades.",
      "C": "Incorrecta. 25 es d²; todavía debe sacarse la raíz.",
      "D": "Incorrecta. Se suman diferencias sin elevarlas al cuadrado antes de sacar raíz."
    },
    "keyClue": "Dos puntos con coordenadas conocidas.",
    "mentalModel": "Distancia = hipotenusa del triángulo de diferencias.",
    "examTip": "Resta las coordenadas del mismo tipo y eleva ambas diferencias al cuadrado.",
    "reference": "Distancia en el plano",
    "tags": [
      "geometria",
      "distancia-en-el-plano"
    ],
    "visual": {
      "type": "coordinate-plane",
      "range": {
        "x": [
          0,
          6
        ],
        "y": [
          0,
          6
        ]
      },
      "points": [
        {
          "x": 1,
          "y": 2,
          "label": "A(1, 2)"
        },
        {
          "x": 5,
          "y": 5,
          "label": "B(5, 5)"
        }
      ],
      "connect": true,
      "showRightPath": true,
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-004",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Ecuaciones por factorización",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "¿Cuáles son las soluciones de x² − 5x + 6 = 0?",
    "options": [
      {
        "id": "A",
        "text": "x = −2 y x = −3"
      },
      {
        "id": "B",
        "text": "x = 1 y x = 6"
      },
      {
        "id": "C",
        "text": "x = 2 y x = 3"
      },
      {
        "id": "D",
        "text": "Solo x = 2"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Factorizamos buscando dos números que sumen −5 y cuyo producto sea 6: son −2 y −3.\n\nx² − 5x + 6 = (x − 2)(x − 3).\nEntonces (x − 2)(x − 3) = 0.\n\nUn producto es cero cuando al menos uno de sus factores es cero:\nx − 2 = 0 → x = 2.\nx − 3 = 0 → x = 3.\n\nSustituyendo, 4 − 10 + 6 = 0 y 9 − 15 + 6 = 0. Ambas soluciones cumplen la ecuación.",
    "optionExplanations": {
      "A": "Incorrecta. Confunde los números usados en los factores con las soluciones: x − 2 = 0 da x = 2.",
      "B": "Incorrecta. 1 y 6 tienen producto 6, pero su suma no es 5.",
      "C": "Correcta. Los factores x − 2 y x − 3 se anulan en 2 y 3.",
      "D": "Incorrecta. x = 2 sí funciona, pero también x = 3; falta una solución."
    },
    "keyClue": "Trinomio igualado a cero y factorizable.",
    "mentalModel": "Producto cero → uno u otro factor es cero.",
    "examTip": "Después de factorizar, iguala cada factor a cero por separado.",
    "reference": "Ecuaciones por factorización",
    "tags": [
      "algebra",
      "ecuaciones-por-factorizacion"
    ]
  },
  {
    "id": "MEP9-EST-003",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Frecuencia relativa",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "En la tabla de deportes preferidos, ¿cuál es la frecuencia relativa de natación?",
    "options": [
      {
        "id": "A",
        "text": "0,30"
      },
      {
        "id": "B",
        "text": "0,60"
      },
      {
        "id": "C",
        "text": "6"
      },
      {
        "id": "D",
        "text": "0,20"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Sumamos todas las frecuencias para obtener el total:\n10 + 6 + 4 = 20 estudiantes.\n\nLa frecuencia relativa de natación es su frecuencia absoluta dividida entre el total:\nfᵣ = 6/20 = 0,30.\n\nEsto significa que el 30 % de las personas eligió natación. No se divide entre el número de categorías ni entre la frecuencia de otro deporte. Si sumáramos las frecuencias relativas de todas las categorías, obtendríamos 1.",
    "optionExplanations": {
      "A": "Correcta. 6/20 = 0,30, equivalente al 30 %.",
      "B": "Incorrecta. 0,60 divide entre 10, que no es el total de estudiantes.",
      "C": "Incorrecta. 6 es la frecuencia absoluta, sin dividir entre el total.",
      "D": "Incorrecta. 0,20 corresponde a ciclismo: 4/20."
    },
    "keyClue": "La tabla da conteos y se pide una proporción.",
    "mentalModel": "Frecuencia relativa = frecuencia absoluta/total.",
    "examTip": "Calcula primero el total de todas las categorías.",
    "reference": "Frecuencia relativa",
    "tags": [
      "estadistica",
      "frecuencia-relativa"
    ],
    "visual": {
      "type": "frequency-table",
      "headers": [
        "Deporte",
        "Frecuencia absoluta"
      ],
      "rows": [
        [
          "Fútbol",
          10
        ],
        [
          "Natación",
          6
        ],
        [
          "Ciclismo",
          4
        ]
      ],
      "placement": "question"
    }
  },
  {
    "id": "MEP9-NUM-004",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Raíz cuadrada principal",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "¿Cuál es el valor de √144?",
    "options": [
      {
        "id": "A",
        "text": "12"
      },
      {
        "id": "B",
        "text": "−12"
      },
      {
        "id": "C",
        "text": "72"
      },
      {
        "id": "D",
        "text": "±12"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "La raíz cuadrada principal de 144 es el número no negativo cuyo cuadrado es 144.\n12 × 12 = 144.\nPor eso √144 = 12.\n\nAunque (−12)² también vale 144, el símbolo √144 representa solamente la raíz principal, que es positiva. La expresión x² = 144 sí tendría dos soluciones, x = 12 y x = −12. Distinguir una raíz de una ecuación evita añadir un signo que no corresponde.",
    "optionExplanations": {
      "A": "Correcta. 12 es no negativo y 12² = 144.",
      "B": "Incorrecta. −12 es solución de x² = 144, pero no es la raíz cuadrada principal.",
      "C": "Incorrecta. 72 se obtiene dividiendo 144 entre 2; sacar raíz no es dividir entre 2.",
      "D": "Incorrecta. ±12 corresponde a las soluciones de x² = 144, no al valor de √144."
    },
    "keyClue": "Se pide el valor del radical √144, no resolver x² = 144.",
    "mentalModel": "√n es la raíz principal no negativa.",
    "examTip": "El símbolo de raíz cuadrada no incluye automáticamente ±.",
    "reference": "Raíz cuadrada principal",
    "tags": [
      "numeros",
      "raiz-cuadrada-principal"
    ]
  },
  {
    "id": "MEP9-GEO-005",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Distancia con coordenadas negativas",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Calcula la distancia entre P(−2, −1) y Q(1, 3).",
    "options": [
      {
        "id": "A",
        "text": "√13 unidades"
      },
      {
        "id": "B",
        "text": "7 unidades"
      },
      {
        "id": "C",
        "text": "5 unidades"
      },
      {
        "id": "D",
        "text": "25 unidades"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Al restar coordenadas negativas, cuidamos los signos:\nΔx = 1 − (−2) = 3.\nΔy = 3 − (−1) = 4.\n\nEstas separaciones son las longitudes de los catetos de un triángulo rectángulo. Entonces:\nd = √(3² + 4²) = √(9 + 16) = √25 = 5.\n\nLa distancia es positiva y vale 5 unidades. Aunque las coordenadas puedan ser negativas, una distancia entre puntos distintos no es negativa.",
    "optionExplanations": {
      "A": "Incorrecta. Una diferencia horizontal de 1 − 2 = −1 sería incorrecta: hay que restar −2.",
      "B": "Incorrecta. 3 + 4 es el recorrido por los ejes, no el segmento directo.",
      "C": "Correcta. Las diferencias son 3 y 4; por Pitágoras la distancia es 5.",
      "D": "Incorrecta. 25 corresponde al cuadrado de la distancia."
    },
    "keyClue": "Se restan coordenadas negativas en ambas diferencias.",
    "mentalModel": "Restar un negativo equivale a sumar.",
    "examTip": "Escribe paréntesis alrededor de la coordenada negativa antes de restar.",
    "reference": "Distancia con coordenadas negativas",
    "tags": [
      "geometria",
      "distancia-con-coordenadas-negativas"
    ],
    "visual": {
      "type": "coordinate-plane",
      "range": {
        "x": [
          -3,
          3
        ],
        "y": [
          -2,
          5
        ]
      },
      "points": [
        {
          "x": -2,
          "y": -1,
          "label": "P(−2, −1)"
        },
        {
          "x": 1,
          "y": 3,
          "label": "Q(1, 3)"
        }
      ],
      "connect": true,
      "showRightPath": true,
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-005",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Diferencia de cuadrados",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Qué expresión es equivalente a x² − 16?",
    "options": [
      {
        "id": "A",
        "text": "(x − 4)²"
      },
      {
        "id": "B",
        "text": "(x − 8)(x + 2)"
      },
      {
        "id": "C",
        "text": "(x − 16)(x + 1)"
      },
      {
        "id": "D",
        "text": "(x − 4)(x + 4)"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "El 16 es 4², así que la expresión es una diferencia de cuadrados:\nx² − 4².\n\nUsamos la identidad a² − b² = (a − b)(a + b):\nx² − 16 = (x − 4)(x + 4).\n\nAl multiplicar, los términos 4x y −4x se cancelan, y queda x² − 16. En cambio, elevar x − 4 al cuadrado introduce un término −8x que no aparece en la expresión original.",
    "optionExplanations": {
      "A": "Incorrecta. (x − 4)² = x² − 8x + 16, con un término lineal y un signo constante distintos.",
      "B": "Incorrecta. Produce x² − 6x − 16; sobra un término lineal.",
      "C": "Incorrecta. Produce x² − 15x − 16; sobra un término lineal.",
      "D": "Correcta. Es la identidad (x − 4)(x + 4) = x² − 4²."
    },
    "keyClue": "Resta de dos cuadrados perfectos.",
    "mentalModel": "a² − b² = (a − b)(a + b).",
    "examTip": "Una diferencia de cuadrados genera factores con signos opuestos.",
    "reference": "Diferencia de cuadrados",
    "tags": [
      "algebra",
      "diferencia-de-cuadrados"
    ]
  },
  {
    "id": "MEP9-EST-004",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Completar una tabla de frecuencias",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Una encuesta de 30 estudiantes produjo la tabla de meriendas preferidas. ¿Cuál debe ser la frecuencia que falta para fruta?",
    "options": [
      {
        "id": "A",
        "text": "22"
      },
      {
        "id": "B",
        "text": "18"
      },
      {
        "id": "C",
        "text": "10"
      },
      {
        "id": "D",
        "text": "20"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Cada estudiante eligió una sola merienda, por lo que la suma de las tres frecuencias debe ser 30.\n\nLas dos frecuencias conocidas suman:\n8 + 12 = 20.\n\nEntonces la que falta es:\n30 − 20 = 10.\n\nComprobamos: 8 + 12 + 10 = 30. El número faltante es una frecuencia absoluta y se expresa como un conteo entero de estudiantes; no es un porcentaje ni la cantidad total de categorías.",
    "optionExplanations": {
      "A": "Incorrecta. Resta solo 8 al total y omite los 12 estudiantes de la otra categoría.",
      "B": "Incorrecta. Resta solo 12 al total y omite los 8 estudiantes.",
      "C": "Correcta. 30 − (8 + 12) = 10.",
      "D": "Incorrecta. 20 es la suma conocida, no la frecuencia que falta."
    },
    "keyClue": "El total de la encuesta es 30 y una frecuencia está incompleta.",
    "mentalModel": "Suma de frecuencias absolutas = total de datos.",
    "examTip": "Suma las frecuencias conocidas antes de restar al total.",
    "reference": "Completar una tabla de frecuencias",
    "tags": [
      "estadistica",
      "completar-una-tabla-de-frecuencias"
    ],
    "visual": {
      "type": "frequency-table",
      "headers": [
        "Merienda",
        "Frecuencia absoluta"
      ],
      "rows": [
        [
          "Galletas",
          8
        ],
        [
          "Sándwich",
          12
        ],
        [
          "Fruta",
          "?"
        ]
      ],
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-006",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Grados a radianes",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Expresa 150° en radianes.",
    "options": [
      {
        "id": "A",
        "text": "5π/6 rad"
      },
      {
        "id": "B",
        "text": "3π/5 rad"
      },
      {
        "id": "C",
        "text": "5π/3 rad"
      },
      {
        "id": "D",
        "text": "π/6 rad"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Media vuelta equivale a 180° o π radianes. Para pasar de grados a radianes, multiplicamos por π/180:\n\n150° · π/180° = 150π/180 = 5π/6.\n\nAsí, 150° = 5π/6 rad. Como 150° es menor que 180°, el resultado debe ser menor que π. Esa comparación ayuda a detectar una conversión con el factor invertido o con un denominador incorrecto.",
    "optionExplanations": {
      "A": "Correcta. 150π/180 se simplifica a 5π/6.",
      "B": "Incorrecta. No utiliza la equivalencia de 180° con π radianes.",
      "C": "Incorrecta. 5π/3 es mayor que π y equivale a 300°, no a 150°.",
      "D": "Incorrecta. π/6 equivale a 30°."
    },
    "keyClue": "Se pasa de grados a radianes.",
    "mentalModel": "180° = π rad; grados × π/180.",
    "examTip": "Comprueba si el ángulo obtenido representa la misma fracción de una vuelta.",
    "reference": "Grados a radianes",
    "tags": [
      "geometria",
      "grados-a-radianes"
    ],
    "visual": {
      "type": "angle",
      "degrees": 150,
      "label": "150°",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-006",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Producto nulo y factor común",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Resuelve 2x² − 8x = 0.",
    "options": [
      {
        "id": "A",
        "text": "x = 0 y x = 4"
      },
      {
        "id": "B",
        "text": "Solo x = 4"
      },
      {
        "id": "C",
        "text": "x = 0 y x = −4"
      },
      {
        "id": "D",
        "text": "x = 2 y x = 4"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Extraemos el factor común 2x:\n2x² − 8x = 2x(x − 4).\n\nLa ecuación queda 2x(x − 4) = 0.\nEntonces 2x = 0 o x − 4 = 0.\nObtenemos x = 0 y x = 4.\n\nNo conviene dividir primero entre x, porque x podría valer cero. Esa división haría desaparecer una solución válida. Comprobamos: ambos valores hacen que 2x² − 8x sea cero.",
    "optionExplanations": {
      "A": "Correcta. Ambos factores pueden anularse: x = 0 o x = 4.",
      "B": "Incorrecta. Pierde x = 0 al dividir entre una variable que podría ser cero.",
      "C": "Incorrecta. El factor x − 4 se anula en 4, no en −4.",
      "D": "Incorrecta. x = 2 da 8 − 16 = −8, por lo que no cumple la ecuación."
    },
    "keyClue": "Ambos términos contienen x y la expresión está igualada a cero.",
    "mentalModel": "Extrae factor común antes de dividir por una variable.",
    "examTip": "Dividir entre x puede eliminar la solución x = 0.",
    "reference": "Producto nulo y factor común",
    "tags": [
      "algebra",
      "producto-nulo-y-factor-comun"
    ]
  },
  {
    "id": "MEP9-NUM-005",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Raíz cúbica",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Cuánto vale ∛(−125)?",
    "options": [
      {
        "id": "A",
        "text": "5"
      },
      {
        "id": "B",
        "text": "−25"
      },
      {
        "id": "C",
        "text": "−5"
      },
      {
        "id": "D",
        "text": "No tiene valor real"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El índice 3 indica que buscamos un número que, multiplicado por sí mismo tres veces, produzca −125.\n(−5)³ = (−5)(−5)(−5) = 25(−5) = −125.\n\nPor tanto, ∛(−125) = −5. Una raíz de índice impar sí puede tener un radicando negativo. El problema de las raíces negativas en los números reales aparece con índices pares, como √(−125), no con la raíz cúbica.",
    "optionExplanations": {
      "A": "Incorrecta. 5³ = 125, con signo positivo, distinto de −125.",
      "B": "Incorrecta. (−25)³ = −15 625; la raíz no se obtiene dividiendo entre 5.",
      "C": "Correcta. (−5)³ = −125, así que esta es la raíz cúbica.",
      "D": "Incorrecta. Las raíces de índice impar de números negativos sí son reales."
    },
    "keyClue": "El índice de la raíz es impar y el radicando es negativo.",
    "mentalModel": "Raíz cúbica: el cubo del resultado devuelve el radicando.",
    "examTip": "Verifica una raíz cúbica elevando el resultado al cubo.",
    "reference": "Raíz cúbica",
    "tags": [
      "numeros",
      "raiz-cubica"
    ]
  },
  {
    "id": "MEP9-GEO-007",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Radianes a grados",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "¿A cuántos grados equivale 3π/4 rad?",
    "options": [
      {
        "id": "A",
        "text": "45°"
      },
      {
        "id": "B",
        "text": "270°"
      },
      {
        "id": "C",
        "text": "90°"
      },
      {
        "id": "D",
        "text": "135°"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Para convertir radianes a grados, usamos 180°/π:\n\n(3π/4) · (180°/π) = (3 · 180°)/4 = 540°/4 = 135°.\n\nEl factor π se cancela. El resultado tiene sentido porque 3π/4 está entre π/2 y π; por tanto, el ángulo está entre 90° y 180°. No se utiliza π/180 en esta dirección de la conversión.",
    "optionExplanations": {
      "A": "Incorrecta. 45° corresponde a π/4; falta el factor 3 del numerador.",
      "B": "Incorrecta. 270° corresponde a 3π/2, el doble del ángulo indicado.",
      "C": "Incorrecta. 90° corresponde a π/2, no a 3π/4.",
      "D": "Correcta. 3 · 180/4 = 135°."
    },
    "keyClue": "Se pasa de radianes a grados.",
    "mentalModel": "Radianes × 180/π = grados.",
    "examTip": "Cancela π y revisa si el ángulo queda en el intervalo esperado.",
    "reference": "Radianes a grados",
    "tags": [
      "geometria",
      "radianes-a-grados"
    ],
    "visual": {
      "type": "angle",
      "degrees": 135,
      "label": "3π/4 rad",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-007",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Completar el cuadrado",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Qué forma obtenemos al completar el cuadrado en x² + 6x + 5?",
    "options": [
      {
        "id": "A",
        "text": "(x + 6)² − 31"
      },
      {
        "id": "B",
        "text": "(x + 3)² + 5"
      },
      {
        "id": "C",
        "text": "(x + 3)² − 4"
      },
      {
        "id": "D",
        "text": "(x − 3)² − 4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Tomamos la mitad del coeficiente de x: 6/2 = 3. Su cuadrado es 9.\n\nAñadimos y restamos 9 para no cambiar el valor:\nx² + 6x + 5 = x² + 6x + 9 − 9 + 5.\n\nLos primeros tres términos forman (x + 3)² y las constantes restantes suman −4:\nx² + 6x + 5 = (x + 3)² − 4.\n\nAl expandir, x² + 6x + 9 − 4 reproduce el trinomio original. Esta forma también ayuda a localizar el vértice de su parábola.",
    "optionExplanations": {
      "A": "Incorrecta. (x + 6)² produce un término 12x, no 6x.",
      "B": "Incorrecta. Añade 9 al completar el cuadrado sin compensarlo; el término constante terminaría en 14.",
      "C": "Correcta. (x + 3)² − 4 = x² + 6x + 5.",
      "D": "Incorrecta. (x − 3)² produce −6x, con signo contrario."
    },
    "keyClue": "Completar el cuadrado de un trinomio con término 6x.",
    "mentalModel": "x² + bx = (x + b/2)² − (b/2)².",
    "examTip": "Añade y resta la misma cantidad para conservar la expresión.",
    "reference": "Completar el cuadrado",
    "tags": [
      "algebra",
      "completar-el-cuadrado"
    ]
  },
  {
    "id": "MEP9-EST-005",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Lectura de histograma",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "El histograma muestra tiempos de recorrido en minutos. Cada intervalo incluye su extremo izquierdo y excluye el derecho. ¿Cuántos estudiantes tardaron menos de 20 minutos?",
    "options": [
      {
        "id": "A",
        "text": "7"
      },
      {
        "id": "B",
        "text": "5"
      },
      {
        "id": "C",
        "text": "20"
      },
      {
        "id": "D",
        "text": "10"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Menos de 20 minutos incluye dos intervalos completos: de 0 a menos de 10 y de 10 a menos de 20.\n\nSus frecuencias son 3 y 7. Las sumamos:\n3 + 7 = 10 estudiantes.\n\nNo incluimos el intervalo que comienza en 20 porque se piden tiempos estrictamente menores que 20. El histograma agrupa los datos en intervalos; la altura de cada barra indica cuántos datos pertenecen al intervalo, no un tiempo individual.",
    "optionExplanations": {
      "A": "Incorrecta. 7 cuenta solo el intervalo de 10 a menos de 20.",
      "B": "Incorrecta. 5 es la frecuencia de uno de los intervalos que empieza en 20 o 30.",
      "C": "Incorrecta. 20 es el total del grupo, incluyendo tiempos de 20 o más.",
      "D": "Correcta. Los dos primeros intervalos aportan 3 + 7 = 10 estudiantes."
    },
    "keyClue": "Se piden todos los tiempos menores que 20, no una sola barra.",
    "mentalModel": "Suma las frecuencias de todos los intervalos que cumplen.",
    "examTip": "Revisa si el extremo del intervalo está incluido o excluido.",
    "reference": "Lectura de histograma",
    "tags": [
      "estadistica",
      "lectura-de-histograma"
    ],
    "visual": {
      "type": "histogram",
      "edges": [
        0,
        10,
        20,
        30,
        40
      ],
      "frequencies": [
        3,
        7,
        5,
        5
      ],
      "xLabel": "Tiempo (minutos)",
      "yLabel": "Frecuencia absoluta",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-NUM-006",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Propiedades de potencias",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Calcula (2³ · 2⁴) / 2².",
    "options": [
      {
        "id": "A",
        "text": "2⁹ = 512"
      },
      {
        "id": "B",
        "text": "2⁵ = 32"
      },
      {
        "id": "C",
        "text": "2³ = 8"
      },
      {
        "id": "D",
        "text": "2¹² = 4096"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Todas las potencias tienen la misma base, 2.\n\nAl multiplicar potencias de igual base, se suman los exponentes:\n2³ · 2⁴ = 2⁽³⁺⁴⁾ = 2⁷.\n\nAl dividir potencias de igual base, se restan los exponentes:\n2⁷ / 2² = 2⁽⁷⁻²⁾ = 2⁵.\n\nFinalmente, 2⁵ = 32. No se multiplican los exponentes en esta operación; esa regla pertenece a una potencia elevada a otra potencia.",
    "optionExplanations": {
      "A": "Incorrecta. Suma también el exponente del denominador; al dividir debe restarse.",
      "B": "Correcta. 3 + 4 − 2 = 5, y 2⁵ = 32.",
      "C": "Incorrecta. No combina correctamente los tres exponentes: el exponente final es 5.",
      "D": "Incorrecta. Multiplica exponentes, una regla que no corresponde al producto de potencias de igual base."
    },
    "keyClue": "Producto y cociente de potencias con la misma base.",
    "mentalModel": "aᵐ · aⁿ / aᵖ = aᵐ⁺ⁿ⁻ᵖ, con a ≠ 0.",
    "examTip": "Suma al multiplicar y resta al dividir potencias de igual base.",
    "reference": "Propiedades de potencias",
    "tags": [
      "numeros",
      "propiedades-de-potencias"
    ]
  },
  {
    "id": "MEP9-GEO-008",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Seno",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Respecto al ángulo θ de un triángulo rectángulo, el cateto opuesto mide 3 cm y la hipotenusa 5 cm. ¿Cuánto vale sen θ?",
    "options": [
      {
        "id": "A",
        "text": "4/5"
      },
      {
        "id": "B",
        "text": "5/3"
      },
      {
        "id": "C",
        "text": "3/5"
      },
      {
        "id": "D",
        "text": "3/4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El seno relaciona el cateto opuesto al ángulo con la hipotenusa:\nsen θ = opuesto/hipotenusa.\n\nSustituimos las medidas indicadas:\nsen θ = 3/5 = 0,6.\n\nNo hace falta conocer el otro cateto para calcular esta razón. El valor es menor que 1 porque, en un triángulo rectángulo, el cateto es más corto que la hipotenusa. El cateto opuesto depende de cuál ángulo se esté considerando.",
    "optionExplanations": {
      "A": "Incorrecta. 4/5 sería el coseno si el cateto adyacente mide 4 cm.",
      "B": "Incorrecta. Invierte la razón; el seno de un ángulo agudo no puede ser mayor que 1.",
      "C": "Correcta. El seno usa opuesto entre hipotenusa: 3/5.",
      "D": "Incorrecta. 3/4 usa el cateto adyacente como denominador y correspondería a la tangente."
    },
    "keyClue": "Cateto opuesto e hipotenusa respecto a θ.",
    "mentalModel": "sen = opuesto/hipotenusa.",
    "examTip": "Marca primero θ para identificar el cateto opuesto.",
    "reference": "Seno",
    "tags": [
      "geometria",
      "seno"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "4 cm",
        "vertical": "3 cm",
        "hypotenuse": "5 cm"
      },
      "angle": "θ",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-008",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Resolver completando el cuadrado",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Resuelve x² + 4x − 5 = 0 completando el cuadrado.",
    "options": [
      {
        "id": "A",
        "text": "x = −1 y x = 5"
      },
      {
        "id": "B",
        "text": "x = 1 y x = −5"
      },
      {
        "id": "C",
        "text": "Solo x = 1"
      },
      {
        "id": "D",
        "text": "x = 2 y x = −2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Pasamos la constante al otro lado:\nx² + 4x = 5.\n\nLa mitad de 4 es 2 y 2² = 4. Sumamos 4 a ambos lados:\nx² + 4x + 4 = 9 → (x + 2)² = 9.\n\nEntonces x + 2 = ±3.\nSi x + 2 = 3, x = 1.\nSi x + 2 = −3, x = −5.\n\nAmbos valores cumplen la ecuación. Al resolver una ecuación cuadrática por raíces, el signo ± permite conservar las dos posibilidades.",
    "optionExplanations": {
      "A": "Incorrecta. Cambia los signos de las soluciones; ni −1 ni 5 anulan el trinomio.",
      "B": "Correcta. (x + 2)² = 9 da x = −2 ± 3, es decir, 1 y −5.",
      "C": "Incorrecta. Omite la posibilidad x + 2 = −3.",
      "D": "Incorrecta. 2 y −2 no resultan de −2 ± 3."
    },
    "keyClue": "Se pide resolver usando un cuadrado perfecto.",
    "mentalModel": "(x + h)² = k → x + h = ±√k.",
    "examTip": "Al sumar para completar el cuadrado, modifica ambos lados de la ecuación.",
    "reference": "Resolver completando el cuadrado",
    "tags": [
      "algebra",
      "resolver-completando-el-cuadrado"
    ]
  },
  {
    "id": "MEP9-EST-006",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Proporción en un histograma",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "El histograma muestra horas semanales de estudio. Cada intervalo incluye su extremo izquierdo y excluye el derecho. ¿Qué porcentaje estudió al menos 10 horas?",
    "options": [
      {
        "id": "A",
        "text": "40 %"
      },
      {
        "id": "B",
        "text": "60 %"
      },
      {
        "id": "C",
        "text": "50 %"
      },
      {
        "id": "D",
        "text": "10 %"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Al menos 10 horas significa 10 o más, por lo que contamos los intervalos de 10 a menos de 15 y de 15 a menos de 20.\n\nLa frecuencia favorable es 8 + 2 = 10 estudiantes.\nEl total es 4 + 6 + 8 + 2 = 20.\n\nLa proporción es 10/20 = 0,5. Para convertirla en porcentaje, multiplicamos por 100:\n0,5 · 100 = 50 %.\n\nLa frecuencia absoluta 10 no significa por sí sola 10 %; el porcentaje depende del total.",
    "optionExplanations": {
      "A": "Incorrecta. 40 % cuenta solo los 8 estudiantes del intervalo de 10 a menos de 15.",
      "B": "Incorrecta. 60 % no corresponde a la suma de las barras que cumplen la condición.",
      "C": "Correcta. (8 + 2)/(4 + 6 + 8 + 2) · 100 = 50 %.",
      "D": "Incorrecta. 10 es el conteo favorable; no es el porcentaje."
    },
    "keyClue": "Se pide un porcentaje de varios intervalos juntos.",
    "mentalModel": "Porcentaje = frecuencia favorable/total × 100.",
    "examTip": "Primero suma los intervalos favorables y luego divide entre todos los datos.",
    "reference": "Proporción en un histograma",
    "tags": [
      "estadistica",
      "proporcion-en-un-histograma"
    ],
    "visual": {
      "type": "histogram",
      "edges": [
        0,
        5,
        10,
        15,
        20
      ],
      "frequencies": [
        4,
        6,
        8,
        2
      ],
      "xLabel": "Horas semanales",
      "yLabel": "Frecuencia absoluta",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-009",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Coseno",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Respecto al ángulo θ, el cateto adyacente mide 12 cm y la hipotenusa 13 cm. ¿Cuánto vale cos θ?",
    "options": [
      {
        "id": "A",
        "text": "12/13"
      },
      {
        "id": "B",
        "text": "5/13"
      },
      {
        "id": "C",
        "text": "13/12"
      },
      {
        "id": "D",
        "text": "5/12"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "El coseno de un ángulo agudo en un triángulo rectángulo es:\ncos θ = adyacente/hipotenusa.\n\nComo el cateto junto a θ mide 12 cm y la hipotenusa mide 13 cm:\ncos θ = 12/13.\n\nEl otro cateto mide 5 cm, pues 13² − 12² = 25, pero no se necesita calcularlo para el coseno. Es importante no confundir el lado adyacente con la hipotenusa: ambos tocan el ángulo, pero la hipotenusa es el lado opuesto al ángulo recto.",
    "optionExplanations": {
      "A": "Correcta. El cateto adyacente se divide entre la hipotenusa.",
      "B": "Incorrecta. 5/13 usa el cateto opuesto y corresponde al seno.",
      "C": "Incorrecta. Invierte el cociente; 13/12 es mayor que 1.",
      "D": "Incorrecta. 5/12 corresponde a la tangente, no al coseno."
    },
    "keyClue": "Cateto adyacente e hipotenusa conocidos.",
    "mentalModel": "cos = adyacente/hipotenusa.",
    "examTip": "El adyacente es un cateto, aunque la hipotenusa también toque el ángulo.",
    "reference": "Coseno",
    "tags": [
      "geometria",
      "coseno"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "12 cm",
        "vertical": "5 cm",
        "hypotenuse": "13 cm"
      },
      "angle": "θ",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-009",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "División de polinomios",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Para x ≠ −1, simplifica (x² + 3x + 2)/(x + 1).",
    "options": [
      {
        "id": "A",
        "text": "x + 1"
      },
      {
        "id": "B",
        "text": "x² + 2"
      },
      {
        "id": "C",
        "text": "x + 3"
      },
      {
        "id": "D",
        "text": "x + 2"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "El numerador se factoriza:\nx² + 3x + 2 = (x + 1)(x + 2).\n\nPara x ≠ −1, el factor x + 1 es distinto de cero y puede cancelarse:\n[(x + 1)(x + 2)]/(x + 1) = x + 2.\n\nTambién es una división de polinomios de residuo cero, pues (x + 1)(x + 2) reconstruye el numerador. La condición x ≠ −1 permanece porque la expresión original no está definida allí.",
    "optionExplanations": {
      "A": "Incorrecta. Repite el divisor, pero (x + 1)² no reproduce el numerador.",
      "B": "Incorrecta. Intenta dividir términos sin considerar la suma completa del denominador.",
      "C": "Incorrecta. No cumple la comprobación: (x + 1)(x + 3) = x² + 4x + 3.",
      "D": "Correcta. El factor x + 1 se cancela y queda x + 2."
    },
    "keyClue": "Numerador factorizable con el mismo factor que el denominador.",
    "mentalModel": "Dividendo = divisor × cociente + residuo.",
    "examTip": "Comprueba un cociente multiplicándolo por el divisor.",
    "reference": "División de polinomios",
    "tags": [
      "algebra",
      "division-de-polinomios"
    ]
  },
  {
    "id": "MEP9-NUM-007",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Signos y potencias",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "¿Cuánto vale (−3)² − (−3²)?",
    "options": [
      {
        "id": "A",
        "text": "0"
      },
      {
        "id": "B",
        "text": "−18"
      },
      {
        "id": "C",
        "text": "9"
      },
      {
        "id": "D",
        "text": "18"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Los paréntesis cambian qué parte se eleva al cuadrado.\n\nEn (−3)², la base completa es −3:\n(−3)² = (−3)(−3) = 9.\n\nEn −3², primero se calcula 3² y luego se aplica el signo menos:\n−3² = −9.\n\nEntonces (−3)² − (−3²) = 9 − (−9) = 9 + 9 = 18. Restar un número negativo equivale a sumar su opuesto.",
    "optionExplanations": {
      "A": "Incorrecta. Trata (−3)² y −3² como iguales; los paréntesis hacen que sean distintos.",
      "B": "Incorrecta. Cambia el signo de la resta: 9 − (−9) es positivo.",
      "C": "Incorrecta. Considera solamente el primer término; falta restar −9.",
      "D": "Correcta. (−3)² = 9, −3² = −9 y 9 − (−9) = 18."
    },
    "keyClue": "Hay una potencia con base entre paréntesis y otra sin ellos.",
    "mentalModel": "(−a)² = a²; −a² = −(a²).",
    "examTip": "Antes de operar, identifica exactamente la base de cada potencia.",
    "reference": "Signos y potencias",
    "tags": [
      "numeros",
      "signos-y-potencias"
    ]
  },
  {
    "id": "MEP9-GEO-010",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Tangente",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Un triángulo rectángulo tiene, respecto a θ, cateto opuesto de 6 cm y cateto adyacente de 8 cm. ¿Cuánto vale tan θ?",
    "options": [
      {
        "id": "A",
        "text": "4/3"
      },
      {
        "id": "B",
        "text": "3/5"
      },
      {
        "id": "C",
        "text": "4/5"
      },
      {
        "id": "D",
        "text": "3/4"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "La tangente compara los dos catetos:\ntan θ = opuesto/adyacente.\n\nSustituyendo:\ntan θ = 6/8 = 3/4.\n\nLa hipotenusa no interviene en esta razón. Si se calcula por Pitágoras, mide 10 cm, y las razones 6/10 y 8/10 corresponderían al seno y al coseno. Simplificar 6/8 dividiendo numerador y denominador entre 2 conserva su valor.",
    "optionExplanations": {
      "A": "Incorrecta. 8/6 = 4/3 invierte opuesto y adyacente.",
      "B": "Incorrecta. 6/10 = 3/5 usa la hipotenusa y sería el seno.",
      "C": "Incorrecta. 8/10 = 4/5 sería el coseno.",
      "D": "Correcta. 6/8 = 3/4 es opuesto entre adyacente."
    },
    "keyClue": "Se conocen los dos catetos respecto al ángulo.",
    "mentalModel": "tan = opuesto/adyacente.",
    "examTip": "Para tangente utiliza los catetos; no incluyas la hipotenusa.",
    "reference": "Tangente",
    "tags": [
      "geometria",
      "tangente"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "8 cm",
        "vertical": "6 cm",
        "hypotenuse": "10 cm"
      },
      "angle": "θ",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-010",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "División con residuo",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Al dividir 2x³ − 3x² + 4x − 5 entre x − 2, ¿cuáles son el cociente y el residuo?",
    "options": [
      {
        "id": "A",
        "text": "Cociente 2x² + x + 6; residuo 7"
      },
      {
        "id": "B",
        "text": "Cociente 2x² + x + 6; residuo −7"
      },
      {
        "id": "C",
        "text": "Cociente 2x² − 7x + 18; residuo −41"
      },
      {
        "id": "D",
        "text": "Cociente 2x² + x + 4; residuo 3"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Dividimos el término principal y restamos en cada paso:\n\n2x³/x = 2x². Al restar 2x²(x − 2), queda x² + 4x − 5.\nx²/x = x. Al restar x(x − 2), queda 6x − 5.\n6x/x = 6. Al restar 6(x − 2), queda 7.\n\nAsí, el cociente es 2x² + x + 6 y el residuo 7. Verificamos:\n(x − 2)(2x² + x + 6) + 7 = 2x³ − 3x² + 4x − 5.",
    "optionExplanations": {
      "A": "Correcta. La multiplicación del divisor por ese cociente, más 7, reconstruye el polinomio.",
      "B": "Incorrecta. El residuo es 7; usar −7 cambia el término constante final.",
      "C": "Incorrecta. Usa −2 en vez de 2 en la división sintética correspondiente a x − 2.",
      "D": "Incorrecta. El cociente propuesto no reconstruye el término 4x al multiplicar por x − 2."
    },
    "keyClue": "División por x − 2 con posible residuo.",
    "mentalModel": "Polinomio = (x − 2) × cociente + residuo.",
    "examTip": "Para comprobar el residuo de una división por x − a, calcula el polinomio en a.",
    "reference": "División con residuo",
    "tags": [
      "algebra",
      "division-con-residuo"
    ]
  },
  {
    "id": "MEP9-EST-007",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Polígono de frecuencias",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "En el polígono de frecuencias, las marcas de clase 5, 15, 25 y 35 tienen frecuencias 2, 8, 6 y 4, respectivamente. ¿Cuántos datos se representaron en total?",
    "options": [
      {
        "id": "A",
        "text": "35"
      },
      {
        "id": "B",
        "text": "20"
      },
      {
        "id": "C",
        "text": "80"
      },
      {
        "id": "D",
        "text": "8"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "En un polígono de frecuencias, la posición horizontal identifica la marca de clase y la altura indica la frecuencia.\n\nPara obtener el total, sumamos las frecuencias, no las marcas:\n2 + 8 + 6 + 4 = 20.\n\nLos puntos unidos facilitan ver cómo cambian los conteos entre clases, pero las líneas no añaden nuevos datos. El total de observaciones es 20. La mayor frecuencia es 8 en la marca 15, lo cual responde a una pregunta distinta.",
    "optionExplanations": {
      "A": "Incorrecta. 35 es una marca de clase, no el total de observaciones.",
      "B": "Correcta. La suma de las cuatro frecuencias es 20.",
      "C": "Incorrecta. 80 suma las marcas 5 + 15 + 25 + 35, que no son conteos.",
      "D": "Incorrecta. 8 es la frecuencia mayor, no la suma de todas."
    },
    "keyClue": "Se pide el total de datos representados.",
    "mentalModel": "Total = suma de las alturas de los puntos de frecuencia.",
    "examTip": "No sumes las marcas del eje horizontal como si fueran frecuencias.",
    "reference": "Polígono de frecuencias",
    "tags": [
      "estadistica",
      "poligono-de-frecuencias"
    ],
    "visual": {
      "type": "frequency-polygon",
      "marks": [
        5,
        15,
        25,
        35
      ],
      "frequencies": [
        2,
        8,
        6,
        4
      ],
      "xLabel": "Marca de clase",
      "yLabel": "Frecuencia absoluta",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-NUM-008",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Simplificación de radicales",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Simplifica √72.",
    "options": [
      {
        "id": "A",
        "text": "36√2"
      },
      {
        "id": "B",
        "text": "6√2"
      },
      {
        "id": "C",
        "text": "8√9"
      },
      {
        "id": "D",
        "text": "6√12"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Buscamos un factor de 72 que sea un cuadrado perfecto:\n72 = 36 · 2.\n\nEntonces √72 = √36 · √2 = 6√2.\n\nEl 2 que queda dentro del radical no tiene un factor cuadrado mayor que 1, así que la simplificación terminó. Puede comprobarse elevando 6√2 al cuadrado: 6² · 2 = 36 · 2 = 72. El factor que sale del radical es √36, no 36.",
    "optionExplanations": {
      "A": "Incorrecta. Saca 36 completo; debe salir su raíz, que es 6.",
      "B": "Correcta. 72 = 36 · 2, por lo que √72 = 6√2.",
      "C": "Incorrecta. 8√9 = 24 y 24² = 576, no 72.",
      "D": "Incorrecta. (6√12)² = 36 · 12 = 432, no 72."
    },
    "keyClue": "El radicando 72 contiene el cuadrado perfecto 36.",
    "mentalModel": "√(a²b) = |a|√b.",
    "examTip": "Busca el mayor cuadrado perfecto que divide al radicando.",
    "reference": "Simplificación de radicales",
    "tags": [
      "numeros",
      "simplificacion-de-radicales"
    ]
  },
  {
    "id": "MEP9-GEO-011",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Lado mediante seno",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Un triángulo rectángulo tiene hipotenusa de 12 cm y un ángulo de 30°. ¿Cuánto mide el cateto opuesto a ese ángulo?",
    "options": [
      {
        "id": "A",
        "text": "12√3 cm"
      },
      {
        "id": "B",
        "text": "6 cm"
      },
      {
        "id": "C",
        "text": "24 cm"
      },
      {
        "id": "D",
        "text": "6√3 cm"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Se conocen el ángulo y la hipotenusa, y se busca el cateto opuesto. Usamos seno:\nsen 30° = opuesto/12.\n\nComo sen 30° = 1/2:\n1/2 = opuesto/12.\nMultiplicamos por 12:\nopuesto = 12 · 1/2 = 6.\n\nEl cateto mide 6 cm. El otro cateto sería 6√3 cm, pero ese es el adyacente al ángulo de 30°. Revisa que el lado pedido quede enfrente del ángulo marcado.",
    "optionExplanations": {
      "A": "Incorrecta. Es mayor que la hipotenusa, por lo que no puede ser un cateto.",
      "B": "Correcta. 12 · sen 30° = 12 · 1/2 = 6 cm.",
      "C": "Incorrecta. Divide por el seno; para despejar el opuesto aquí se multiplica.",
      "D": "Incorrecta. 6√3 cm es el cateto adyacente, obtenido con cos 30°."
    },
    "keyClue": "Ángulo de 30°, hipotenusa y cateto opuesto.",
    "mentalModel": "opuesto = hipotenusa · sen θ.",
    "examTip": "Selecciona la razón por los lados conocidos y el lado buscado.",
    "reference": "Lado mediante seno",
    "tags": [
      "geometria",
      "lado-mediante-seno"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "a",
        "vertical": "x",
        "hypotenuse": "12 cm"
      },
      "angle": "30°",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-011",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Fracciones algebraicas",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Cuál es la simplificación de (x² − 9)/(x − 3), conservando la restricción original?",
    "options": [
      {
        "id": "A",
        "text": "x + 3, para todo x real"
      },
      {
        "id": "B",
        "text": "x − 3, con x ≠ 3"
      },
      {
        "id": "C",
        "text": "x + 3, con x ≠ 3"
      },
      {
        "id": "D",
        "text": "x + 3, con x ≠ −3"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El numerador es una diferencia de cuadrados:\nx² − 9 = (x − 3)(x + 3).\n\nLa expresión original exige x − 3 ≠ 0, es decir, x ≠ 3.\n\nCon esa condición, cancelamos el factor x − 3:\n[(x − 3)(x + 3)]/(x − 3) = x + 3.\n\nLa respuesta debe incluir x ≠ 3. Aunque x + 3 por sí sola sí pueda evaluarse en 3, la fracción original no está definida en ese valor; la simplificación no elimina su restricción.",
    "optionExplanations": {
      "A": "Incorrecta. La fórmula simplificada es correcta, pero pierde la restricción x ≠ 3.",
      "B": "Incorrecta. Cancela el factor equivocado; el que queda es x + 3.",
      "C": "Correcta. Se cancela x − 3 conservando x ≠ 3.",
      "D": "Incorrecta. El denominador original se anula en 3, no en −3."
    },
    "keyClue": "Se debe conservar la restricción del denominador original.",
    "mentalModel": "Simplificar no recupera valores prohibidos.",
    "examTip": "Anota el valor que anula el denominador antes de cancelar factores.",
    "reference": "Fracciones algebraicas",
    "tags": [
      "algebra",
      "fracciones-algebraicas"
    ]
  },
  {
    "id": "MEP9-EST-008",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Probabilidad empírica",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Al lanzar un dado 200 veces, salió 6 en 38 lanzamientos. ¿Cuál es la probabilidad empírica de obtener 6 en ese experimento?",
    "options": [
      {
        "id": "A",
        "text": "1/6"
      },
      {
        "id": "B",
        "text": "0,38"
      },
      {
        "id": "C",
        "text": "0,81"
      },
      {
        "id": "D",
        "text": "0,19"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "La probabilidad empírica se calcula con lo observado en un experimento, no con una suposición sobre el dado.\n\nNúmero de veces que ocurrió el evento: 38.\nNúmero total de ensayos: 200.\n\nP empírica = 38/200 = 0,19 = 19 %.\n\nSi el dado fuera equilibrado, su probabilidad teórica de obtener 6 sería 1/6, pero la pregunta pide la proporción realmente observada. En una cantidad finita de lanzamientos, ambas cifras pueden ser diferentes.",
    "optionExplanations": {
      "A": "Incorrecta. 1/6 es la probabilidad teórica de un dado equilibrado, no la frecuencia observada.",
      "B": "Incorrecta. 0,38 divide entre 100 en lugar de entre 200.",
      "C": "Incorrecta. 0,81 = 162/200 es la proporción de lanzamientos que no dieron 6.",
      "D": "Correcta. 38/200 = 0,19 es la frecuencia relativa observada."
    },
    "keyClue": "Se dan resultados observados en 200 lanzamientos.",
    "mentalModel": "Probabilidad empírica = veces observadas/ensayos.",
    "examTip": "Distingue datos experimentales de probabilidades teóricas.",
    "reference": "Probabilidad empírica",
    "tags": [
      "estadistica",
      "probabilidad-empirica"
    ],
    "visual": {
      "type": "frequency-table",
      "headers": [
        "Resultado",
        "Frecuencia"
      ],
      "rows": [
        [
          "Sale 6",
          38
        ],
        [
          "No sale 6",
          162
        ]
      ],
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-012",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Ángulo de elevación",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Desde un punto a nivel del suelo se observa la cima de un poste con un ángulo de elevación de 45°. El punto está a 8 m de la base y el poste es vertical. ¿Cuánto mide el poste?",
    "options": [
      {
        "id": "A",
        "text": "4 m"
      },
      {
        "id": "B",
        "text": "8√2 m"
      },
      {
        "id": "C",
        "text": "8 m"
      },
      {
        "id": "D",
        "text": "16 m"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El suelo horizontal y el poste vertical forman un triángulo rectángulo. La distancia de 8 m es el cateto adyacente al ángulo de elevación, y la altura h es el opuesto.\n\ntan 45° = h/8.\nComo tan 45° = 1, tenemos 1 = h/8.\nEntonces h = 8 m.\n\nLa línea de visión sería la hipotenusa y mediría 8√2 m; no es la altura del poste. El enunciado ubica el punto de observación a nivel del suelo para evitar tener que añadir una altura de ojos.",
    "optionExplanations": {
      "A": "Incorrecta. Usa un factor 1/2, aunque tan 45° = 1.",
      "B": "Incorrecta. 8√2 es la longitud de la línea de visión, no la altura vertical.",
      "C": "Correcta. h = 8 · tan 45° = 8 m.",
      "D": "Incorrecta. Suma los catetos o duplica la distancia sin una relación trigonométrica válida."
    },
    "keyClue": "Altura opuesta y distancia horizontal adyacente al ángulo de elevación.",
    "mentalModel": "altura = distancia horizontal · tan θ.",
    "examTip": "Distingue la altura vertical de la línea de visión inclinada.",
    "reference": "Ángulo de elevación",
    "tags": [
      "geometria",
      "angulo-de-elevacion"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "8 m",
        "vertical": "h",
        "hypotenuse": "línea de visión"
      },
      "angle": "45°",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-012",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Restricciones algebraicas",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "¿Qué valores de x están excluidos en (x + 1)/(x² − 4)?",
    "options": [
      {
        "id": "A",
        "text": "Solo x = −1"
      },
      {
        "id": "B",
        "text": "x = −2 y x = 2"
      },
      {
        "id": "C",
        "text": "Solo x = 2"
      },
      {
        "id": "D",
        "text": "Ningún valor real"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Una fracción está definida solo cuando su denominador es distinto de cero.\n\nBuscamos cuándo x² − 4 = 0:\n(x − 2)(x + 2) = 0.\n\nSe anula si x = 2 o x = −2. Ambos valores deben excluirse.\n\nEl valor x = −1 anula el numerador, pero no el denominador: en ese caso la fracción vale cero y sí está definida. La restricción depende del denominador, no de dónde la fracción vale cero.",
    "optionExplanations": {
      "A": "Incorrecta. −1 anula el numerador; eso no hace indefinida la fracción.",
      "B": "Correcta. Tanto 2² − 4 como (−2)² − 4 valen cero.",
      "C": "Incorrecta. Omite que un número negativo también puede tener cuadrado 4.",
      "D": "Incorrecta. El denominador sí tiene dos ceros reales."
    },
    "keyClue": "Se buscan valores que hagan cero el denominador.",
    "mentalModel": "Denominador ≠ 0.",
    "examTip": "Factoriza el denominador y revisa todos sus factores.",
    "reference": "Restricciones algebraicas",
    "tags": [
      "algebra",
      "restricciones-algebraicas"
    ]
  },
  {
    "id": "MEP9-NUM-009",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Suma de radicales",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Reduce 3√5 + 2√5 − √5.",
    "options": [
      {
        "id": "A",
        "text": "4√15"
      },
      {
        "id": "B",
        "text": "6√5"
      },
      {
        "id": "C",
        "text": "4√5"
      },
      {
        "id": "D",
        "text": "√20"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Los tres términos tienen el mismo radical √5. Son términos semejantes, así que se operan sus coeficientes.\n\nEl coeficiente de −√5 es −1:\n3√5 + 2√5 − √5 = (3 + 2 − 1)√5 = 4√5.\n\nEl radicando 5 permanece igual. No se suman ni se restan los números dentro de la raíz al sumar términos semejantes. Es la misma idea que sumar 3 objetos, 2 objetos y quitar 1: quedan 4 objetos del mismo tipo.",
    "optionExplanations": {
      "A": "Incorrecta. Suma radicandos como si fuera una regla de suma de raíces; √5 debe mantenerse.",
      "B": "Incorrecta. Suma el último coeficiente en vez de restarlo.",
      "C": "Correcta. 3 + 2 − 1 = 4, con el mismo radical √5.",
      "D": "Incorrecta. √20 = 2√5, que no es igual a 4√5."
    },
    "keyClue": "Todos los términos contienen exactamente √5.",
    "mentalModel": "a√n + b√n = (a + b)√n.",
    "examTip": "El término √5 solo tiene coeficiente 1.",
    "reference": "Suma de radicales",
    "tags": [
      "numeros",
      "suma-de-radicales"
    ]
  },
  {
    "id": "MEP9-GEO-013",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Ángulo de un triángulo rectángulo",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Respecto al ángulo agudo θ, los catetos opuesto y adyacente miden ambos 7 cm. ¿Cuánto vale θ?",
    "options": [
      {
        "id": "A",
        "text": "30°"
      },
      {
        "id": "B",
        "text": "90°"
      },
      {
        "id": "C",
        "text": "60°"
      },
      {
        "id": "D",
        "text": "45°"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Los dos catetos tienen la misma longitud. Por la razón tangente:\ntan θ = 7/7 = 1.\n\nEl ángulo agudo cuya tangente vale 1 es 45°. También podemos razonar por geometría: el triángulo rectángulo es isósceles, así que sus dos ángulos agudos son iguales. Como entre ambos suman 90°, cada uno mide 90°/2 = 45°.\n\nEl ángulo de 90° está entre los catetos, no en el vértice agudo señalado.",
    "optionExplanations": {
      "A": "Incorrecta. En un triángulo de 30° y 60° los catetos no son iguales.",
      "B": "Incorrecta. θ es agudo; el ángulo recto se encuentra en otro vértice.",
      "C": "Incorrecta. 60° requeriría una tangente de √3, no de 1.",
      "D": "Correcta. Catetos iguales dan tan θ = 1 y θ = 45°."
    },
    "keyClue": "Los dos catetos son iguales.",
    "mentalModel": "Triángulo rectángulo isósceles → 45°, 45°, 90°.",
    "examTip": "Si los catetos son iguales, los dos ángulos agudos también lo son.",
    "reference": "Ángulo de un triángulo rectángulo",
    "tags": [
      "geometria",
      "angulo-de-un-triangulo-rectangulo"
    ],
    "visual": {
      "type": "right-triangle",
      "sideLabels": {
        "base": "7 cm",
        "vertical": "7 cm",
        "hypotenuse": "c"
      },
      "angle": "θ",
      "caption": "Esquema de un triángulo rectángulo.",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-013",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Racionalización simple",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Racionaliza 5/√3.",
    "options": [
      {
        "id": "A",
        "text": "5√3"
      },
      {
        "id": "B",
        "text": "√15/3"
      },
      {
        "id": "C",
        "text": "5/3"
      },
      {
        "id": "D",
        "text": "5√3/3"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Para quitar la raíz del denominador, multiplicamos numerador y denominador por √3:\n\n5/√3 = (5 · √3)/(√3 · √3) = 5√3/3.\n\nMultiplicar por √3/√3 equivale a multiplicar por 1, así que no cambia el valor de la fracción. El denominador queda racional porque √3 · √3 = 3. Es necesario modificar también el numerador; hacerlo solo en una parte cambiaría el valor.",
    "optionExplanations": {
      "A": "Incorrecta. Multiplica el numerador por √3 pero olvida que el denominador se convierte en 3.",
      "B": "Incorrecta. Introduce el 5 dentro del radical sin elevarlo al cuadrado.",
      "C": "Incorrecta. Elimina la raíz del denominador sin multiplicar también el numerador.",
      "D": "Correcta. Multiplicar por √3/√3 produce 5√3/3."
    },
    "keyClue": "Una raíz cuadrada aparece sola en el denominador.",
    "mentalModel": "Multiplica arriba y abajo por la misma raíz.",
    "examTip": "Racionalizar conserva el valor de la fracción.",
    "reference": "Racionalización simple",
    "tags": [
      "algebra",
      "racionalizacion-simple"
    ]
  },
  {
    "id": "MEP9-EST-009",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Probabilidad y complemento",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Una bolsa contiene 3 fichas rojas, 2 azules y 1 verde. Se extrae una ficha al azar; cada ficha tiene la misma posibilidad de salir. ¿Cuál es la probabilidad de que no sea azul?",
    "options": [
      {
        "id": "A",
        "text": "1/3"
      },
      {
        "id": "B",
        "text": "1/2"
      },
      {
        "id": "C",
        "text": "2/3"
      },
      {
        "id": "D",
        "text": "4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El total de fichas es 3 + 2 + 1 = 6.\n\nEl evento «no azul» incluye todas las fichas rojas y la verde: 3 + 1 = 4 favorables.\n\nP(no azul) = 4/6 = 2/3.\n\nTambién puede usarse el complemento:\nP(azul) = 2/6 = 1/3, entonces P(no azul) = 1 − 1/3 = 2/3.\n\nSe cuentan fichas, no colores, porque la selección es igualmente probable para cada ficha. Los colores no tienen igual cantidad de fichas.",
    "optionExplanations": {
      "A": "Incorrecta. 1/3 es la probabilidad de azul, no de su complemento.",
      "B": "Incorrecta. 1/2 cuenta solo las rojas y omite la ficha verde.",
      "C": "Correcta. Cuatro de las seis fichas no son azules: 4/6 = 2/3.",
      "D": "Incorrecta. 4 es el número de casos favorables; debe dividirse entre el total."
    },
    "keyClue": "Se pide el evento complementario «no azul».",
    "mentalModel": "P(no A) = 1 − P(A).",
    "examTip": "Incluye todas las categorías que cumplen «no azul».",
    "reference": "Probabilidad y complemento",
    "tags": [
      "estadistica",
      "probabilidad-y-complemento"
    ],
    "visual": {
      "type": "probability-simple",
      "groups": [
        {
          "label": "Roja",
          "count": 3
        },
        {
          "label": "Azul",
          "count": 2
        },
        {
          "label": "Verde",
          "count": 1
        }
      ],
      "placement": "question"
    }
  },
  {
    "id": "MEP9-NUM-010",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Producto de radicales",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Calcula √3 · √12.",
    "options": [
      {
        "id": "A",
        "text": "6"
      },
      {
        "id": "B",
        "text": "√15"
      },
      {
        "id": "C",
        "text": "36"
      },
      {
        "id": "D",
        "text": "3√12"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Como ambos radicandos son no negativos, podemos multiplicarlos dentro de una sola raíz:\n√3 · √12 = √(3 · 12) = √36 = 6.\n\nTambién se puede simplificar primero: √12 = 2√3. Así √3 · 2√3 = 2 · 3 = 6. Ambos procedimientos llegan al mismo resultado y permiten comprobar la operación.",
    "optionExplanations": {
      "A": "Correcta. √(3 · 12) = √36 = 6.",
      "B": "Incorrecta. Suma los radicandos; la operación indicada es multiplicación.",
      "C": "Incorrecta. 36 es el producto de los radicandos, pero todavía falta sacar la raíz.",
      "D": "Incorrecta. Sustituye √3 por 3, aunque √3 y 3 son distintos."
    },
    "keyClue": "Se multiplican dos raíces cuadradas de números positivos.",
    "mentalModel": "√a · √b = √(ab), si a y b son no negativos.",
    "examTip": "Una vez multiplicados los radicandos, revisa si la raíz es exacta.",
    "reference": "Producto de radicales",
    "tags": [
      "numeros",
      "producto-de-radicales"
    ]
  },
  {
    "id": "MEP9-GEO-014",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Razones de ángulos complementarios",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Sin usar calculadora, ¿qué expresión es igual a sen 35°?",
    "options": [
      {
        "id": "A",
        "text": "cos 55°"
      },
      {
        "id": "B",
        "text": "sen 55°"
      },
      {
        "id": "C",
        "text": "tan 55°"
      },
      {
        "id": "D",
        "text": "cos 35°"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "Los ángulos de 35° y 55° son complementarios porque suman 90°.\n\nEn un triángulo rectángulo, el cateto opuesto a uno de los ángulos agudos es el adyacente al otro. Por eso:\nsen θ = cos(90° − θ).\n\nSustituimos θ = 35°:\nsen 35° = cos(90° − 35°) = cos 55°.\n\nLa relación cambia seno por coseno al usar el ángulo complementario. No significa que seno y coseno sean iguales para cualquier ángulo.",
    "optionExplanations": {
      "A": "Correcta. 35° + 55° = 90°, de modo que sen 35° = cos 55°.",
      "B": "Incorrecta. Los senos de los ángulos complementarios no son iguales en general.",
      "C": "Incorrecta. La tangente usa otro cociente y no es la identidad solicitada.",
      "D": "Incorrecta. sen 35° y cos 35° serían iguales si el ángulo fuera 45°, no 35°."
    },
    "keyClue": "Se busca una razón equivalente sin calcular decimales.",
    "mentalModel": "sen θ = cos(90° − θ).",
    "examTip": "Calcula el ángulo complementario y cambia seno por coseno.",
    "reference": "Razones de ángulos complementarios",
    "tags": [
      "geometria",
      "razones-de-angulos-complementarios"
    ]
  },
  {
    "id": "MEP9-ALG-014",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Racionalización con conjugado",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Racionaliza 2/(√5 − 1).",
    "options": [
      {
        "id": "A",
        "text": "(√5 − 1)/2"
      },
      {
        "id": "B",
        "text": "2√5 + 2"
      },
      {
        "id": "C",
        "text": "(√5 + 1)/2"
      },
      {
        "id": "D",
        "text": "(√5 + 1)/4"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El denominador tiene dos términos. Usamos su conjugado, √5 + 1:\n\n2/(√5 − 1) · (√5 + 1)/(√5 + 1).\n\nEl denominador es una diferencia de cuadrados:\n(√5 − 1)(√5 + 1) = 5 − 1 = 4.\n\nQueda 2(√5 + 1)/4. Simplificamos el factor común 2:\n(√5 + 1)/2.\n\nEl signo del conjugado cambia para cancelar los términos con raíz al multiplicar. El valor del denominador original es positivo y distinto de cero.",
    "optionExplanations": {
      "A": "Incorrecta. Mantiene el signo menos en lugar del conjugado necesario.",
      "B": "Incorrecta. No divide el nuevo numerador entre el denominador 4.",
      "C": "Correcta. El producto de conjugados da 4 y se simplifica 2/4 a 1/2.",
      "D": "Incorrecta. Pierde el factor 2 del numerador antes de simplificar."
    },
    "keyClue": "El denominador es una diferencia que contiene una raíz.",
    "mentalModel": "(a − b)(a + b) = a² − b².",
    "examTip": "Multiplica por el conjugado completo, arriba y abajo.",
    "reference": "Racionalización con conjugado",
    "tags": [
      "algebra",
      "racionalizacion-con-conjugado"
    ]
  },
  {
    "id": "MEP9-NUM-011",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Exponentes fraccionarios",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "¿Cuál es el valor de 27 elevado al exponente 2/3?",
    "options": [
      {
        "id": "A",
        "text": "18"
      },
      {
        "id": "B",
        "text": "3"
      },
      {
        "id": "C",
        "text": "81"
      },
      {
        "id": "D",
        "text": "9"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "El exponente 2/3 combina una raíz y una potencia. El denominador 3 indica raíz cúbica y el numerador 2 indica elevar al cuadrado:\n\n27 elevado a 2/3 = (∛27)².\nComo ∛27 = 3, queda 3² = 9.\n\nPodríamos elevar primero 27 al cuadrado y luego sacar raíz cúbica, pero comenzar con la raíz mantiene los números pequeños. No se multiplica 27 por 2/3: un exponente describe una operación diferente.",
    "optionExplanations": {
      "A": "Incorrecta. 18 resulta de 27 · 2/3; el exponente no es un factor multiplicativo.",
      "B": "Incorrecta. 3 es ∛27; todavía falta elevarlo al cuadrado.",
      "C": "Incorrecta. 81 no respeta la raíz cúbica indicada por el denominador del exponente.",
      "D": "Correcta. (∛27)² = 3² = 9."
    },
    "keyClue": "El exponente tiene denominador 3 y numerador 2.",
    "mentalModel": "Exponente m/n: calcula la raíz de índice n y eleva el resultado a m, cuando esté definido.",
    "examTip": "Para bases positivas, saca primero una raíz exacta si facilita el cálculo.",
    "reference": "Exponentes fraccionarios",
    "tags": [
      "numeros",
      "exponentes-fraccionarios"
    ]
  },
  {
    "id": "MEP9-GEO-015",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Ley de senos",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "En el triángulo ABC, A = 30°, B = 45° y el lado a, opuesto a A, mide 10 cm. ¿Cuánto mide b, opuesto a B?",
    "options": [
      {
        "id": "A",
        "text": "5√2 cm"
      },
      {
        "id": "B",
        "text": "20 cm"
      },
      {
        "id": "C",
        "text": "10√2 cm"
      },
      {
        "id": "D",
        "text": "5 cm"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Se conocen dos ángulos y un lado emparejado con su ángulo opuesto. Aplicamos la ley de senos:\na/sen A = b/sen B.\n\n10/sen 30° = b/sen 45°.\nComo sen 30° = 1/2 y sen 45° = √2/2:\nb = 10 · (√2/2)/(1/2) = 10√2 cm.\n\nCada lado debe dividirse entre el seno del ángulo que está enfrente de él. No usamos directamente una razón de triángulo rectángulo: el tercer ángulo es 105° y el triángulo no es rectángulo.",
    "optionExplanations": {
      "A": "Incorrecta. Usa sen 45° pero omite dividir entre sen 30°.",
      "B": "Incorrecta. 20 es la razón 10/sen 30°, pero falta multiplicar por sen 45°.",
      "C": "Correcta. 10 · sen 45°/sen 30° = 10√2 cm.",
      "D": "Incorrecta. Reduce 10 por un factor 1/2 sin comparar los dos senos."
    },
    "keyClue": "Un par lado–ángulo opuesto conocido y otro ángulo.",
    "mentalModel": "a/sen A = b/sen B.",
    "examTip": "Empareja cada lado con su ángulo opuesto antes de aplicar la ley de senos.",
    "reference": "Ley de senos",
    "tags": [
      "geometria",
      "ley-de-senos"
    ],
    "visual": {
      "type": "general-triangle",
      "angles": {
        "A": 30,
        "B": 45,
        "C": 105
      },
      "sides": {
        "a": "10 cm",
        "b": "b",
        "c": "c"
      },
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-015",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Fórmula cuadrática",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "¿Cuáles son las soluciones reales de x² − 2x − 1 = 0?",
    "options": [
      {
        "id": "A",
        "text": "x = −1 ± √2"
      },
      {
        "id": "B",
        "text": "x = 1 ± √2"
      },
      {
        "id": "C",
        "text": "x = 1 ± 2"
      },
      {
        "id": "D",
        "text": "x = ±√2"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Identificamos a = 1, b = −2 y c = −1.\n\nEl discriminante es Δ = b² − 4ac = (−2)² − 4(1)(−1) = 4 + 4 = 8.\n\nAplicamos la fórmula:\nx = [−b ± √Δ]/(2a) = [2 ± √8]/2.\nComo √8 = 2√2, queda x = [2 ± 2√2]/2 = 1 ± √2.\n\nSon dos soluciones distintas porque Δ > 0. El signo de −b es positivo en este caso, pues b ya era negativo.",
    "optionExplanations": {
      "A": "Incorrecta. No cambia correctamente el signo de b en el numerador.",
      "B": "Correcta. [2 ± √8]/2 se simplifica a 1 ± √2.",
      "C": "Incorrecta. Usa √8 = 4, que es falso; √8 = 2√2.",
      "D": "Incorrecta. Omite el término 1 al dividir el numerador entre 2."
    },
    "keyClue": "Ecuación cuadrática que no se factoriza con enteros.",
    "mentalModel": "x = [−b ± √(b² − 4ac)]/(2a).",
    "examTip": "Coloca el denominador 2a bajo todo el numerador.",
    "reference": "Fórmula cuadrática",
    "tags": [
      "algebra",
      "formula-cuadratica"
    ]
  },
  {
    "id": "MEP9-NUM-012",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Prefijo kilo y conversión",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Una ruta mide 2,5 km y luego se recorren 750 m adicionales. ¿Cuál es la distancia total en metros?",
    "options": [
      {
        "id": "A",
        "text": "752,5 m"
      },
      {
        "id": "B",
        "text": "2500 m"
      },
      {
        "id": "C",
        "text": "3250 m"
      },
      {
        "id": "D",
        "text": "32 500 m"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "Antes de sumar, todas las distancias deben estar en la misma unidad.\n\nEl prefijo kilo significa mil:\n1 km = 1000 m.\n2,5 km = 2,5 · 1000 m = 2500 m.\n\nAhora sumamos los 750 m adicionales:\n2500 m + 750 m = 3250 m.\n\nSumar 2,5 y 750 sin convertir mezclaría kilómetros y metros. La unidad pedida, metros, nos dice en qué forma presentar el resultado.",
    "optionExplanations": {
      "A": "Incorrecta. Suma cantidades expresadas en unidades distintas sin convertir los kilómetros.",
      "B": "Incorrecta. 2500 m corresponde solo a 2,5 km; faltan los 750 m adicionales.",
      "C": "Correcta. 2,5 · 1000 + 750 = 3250 m.",
      "D": "Incorrecta. Usa un factor diez veces mayor del necesario."
    },
    "keyClue": "Las distancias están en km y m, pero el resultado se pide en m.",
    "mentalModel": "kilo = 1000 unidades.",
    "examTip": "Iguala las unidades antes de sumar longitudes.",
    "reference": "Prefijo kilo y conversión",
    "tags": [
      "numeros",
      "prefijo-kilo-y-conversion"
    ]
  },
  {
    "id": "MEP9-GEO-016",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Aplicación de la ley de senos",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "En un triángulo, un lado de 6 m está frente a un ángulo de 30°. ¿Cuánto mide el lado frente a 60°?",
    "options": [
      {
        "id": "A",
        "text": "3√3 m"
      },
      {
        "id": "B",
        "text": "12 m"
      },
      {
        "id": "C",
        "text": "6 m"
      },
      {
        "id": "D",
        "text": "6√3 m"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Llamamos a = 6 m al lado frente a 30° y b al lado frente a 60°.\n\nPor la ley de senos:\n6/sen 30° = b/sen 60°.\nDespejamos b:\nb = 6 · sen 60°/sen 30°.\n\nComo sen 60° = √3/2 y sen 30° = 1/2:\nb = 6 · (√3/2)/(1/2) = 6√3 m.\n\nEl lado frente a 60° es mayor que el lado frente a 30°, lo cual coincide con el resultado. Los ángulos restantes suman 90°, así que el tercer ángulo mide 90°.",
    "optionExplanations": {
      "A": "Incorrecta. Calcula 6 · sen 60° pero omite dividir entre sen 30°.",
      "B": "Incorrecta. 12 m es el lado frente a 90°, no el lado frente a 60°.",
      "C": "Incorrecta. Ángulos distintos de 30° y 60° no tienen lados opuestos iguales.",
      "D": "Correcta. La razón de los senos es √3, por lo que el lado mide 6√3 m."
    },
    "keyClue": "Se identifica qué ángulo está frente a cada lado.",
    "mentalModel": "Lado buscado = lado conocido · seno buscado/seno conocido.",
    "examTip": "El lado frente al ángulo mayor debe ser más largo.",
    "reference": "Aplicación de la ley de senos",
    "tags": [
      "geometria",
      "aplicacion-de-la-ley-de-senos"
    ],
    "visual": {
      "type": "general-triangle",
      "angles": {
        "A": 30,
        "B": 60,
        "C": 90
      },
      "sides": {
        "a": "6 m",
        "b": "b",
        "c": "c"
      },
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-016",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Discriminante y soluciones",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Para 2x² − 4x + 2 = 0, ¿qué indica el discriminante?",
    "options": [
      {
        "id": "A",
        "text": "Δ = 32; dos soluciones reales"
      },
      {
        "id": "B",
        "text": "Δ = −16; ninguna solución real"
      },
      {
        "id": "C",
        "text": "Δ = 16; dos soluciones reales"
      },
      {
        "id": "D",
        "text": "Δ = 0; una solución real doble"
      }
    ],
    "correctAnswers": [
      "D"
    ],
    "explanation": "Usamos a = 2, b = −4 y c = 2:\nΔ = b² − 4ac = (−4)² − 4(2)(2) = 16 − 16 = 0.\n\nCuando Δ = 0, las dos ramas de la fórmula cuadrática coinciden. Existe una solución real doble:\nx = −b/(2a) = 4/4 = 1.\n\nTambién puede verse al factorizar: 2x² − 4x + 2 = 2(x − 1)². La expresión se anula únicamente en x = 1.",
    "optionExplanations": {
      "A": "Incorrecta. Suma 4ac cuando la fórmula exige restarlo.",
      "B": "Incorrecta. Calcula (−4)² con signo negativo; el cuadrado es 16.",
      "C": "Incorrecta. Olvida restar 4ac = 16.",
      "D": "Correcta. 16 − 16 = 0; las dos soluciones de la fórmula coinciden en 1."
    },
    "keyClue": "Se pide interpretar Δ, no solo resolver la ecuación.",
    "mentalModel": "Δ > 0: dos reales.\nΔ = 0: una real doble.\nΔ < 0: ninguna real.",
    "examTip": "Eleva b al cuadrado con paréntesis si es negativo.",
    "reference": "Discriminante y soluciones",
    "tags": [
      "algebra",
      "discriminante-y-soluciones"
    ]
  },
  {
    "id": "MEP9-EST-010",
    "domain": "estadistica",
    "domainName": "Estadística y Probabilidad",
    "topic": "Ley de los grandes números",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Se lanza muchas veces una moneda equilibrada en ensayos independientes. ¿Qué describe mejor la ley de los grandes números?",
    "options": [
      {
        "id": "A",
        "text": "La proporción de caras tiende a acercarse a 1/2, aunque puede fluctuar"
      },
      {
        "id": "B",
        "text": "Después de muchas caras, la siguiente moneda está obligada a dar cruz"
      },
      {
        "id": "C",
        "text": "En todo número par de lanzamientos habrá exactamente mitad caras"
      },
      {
        "id": "D",
        "text": "Al aumentar los lanzamientos, la proporción de caras tiende a 1"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "En una moneda equilibrada, la probabilidad teórica de cara es 1/2. Si repetimos el experimento muchas veces de manera independiente, la proporción observada de caras tiende a acercarse a ese valor.\n\nNo significa que cada bloque de lanzamientos tenga exactamente la mitad de caras, ni que la aproximación mejore en cada paso. Pueden ocurrir fluctuaciones.\n\nAdemás, los resultados anteriores no obligan al siguiente lanzamiento a compensarlos: si los ensayos son independientes, la probabilidad de cara en el siguiente sigue siendo 1/2.",
    "optionExplanations": {
      "A": "Correcta. Describe la tendencia de las frecuencias relativas al aumentar muchos ensayos independientes.",
      "B": "Incorrecta. La independencia impide que los resultados anteriores obliguen al siguiente a compensar.",
      "C": "Incorrecta. La ley expresa una aproximación para muchos ensayos, no igualdad exacta en cualquier muestra par.",
      "D": "Incorrecta. La proporción se aproxima a 1/2, no a 1, para una moneda equilibrada."
    },
    "keyClue": "Muchos ensayos independientes de un experimento equilibrado.",
    "mentalModel": "Muchos ensayos → frecuencia relativa cercana a la probabilidad.",
    "examTip": "Acercarse a una probabilidad no significa compensar los resultados anteriores.",
    "reference": "Ley de los grandes números",
    "tags": [
      "estadistica",
      "ley-de-los-grandes-numeros"
    ]
  },
  {
    "id": "MEP9-NUM-013",
    "domain": "numeros",
    "domainName": "Números",
    "topic": "Prefijo milli y conversión",
    "difficulty": "easy",
    "type": "single-choice",
    "question": "Una pieza mide 0,004 m de grosor. ¿Cuántos milímetros mide?",
    "options": [
      {
        "id": "A",
        "text": "0,000004 mm"
      },
      {
        "id": "B",
        "text": "4 mm"
      },
      {
        "id": "C",
        "text": "0,4 mm"
      },
      {
        "id": "D",
        "text": "40 mm"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Un milímetro es una milésima de metro, por lo que un metro contiene 1000 milímetros.\n\nPara pasar de metros a milímetros, multiplicamos por 1000:\n0,004 · 1000 = 4.\n\nEntonces el grosor es 4 mm. La pieza no cambia de tamaño: cambia el número que expresa su medida porque el milímetro es una unidad más pequeña. Una medida expresada en unidades más pequeñas suele requerir un número mayor.\n\nEn centímetros, el mismo grosor sería 0,4 cm, porque 1 m = 100 cm. El prefijo centi representa una centésima de metro.",
    "optionExplanations": {
      "A": "Incorrecta. Divide entre 1000 en lugar de multiplicar al pasar de m a mm.",
      "B": "Correcta. 0,004 m · 1000 = 4 mm.",
      "C": "Incorrecta. Usa 100, que corresponde a centímetros por metro, no a milímetros.",
      "D": "Incorrecta. Multiplica por 10 000; un metro tiene 1000 mm."
    },
    "keyClue": "Se pasa de metros a milímetros.",
    "mentalModel": "m → mm: ×1000; mm → m: ÷1000.",
    "examTip": "Relaciona milli con una milésima de la unidad.",
    "reference": "Prefijo milli y conversión",
    "tags": [
      "numeros",
      "prefijo-milli-y-conversion"
    ]
  },
  {
    "id": "MEP9-GEO-017",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Polígono regular y apotema",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Un hexágono regular tiene lado de 4 cm y apotema de 2√3 cm. ¿Cuál es su área?",
    "options": [
      {
        "id": "A",
        "text": "48√3 cm²"
      },
      {
        "id": "B",
        "text": "24√3 cm²"
      },
      {
        "id": "C",
        "text": "12√3 cm²"
      },
      {
        "id": "D",
        "text": "24 cm²"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "Un polígono regular puede dividirse en triángulos con altura igual a la apotema. La suma de sus áreas se expresa como:\nÁrea = perímetro · apotema/2.\n\nEl hexágono tiene 6 lados, por lo que su perímetro es 6 · 4 = 24 cm.\n\nÁrea = 24 · 2√3/2 = 24√3 cm².\n\nLa apotema va del centro al punto medio de un lado y es perpendicular a él. No es el segmento que llega a un vértice. La unidad del área debe ser cm².",
    "optionExplanations": {
      "A": "Incorrecta. Calcula perímetro por apotema, pero olvida dividir entre 2.",
      "B": "Correcta. P = 24 cm y A = 24 · 2√3/2 = 24√3 cm².",
      "C": "Incorrecta. Divide entre 2 una vez adicional.",
      "D": "Incorrecta. Omite el factor √3 presente en la apotema."
    },
    "keyClue": "Polígono regular con lado y apotema conocidos.",
    "mentalModel": "Área = perímetro × apotema ÷ 2.",
    "examTip": "Cuenta todos los lados para calcular el perímetro.",
    "reference": "Polígono regular y apotema",
    "tags": [
      "geometria",
      "poligono-regular-y-apotema"
    ],
    "visual": {
      "type": "regular-polygon-apothem",
      "sides": 6,
      "sideLabel": "4 cm",
      "apothemLabel": "2√3 cm",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-017",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Vértice y mínimo de una parábola",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "La función f(x) = x² − 4x + 1 también puede escribirse como (x − 2)² − 3. ¿Cuál afirmación es correcta?",
    "options": [
      {
        "id": "A",
        "text": "Su mínimo es −3 cuando x = 2"
      },
      {
        "id": "B",
        "text": "Su máximo es −3 cuando x = 2"
      },
      {
        "id": "C",
        "text": "Su mínimo es 3 cuando x = −2"
      },
      {
        "id": "D",
        "text": "Su vértice es (−2, −3)"
      }
    ],
    "correctAnswers": [
      "A"
    ],
    "explanation": "En la forma f(x) = (x − 2)² − 3, el cuadrado nunca es negativo.\n\nEl valor más pequeño del cuadrado es 0 y ocurre cuando x − 2 = 0, es decir, x = 2.\nEntonces f(2) = 0 − 3 = −3.\n\nEl vértice es (2, −3) y representa un mínimo porque el coeficiente de x² es positivo: la parábola abre hacia arriba. El signo dentro del paréntesis se interpreta resolviendo x − 2 = 0, no leyendo −2 como coordenada.",
    "optionExplanations": {
      "A": "Correcta. El cuadrado alcanza 0 en x = 2, por lo que el mínimo de la función es −3.",
      "B": "Incorrecta. La parábola abre hacia arriba y no tiene máximo real.",
      "C": "Incorrecta. Cambia los signos de la ubicación y de la altura del vértice.",
      "D": "Incorrecta. x − 2 = 0 se cumple en 2, no en −2."
    },
    "keyClue": "Forma de vértice con un cuadrado más una constante.",
    "mentalModel": "y = a(x − h)² + k → vértice (h, k).",
    "examTip": "Si a es positivo, el vértice da el mínimo; si es negativo, da el máximo.",
    "reference": "Vértice y mínimo de una parábola",
    "tags": [
      "algebra",
      "vertice-y-minimo-de-una-parabola"
    ],
    "visual": {
      "type": "parabola",
      "a": 1,
      "b": -4,
      "c": 1,
      "xRange": [
        -1,
        5
      ],
      "yRange": [
        -4,
        7
      ],
      "label": "y = x² − 4x + 1",
      "showVertex": true,
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-018",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Área total de un prisma",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "Un prisma rectangular cerrado mide 2 cm de ancho, 3 cm de largo y 4 cm de alto. ¿Cuál es su área total?",
    "options": [
      {
        "id": "A",
        "text": "24 cm²"
      },
      {
        "id": "B",
        "text": "26 cm²"
      },
      {
        "id": "C",
        "text": "52 cm²"
      },
      {
        "id": "D",
        "text": "48 cm²"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "El prisma tiene tres pares de caras rectangulares iguales.\n\nCada par aporta:\n2 · (2 · 3) = 12 cm²,\n2 · (2 · 4) = 16 cm²,\n2 · (3 · 4) = 24 cm².\n\nÁrea total = 12 + 16 + 24 = 52 cm².\n\nSe incluyen las seis caras porque el prisma está cerrado. El producto 2 · 3 · 4 = 24 calcula el volumen en cm³, una magnitud diferente. Para área total se suman áreas de caras, no se multiplican las tres dimensiones.",
    "optionExplanations": {
      "A": "Incorrecta. 24 es el volumen numérico, que debe expresarse en cm³ y no responde al área.",
      "B": "Incorrecta. 26 suma una cara de cada tipo; falta contar su cara opuesta.",
      "C": "Correcta. 2(2·3 + 2·4 + 3·4) = 52 cm².",
      "D": "Incorrecta. No suma correctamente las áreas de los tres pares de caras."
    },
    "keyClue": "Se pide el área de todas las caras de un prisma cerrado.",
    "mentalModel": "Área total = 2(ancho·largo + ancho·alto + largo·alto).",
    "examTip": "Distingue área en unidades cuadradas de volumen en unidades cúbicas.",
    "reference": "Área total de un prisma",
    "tags": [
      "geometria",
      "area-total-de-un-prisma"
    ],
    "visual": {
      "type": "prism",
      "width": 2,
      "depth": 3,
      "height": 4,
      "unit": "cm",
      "placement": "question"
    }
  },
  {
    "id": "MEP9-ALG-018",
    "domain": "algebra",
    "domainName": "Relaciones y Álgebra",
    "topic": "Intersecciones de una parábola",
    "difficulty": "medium",
    "type": "single-choice",
    "question": "La gráfica de y = x² − 4 corta el eje x en dos puntos. ¿Cuáles son?",
    "options": [
      {
        "id": "A",
        "text": "(0, −4) y (0, 4)"
      },
      {
        "id": "B",
        "text": "(−4, 0) y (4, 0)"
      },
      {
        "id": "C",
        "text": "(−2, 0) y (2, 0)"
      },
      {
        "id": "D",
        "text": "Solo (0, −4)"
      }
    ],
    "correctAnswers": [
      "C"
    ],
    "explanation": "En el eje x, la coordenada y vale cero. Por eso buscamos:\nx² − 4 = 0.\n\nFactorizamos la diferencia de cuadrados:\n(x − 2)(x + 2) = 0.\nEntonces x = 2 o x = −2.\n\nLas intersecciones son (2, 0) y (−2, 0). El punto (0, −4) aparece en la gráfica, pero es la intersección con el eje y y también su vértice; responde a una pregunta diferente.",
    "optionExplanations": {
      "A": "Incorrecta. Son puntos sobre el eje y; además, (0, 4) no pertenece a esta gráfica.",
      "B": "Incorrecta. Confunde el número 4 con sus raíces cuadradas, 2 y −2.",
      "C": "Correcta. Al poner y = 0, x² = 4 y x = ±2.",
      "D": "Incorrecta. (0, −4) es el corte con el eje y, no con el eje x."
    },
    "keyClue": "Se piden los cortes con el eje x.",
    "mentalModel": "Corte con eje x → y = 0.",
    "examTip": "Relaciona las soluciones de la ecuación con los puntos (x, 0) de la gráfica.",
    "reference": "Intersecciones de una parábola",
    "tags": [
      "algebra",
      "intersecciones-de-una-parabola"
    ],
    "visual": {
      "type": "parabola",
      "a": 1,
      "b": 0,
      "c": -4,
      "xRange": [
        -3,
        3
      ],
      "yRange": [
        -5,
        6
      ],
      "label": "y = x² − 4",
      "showRoots": true,
      "placement": "question"
    }
  },
  {
    "id": "MEP9-GEO-019",
    "domain": "geometria",
    "domainName": "Geometría",
    "topic": "Pirámide recta y apotema",
    "difficulty": "hard",
    "type": "single-choice",
    "question": "Una pirámide recta tiene base cuadrada de lado 6 cm y altura vertical de 4 cm. ¿Cuál es su área total, incluida la base?",
    "options": [
      {
        "id": "A",
        "text": "84 cm²"
      },
      {
        "id": "B",
        "text": "96 cm²"
      },
      {
        "id": "C",
        "text": "60 cm²"
      },
      {
        "id": "D",
        "text": "36 cm²"
      }
    ],
    "correctAnswers": [
      "B"
    ],
    "explanation": "La altura vertical de la pirámide no es la altura inclinada de una cara. Para obtener la apotema lateral ℓ, usamos el triángulo rectángulo formado por la altura 4 y la mitad del lado de la base, 3:\n\nℓ² = 4² + 3² = 25, así que ℓ = 5 cm.\n\nCada cara triangular tiene área 6 · 5/2 = 15 cm². Las cuatro caras suman 4 · 15 = 60 cm².\n\nLa base mide 6² = 36 cm². Área total = 60 + 36 = 96 cm².",
    "optionExplanations": {
      "A": "Incorrecta. Usa la altura vertical 4 como altura de cada cara; la apotema lateral es 5.",
      "B": "Correcta. La apotema lateral es 5; 4(6·5/2) + 6² = 96 cm².",
      "C": "Incorrecta. 60 cm² es solo el área lateral; falta sumar la base.",
      "D": "Incorrecta. 36 cm² es solo la base cuadrada; faltan las caras triangulares."
    },
    "keyClue": "Pirámide recta; altura vertical y lado de la base conocidos.",
    "mentalModel": "Apotema lateral: √(altura² + semilado²).\nÁrea total = área lateral + base.",
    "examTip": "No confundas la altura vertical de la pirámide con la altura de sus caras.",
    "reference": "Pirámide recta y apotema",
    "tags": [
      "geometria",
      "piramide-recta-y-apotema"
    ],
    "visual": {
      "type": "pyramid",
      "baseSide": 6,
      "height": 4,
      "unit": "cm",
      "slantLabel": "ℓ",
      "placement": "question"
    }
  }
];
