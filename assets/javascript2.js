var button = document.getElementById('button');
var onButtonClick = function(){
	button.addEventListener("click", onButtonClick);
	var datos = document.getElementsById('dato').value;
	var resultado = "<br><br><b><li>Titulo : </b>" + datos + "<br>";
};

//Función que agrega las tareas a la lista 
function obtenerDato(){
    var entrada = document.getElementById("nuevatarea").value;
    var agregarTarea = document.getElementsByClassName("añadirDato");
    agregarTarea[0].innerHTML += "<li>Tarea : " + entrada + "</li>";
    entrada.value= "";
}

//Constructor para agregar las tareas

    function Datos(entrada){
	    this.userId = 1;
	    this.id = listita.length;
	    this.title = entrada;
	    this.completed = false;
    	}
