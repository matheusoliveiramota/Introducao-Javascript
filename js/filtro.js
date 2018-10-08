// BUSCAR PELO TEXTO DA ÁREA
    var txtFiltro = document.querySelector("input[name='filtro']");

// ADICIONAR LISTENER DE INPUT
    txtFiltro.addEventListener("input", function(){
        var pacientes = document.querySelectorAll(".paciente, .paciente-invalido");

        if(txtFiltro.value.length > 0) {
            // PARA CADA PACIENTE QUE NÃO TEM NOME DO TEXTO, 'display: none;'
            var expressao = new RegExp(txtFiltro.value,"i");

            for(paciente of pacientes) {
                var nomePaciente = paciente.querySelector(".info-nome");

                if(!expressao.test(nomePaciente.innerText)) {
                    paciente.classList.add("invisivel");
                }
                else {
                    paciente.classList.remove("invisivel");
                }
            }
        }
        else {
            for(paciente of pacientes) {
                paciente.classList.remove("invisivel");
            }
        }
    });