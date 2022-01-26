
const a = 10;
const b = 33;

function somar(a,b){
	return parseInt(a) + parseInt(b);
}


//console.log(somar(2, 5));

document.querySelector("#calcular").addEventListener("click",function () {
	let valorA = document.querySelector("#valorA").value;
	let valorB = document.querySelector("#valorB").value;
	if (valorA.length > 0 && valorB.length > 0) {
		alert(Number(valorA)+ Number(valorB));
	} else {
		alert(":(");
	}
} );


document.querySelector("#calcular").addEventListener("click", function(){
    let valorA = document.querySelector("#valorA").value
    let valorB = document.querySelector("#valorB").value
    if(valorA.lenght > 0 && valorB.lenght > 0){
    alert(Number(valorA)+Number(valorB))
    }
    else{
        alert(':(')
    }

})