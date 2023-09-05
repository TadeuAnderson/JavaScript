function contar(){
    //pegar os elementos dos labels
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')


    var res = document.querySelector('div#res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados! ')
    }else{
        //<b> quebra de linha
       res.innerHTML = 'Contando: <br>'
       
       //pegar os valores e transformar em números
       let i = Number(inicio.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p <= 0){
        window.alert('Passo inválido! Considerando Passo 1')
        p = 1
       }

       //se o valor do início for menor que o valor do final
       if (i < f){
        for (let c = i; c<= f; c+=p){
            res.innerHTML += ` ${c}  \u{1F449}`
          }
       } else {
        for (let c = i; c>= f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }
       }
              res.innerHTML += `\u{1F3C1}`
    }
}
