function calcularIMC() {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    // Validar campos vacíos
    if (peso === "" || altura === "") {
        alert("Por favor llena todos los campos");
        return;
    }

    // Convertir a número
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    // Calcular IMC
    let imc = peso / (altura * altura);

    // Mostrar resultado
    document.getElementById("resultado").innerText =
        imc.toFixed(2);

}