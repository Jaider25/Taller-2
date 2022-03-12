
/*1

let mayor =0;
let limite =2;
let numeros = [];

for(let i=0; i < limite; i++) {
    numeros[i]= parseInt (prompt("digite su edad"));
}

let menor=numeros[0];

for(let i=0; i < numeros.length; i++ ) {

    if(numeros[1] > mayor){
        mayor = numeros[i];
    }
}

alert("la mayor es: " + mayor)*/



/*2

let contador=1;
let limite=5;
let acum=0;
let prom = 0;
while(contador<= parseInt(limite)){
let estudiante = prompt("digite el nombre del estudiante");
let nota= parseInt(prompt("digite la nota"));
document.write(estudiante +"<br>");
document.write(nota +"<br>");

acum=(nota+acum);
prom=acum/contador;
//acum+=precio;

document.write("El promedio es: " +prom +"<br>");

contador++;
}*/

/*3

let usuario="dom";

let usuarioSolicitado = prompt("Digite el santo y seña");

if(usuario == usuarioSolicitado ){
    alert("bienvenidos al nuevo club de los magios");
    
}
else if(usuario != usuarioSolicitado) {
   alert ("No puedes ingresar, no eres un miembro");

}*/

/*4

alert("requisito para poder ver la pelicula")
let respuesta = prompt("esta vacunado o vacunada");


if(respuesta=="si"){
    
    alert("bienvenido");

}
else if(respuesta=="no"){
   
    alert("por favor ve a vacunarte")
    
}*/

/*5

let año_actual = parseInt(prompt("ingrese año actual:"));
let año_nacimiento = parseInt(prompt("ingrese año de nacimiento:"));
let resultado = año_actual - año_nacimiento;
document.write("Usted tiene: " + resultado + "años");*/



/*6

let pais = parseInt(prompt("seleccione un pais: \n 1.Colombia \n 2.Argentina \n 3.Peru \n 4.Japon \n 5.Alemania "));
switch(pais){
    
    case 1: 
    alert("Bogota");
    break;
    case 2: 
    alert("Buenos aires");
    break;
    case 3: 
    alert("Lima");
    break;
    case 4: 
    alert("Tokio");
    break;
    case 5: 
    alert("Berlin");
    break;
    default: 
    alert("esta categoria no aplica");
    break;
}*/

/*7

let contador=1;
let tabla=8;
let limite=100;
while(contador<= parseInt(limite)){
    //alert(tabla + " x " + contador + " = " + (tabla * contador));
document.write(tabla + " x " + contador + " = " + (tabla * contador)+"<br>");
console.log(tabla + " x " + contador + " = " + (tabla * contador));
contador++;
}*/


/*8

let traduccion = parseInt(prompt("Que palabra decea traducir: \n 1.Copiar \n 2.lenguaje \n 3.Programacion \n 4.Teclado \n 5.Pantalla "));
switch(traduccion){
    
    case 1: 
    alert("Copy");
    break;
    case 2: 
    alert("languaje");
    break;
    case 3: 
    alert("programming");
    break;
    case 4: 
    alert("keyboard");
    break;
    case 5: 
    alert("screen");
    break;
    default: 
    alert("esta categoria no aplica");
    break;

}*/

