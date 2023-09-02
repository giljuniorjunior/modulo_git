
function valor() {
var a = window.document.getElementById('numbera')
var b = window.document.getElementById('numberb')
var na = Number(a.value)
var nb = Number(b.value)
var result = nb > na? 'Válido' : 'Inválido'
alert ('O valor é: ' + result)

}