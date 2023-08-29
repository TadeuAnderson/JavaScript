function verificar(){
    var data = new Date()
    //getFullYar é para pegar os 4 digitos do ano por exemplo 2023
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    //uma forma de fazer
    //var res = document.getElementById('res')
    var res = document.querySelector('div#res')
    //Verificar se a caixa está vazia ou
    // se o ano é maior que o atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert ('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        //criação de um img pelo java escript
        var img = document.createElement('img')
        //atribuindo id foto ao imgg
        img.setAttribute('id','foto')
        //se o que tiver marcado for o fsex na posição zero
        // é sinal que ele é Masculino
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade>= 0 && idade <=5){
                //bebe
                img.setAttribute('scr', 'foto-bebe-m')
            }else if (idade <= 10){
                //criança
                img.setAttribute('scr', 'foto-crianca-m')
            }else if (idade <= 21){
                //Jovem
                img.setAttribute('scr', 'foto-jovem-m')
            }else if (idade < 60){
                //adulto
                img.setAttribute('scr', 'foto-adulto-m')
            }else {
                //idoso
                img.setAttribute('scr', 'foto-idoso-m')
            }

        }else if ( fsex[1].checked){
            gênero = 'Mulher'
            if (idade>= 0 && idade <=5){
                //bebe
                img.setAttribute('scr', 'foto-bebe-f')
            }else if (idade <= 10){
                //criança
                img.setAttribute('scr', 'foto-crianca-f')
            }else if (idade <= 21){
                //Jovem
                img.setAttribute('scr', 'foto-jovem-f')
            }else if (idade < 60){
                //adulto
                img.setAttribute('scr', 'foto-adulto-f')
            }else {
                //idoso
                img.setAttribute('scr', 'foto-idoso-f')
            }
        }
        res.style.texAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }
}