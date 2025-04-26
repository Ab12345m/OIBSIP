function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value.trim();
    const unit = document.getElementById('unitSelect').value;
    const errorMsg = document.getElementById('errorMsg');
    const result = document.getElementById('result');

    // Reset messages
    errorMsg.textContent = '';
    result.textContent = '';

    // Validate input: must be a number
    if (tempInput === '' || isNaN(tempInput)) {
        errorMsg.textContent = 'Please enter a valid number!';
        return;
    }

    let temperature = parseFloat(tempInput);
    let convertedTemp;

    if (unit === 'celsius') {
        convertedTemp = (temperature * 9/5) + 32;
        result.textContent = `${temperature}°C = ${convertedTemp.toFixed(2)}°F`;
    } else {
        convertedTemp = (temperature - 32) * 5/9;
        result.textContent = `${temperature}°F = ${convertedTemp.toFixed(2)}°C`;
    }
}
