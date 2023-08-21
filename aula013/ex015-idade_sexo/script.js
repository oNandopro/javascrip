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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexusu[0].checked) {
            genero = 'Homem'
            if (idade >= o && idade <=7){
                //bebe
            } else if (idade <21) {
                //jovem
            } else if (idade <50) {
                //adulto
            } else {
                /idoso
            }
        } else if (sexusu[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <7) {
                //bebe
            } else if (idade <21) {
                //jovem
            } else if (idade <50) {
                //adulta
            } else {
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Indentificamos que você é ${genero} de ${idade} anos!`
    }
}