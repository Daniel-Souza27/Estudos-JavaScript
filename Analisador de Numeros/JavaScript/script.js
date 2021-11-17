let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#selop')
let res = document.querySelector('div#res')
let valores = []

// Função para validar se o numero inserido é >= 1 e <= 100. Nos retornando true ou false.
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false 
    }
}

// Função para validar se o valor inserido é diferente de -1 (-1 é retornado ao usuario quando o valor não é encontrado no vetor) se o valor nao for encontrado no vetor, o mesmo sera adicionado, se o valor for encontrado, o valor nao podera ser adicionado.
function inList(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    // if valida se o num realmente é um numero e se num não esta na lista
    if(isNumero(num.value) && !inList(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista.')
    } 
    num.value = ''
    num.focus()
}

function relatorio(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> O total de numeros cadastrados: ${total} </p> `
        res.innerHTML += `<p> O Maior valor: ${maior}. </p> `
        res.innerHTML += `<p> O menor valor: ${menor}. </p> `
        res.innerHTML += `<p> A Soma dos valores: ${soma}. </p> `
        res.innerHTML += `<p> A média dos valores: ${media}. </p>`
    }

}