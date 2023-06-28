/*Dado el arreglo [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ]
a) Leer e imprimir el elemento true
b) Leer e imprimir el elemento 1
c) Leer e imprimir el elemento 77
d) Leer e imprimir el elemento 88
e) Leer e imprimir el elemento ¿*/

let arregloDy = [ [ [0], [2, 77] ], [ ["&", true, "!!"], [[88]] ], [ [ [ [1] ] ] ], "¿" ];

console.log(arregloDy[1][0][1]);//imprime: true
console.log(arregloDy[2][0][0][0][0]);//imprime: 1
console.log(arregloDy[0][1][1]);//imprime: 77
console.log(arregloDy[1][1][0][0]);//imprime: 88
console.log(arregloDy[3][0]);//imprime: ¿