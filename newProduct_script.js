'use strict'
console.log("hola?")

var boton = document.querySelector("#boton")
var inputName=document.querySelector("#name")
var nombre_requerido=document.querySelector("#nombre_requerido")
var inputPrecio=document.querySelector("#price")
var precio_requerido=document.querySelector("#precio_requerido")
var inputInventario=document.querySelector("#inventory")
var inventario_requerido=document.querySelector("#inventario_requerido")


function validacion(){    
    console.log("me has dado click")
    if(inputName.value != ""&& inputPrecio.value != "" &&
    inputInventario.value != ""){
        alert("Producto Creado")
    }    
    if(inputName.value == ""){
        nombre_requerido.style.display= "block"   

    }
    else{
        nombre_requerido.style.display= "none" 
    }
    if(inputPrecio.value == ""){
        precio_requerido.style.display= "block"   

    }
    else{
        precio_requerido.style.display= "none" 
    }
    if(inputInventario.value == ""){
        inventario_requerido.style.display= "block"   

    }
    else{
        inventario_requerido.style.display= "none" 
    }

    

}