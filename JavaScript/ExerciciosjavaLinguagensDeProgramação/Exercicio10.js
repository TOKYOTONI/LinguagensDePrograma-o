function ehPalindromo(texto) {
    let textoFormatado = texto.toLowerCase().replace(/\s/g, "");
    return textoFormatado === textoFormatado.split('').reverse().join('');
}

console.log(ehPalindromo("arara") ? "é um palindromo" : "não é um palindromo");
console.log(ehPalindromo("Facens")? "é um palindromo" : "não é um palindromo");
