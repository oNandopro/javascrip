function parimpar(n) {
    if (n%2 == 0) { 
        return 'par!'//retorno
    } else {
        return 'impar!' //retorno
    }
}

let res = parimpar(35) // parimpar é a chamada, 35 é o paramêtro
console.log(res)