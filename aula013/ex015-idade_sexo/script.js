function verificar() {
    var data = new Date()
    var anoatual = data.getFullYear()
    var anousu = document.getElementById('ano')
    var res = document.getElementById('res')
    if (anousu.value.length == 0 || Number(anousu.value) > anoatual) {
        window.alert('[ERRO]')
    } else {
        var sexusu = document.getElementsByName('radsex')
        var idade = anoatual - Number(anousu.value)
        var genero = ''
        if (sexusu[0].checked) {
            genero = 'Homem'
        } else if (sexusu[1].checked) {
            genero = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Indentificamos que você é ${genero} de ${idade} anos!`
    }
}