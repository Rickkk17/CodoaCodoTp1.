function montoTotal () {

    event.preventDefault();    

let cantidad = parseInt(document.getElementById("input-cantidad").value);
let categoria = document.getElementById("select-tickets").value;

const valor = 200;
valorTotal = 0;

    if (cantidad > 0 && categoria > 0 && categoria <= 4) {

        /* valor estudiante */
        if (categoria == 1) {
            valorEntrada = valor * 0.2;
            valorTotal = valorEntrada * cantidad;

        /* valor trainee */    
        }else if (categoria == 2) {
            valorEntrada = valor * 0.5;
            valorTotal = valorEntrada * cantidad;
        
        /* valor junior */    
        }else if (categoria == 3) {
            valorEntrada = valor * 0.85;
            valorTotal = valorEntrada * cantidad;
         /* valor general */  
        } else if (categoria == 4) {
            valorEntrada = valor;
            valorTotal = valorEntrada * cantidad;
        }    
    } else {
    
    }  
    
    document.getElementById("input-total-pagar").value='Monto total a pagar: $' + valorTotal;
    function borrar () {
        form.reset();
    }
}



