function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const temperature = 29;
const windSpeed = 12;

const windChillEl = document.getElementById("windchill");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  windChillEl.textContent = "N/A";
}

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;
