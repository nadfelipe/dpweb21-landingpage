function abrirModal(){
    //document.querySelector(".modal") => CAPTURA NOSSO ELEMENTO
    //.style => adicionar um css
    //.style.propriedadeDoCSS =>propriedadeDoCSS é a propriedade que queremos adicionar 
    document.querySelector(".modal").style.display = "flex";
}

function fecharModal(){
    document.querySelector(".modal").style.display = "none";
}

// Capturar os dados do formulário de contato
// Criar uma url/um link para o Whatsapp, com os dados dos inputs
// Redirecionar o usuário pro link
function enviarMensagem(){
    // let nome = document.getElementById("input_nome").value
    let nome = document.getElementById("input_nome")
    let mensagem = document.getElementById("input_mensagem")

    //SE O NOME NÃO ESTIVER PREENCHIDO
    if(nome.value == ""){
        // document.getElementById("input_nome").classList.add("erro");
        nome.classList.add("erro");
        // document.getElementById("input_nome").placeholder = "O Nome é obrigatório!"
        nome.placeholder = "O Nome é obrigatório!";
    }else{
        //SE O NOME ESTIVER PREENCHIDO
        let texto = `Olá me chamo ${nome.value}, ${mensagem.value}`
        let url = `https://api.whatsapp.com/send?phone=5511961040907&text=${texto}`
        
        window.open(url)
    }
}

//primeira coisa que precisamos fazer:
//  pensar ONDE a gente quer chegar?/qual o nosso OBJETIVO?
//
//segunda coisa que precisamos fazer:
//  descobrir/definir COMO vamos chegar no nosso objetivo?
//
//  1° passo - é pensar na função/no nome dela
//  2° passo - CAPTURAR O NOSSO ELEMENTO atraves da DOM (document)
//      2.1 - falar que ta acessando o DOM => document.
//      2.2 - escolher o seletor dependendo do uso
//          2.2.1 - quando queremos selecionar PELO ID => getElementById("idDoElemento")
//          2.2.2 - pode selecionar TAG, ID ou CLASSE (mas só o primeiro elemento que aparece no HTML) => querySelector("#idDoELemento"), querySelector(".nomeDaClasse") ou querySelector("tag")
//  3° passo - definir uma ação
//      3.1 - trocar um estilo => .style
//      3.2 - inserir HTML => .innerHTML
//  4° passo - atribuir um valor
//      4.1 - atribuir um valor usamos "="
//
//LEMBRETE 1 - com o querySelector nós selecionamos as coisas como se fosse no CSS