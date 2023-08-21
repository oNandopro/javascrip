function verificar() {
    var data = new Date()
    var anoatu = getFullYear()
    var ano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (ano.value.length == 0 || ano.value > anoatu) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        window.alert('Tudo ok!')
    }

}