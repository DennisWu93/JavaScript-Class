document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
    // Send a GET request to the URL
    fetch('https://api.exchangeratesapi.io/latest?access_key=63de467c0f2b5da247c7fa8fef3973b9')
    // Put response into json form
    .then(response => response.json())
    .then(data => {
        // Log data to the console
        console.log(data);
        // Get currency from user input and convert to upper case
        const currency = document.querySelector('#currency').value.toUpperCase();
        // Get rate from data
        const rate = data.rates[currency];

        // Check if currency is valid:
        if (rate !== undefined) {
            // Display exchange on the screen
            document.querySelector('#result').innerHTML = `1 EUR is equal to ${rate.toFixed(3)} ${currency}.`;
        }
        else {
            // Display error on the screen
            document.querySelector('#result').innerHTML = 'Invalid Currency.';
        }
        })
        // Catch any errors and log them to the console
        .catch(error => {
            console.log('Error:', error);
        });
        // Prevent default submission
        return false;
    }
});