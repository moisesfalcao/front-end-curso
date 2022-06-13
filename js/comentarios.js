var comentarios = [];
comentarios[0] = "Não concordo - Fulano de tal";
comentarios[1] = "Espero que as ligações de São Paulo Acabem - Sicrano";
comentarios[2] = "Isso tudo é politicagem - Daniel Silva";
comentarios[3] = "Vem em boa hora - Marcela Albertin";
comentarios[4] = "Trabalho em uma empresa que foi multada - Abelardo Tite";



function mostrarComentarios(){
    var ulComentarios = document.querySelector('article section ul');
    comentarios.forEach(function( item ,index,array){
        var novaLi = document.createElement('li');
        novaLi.append(item);
        ulComentarios.append(novaLi);
    });
    document.querySelector('article section').style.display = 'block';
    document.querySelector('article button').style.display = 'none';
}

window.onload = function(){
    document.querySelector('article button').onclick = function(){
        mostrarComentarios();
    }
}





 


/*

var comentarios = [];
comentarios[0] = "Não vejo a hora, não aguento mais tantas ligações - Roberto Souza";
comentarios[1] = "Será que realmente vão aplicar as multas??? - Marília Pedrosa";
comentarios[2] = "Toda hora recebendo propaganda no e-mail de empresas - Marinho Costa";
comentarios[3] = "Acredito que a situação vai melhorar - Carla Meneguel";

    var containerLista = document.querySelector('article section ul');
    comentarios.forEach(function(item,index,array){
        var novali = document.createElement('li');
        novali.append(item);
        containerLista.append(novali);
    });
*/