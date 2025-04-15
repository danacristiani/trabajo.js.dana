// 1. ingresar dos numeros y sumarlos
function sumar(valor1, valor2) {
    return valor1 + valor2;
}
console.log(sumar(5, 3));

// 2. poner tres numeros e indicar cual es el mayor y el menor
function obtenerMayorYMenor(valor1, valor2, valor3) {
    let mayor = Math.max(valor1, valor2, valor3);
    let menor = Math.min(valor1, valor2, valor3);
    return { mayor, menor };
}
console.log(obtenerMayorYMenor(3, 7, 2));

// 3. contar las letras de una palabra random
function contarCantidadLetras(palabra) {
    return `${palabra} tiene ${palabra.length} letras.`;
}
console.log(contarCantidadLetras("Cocodrilo"));

// 4. verificar si es numero par
function esNumeroPar(numero) {
    return numero % 2 === 0;
}
console.log(esNumeroPar(4));

// 5. ingresar una palabra y un numero, mostrar la palabra el num de veces.
function repetirPalabra(palabra, veces) {
    let resultado = "";
    for (let i = 0; i < veces; i++) {
        resultado += palabra + " ";
    }
    return resultado.trim();
}
console.log(repetirPalabra("Suministro", 3));

// 6. dos numeros enteros y detallar los numeros que tienen entre medio
function enumerarElementosEntre(val1, val2) {
    let resultado = [];
    if (val1 < val2) {
        for (let i = val1 + 1; i < val2; i++) {
            resultado.push(i);
        }
    } else {
        for (let i = val1 - 1; i > val2; i--) {
            resultado.push(i);
        }
    }
    return resultado;
}
console.log(enumerarElementosEntre(2, 6)); // [3, 4, 5]
console.log(enumerarElementosEntre(10, 5)); // [9, 8, 7, 6]

// 7. los multiplos de 3 entre dos valores
function obtenerMultiplosDeTres(desde, hasta) {
    let resultado = [];
    let inicio = Math.min(desde, hasta);
    let fin = Math.max(desde, hasta);
    for (let i = inicio; i <= fin; i++) {
        if (i % 3 === 0) resultado.push(i);
    }
    return resultado;
}
console.log(obtenerMultiplosDeTres(5, 20));

// 8. muliplos de 2 y 3 menos que 100
function obtenerMultiplosDosYTresMenoresA100() {
    return Array.from({ length: 100 }, (_, i) => i).filter(i => i % 2 === 0 || i % 3 === 0);
}
console.log(obtenerMultiplosDosYTresMenoresA100());

// 9. Sumar elementos de array
function sumarArreglo(arreglo) {
    return arreglo.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(sumarArreglo([1, 2, 3, 4]));

// 10. suma par de array
function sumarParesDelArreglo(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0).reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(sumarParesDelArreglo([1, 2, 3, 4, 6]));

// 11. contar cuanta cantidad de letras distintas de una palabra
function contarLetrasDistintas(palabra) {
    let contador = {};
    for (let letra of palabra) {
        contador[letra] = (contador[letra] || 0) + 1;
    }
    return contador;
}
console.log(contarLetrasDistintas("OTORRINOLARINGOLOGO"));

// 12. crear un obj y analisis de lista
let personas = [
    { nombre: "Gabriela", sexo: "F", edad: 53 },
    { nombre: "José Luis", sexo: "M", edad: 62 },
    { nombre: "Macarena", sexo: "F", edad: 28 },
    { nombre: "Gino", sexo: "M", edad: 25 }
];

function obtenerPromedioEdad(lista) {
    return lista.reduce((acum, persona) => acum + persona.edad, 0) / lista.length;
}

function obtenerNombreMujerMayor(lista) {
    return lista.filter(persona => persona.sexo === "F").reduce((mayor, persona) => (persona.edad > mayor.edad ? persona : mayor), lista[0]).nombre;
}

function obtenerNombreHombreMenor(lista) {
    return lista.filter(persona => persona.sexo === "M").reduce((menor, persona) => (persona.edad < menor.edad ? persona : menor), lista[0]).nombre;
}

function obtenerPromedioEdadMujeres(lista) {
    let mujeres = lista.filter(persona => persona.sexo === "F");
    return obtenerPromedioEdad(mujeres);
}

console.log(obtenerPromedioEdad(personas));
console.log(obtenerNombreMujerMayor(personas));
console.log(obtenerNombreHombreMenor(personas));
console.log(obtenerPromedioEdadMujeres(personas));

// 13. filtrar los numeros pares de array
function filtrarNumerosPares(arreglo) {
    return arreglo.filter(numero => numero % 2 === 0);
}
console.log(filtrarNumerosPares([1, 2, 3, 4, 5, 6]));

// 14. números divisibles en un rango
function obtenerNumerosDivisibles(minimo, maximo, divisor) {
    let resultado = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) resultado.push(i);
    }
    return resultado;
}
console.log(obtenerNumerosDivisibles(1, 20, 4));
