// WHILE - enquanto (quando não soubermos a quantidade de elementos)
/*
let n = 0

while(n<10) {
    console.log(n)
    n+=1
}
*/

//5! = 5 * 4 * 3 * 2 * 1 = 120

let n = 5
let fat = 1

while(n>=1) {
    fat *= n
    n-=1
}

console.log(fat)