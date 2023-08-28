//pegar a hora atual do computador
var agora = new Date()
//pegar apenas a hora
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12){
    console.log('Bom Dia!')
}else if ( hora <= 18){
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}