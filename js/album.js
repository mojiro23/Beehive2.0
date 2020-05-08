
  var conexion = new XMLHttpRequest();
  //Aquí se pone la url del JSON
  var url = 'https://beehive-270a2.firebaseio.com/data/photos.json';
  
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
        
        //aqui le digo que muestre la data donde el album id sea igual al valor del id que mando desde la url
        if(arr[i].albumId == id){
          
          out +='<div class="card bg-secondary border border-dark text-white  mb-1 ml-1 mt-2"; style="width: 37.6rem";>'
          out += "album_id: " + arr[i].albumId + '<br>'
          out += "title: " + arr[i].title + '<br>'
          out += '<img src= '+ arr[i].url +'class="ml-5 mt-2 mb-2 " ; style="width: 600px";style="heigth: 600px";>'
          out += '</div>';
        } 
      }
      //Esto es para mostrar dentro de de un elemento del html que se le puso el id "contenido", lo que pusimos en los out 
      document.getElementById("contenido").innerHTML = out;
      document.getElementById("albumusername").innerHTML = username + "'s album";
      //esto es para mostrar en consola, el JSON que está trayendo el array
      //console.log(arr);
  }
  

