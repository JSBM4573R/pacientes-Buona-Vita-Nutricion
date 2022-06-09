var botonBuscar = document.querySelector("#buscar-paciente");

botonBuscar.addEventListener("click",function(){
    // Creo una variable xhr que va a contener el objeto XMLHttpRequest para realizar peticiones 
    var xhr = new XMLHttpRequest;
    // Se usa el metodo open para realizar una peticion en este caso tipo "GET" a la url 
    xhr.open("GET","https://alura-es-cursos.github.io/api-pacientes/pacientes.json");
    // Creo otro evento que carga lo que contiene la peticion
    xhr.addEventListener("load",function(){
        // Traigo el elemento que contiene el texto por su id error-ajax
        var errorAjax = document.querySelector("#error-ajax");
        // Creo un condicional que valida si el status de la respuesta fue ok entonces
        if(xhr.status == 200){
            // Si fue ok entonces oculto el error
            errorAjax.classList.add("invisible");
            // Creo una variable respuesta que va a contener el contenido de la respuesta con el metodo responseText
            var respuesta = xhr.responseText;
            // Creo una variable pacientes que cambiara el Objeto JSON a un Objeto Javacript con JSON.parse()
            var pacientes = JSON.parse(respuesta);
            // Creo un forEach que va a iterar el objeto guardado en la variable pacientes
            pacientes.forEach(function(paciente){
                // Llamo el metodo adicionarPacienteEnLaTabla y le agrego a la tabla cada paciente del objeto pacientes
                adicionarPacienteEnLaTabla(paciente);
            });
        }else{
            // Si ocurrio un error entonces remuevo la clase "invisible" para mostrar el error
            errorAjax.classList.remove("invisible");
            // imprimo por consola los errores
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    }); 
    // Al final es muy importante realizar la peticion con .send() 
    xhr.send();
});