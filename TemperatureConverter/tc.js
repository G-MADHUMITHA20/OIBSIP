function convertTemp() {
    let temp = document.getElementById("tempInput").value;
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result = document.getElementById("result");

    if (temp === "") {
        result.innerHTML = "Please enter a temperature!";
        return;
    }

    temp = parseFloat(temp);
    let converted;

    if (from === to) {
        converted = temp;
    } 
    else if (from === "celsius" && to === "fahrenheit") {
        converted = (temp * 9/5) + 32;
    } 
    else if (from === "celsius" && to === "kelvin") {
        converted = temp + 273.15;
    } 
    else if (from === "fahrenheit" && to === "celsius") {
        converted = (temp - 32) * 5/9;
    } 
    else if (from === "fahrenheit" && to === "kelvin") {
        converted = (temp - 32) * 5/9 + 273.15;
    } 
    else if (from === "kelvin" && to === "celsius") {
        converted = temp - 273.15;
    } 
    else if (from === "kelvin" && to === "fahrenheit") {
        converted = (temp - 273.15) * 9/5 + 32;
    }

    result.innerHTML = `Result: ${converted.toFixed(2)} ${to === "celsius" ? "°C" : to === "fahrenheit" ? "°F" : "K"}`;
}


