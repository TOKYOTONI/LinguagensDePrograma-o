
function validarEmail(email) {
    let partes = email.split("@");
    if (partes.length === 2 && partes[1].includes(".")) {
        return true;
        
    }
    return false;
}

console.log(validarEmail("247996@facens.br") ? "Este email está aprovado" : "Este email não está aprovado");
console.log(validarEmail("247996@facens") ? "Este email está aprovado" : "Este email não está aprovado");