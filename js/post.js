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
    for(i = 0; i < arr.length; i++) {
      
        
        out +='<div class="card text-white mb-2 ml-1 mt-2 border-secondary"; style="background-color: blueviolet"; style="width: 40rem"; >'
        out += '<h3 class="card-title">'
        out += 'bee_id: ' + arr[i].userId 
        out += '</h3>'
        out +=  arr[i].body + '<br>'
        out+= '</div>';
        
    }
    document.getElementById("contenido").innerHTML = out; 
    console.log(arr);
}

