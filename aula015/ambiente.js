let num = [ 5, 8, 2, 9, 3 ] 
num.push(12)
num.sort()
console.log(num)
console.log(`Nosso vetor é o ${num.length}`)
console.log(`Nosso primeiro vetor é ${num[0]}`)
let pos = num.indexOf(1)
if (pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor solicitado está na posição ${pos}`)
}