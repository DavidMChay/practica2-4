function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

$(document).ready(function () {
    $('#calculate-btn').click(function () {
        const number = parseInt($('#fibonacci-input').val());
        if (isNaN(number) || number < 0) {
            alert("Por favor, ingrese un número válido.");
            return;
        }

        const result = fibonacci(number);
        $('#result').text(`El valor de Fibonacci para ${number} es: ${result}`).fadeIn();
    });
});
