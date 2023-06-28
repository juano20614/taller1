// 2. Dado el arreglo [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"], [true, 1000, “@”, "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ]

// a) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo for
let arregloH = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"], [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ];

for (let i = 0; i < arregloH.length; i++) {
    for (let b = 0; b < arregloH[i].length; b++) {
        for (let c = 0; c < arregloH[i][b].length; c++) {
            console.log(arregloH[i][b][c]);
        }
    }
}

// b) Recorrer el arreglo imprimiendo todos sus elementos más internos usando ciclo forEach
let arregloK = [ [ ["%", 7, true, "#"] , ["&", 55, false, "="] ], [ [false, 0, 99, "?"], [true, 1000, "@", "¡"] ], [ [44, 55, 66, 77], [1, 2, 3, 4] ] ];

arregloK.forEach(e => {
    e.forEach(l => {
        l.forEach(m => {
          
            console.log(m);
        });
    });
});