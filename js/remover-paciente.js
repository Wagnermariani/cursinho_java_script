var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event)
{
    
   /// event.target.remove();   /// engraçado :-D
   var alvoEvento = event.target;
   var paiDoAlvo = alvoEvento.parentNode; // TR = paciente a remover
   
   paiDoAlvo.classList.add("fadeOut");
   
   setTimeout(function()
   {
        paiDoAlvo.remove();    
   },2000);
  

});










//pacientes.forEach(function(paciente)
//{
 //   paciente.addEventListener("dblclick",function()
  //  {

    
///});

 //   console.log("Fui Clicado e agora?");
       // this.remove();
    
    //});