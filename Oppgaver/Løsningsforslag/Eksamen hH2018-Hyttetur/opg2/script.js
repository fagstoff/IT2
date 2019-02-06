/* Laget av Staale Bergersen CC */

var hytter = new Array();

hytter[0]=["Granbo",6,"middels"]
hytter[1]=["Granstua",4,"høy"]

window.onload = oppstart();

function oppstart(){
    document.getElementById("granbo").onclick = function(){bildegalleri(0);}
    document.getElementById("granstua").onclick = function(){bildegalleri(1);}
}

n=0;


function bildegalleri(hytte){
        n++;
        if(n==4){n=1}
        document.getElementById("galleri").innerHTML = "<h1>"+hytter[hytte][0]+"</h1><br>Bildenr: "+n+"<br>Sengeplasser: "+hytter[hytte][1]+"<br>Standard: "+hytter[hytte][2]+"<br><img src=img/"+hytter[hytte][0]+n+".jpg>";
        console.log(n);
}