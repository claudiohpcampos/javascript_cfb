// Declarações BREAK - interrompe o loop, CONTINUE - para a interação atual do loop 

/*
let n = 0
let max = 1000

while(n<max){
    console.log('CFB CURSOS - ' + n)
    if(n>10){
        break
    }
    n++
}
console.log('Fim do Programa')
*/

let n = 0
let max = 1000
let pares = 0

for(let i = n; i < max; i+=1){
    console.log('CFB CURSOS - ' + i)
    if(i % 2 != 0){
        continue
    }
    pares+=1
}
console.log('Quantidade de pares: ' + pares)
console.log('Fim do Programa')
