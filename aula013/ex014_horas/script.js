function carregar() {
    var msg = window.document.getElementById('hora')
    var img = window.document.getElementById('img')
    var boa = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas e alguns minutos!`
    if (hora >=6 && hora <12) {
        //BOM DIA!
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#dbcd00'
        boa.innerHTML = 'Bom dia!'
    } else if (hora >=12 && hora <=18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#485779'
        boa.innerHTML = 'Boa tarde!'
    } else {
        //BOA NOITE!
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#232324'
        boa.innerHTML = 'Boa Noite!'
    }
}
/*
    cores:
    manha #fdf7aa - 3faee7b
    tarde #485779 - 616d86
    noite #232324 - 282828
*/