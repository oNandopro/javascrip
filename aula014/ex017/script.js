function tabuada() {
    var num = document.getElementById('num')
    var sel = document.getElementById('sel')
    if (num.value.length == 0 ) {
        window.alert('Por favor digite um número!')
    } else {
        var n = Number(num.value)
        var c = 1
        sel.innerHTML = ''
        while (c <=10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            sel.appendChild(item)
            c++
        }
    }

}