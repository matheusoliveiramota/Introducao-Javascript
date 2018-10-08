// AO CLICAR DUAS VEZES SOBRE A LINHA: O PACIENTE É REMOVIDO

// 1 - ESCUTAR O DUPLO CLIQUE DA TABELA
    document.querySelector("table").addEventListener("dblclick",function(event){
        
        var linhaClicada = event.target.parentNode;
        
        if(linhaClicada.parentNode.tagName === "TBODY") {
            linhaClicada.classList.add("fadeOut");

            setTimeout(function(){
                linhaClicada.remove();
           },1000);
        } 
    });