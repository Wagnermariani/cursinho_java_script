var BotaoAdicionar = document.querySelector("#buscar-paciente");

BotaoAdicionar.addEventListener("click", function()
{
    console.log("Está buscando....");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function()
    {
        if(xhr.status == 200)
        {

            console.log(xhr.responseText);

            var resposta = xhr.responseText;;
            console.log(typeof resposta);
            console.log(resposta);

            var pacientes = JSON.parse(resposta);
            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function(paciente)
            {
                adicionaPacienteNaTabela(paciente);
            });
        }else
        {
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});