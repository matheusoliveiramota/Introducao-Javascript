// APÓS CLIQUE NO BOTÃO 'BUSCAR PACIENTES': Deve ser feita uma requisição e retornar os objetos
    var btnBusca = document.querySelector("#buscar-pacientes");

    btnBusca.addEventListener("click", function() {
        var request = new XMLHttpRequest();
        request.open("GET","https://api-pacientes.herokuapp.com/pacientes");
        request.send();

        request.addEventListener("load", function() {
            var erroReq = document.querySelector(".erro-request");
            btnBusca.classList.add("invisivel");
            if(request.status === 200) {
                erroReq.classList.add("invisivel");
                var pacientes = JSON.parse(request.responseText);

                for(paciente of pacientes) {
                    var trPaciente = CriarTr(paciente);
                    trPaciente.classList.add("paciente-api");
                    document.querySelector("#tabela-pacientes").appendChild(trPaciente);
                }
            }
            else {
                erroReq.classList.remove("invisivel");
            }
        });
    });