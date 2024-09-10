$(document).ready(function() {
    $("#mcd-form").on("submit", function(event) {
        event.preventDefault();
        
        const numero1 = parseInt($("#numero1").val());
        const numero2 = parseInt($("#numero2").val());
        
        const mcd = calcularMCD(numero1, numero2);
        $("#mcd-resultado").text(mcd);
    });
    
    function calcularMCD(a, b) {
        if (b === 0) {
            return a;
        }
        return calcularMCD(b, a % b);
    }
});
