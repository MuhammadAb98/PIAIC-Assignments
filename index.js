// Function to convert an amount from one currency to another with a fixed exchange rate
function convertCurrency(amount, fromCurrency, toCurrency, fixedExchangeRate) {
    if (fromCurrency === 'USD' && toCurrency === 'PKR') {
        // Convert USD to PKR
        return amount * fixedExchangeRate;
    }
    else if (fromCurrency === 'PKR' && toCurrency === 'USD') {
        // Convert PKR to USD
        return amount / fixedExchangeRate;
    }
    else {
        throw new Error('Invalid currency code');
    }
}
// Example usage
function runConverter() {
    var baseCurrency = 'USD';
    var targetCurrency = 'PKR';
    var amountToConvert = 100;
    var fixedExchangeRate = 300;
    try {
        var convertedAmount = convertCurrency(amountToConvert, baseCurrency, targetCurrency, fixedExchangeRate);
        console.log("".concat(amountToConvert, " ").concat(baseCurrency, " is equal to ").concat(convertedAmount, " ").concat(targetCurrency));
    }
    catch (error) {
        console.error('Error converting currency:', error.message);
    }
}
// Run the example
runConverter();
