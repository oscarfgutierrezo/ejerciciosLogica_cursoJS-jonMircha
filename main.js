// ==========> VIDEO 34 <==========

const cantidadCaracteres = (cadena = "") =>
  !cadena
    ? console.warn("No ingresaste ningún cadena")
    : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
cantidadCaracteres("");

const recortarTexto = (cadena = "", cantidadCaracteres = cadena.length) =>
  !cadena
    ? console.warn("No ingresaste ningún cadena")
    : console.info(cadena.slice(0, cantidadCaracteres));
recortarTexto("Hola Mundo");

const separarCadena = (cadena = "", separador = "") =>
  !cadena
    ? console.warm("No ingresaste ningún cadena")
    : !separador
    ? console.warm("No ingresaste ningún separador")
    : console.info(cadena.split(separador));
separarCadena("Hola Mundo", " ");

const repetirTexto = (cadena = "", repeticiones = undefined) => {
  if (!cadena || !repeticiones)
    return console.warn("Los dos parámetros son necesarios");
  if (repeticiones <= 0)
    return console.warn(
      "El número de veces a repetir el texto debe ser mayor a 0"
    );

  let resultado = cadena;
  for (let i = 1; i < repeticiones; i++) {
    resultado += ` ${cadena}`;
  }
  console.info(resultado);
};
repetirTexto("Oscar", 10);

// ==========> VIDEO 35 <==========

const invertirCadena = (cadena = "") => {
  if (!cadena) return console.warn("No ingresaste ningún cadena");
  console.info(cadena.split("").reverse().join(""));
};
invertirCadena("Hola Mundo");

const contarCoincidencias = (cadena = "", fragmento = "") => {
  if (!cadena || !fragmento)
    return console.warn(
      "Tanto la cadena de texto como el fragmento a buscar son requeridos"
    );
  const reg = new RegExp(fragmento, "gi");
  const coincidencias = cadena.match(reg).length;
  console.info(
    `En el texto "${cadena}", el fragmento "${fragmento}" se encuentra ${coincidencias} veces`
  );
};
contarCoincidencias("Hola mundo, mundo, chao mundo", "mundo");

const validarPalindromo = (cadena = "") => {
  if (!cadena) return console.warn("Ingresa una cadena de texto a validar");
  const cadenaSinEspacios = cadena.replace(/\s/g, "").trim().toLowerCase();
  const cadenaInvertida = cadenaSinEspacios.split("").reverse().join("");
  cadenaSinEspacios === cadenaInvertida
    ? console.info(`La cadena "${cadena}" es un palíndromo`)
    : console.info(`La cadena "${cadena}" no es un palíndromo`);
};
validarPalindromo("Anita lava la tina");

const eliminarPatron = (cadena = "", patron = "") => {
  if (!cadena || !patron)
    return console.warn(
      "Tanto la cadena de texto como el patrón a eliminar son necesarios"
    );
  const reg = new RegExp(patron, "gi");
  console.info(cadena.replace(reg, ""));
};
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");

// ==========> VIDEO 36 <==========

const numeroAleatorio = (min = undefined, max = undefined) => {
  if (min === undefined || max === undefined)
    return console.warn("Los números mínimo y máximo son requeridos");
  if (min > max)
    return console.warn("El número mínimo debe ser menor que el número máximo");
  let numero;
  do {
    numero = Math.round(Math.random() * max);
  } while (numero < min);
  console.info(numero);
};
numeroAleatorio(501, 600);

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

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */
