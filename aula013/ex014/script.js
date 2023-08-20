function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são exatamente ${hora} horas.`
    if (hora >=0 && hora <12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#dbcd00'
    } else if (hora >=12 && hora <=18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#485779'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#232324'
    }
}
