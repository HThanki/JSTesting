/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  var celsius = ((temperature - 32)/1.8);
  return celsius.toFixed(1);
}

function convertCelsiustoFahrenheit(temperature) {
  var fahrenheit = temperature * 1.8 + 32
  return fahrenheit.toFixed(1);

}

function convertPoundsToKilos(weight) {
  var kilo = weight * 0.4536;
  return kilo.toFixed(1);
}

function convertLitreToGallons(volume) {
  var gallons = volume * 0.22;
  return gallons.toFixed(1);
}

function convertMilesToKm(distance) {
  var kms = distance * 1.609
  return kms.toFixed(1);
}