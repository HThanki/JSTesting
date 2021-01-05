describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {

    it("Fahrenheit to Celsius", function() {
      var result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');
    });

    it("Celsius to Fahrenheit", function() {
      var result = convertCelsiustoFahrenheit(37.8);
      expect(result).toEqual('100.0');
    });
  });

  describe("Weight", function() {
    
    it("Pounds to Kilos", function() {
      var result = convertPoundsToKilos(10);
      expect(result).toEqual('4.5');
    })
  })

  describe("Volume", function () {
    it("Litre to Gallons", function(){
      var result= convertLitreToGallons(5);
      expect(result).toEqual('1.1');
    })
  })

  describe("Distance", function(){
    it("Miles to Km", function(){
      var result = convertMilesToKm(50);
      expect(result).toEqual('80.5');
    })

  })

});
