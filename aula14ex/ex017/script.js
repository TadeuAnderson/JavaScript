function tabuada() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (numero.value.length == 0){
        window.alert('Por favor, digite um número')
    }else {
        let num = Number(numero.value)
        let c = 1
        tab.innerHTML = ''
        while( c <= 10 ) {
            let item  = document.createElement('option')
            item.text = `${num} X ${c} = ${num*c}`
            //faz a seleção do item que foi selecionado
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    } 

}