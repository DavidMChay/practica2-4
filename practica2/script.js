$(document).ready(function() {
    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    $('#calculateBtn').on('click', function() {
        let number = parseInt($('#numberInput').val());
        if (isNaN(number) || number < 0) {
            $('#result').text('Por favor, ingrese un número entero no negativo.');
        } else {
            let result = factorial(number);
            $('#result').text('Factorial: ' + result);
        }
    });
});
