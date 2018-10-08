// FUNÇÕES UTILIZADAS POR AMBOS OS ARQUIVOS

function CalculaIMC(peso, altura)
{
    var imc = 0.0;
    imc  = peso / (altura*altura);
    return imc.toFixed(2);
}

function ValidarPeso(peso)
{
    if(peso <= 0 || peso >= 1000)
    {
        return false;
    }
    return true;;
}

function ValidarAltura(altura)
{
    if(altura <= 0 || altura >= 3)
    {
        return false;
    }
    return true;
}

function ValidarPaciente(paciente)
{
    var erros = [];

    // CAMPOS EM BRANCO
    if(paciente.nome.length == 0)
        erros.push("Preencha o Nome do paciente.");
    if(paciente.peso.length == 0)
        erros.push("Preencha o Peso do paciente.");
    if(paciente.altura.length == 0)
        erros.push("Preencha a Altura do paciente.");
    if(paciente.gordura.length == 0)
        erros.push("Preencha a Gordura do paciente.");
    
    if(erros.length == 0)
    {
        // ALTURA E PESO
        if(!ValidarPeso(paciente.peso) && !ValidarAltura(paciente.altura))
            erros.push("Peso e Altura inválidos!");
        if(!ValidarPeso(paciente.peso) && ValidarAltura(paciente.altura))
            erros.push("Peso inválido!");
        if(ValidarPeso(paciente.peso) && !ValidarAltura(paciente.altura))
            erros.push("Altura inválida!");
    }

    return erros; 
}