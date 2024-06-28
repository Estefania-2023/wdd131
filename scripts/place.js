currentYear = document.querySelector("#currentyear");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;


// Adding last modification date
lastModifElement = document.lastModified;
const lastMod = document.querySelector("#lastmodified");

const text = `Last modified: ${lastModifElement}`;

lastMod.textContent += text;


const tempElement = document.querySelector("#temperature");
const windElement = document.querySelector("#windspeed");
const condElement = document.querySelector("#condition");
const windchillElement = document.querySelector("#windchill");

const temperature = 16;
const windSpeed = 14;
const conditions = "Partly Cloudy";

function calculateWindChild(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature) * Math.pow(windSpeed, 0.16)).toFixed(2);
}

tempElement.textContent = temperature;
windElement.textContent = windSpeed;
condElement.textContent = conditions;

if (temperature <= 10 && windSpeed > 4.8) {
    windchillElement.textContent = `${calculateWindChild(temperature, windSpeed)}`;
}
else {
    windchillElement.textContent = "N/A";
}