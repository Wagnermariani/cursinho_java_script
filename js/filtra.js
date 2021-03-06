var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function()
{

    //this.value

    var pacientes = document.querySelectorAll(".paciente");
    if(this.value.length > 0)
    {
    
        for (var i =0; i <pacientes.length; i++)
        {
            var paciente = pacientes[i];
            var nome = paciente.querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i"); // i é para desligar o case sensitive
            
            if (!expressao.test(nome))
            {
            paciente.classList.add("invisivel"); 
            }
            else
            {
                paciente.classList.remove("invisivel");
            }
        }
    }
    else
    {
        for (var i =0; i <pacientes.length; i++)
        {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});