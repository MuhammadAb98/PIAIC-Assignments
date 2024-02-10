// Function to convert an amount from one currency to another with a fixed exchange rate
function convertCurrency(amount: number, fromCurrency: string, toCurrency: string, fixedExchangeRate: number): number {
  if (fromCurrency === 'USD' && toCurrency === 'PKR') {
    // Convert USD to PKR
    return amount * fixedExchangeRate;
  } else if (fromCurrency === 'PKR' && toCurrency === 'USD') {
    // Convert PKR to USD
    return amount / fixedExchangeRate;
  } else {
    throw new Error('Invalid currency code');
  }
}

// Example usage
function runConverter() {
  const baseCurrency = 'USD';
  const targetCurrency = 'PKR';
  const amountToConvert = 100;
  const fixedExchangeRate = 300;

  try {
    const convertedAmount = convertCurrency(amountToConvert, baseCurrency, targetCurrency, fixedExchangeRate);

    console.log(`${amountToConvert} ${baseCurrency} is equal to ${convertedAmount} ${targetCurrency}`);
  } catch (error) {
    console.error('Error converting currency:', error.message);
  }
}

// Run the example
runConverter();
