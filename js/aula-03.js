
var alunos = [ 'Boris' , 'Maria', 'Maria de Fátima','Rebeka','Fulano','Beltrano'];
var listaDeAlunos = document.querySelector('main ul');


function carregaAlunos(){
    alunos.forEach( function(item , index , array) {

        novaLi = document.createElement('li');
        novaLi.append(item);
        listaDeAlunos.append(novaLi);

    });
}


/*
        if (index === 0 ) {
            objetosAlunos[index].innerHTML =  "campeão: " + alunos[index];
            objetosAlunos[index].style.background = "green";
            objetosAlunos[index].style.fontSize = "40px";
            objetosAlunos[index].style.fontWeight = "700";
        } else {
            if (index % 2 === 0) {
                objetosAlunos[index].innerHTML = index+1 + " lugar:  " + alunos[index];
            } else {
                objetosAlunos[index].innerHTML = index+1 + " lugar:  " + alunos[index];
                objetosAlunos[index].style.background = "#ccc";
            }
        }
*/