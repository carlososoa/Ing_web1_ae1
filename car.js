'use strict'



window.addEventListener('load', function(){

      
    

    products.forEach(dibujar);

    function dibujar(elemento){

        var tabla = document.querySelector("tbody")

        var nuevaFila = tabla.insertRow();

        var image = nuevaFila.insertCell(0);
        var name = nuevaFila.insertCell(1);
        var price = nuevaFila.insertCell(2);
        var quantity = nuevaFila.insertCell(3);
        var total = nuevaFila.insertCell(4);
        
        image.innerHTML = '<img src="'+elemento.image+'" style="width:100px"/>';
        name.innerHTML=elemento.name;
        price.innerHTML="$"+elemento.price;
        quantity.innerHTML=elemento.quantity;
        total.innerHTML="$"+(elemento.price*elemento.quantity);        

    }

});