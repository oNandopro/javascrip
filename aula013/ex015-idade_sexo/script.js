function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var anousu = document.getElementById('ano')
    var res = document.getElementById('res')
    if (anousu.value.length == 0 || Number(anousu.value) > anoatual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexusu = document.getElementsByName('radsex')
        var idade = anoatual - Number(anousu.value)
        var genero = ''
        if (sexusu[0].checked) {
            genero = 'Homem'
            if (idade >= o && idade <=7) {
                //bebe
                img.src = 'imagens/bebe-m.png'
            } else if (idade <21) {
                //jovem
                img.src = 'imagens/jovem-m.png'
            } else if (idade <50) {
                //adulto
                img.src = 'imagens/adulto-m.png'
            } else {
                //idoso
                img.src = 'imagens/idoso-m.png'
            }
        } else if (sexusu[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <7) {
                //bebe
                img.src = 'imagens/bebe-f.png'
            } else if (idade <21) {
                //jovem
                img.src = 'imagens/jovem-f.png'
            } else if (idade <50) {
                //adulta
                img.src = 'imagens/adulto-f.png'
            } else {
                //idosa
                img.src = 'imagens.idoso-f.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Indentificamos que você é ${genero} de ${idade} anos!`
        res.appendChild(img)
    }
}