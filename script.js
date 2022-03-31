// ** Ejercicio 1
function suma(num1, num2) {
	return num1 + num2;
}
//** Ejercicio 2

function sumaArreglo(arreglo) {
	let arregloSumado;
	arregloSumado = arreglo.reduce((total, siguiente) => total + siguiente);
	return arregloSumado;
}

//** Ejercicio 3

function dirAnimales() {
	let choice = prompt("Selecciona un animal\n1. perro\n2. gato ");
	//console.log(choice);
	switch (true) {
		case choice == 1:
			console.log(`%c
			   __      _
			 o'')}____//
			  \`_/      )
			  (_(_/-(_/
			 `);

			break;
		case choice == 2:
			console.log(`%c
             /\\_/\\
            ( o.o )
             > ^ <
            
            `);
			break;

		default:
	}
}
