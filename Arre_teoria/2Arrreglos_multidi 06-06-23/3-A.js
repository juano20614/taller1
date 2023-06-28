// 3. Dado el arreglo [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ]:

// a) Recorrer todos sus elementos más internos y mostrar los números que sean impares.
//  Use cualquier ciclo, for o forEach.

let arregloY = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

for (let i = 0; i < arregloY.length; i++) {
   for (let m = 0; m < arregloY[i].length; m++) {
       if (arregloY[i][m]% 2 != 0 ) {
               console.log(arregloY[i][m]);
           }
       }
 } 

// let arregloU = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];

// arregloU.forEach(e => {
//     e.forEach(m => {
//         if (m % 2 != 0 ) {
//              console.log(m);
//         }
       
//     });
    
// });