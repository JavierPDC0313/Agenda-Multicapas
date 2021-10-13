var N = 286;

function contactos(){
    fetch("http://www.raydelto.org/agenda.php").then(
        function(resultado){
            return resultado.json();
        }
    ).then(
        function(resultado){
            console.log(resultado);

            // Obtener la referencia del elemento body
            var body = document.getElementsByTagName("body")[0];
  
            // Crea un elemento <table> y un elemento <tbody>
            var tabla   = document.createElement("table");
            var tblBody = document.createElement("tbody");

            var hilera = document.createElement("tr");
            
            var celda = document.createElement("th");
            var textoCelda = document.createTextNode("Nombre");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            var celda = document.createElement("th");
            var textoCelda = document.createTextNode("Apellido");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            var celda = document.createElement("th");
            var textoCelda = document.createTextNode("Telefono");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            tblBody.appendChild(hilera);
  
            // Crea las celdas
            for (var i = 0; i < N; i++) {
                // Crea las hileras de la tabla
                hilera = document.createElement("tr");
  
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(resultado[i].nombre);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(resultado[i].apellido);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);

                var celda = document.createElement("td");
                var textoCelda = document.createTextNode(resultado[i].telefono);
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
  
                // agrega la hilera al final de la tabla (al final del elemento tblbody)
                tblBody.appendChild(hilera);
            }
  
            // posiciona el <tbody> debajo del elemento <table>
            tabla.appendChild(tblBody);
            // appends <table> into <body>
            body.appendChild(tabla);
            // modifica el atributo "border" de la tabla y lo fija a "2";
            tabla.setAttribute("border", "2");
        }
    )
}

function Agregar(){
    var txtName = document.getElementById("Nombre");
    var Name = txtName.nodeValue;

    var txtLastname = document.getElementById("Apellido");
    var Lastname = txtLastname.nodeValue;

    var txtCellphone = document.getElementById("Telefono");
    var Cellphone = txtCellphone.nodeValue;

    fetch("http://www.raydelto.org/agenda.php", {
        method: 'POST',body: JSON.stringify({nombre:Name,apellido:Lastname,telefono:Cellphone}),
        }).then(response => response.json()).then(valor => {
        console.log(valor);
        })
    alert("Datos guardados con exito!")
}