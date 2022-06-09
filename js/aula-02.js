//window.alert("Preencha os seus dados a seguir:");

//var nomeUsuario = window.prompt("Informe o seu nome:");
//var telefoneUsuario = window.prompt("informe o seu telefone:");

var frutas = ['Maçã', 'Banana', 'Abacate', 'Abacaxi', 'Jambo', 'Carambola', 'Uva', 'morango'];
//console.log(frutas.length);


frutas.forEach(function (item, indice, array) {

    if( indice == 0 ){

        document.getElementById("fruta1").innerHTML = " ( " +  item ;

    }else if( indice == array.length - 1 ){

        document.getElementById("fruta1").innerHTML = document.getElementById("fruta1").innerHTML + " | " + item + " ) ";

    }else{
        
        document.getElementById("fruta1").innerHTML = document.getElementById("fruta1").innerHTML + " | " + item;
    }


    
});

//document.getElementById("fruta1").innerHTML = frutas[0];


  


/* 
asdfadfadfasdfasfd
asdfasdfasdfasdfasdf
*/


//var confirmaDados = window.confirm("Deseja compartilhar os dados?");
//document.write(nomeUsuario);
//document.write(telefoneUsuario);