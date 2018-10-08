// FORMULÁRIO DE CADASTRO DE PACIENTE
    // Valida os campos preenchidos ANTES  de inserir, Calcula e Cria nova linha

var botaoAdicionar = document.querySelector("#adicionar-paciente");

    botaoAdicionar.addEventListener("click", function(event){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");

        var paciente = ObterPacienteDoFormulario(form);

        // VALIDAR ERROS

            //LIMPAR ERROS SE EXISTIREM
            var ulErros = document.querySelector("#mensagens-validacao");
            ulErros.innerHTML = "";
            
        var erros = ValidarPaciente(paciente);
        if(erros.length == 0)
        {
            var trPaciente = CriarTr(paciente);
            document.querySelector("#tabela-pacientes").appendChild(trPaciente);
            form.reset();
        }
        else
        {
            ExibirMensagensDeErro(erros);
        }
    });

function ObterPacienteDoFormulario(form)
{
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
    return paciente;
}

function CriarTr(paciente)
{
    var trPaciente = document.createElement("tr");
    
    trPaciente.appendChild(CriarTd(paciente.nome,"info-nome"));
    trPaciente.appendChild(CriarTd(paciente.peso,"info-peso"));
    trPaciente.appendChild(CriarTd(paciente.altura,"info-altura"));
    trPaciente.appendChild(CriarTd(paciente.gordura,"info-gordura"));
    if(paciente.imc === undefined)
        trPaciente.appendChild(CriarTd(CalculaIMC(paciente.peso,paciente.altura),"info-imc"));
    else
        trPaciente.appendChild(CriarTd(paciente.imc,"info-imc"));

    trPaciente.classList.add("paciente");
    return trPaciente;
}

function CriarTd(texto,nomeClasse)
{
    var td = document.createElement("td");
        td.classList.add(nomeClasse);
        td.textContent = texto;
    return td;
}

function ExibirMensagensDeErro(erros)
{
    var ulErros = document.querySelector("#mensagens-validacao");
    erros.forEach(function(erro){
        var liErro = document.createElement("li");
        liErro.textContent = erro;

        ulErros.appendChild(liErro);
    });
}