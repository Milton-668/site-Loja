
// Criando variáveis dentro do Js, sendo que não há tipagem de variáveis
/**************************************************************************** */
// var é de escopo glogal
//var
// let escopo local 
//let 
// const variável de constancia 
//const

//acessando o nome através da declaração da variável nome, onde é acessado o elemento Id nome
//let nome = window.document.getElementById('nome')

/*
    Case Sensitive
    Came case para palavras reservadas e por convensão 

    por Tag: getElementByTabName()
    por Id: getElementById()
    por Nome: getElementsByNome()
    por Classe: getElementsByClassname()
    por Seletor: querySelector()
*/
// getElementById não se utiliza os simbolos para chamar o atributo( not use # and .)
let nome = window.document.getElementById('nome')
// chamo o id do e-mail por #
let email = document.querySelector('#email')
let texto = document.querySelector('#texto')
let nomeOk= false
let emailOk= false
let textoOk= false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'


function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <3)
    {
        txtNome.innerHTML='Nome inválido'
        txtNome.style.color = "red"
    }
    else
    {
        txtNome.innerHTML='Nome Válido'
        txtNome.style.color = "blue"
        nomeOk=true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1)
    {
        txtEmail.innerHTML='E-mail inválido'
        txtEmail.style.color = "red"
    }
    else
    {
        txtEmail.innerHTML='Nome Válido'
        txtEmail.style.color = "blue"
        emailOk=true
    }
}

function validaTexto(){
    let txtTexto = document.querySelector('#txtTexto')

    if (texto.value.length >100)
    {
        txtTexto.innerHTML='Ultrapassa 100 caracteres '
        txtTexto.style.color = 'red'
    }
    else{
        txtTexto.style.display= 'none'
        textoOk=true
    }
}

function enviar(){
    if(nomeOk==true  && emailOk==true && textoOk==true ){
        alert('Formulario enviado com sucesso!')
    }
    else{
        alert('Preencha o formulario corretamente!')
    }
}

function mapaZoom()
{
    mapa.style.width= '800px'
    mapa.style.height= '600px'
}

function mapaNormal()
{
    mapa.style.width= '450px'
    mapa.style.height= '250px'
}
