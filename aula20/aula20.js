// FUNÇÃO - é o bloco de comandos que pode ser executado em um determinado momento.
/*
 função    declaração da função
function nome(){
    console.log('CFB Cursos')  bloco de comando
}
nome()
  chamada da função

  ----------------------

function nome(){
    console.log('CFB Cursos')
}
for(let i=0; i<10; i++){
    nome()
}


function soma2_10(){
    let n1 = 2
    let n2 = 10
    let soma = n1 + n2
    console.log(soma)
}
for(let i = 0; i < 10; i++){
    soma2_10()
}
*/

function mudarTexto(){
    let d1 = document.getElementById('d1')
    let d2 = document.getElementById('d2')
    let d3 = document.getElementById('d3')
    d1.innerHTML = 'CFB Cursos'
    d2.innerHTML = 'CFB Cursos'
    d3.innerHTML = 'CFB Cursos'
}

