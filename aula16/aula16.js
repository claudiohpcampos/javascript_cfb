/*
LOOP FOR IN

LOOP FOR OF
*/


const objs = document.getElementsByTagName("div")
let num = [10, 20, 30, 40, 50]

for(o of objs) {
    console.log(o) //console.log(o.innerHTML="Curso") troca os valores das divs por Curso
}

for(o in objs) {
    console.log(o) //console.log(objs[o].innerHTML="Curso") troca os valores das divs por Curso
}

//for of imprime diretamente as coleções
for(n of num) {
    console.log(n)
}

// cria a variável n e imprime o índice
for(n in num) {
    console.log(n)
}

//tradicional
for(let i = 0; i < num.length; i++) {
    console.log(num[i])
}
