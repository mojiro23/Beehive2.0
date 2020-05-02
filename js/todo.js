var conexion = new XMLHttpRequest();
//Aquí se pone la url del JSON
var url = 'https://beehive-270a2.ﬁrebaseio.com/data/todos.json';

conexion.onreadystatechange = function() {
    if (conexion.readyState == 4 && conexion.status == 200) {
      //aquí se define el arreglo que va contener el resultado del JSON parseado a texto
        var myArray = JSON.parse(conexion.responseText);
        myFunction(myArray);
    }
}
  conexion.open("GET", url, true);
  conexion.send();

function myFunction(arr) {
    //esta variable se usará para ir mostrando los elmentos del JSON y su formato de salida en html
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
      
        
        out +='<div class="card  bg-info text-white mb-2 ml-1 mt-2"; style="width: 40rem";>'
        out += '<h3 class="card-title">'
        out += 'bee_id: ' + arr[i].userId
        out += '</h3>'
        out += '<h5 class="card-text">'
        out += 'title: ' + arr[i].title + '<br>'
        out += '</h5>'
        out += '<h5 class="card-text">'
        out += 'completed: ' + arr[i].completed + '<br>'
        out += '</p>'
        out+= '</div>';
        
    }
    //Esto es para mostrar dentro de de un elemento del html que se le puso el id "contenido", lo que pusimos en los out 
    document.getElementById("contenido").innerHTML = out;
    //esto es para mostrar en consola, el JSON que está trayendo el array
    console.log(arr);
}