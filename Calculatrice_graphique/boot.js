function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}

function resetCalculator() {
    document.getElementById('display').value = '';
}

function calculatePercentage() {
    var expression = document.getElementById('display').value;
    var result = eval(expression) / 100;
    document.getElementById('display').value = result;
}

function convertEURtoUSD(amount) {
    // Taux de change actuel de l'euro vers le dollar
    var exchangeRate = 1.08; // Exemple, utilisez le taux de change réel
    
    // Convertir l'amount d'euros en dollars
    var convertedAmount = amount * exchangeRate;
    
    return convertedAmount;
}

function convertEURtoJPY(amount) {
    // Taux de change actuel de l'euro vers le yen japonais
    var exchangeRate = 168.16; // Exemple, utilisez le taux de change réel
    
    // Convertir l'amount d'euros en yens
    var convertedAmount = amount * exchangeRate;
    
    return convertedAmount;
}

function convertEURtoCFA(amount) {
    // Taux de change actuel de l'euro vers le yen japonais
    var exchangeRate = 655.90; // Exemple, utilisez le taux de change réel
    
    // Convertir l'amount d'euros en yens
    var convertedAmount = amount * exchangeRate;
    
    return convertedAmount;
}


function convertCurrency(from, to) {
    var amount = parseFloat(document.getElementById('display').value);
    var convertedAmount;

    if (from === 'EUR' && to === 'USD') {
        convertedAmount = convertEURtoUSD(amount);
    } else if (from === 'EUR' && to === 'JPY') {
        convertedAmount = convertEURtoJPY(amount);
    } else if (from === 'EUR' && to === 'CFA') {
        convertedAmount = convertEURtoCFA(amount);
    } else {
        // Ajoutez d'autres logiques de conversion ici pour d'autres devises si nécessaire
        alert('Conversion from ' + from + ' to ' + to + ' is not supported.');
        return;
    }

    document.getElementById('display').value = convertedAmount.toFixed(2); // Affiche le montant converti avec 2 décimales
}




