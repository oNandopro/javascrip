let valores = [8, 15, 5, 13, 18, 2, 9] // os [] diz que é um array
valores.sort() // para por os valores em ordem
console.log(valores) // para mostrar na tela os valores dentro do array
console.log(`Minha array possui ${valores.length} valores`) //para dizer quantos valores minha array possui.

/*
    da pra fazer assim
obs: sempre criar um let para posição = let pos=

for (let pos=0 ; pos < valores.length ; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
    ou simplificar com for(   in   )

    assim:
    */


for (let pos in valores ) { //para saber que posição cada valor ocupa dentro da array
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}




