document.getElementById('TempInput').addEventListener('input', 
function(e){
    let tempCelsius = e.target.value;
    document.getElementById('FahrOutput').innerHTML = (tempCelsius*(9/5))+32;
    document.getElementById('KelvinOutput').innerHTML = (tempCelsius*1)+273.15; //se multiplica el tempCelsius por 1, ya que sin el solo acumulaba la sumatoria como que fuera un string
});