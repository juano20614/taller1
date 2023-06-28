/*. Dado el arreglo [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ]
a) Usar tres índices para leer e imprimir el elemento ?
b) Usar tres índices para leer e imprimir el elemento 66
c) Usar tres índices para leer e imprimir el elemento true
d) Usar tres índices para leer e imprimir el elemento %*/

let arregloDr = [ [ ["%", 7, true, "#"] ], [ [false, 0, 99, "?"] ], [ [44, 55, 66, 77] ] ];

console.log(arregloDr[1][0][3]);//imprime: ?
console.log(arregloDr[2][0][2]);//imprime: 66
console.log(arregloDr[0][0][2]);//imprime: true
console.log(arregloDr[0][0][0]);//imprime: %

/*Complete sin usar el intérprete de Javascript(úselo al final para verificar sus respuestas):
// e) arreglo[0][0][2] devolverá imprime: true
// f) arreglo[2][0][0] devolverá imprime: 44
// g) arreglo[1][0][3] devolverá imprime: ?
// h) arreglo[0][1][1] devolverá imprime: gerena error 
*/