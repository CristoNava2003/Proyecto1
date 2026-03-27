document.getElementById("btnCalcular").addEventListener("click", function () {

    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    if (peso === "" || altura === "") {
        alert("Llena todos los campos");
        return;
    }

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (altura === 0) {
        alert("La altura no puede ser 0");
        return;
    }

    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerText =
        imc.toFixed(2);

});