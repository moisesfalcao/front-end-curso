var alunos = [ 'Boris' , 'Maria', 'Maria de Fátima','Rebeka','Fulano','Beltrano'];
var objetosAlunos = document.querySelectorAll('main ul li');


/*
window.setTimeout( 
    function(){  
        carregaAlunos();
    }, 5000 );
    */

window.setInterval(
    function(){
        carregaAlunos()
    },3000);


function carregaAlunos(){

    //window.alert("nova rodada");

    objetosAlunos.forEach(function(item,index,array){

        if(index == 0 ){
    
            objetosAlunos[index].innerHTML =  "campeão: " + alunos[index];
            objetosAlunos[index].style.background = "green";
            objetosAlunos[index].style.fontSize = "40px";
            objetosAlunos[index].style.fontWeight = "700";
        
        }else{
    
            if(index % 2 == 0){
                objetosAlunos[index].innerHTML = index+1 + " lugar:  " + alunos[index];
                
            }else{
                objetosAlunos[index].innerHTML = index+1 + " lugar:  " + alunos[index];
                objetosAlunos[index].style.background = "#ccc";
            }
            
        }
    
        
    });
}








   