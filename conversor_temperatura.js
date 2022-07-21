/* Conversor de temperatura  */

/* Fórmulas de conversão:
 
   Celsius para Kelvin :
   K = C + 273;

   Celsius para Fahrenheit:
   F = C * 9/5 +32 

   Kelvin para Celsius:
   C = K - 273;

   Kelvin para Fahrenheit 
   F = (K - 273) * 9/5  + 32;

   Fahrenheit para Celsius:
   C = (F - 32) * 5/9;
   
   Fahrenheit para Kelvin:
   K = (F - 32) * 5/9 +273


   */



function tranformDegree(degree) {
   const celsiusExist = degree.toUpperCase().includes('C');
   const fahreinheitExist = degree.toUpperCase().includes('F');
   const kelvinExist = degree.toUpperCase().includes('K')

   if (!celsiusExist && !fahreinheitExist && !kelvinExist) {
      throw new Error('Grau não identificado');
   }

   //Fahrenheit para Celsius e Fahrenheit para Kelvin
   let updatedDgree = Number(degree.toUpperCase().replace("F", ""));
   let formulaA = (fahreinheit) => (fahreinheit - 32) * 5 / 9; //celsius
   let formulaB = (fahreinheit) => (fahreinheit - 32) * 5 / 9 + 273 //fahrenheit
   let degreeSing = ['C', 'K'];




   // Celsius para Fahrenheit e Celsius para Kelvin
   if (celsiusExist) {
      updatedDgree = Number(degree.toUpperCase().replace("C", ""));
      formulaA = (celsius) => celsius * 9 / 5 + 32; //fahrenheit
      formulaB = (celsius) => celsius + 273; //kelvin
      degreeSing = ['F', 'K'];
   }

   //Kelvin para Fahrenheit e Kelvin para Celsius 
   if (kelvinExist) {
      updatedDgree = Number(degree.toUpperCase().replace("K", ""));
      formulaA = (kelvin) => (kelvin - 273) * 9 / 5 + 32; //fahrenheit
      formulaB = (kelvin) => kelvin - 273; //celsius
      degreeSing = ['F', 'C']
   }



   result = `O valor em ${degreeSing[0]} será de ${formulaA(updatedDgree) + degreeSing[0]} e o valor em ${degreeSing[1]} é de ${formulaB(updatedDgree) + degreeSing[1]}`;
   console.log(result)

   return result //colocar código no github e fazer a parte do front end depois 
   




}

try {

} catch (error) {
   console.log(error.message);
}

tranformDegree('50f');
