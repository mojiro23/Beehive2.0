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

    function getParameterByName(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
      return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
  /*estas variables son para extraer mediante la funcion getparametersbyname un valor específico
  que envie en la url*/
  var id = getParameterByName('id');
  var username = getParameterByName('username');

    for(i = 0; i < arr.length; i++) {

     
      
      if(arr[i].userId == id && arr[i].completed == false ){
        
               
        out +='<div class="card text-dark   mb-1 ml-1 mt-1" style="background-color:orange";style="width: 40rem";>'
        out += '<h3 class="card-title">'
        //out += 'bee_id: ' + arr[i].userId
        out += '</h3>'
        out += '<h5 class="card-text">'
        out += 'title: ' + arr[i].title + '<br>'
        out += '</h5>'
        out += '<h5 class="card-text">'
        //out += 'completed: ' + arr[i].completed + '<br>'
        out += '</p>'
        out+= '</div>';
       
      }
      else if (arr[i].userId == id && arr[i].completed == true ) {

        out +='<div class="card  bg-success text-white mb-1 ml-1 mt-1"; style="width: 40rem";>'
        out += '<h3 class="card-title">'
        //out += 'bee_id: ' + arr[i].userId
        out += '</h3>'
        out += '<h5 class="card-text">'
        out += 'title: ' + arr[i].title + '<br>'
        out += '</h5>'
        out += '<h5 class="card-text">'
        //out += 'completed: ' + arr[i].completed + '<br>'
        out += '</p>'
        out+= '</div>';

      }
    }
    //Esto es para mostrar dentro de de un elemento del html que se le puso el id "contenido", lo que pusimos en los out 
    document.getElementById("contenido").innerHTML = out;
    document.getElementById("todousername").innerHTML = username + "'s todos";
    //esto es para mostrar en consola, el JSON que está trayendo el array
    //console.log(arr);
}