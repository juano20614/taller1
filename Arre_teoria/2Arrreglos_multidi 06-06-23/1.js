// Usando lo anteriormente expuesto, manejando el número de índices correctos en cada caso, resuelva:
// 1. Dado el arreglo [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ]:

// a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
let arregloMixto = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
for (let i = 0; i < arregloMixto.length; i++) {
    for (let m = 0; m < arregloMixto[i].length; m++) {
    console.log(arregloMixto[i][m]);
    }}

// b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
let arregloEa = [ ["a", "z", "t"], [789, 887, 451], [true, false, 0] ];
arregloEa.forEach(i => {
    i.forEach(m => {
        console.log(m);
    });
});