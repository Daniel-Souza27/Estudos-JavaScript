function contagem(){
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var resultado = document.getElementById('res')
    var inicio = Number(txti.value)
    var fim = Number(txtf.value)
    var passo = Number(txtp.value)
    resultado.innerHTML = 'Contando: <br>'

    if(txti.value.length == 0 || txtf.value.length == 0){
        resultado.innerText = 'Impossivel contar.'
    }else if(txtp.value.length == 0) {
        window.alert('Passo invalido, Considerando Passo [1]')
        for(inicio; inicio <= fim; inicio++){
        resultado.innerHTML += `${inicio} `
        }
    }else{
        for(inicio; inicio <= fim;  inicio += passo){
        resultado.innerHTML += `${inicio} `
        }
    }   

}   

   /* 
   Minha primeira versão:
   
   for(inicio; inicio <= fim; inicio += passo){
       if (txti.value.length == 0 || txtf.value.length == 0){
            resultado.innerText = 'Impossivel contar.'
       }else if (txtp.value.length == 0) {
            // window.alert('Passo invalido, Considerando Passo [1]')
            resultado.innerHTML += ` ${inicio}`
            inicio++
       }else{
        resultado.innerHTML += ` ${inicio}`
       }

   }
   */   