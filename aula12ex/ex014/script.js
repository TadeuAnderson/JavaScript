function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom dia
        img.src="fotomanha.png"
        //#6a990a
        //Código para colocar a cor da página de acordo com o horário
        document.body.style.background = '#9bb502'
    } else if (hora>= 12 && hora <= 18) {
        //Boa tarde
        img.src="fototarde.png"
        document.body.style.background = '#b9846f'
    } else {
        //Boa noite
        img.src="fotonoite.png"
        //#af7164
        //#d76b3b
        //#51392c
        document.body.style.background = '#51392c'
    }
}