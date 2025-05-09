function gerarEmail(nome) {
    let partes = nome.toLowerCase().split(" ");
    let primeiroNome = partes[0];
    let ultimoNome = partes[partes.length - 1];
    console.log(`${primeiroNome}.${ultimoNome}@facens.br`);
}

gerarEmail("Edson Martin Feitosa");
