// AO CARREGAR A PÁGINA:
    // Os IMC's cadastrados são validados e calculados

var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i<pacientes.length;i++){

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var campoImc = paciente.querySelector(".info-imc");
    
    if(ValidarPeso(peso) && ValidarAltura(altura))
    {
        campoImc.textContent = CalculaIMC(peso, altura);
    }
    else
    {
        if(!ValidarPeso(peso) && !ValidarAltura(altura))
            campoImc.textContent = "Peso e Altura inválidos!";
        if(!ValidarPeso(peso) && ValidarAltura(altura))
            campoImc.textContent = "Peso inválido!";
        if(ValidarPeso(peso) && !ValidarAltura(altura))
            campoImc.textContent = "Altura inválida!";
        // ESTILIZAR
        paciente.classList.remove("paciente");
        paciente.classList.add("paciente-invalido");
    }
    
}