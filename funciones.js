/**
       *  Generar numeros primos
       * */
function esPrimo(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function generarPrimos() {
  let cantidad = Number($("#cantidad").val());
  if (cantidad <= 0) {
    alert("Ingrese una cantidad positiva para generar los primos.");
    return;
  }
  let primos = [];
  let n = 2;
  while (primos.length < cantidad) {
    if (esPrimo(n)) {
      primos.push(n);
    }
    n++;
  }
  mostrarPrimos(primos);
}

function mostrarPrimos(primos) {
  let cantidadGenerada = primos.length;
  $("#cantidad-generada").text(cantidadGenerada);
  $("#numeros-primos").empty();
  for (let i = 0; i < primos.length; i++) {
    let numero = primos[i];
    let item = $("<li class='fw-bold'></li>").addClass("list-group-item").text(numero);
    $("#numeros-primos").append(item);
  }
}
/**
   *  Generar numeros fibonaci
*/
function generarFibonacis() {
  let numero = Number($("#numero").val());
  if (numero <= 0) {
    alert("Ingrese una numero positiva para generar los fibonaci.");
    return;
  }
  let fib = [0, 1];
  for (let i = 2; i < numero; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  mostrarFibonacis(fib);
}
function mostrarFibonacis(fibonaci) {
  let cantidadGenerada = fibonaci.length;
  $("#fibonaci-generada").text(cantidadGenerada);
  $("#numeros-fibonaci").empty();
  for (let i = 0; i < fibonaci.length; i++) {
    let numero = fibonaci[i];
    let item = $("<li class='fw-bold'></li>").addClass("list-group-item").text(numero);
    $("#numeros-fibonaci").append(item);
  }
}
/**
   *  Generar multiplos de numeros X
*/
function generarMultiplos() {
  let multiplo = Number($("#multiplo").val());
  let cantidad_multiplo = Number($("#cantidad_multiplo").val());
  if (cantidad_multiplo <= 0) {
    alert("Ingrese una cantidad multiplos positiva.");
    return;
  }
  if (multiplo <= 0) {
    alert("Ingrese un multiplo positiva.");
    return;
  }
  let mult = [];
  for (let i = 1; i <= cantidad_multiplo; i++) {
    mult.push(i * multiplo);
  }
  mostrarMultiplos(mult);
}
function mostrarMultiplos(multiplos) {
  let cantidadGenerada = multiplos.length;
  $("#multiplos-generada").text(cantidadGenerada);
  $("#numeros-multiplos").empty();
  for (let i = 0; i < multiplos.length; i++) {
    let numero = multiplos[i];
    let item = $("<li class='fw-bold'></li>").addClass("list-group-item").text(numero);
    $("#numeros-multiplos").append(item);
  }
}
