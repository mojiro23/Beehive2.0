var conexion = new XMLHttpRequest();
var url = 'https://beehive-270a2.ﬁrebaseio.com/data/posts.json';
conexion.onreadystatechange = function() {
    if (conexion.readyState == 4 && conexion.status == 200) {
        var myArray = JSON.parse(conexion.responseText);
        myFunction(myArray);
    }
}
  conexion.open("GET", url, true);
  conexion.send();

function myFunction(arr) {
    var out = "";
    var i;
   /*Esta funcion, sirve para extraer los valores que mando en la url desde la pagina index*/
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
      
       if(arr[i].userId == id){

           
           
        out +='<div class="card text-white mb-2 ml-1 mt-2 border-secondary bg-secondary"; style="width: 40rem"; >'
        out += '<h3 class="card-title">'
        out += '</h3>'
        out +=  arr[i].body + '<br>'
        out+= '</div>';
   }
    }
    document.getElementById("contenido").innerHTML = out;
    document.getElementById("postusername").innerHTML = username + "'s posts";
    
    //console.log(arr);
    
}

