function mostrarComentarios(){

    var con = new XMLHttpRequest();
    con.responseType = "json";

    con.open("GET","js/comentarios.json");
    con.send();


    con.onreadystatechange = function(){
        if(con.readyState == 4 && con.status == 200){
            documento = con.response;

            var ulComentarios = document.querySelector('article section ul');

            documento.comentarios.forEach(function(item,index,array){

                var novaLi = document.createElement('li');
                novaLi.append(item.texto);
                ulComentarios.append(novaLi);

            });
        }
    }



    document.querySelector('article section').style.display = 'block';
    document.querySelector('article button').style.display = 'none';
} 











window.onload = function(){
    document.querySelector('article button').onclick = function(){
        mostrarComentarios();
    }
}