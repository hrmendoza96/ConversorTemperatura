//Celsius
document.getElementById('Celsius').addEventListener('input', 
function(e){
    let tempCelsius = parseFloat(e.target.value);
    console.log(tempCelsius);
    document.getElementById('Fahr').value = (tempCelsius*(9/5))+32;
    document.getElementById('Kelvin').value = tempCelsius+273.15; 
});

//Fahrenheit
document.getElementById('Fahr').addEventListener('input', 
function(e){
    let tempFahr = parseFloat(e.target.value);
    console.log(tempFahr);
    document.getElementById('Celsius').value = (tempFahr-32)*(5/9);
    document.getElementById('Kelvin').value = (tempFahr+459.67)*(5/9); 
});

//Kelvin
document.getElementById('Kelvin').addEventListener('input', 
function(e){
    let tempKelvin = parseFloat(e.target.value);
    console.log(tempKelvin);
    document.getElementById('Fahr').value = (tempKelvin*(9/5))-459.67
    document.getElementById('Celsius').value = tempKelvin-273.15; 
});