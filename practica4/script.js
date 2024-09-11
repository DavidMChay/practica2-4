$(document).ready(function() {
    $("#mcd-form").on("submit", function(event) {
        event.preventDefault();
        
        const numero1 = parseInt($("#numero1").val());
        const numero2 = parseInt($("#numero2").val());
        const errorDiv = $("#error");
        const resultadoDiv = $("#mcd-resultado");
        
        errorDiv.text(""); // Limpiar mensaje de error
        resultadoDiv.text(""); // Limpiar resultado previo

        if (numero1 <= 0 || numero2 <= 0) {
            errorDiv.text("Por favor, ingresa números enteros positivos.");
            return;
        }
        
        const mcd = calcularMCD(numero1, numero2);
        resultadoDiv.text(mcd);
    });
    
    function calcularMCD(a, b) {
        if (b === 0) {
            return a;
        }
        return calcularMCD(b, a % b);
    }
});
