function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var yo = document.getElementById('txtano')
    var res = document.getElementById('res')
    

    if( yo.value.length == 0 || Number(yo.value) > ano){
        window.alert('[ERRO!] Confira os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(yo.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src','Images/bb-m.png')
            }else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'Images/jovem-m.png')
            }else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'Images/adulto-m.png')
            }else{
                // Idoso
                img.setAttribute('src' , 'Images/idoso-m.png')
            }


         } else if (fsex[1].checked) {
             genero = 'Mulher'
             if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src','Images/bb-f.png')
            }else if (idade <21) {
                // Jovem
                img.setAttribute('src', 'Images/jovem-f.png')
            }else if (idade <50) {
                // Adulto
                img.setAttribute('src', 'Images/adulto-f.png')
            }else{
                // Idoso
                img.setAttribute('src' , 'Images/idoso-f.png')
            }
         } 
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img)
    }
   
}