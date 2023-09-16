
const form = document.getElementById('form-input');



form.addEventListener('submit', function(e)) {

    e.preventDefault();

}

var a = document.getElementById('numbera')

var b = document.getElementById('numberb')

var na = parseInt(a.value);

var nb = parseInt(b.value);    

if (nb > na) {

    alert ('Formulário Válido')

    } 
    
    else {

    alert ('Formulário Inválido')

    }


