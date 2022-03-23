function converter() {
  var tempElemento = document.getElementById ("temperatura");
  
  if(document.getElementById("celcius").checked) {
    converterDeFahrenheit();
  } else if(document.getElementById("fahrenheit").checked){
    converterDeCelcius();
  } else {
    converterParaKelvin();
  }
}

function converterDeCelcius() {
var tempElemento = document.getElementById ("temperatura");
var celcius = parseFloat(tempElemento.value);
var calculoC = (celcius * 1.8) + 32;
var calculoCToFixed = calculoC.toFixed(1)
var elementoConversaoC = document.getElementById ("resultado")
var conversaoC = celcius + "°" + " " + "para Fahrenheit é igual a:" + " " + calculoCToFixed + "°";
elementoConversaoC.innerHTML = conversaoC;
  
console.log(conversaoC)
}

function converterDeFahrenheit() {
var tempElemento = document.getElementById ("temperatura");
var fahrenheit = parseFloat(tempElemento.value);
var calculoF = (fahrenheit - 32) / 1.8;
var calculoFToFixed = calculoF.toFixed(1)
var elementoConversaoF = document.getElementById ("resultado")
var conversaoF = fahrenheit + "°" + " " + "para Celcius é igual a:" + " " + calculoFToFixed + "°";
elementoConversaoF.innerHTML = conversaoF;
  
console.log (conversaoF)
}

function converterParaKelvin() {
  var tempElemento = document.getElementById ("temperatura");
var celcius = parseFloat(tempElemento.value);
var calculoK = celcius + 273;
var calculoKToFixed = calculoK.toFixed(1)
var elementoConversaoK = document.getElementById ("resultado")
var conversaoK = celcius + "°" + "celcius " + "para kelvin é igual a:" + " " + calculoKToFixed + "°";
elementoConversaoK.innerHTML = conversaoK;
}