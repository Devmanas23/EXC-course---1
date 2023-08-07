document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculate-button");
    const resultDiv = document.getElementById("result");
    
    calculateButton.addEventListener("click", function () {
        const buildingLength = parseFloat(document.getElementById("building-length").value);
        const buildingWidth = parseFloat(document.getElementById("building-width").value);
        const buildingHeight = parseFloat(document.getElementById("building-height").value);
        const numOccupants = parseInt(document.getElementById("num-occupants").value);
        const applianceHeatGain = parseFloat(document.getElementById("appliance-heat-gain").value);
        const outdoorTemperature = parseFloat(document.getElementById("outdoor-temperature").value);
        const indoorTemperature = parseFloat(document.getElementById("indoor-temperature").value);
        
        // Perform calculations and display the result (example)
        const sensibleCoolingLoad = calculateCoolingLoad(buildingLength, buildingWidth, buildingHeight, numOccupants, applianceHeatGain, outdoorTemperature, indoorTemperature);
        
        resultDiv.innerHTML = `Estimated Cooling Load: ${sensibleCoolingLoad} watts`;
    });
});

function calculateCoolingLoad(length, width, height, occupants, appliances, outdoorTemp, indoorTemp) {
    // Example calculation logic (replace with your actual calculation)
    const heatTransferCoefficient = 100;
    const wallArea = 2 * (length + width) * height;
    const roofArea = length * width;
    const totalArea = wallArea + roofArea;
    const sensibleCoolingLoad = totalArea * heatTransferCoefficient * (indoorTemp - outdoorTemp) + occupants * 100 + appliances;
    
    return sensibleCoolingLoad;
}
