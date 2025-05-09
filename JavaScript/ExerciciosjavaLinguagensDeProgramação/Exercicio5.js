
function imprimirNumeros() {
    let numeros = "";
    for (let i = 1; i <= 10; i++) {
        numeros += i;
        if (i < 10) {
            numeros += " - ";
        }
    }
    console.log(numeros);
}

imprimirNumeros();
