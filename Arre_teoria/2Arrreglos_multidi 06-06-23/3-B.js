// b) Recorrer todos sus elementos más internos y mostrar la suma de estos. Como sugerencia use una variable
// para acumular la suma, declarela antes del ciclo. Use cualquier ciclo, for o forEach.

 let arregloU = [ [2, 8, 9], [30, 71, 77], [11, 990, 41] ];
 let suma=0;

 for (let i = 0; i < arregloU.length; i++) {
     for (let x = 0; x < arregloU[i].length; x++) {

        suma+=arregloU[i][x];
     }
 }
console.log(suma);

// arregloU.forEach(e => {
//     e.forEach(m => {
//       suma +=m;
            
//     });
    
//  }); console.log(suma);