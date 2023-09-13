// ==========> VIDEO 34 <==========

// Ejercicio 1: Función que cuente el número de caracteres de una cadena de texto
const cantidadCaracteres = (cadena = undefined) => {
  if (!cadena) return console.warn("No ingresaste ningún cadena");
  if (typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
};
cantidadCaracteres("Oscar");

// Ejercicio 2: Función que retorna el texto recortado según el número de caracteres indicados
const recortarTexto = (
  cadena = undefined,
  cantidadCaracteres = cadena.length
) => {
  if (!cadena) return console.warn("No ingresaste ningún cadena");
  if (typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  if (!Number.isInteger(cantidadCaracteres) || cantidadCaracteres < 1)
    return console.warn(
      "La cantidad de caracteres debe ser un número igual o mayor que 1"
    );
  const textoRecortado = cadena.slice(0, cantidadCaracteres);
  console.info(
    `El texto "${cadena}" recortado hasta el caracter ${cantidadCaracteres} es: ${textoRecortado}`
  );
};
recortarTexto("Hola Mundo", 5);

// Ejercicio 3: Función que dado una String retorna un Array de textos separados por el separador indicado
const separarCadena = (cadena = undefined, separador = undefined) => {
  if (!cadena || !separador)
    return console.warn("Tanto la cadena como el separador son requeridos");
  if (typeof cadena !== "string" || typeof separador !== "string")
    return console.warn(
      "Tanto la cadena como el separador deben ser cadenas de texto"
    );

  console.info(cadena.trim().split(separador));
};
separarCadena("Hola Mundo", " ");

// Ejercicio 4: Función que repite un texto la cantidad de veces indicada
const repetirTexto = (cadena = undefined, repeticiones = undefined) => {
  if (!cadena || repeticiones === undefined)
    return console.warn("Los dos parámetros son necesarios");
  if (typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  if (typeof repeticiones !== "number" || repeticiones <= 0)
    return console.warn(
      "El número de veces a repetir el texto debe ser un número mayor que 0"
    );

  let resultado = cadena;
  for (let i = 1; i < repeticiones; i++) {
    resultado += ` ${cadena}`;
  }
  console.info(resultado);
};
repetirTexto("Oscar", 3);

// ==========> VIDEO 35 <==========

// Ejercicio 5: Función que invierte una cadena de texto
const invertirCadena = (cadena = undefined) => {
  if (!cadena) return console.warn("No ingresaste ningún cadena");
  if (typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  console.info(cadena.split("").reverse().join(""));
};
invertirCadena("Hola Mundo");

// Ejercicio 6: Función que realiza el conteo del número de veces que se repite una palabra en una cadena de texto
const contarCoincidencias = (cadena = undefined, fragmento = undefined) => {
  if (!cadena || !fragmento)
    return console.warn(
      "Tanto la cadena como el fragmento a buscar son requeridos"
    );
  if (typeof cadena !== "string" || typeof fragmento !== "string")
    return console.warn(
      "Tanto la cadena como el separador deben ser cadenas de texto"
    );
  const reg = new RegExp(fragmento, "gi");
  const coincidencias = cadena.match(reg).length;
  console.info(
    `En el texto "${cadena}", el fragmento "${fragmento}" se encuentra ${coincidencias} veces`
  );
};
contarCoincidencias("Hola mundo, mundo, chao mundo", "mundo");

// Ejercicio 7: Función que valida si una cadena de texto es un palíndromo
const validarPalindromo = (cadena = undefined) => {
  if (!cadena) return console.warn("Ingresa una cadena de texto a validar");
  if (typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");

  const cadenaSinEspacios = cadena.replace(/\s/g, "").trim().toLowerCase();
  const cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
  cadenaSinEspacios === cadenaInvertida
    ? console.info(`La cadena "${cadena}" es un palíndromo`)
    : console.info(`La cadena "${cadena}" no es un palíndromo`);
};
validarPalindromo("Anita lava la tina");

// Ejercicio 8: Función que elimina un patrón de caracteres de una cadena de texto dada
const eliminarPatron = (cadena = undefined, patron = undefined) => {
  if (!cadena || !patron)
    return console.warn(
      "Tanto la cadena como el patrón a eliminar son requeridos"
    );
  if (typeof cadena !== "string" || typeof patron !== "string")
    return console.warn(
      "Tanto la cadena como el patrón a eliminar deben ser cadenas de texto"
    );
  const reg = new RegExp(patron, "gi");
  console.info(cadena.replace(reg, ""));
};
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// ==========> VIDEO 36 <==========

// Ejercicio 9: Función que genera un número aleatorio entre dos valores dados
const numeroAleatorio = (min = undefined, max = undefined) => {
  if (min === undefined || max === undefined)
    return console.warn("Los números mínimo y máximo son requeridos");
  if (typeof min !== "number" || typeof min !== "number")
    return console.warn(
      "Los valores mínimo y máximo deben ser números validos"
    );
  if (min > max)
    return console.warn("El número mínimo debe ser menor que el número máximo");

  let numero;
  do {
    numero = Math.round(Math.random() * max);
  } while (numero < min);
  console.info(`Número aleatorio entre ${min} y ${max}: ${numero}`);
};
numeroAleatorio(500, 600);

// Ejercicio 10: Función que evalua si un número dado es capicúa
const validarCapicua = (numero = undefined) => {
  if (!numero) return console.warn("El número a validar es requerido");
  if (!Number.isInteger(numero))
    return console.warn("Por favor ingresa un número válido");
  const numeroOriginal = numero.toString();
  const numeroInvertido = numeroOriginal.split("").reverse().join("");
  numeroOriginal === numeroInvertido
    ? console.info(`${numero} es un número capicúa`)
    : console.info(`${numero} no es un número capicúa`);
};
validarCapicua(1210121);

// Ejercicio 11: Función que calcula el factorial de un número dado
const factorial = (numero = undefined) => {
  if (!numero)
    return console.warn("Ingresa un número para calcular su factorial");
  if (!Number.isInteger(numero) || numero <= 0)
    return console.warn("Por favor ingresa un número entero positivo");

  let resultado = numero;
  for (let i = numero - 1; i >= 1; i--) {
    resultado *= i;
  }
  console.info(`${numero}! = ${resultado}`);
};
factorial(8);

// ==========> VIDEO 37 <==========

// Ejercicio 12: Función que determine si un número es primo o no
const determinarNumeroPrimo = (numero = undefined) => {
  if (!numero || !Number.isInteger(numero) || numero <= 1)
    return console.warn("Por favor ingresa un número entero mayor que 1");

  let esNumeroPrimo = true;
  for (let i = 2; i < numero / 2; i++) {
    if (numero % i === 0) {
      esNumeroPrimo = false;
      break;
    }
  }
  esNumeroPrimo
    ? console.info(`${numero} es un número primo`)
    : console.info(`${numero} no es un número primo`);
};
determinarNumeroPrimo(103237);

// Ejercicio 13: Función que determine si un número es par o impar
const parImpar = (numero = undefined) => {
  if (numero === "undefined" || !Number.isInteger(numero))
    return console.warn("Por favor ingresa un número entero");
  numero % 2
    ? console.info(`${numero} es un número impar`)
    : console.info(`${numero} es un número par`);
};
parImpar(12);

// Ejercicio 14: Función para convertir grados Celsius a Fahrenheit y viceversa
const celsiusFahrenheit = (grados = undefined, unidad = undefined) => {
  if (grados === "undefined" || typeof grados !== "number")
    return console.warn("Por favor ingresa un número válido");
  if (!unidad || typeof unidad !== "string")
    return console.warn("Por favor ingresa una unidad de conversión");

  const unidadConversion = unidad.trim().toLowerCase();
  if (unidadConversion !== "celsius" && unidadConversion !== "fahrenheit")
    return console.warn(
      "Ingresa una unidad de conversión válida: Fahrenheit o Celsius"
    );

  if (unidadConversion === "celsius") {
    const conversion = Math.round(grados * 1.8 + 32);
    console.info(`${grados}°C equivalen a ${conversion}°F`);
  } else if (unidadConversion === "fahrenheit") {
    const conversion = Math.round((grados - 32) / 1.8);
    console.info(`${grados}°F equivalen a ${conversion}°C`);
  }
};
celsiusFahrenheit(100, "celsius");

// ==========> VIDEO 38 <==========

// Ejercicio 15: Función para convertir números de base binaria a decimal y viceversa
const binarioDecimal = (numero = undefined, base = undefined) => {
  if (typeof numero !== "number" || typeof base !== "number")
    return console.warn("Por favor ingresa un número y una base válidos");
  if (!Number.isInteger(numero) || Math.sign(numero) === -1)
    return console.warn("Ingresa un numero entero igual o mayor que 0");
  if (base !== 2 && base !== 10)
    return console.warn("La base sólo puede ser binaria (2) o decimal (10)");

  if (base === 2) {
    const reg = /^[01]+$/;
    let resultado = 0;
    if (!reg.test(numero))
      return console.warn(
        "Si seleccionas la base binaria debes ingresar un número binario"
      );
    array = Array.from(String(numero), (num) => Number(num)).reverse();
    array.forEach((numero, index) => {
      resultado += 2 ** index * numero;
    });
    console.info(
      `El número binario ${numero} es equivalente al número decimal ${resultado}`
    );
  }

  if (base === 10) {
    numeroDecimal = numero;
    array = [];
    do {
      array.unshift(numeroDecimal % 2);
      numeroDecimal = parseInt(numeroDecimal / 2);
    } while (numeroDecimal >= 1);
    const resultado = Number(array.join(""));
    console.info(
      `El número decimal ${numero} es equivalente al número binario ${resultado}`
    );
  }
};
binarioDecimal(111111, 2);

// Ejercicio 16: Función para calcular el monto final después de aplicar un porcentaje de descuento
const calcularDescuento = (monto = undefined, porcentaje = undefined) => {
  if (typeof monto !== "number" || typeof porcentaje !== "number")
    return console.warn(
      "Por favor ingresa un valor y un porcentaje de descuento válidos"
    );
  if (Math.sign(monto) < 1)
    return console.warn("El valor debe ser un número mayor que 0");
  if (porcentaje < 0 || porcentaje > 100)
    return console.warn(
      "El porcentaje de descuento debe ser un número entre 0 y 100"
    );

  const descuento = (monto * porcentaje) / 100;
  const valorFinal = monto - descuento;
  console.info(
    `Al aplicar el ${porcentaje}% de descuento sobre $${monto} se obtiene un valor final de $${valorFinal}`
  );
};
calcularDescuento(1000, 20);

// Ejercicio 17: Función para calcular los años que han pasado desde una fecha dada
const aniosDesde = (fecha) => {
  const reg = /^\d{4}-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/;
  if (!reg.test(fecha))
    return console.warn(
      "Por favor ingresa una fecha válida en formato YYYY-MM-DD"
    );

  const [anio, mes, dia] = fecha.split("-");
  const fechaEvaluar = new Date(anio, Number(mes) - 1, dia);
  const tiempoTranscurrido = Date.now() - fechaEvaluar.getTime();
  if (tiempoTranscurrido < 0)
    return console.warn("La fecha escrita aún no ha ocurrido");

  const factorConversion = 1000 * 60 * 60 * 24 * 365.25;
  const aniosTranscurridos = Math.floor(tiempoTranscurrido / factorConversion);
  aniosTranscurridos === 1
    ? console.info(
        `Desde la fecha ${fecha} hasta hoy ha transcurrido ${aniosTranscurridos} año`
      )
    : console.info(
        `Desde la fecha ${fecha} hasta hoy han transcurrido ${aniosTranscurridos} años`
      );
};
aniosDesde("1992-12-24");

// ==========> VIDEO 38 <==========

// Ejercicio 18: Función que dada una cadena de texto cuente el número de vocales y consonantes.
const contarVocalesConsonantes = (cadena = undefined) => {
  if (!cadena || typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  const regVocales = /[aeiou]/gi;
  const regConsonates = /[b-df-hj-np-tv-z]/gi;
  const vocales = cadena.match(regVocales)?.length || 0;
  const consonantes = cadena.match(regConsonates)?.length || 0;
  console.info(
    `La cadena de texo "${cadena}" tiene ${vocales} vocales y ${consonantes} consonantes`
  );
};
contarVocalesConsonantes("Fernando");

// Ejercicio 19: Función que valida que una cadena de texto sea un nombre válido (Nombre Apellido)
const validarNombre = (cadena = undefined) => {
  if (!cadena || typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  const regNombre = /^[a-z]+\s[a-z]+$/gi;
  const nombreValido = regNombre.test(cadena);
  nombreValido
    ? console.info(`"${cadena}" es un nombre válido`)
    : console.info(`"${cadena}" no es un nombre válido`);
};
validarNombre("Oscar Gutierrez");

// Ejercicio 20: Función que valida que una cadena de texto sea un correo electrónico válido
const validarEmail = (cadena = undefined) => {
  if (!cadena || typeof cadena !== "string")
    return console.warn("Ingresa una cadena de texto válida");
  const regEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
  const emailValido = regEmail.test(cadena);
  emailValido
    ? console.info(`"${cadena}" es un correo válido`)
    : console.info(`"${cadena}" no es un email válido`);
};
validarEmail("oscargutierrez@gmail.com");
