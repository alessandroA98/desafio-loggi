var pacote = [
    '288355555123888',
    '335333555584333',
    '223343555124001',
    '002111555874555',
    '111188555654777',
    '111333555123333',
    '432055555123888',
    '079333555584333',
    '155333555124001',
    '333188555584333',
    '555288555123001',
    '111388555123555',
    '288000555367333',
    '066311555325001',
    '110333555123555',
    '333488555584333',
    '455448555123001',
    '022388555123555',
    '432044555845333',
    '034311555367001'
]


var pacotesCentroOeste = [];
var pacotesNorte = [];
var pacotesNordeste = [];
var pacotesSudeste = [];
var pacotesSul = [];
var codigoInvalido = [];


var invalidoFrase = 'codigo invalido'

var tipoDestinoSudeste = [];
var tipoDestinoSul = [];
var tipoDestinoNorte = [];
var tipoDestinoNordeste = [];
var tipoDestinoCentroOeste = [];


for (i = 0; i < pacote.length; i++) {

    //
    let origem = pacote[i].substring(0, 3);
    let destino = pacote[i].substring(3, 6);
    let codigoLoggi = pacote[i].substring(6, 9);
    let codigoProduto = pacote[i].substring(9, 12);
    let tipo = pacote[i].substring(12, 15);

    var origemCidade = ''
    var resultadoOrigem = ''
    var destinoCidade = ''
    var resultadoDestino = ''
    var tipoProduto = ' '
    var verificacao = 0
    var invalidos = 0


    //ORIGEM

    if (origem >= 001 && origem <= 099) {
        origemCidade = `Região Sudeste`
        resultadoOrigem = `Regiao origem: Cidade ${origem}, ${origemCidade}`
    }
    else if (origem >= 100 && origem <= 199) {
        origemCidade = `Região Sul`
        resultadoOrigem = `Regiao origem: Cidade ${origem}, ${origemCidade}`
    }
    else if (origem >= 201 && origem <= 299) {
        origemCidade = `Região Centro-oeste`
        resultadoOrigem = `Regiao origem: Cidade ${origem}, ${origemCidade}`
        verificacao = 1
    }
    else if (origem >= 300 && origem <= 399) {
        origemCidade = `Região Nordeste`
        resultadoOrigem = `Regiao origem: Cidade ${origem}, ${origemCidade}`
    }
    else if (origem >= 400 && origem <= 499) {
        origemCidade = `Região Norte`
        resultadoOrigem = `Regiao origem: Cidade ${origem}, ${origemCidade}`
    }
    else {
        invalidos = 1;
    }

    //Tipos

    if (tipo == 001) {
        tipoProduto += 'Joias'
    }
    else if (tipo == 111) {
        tipoProduto += 'Livros'
    }
    else if (tipo == 333) {
        tipoProduto += 'Eletrônicos'
    }
    else if (tipo == 555) {
        tipoProduto += 'Bebidas'
    }
    else if (tipo == 888) {
        tipoProduto += 'Brinquedos'
    }
    else {
        invalidos = 1;
    }
    //DESTINO

    if (destino >= 001 && destino <= 099) {
        destinoCidade = `Região Sudeste`
        resultadoDestino = `Regiao Destino: Cidade ${destino}, ${destinoCidade} `
        pacotesSudeste.push(pacote[i]);
        tipoDestinoSudeste.push(tipoProduto)

    }
    else if (destino >= 100 && destino <= 199) {
        destinoCidade = `Região Sul`
        resultadoDestino = `Regiao Destino: Cidade ${destino}, ${destinoCidade} `
        pacotesSul.push(pacote[i])
        tipoDestinoSul.push(tipoProduto)


    }
    else if (destino >= 201 && destino <= 299) {
        destinoCidade = `Região Centro-oeste`
        resultadoDestino = `Regiao Destino: Cidade ${destino}, ${destinoCidade} `
        pacotesCentroOeste.push(pacote[i])
        tipoDestinoCentroOeste.push(tipoProduto)


    }
    else if (destino >= 300 && destino <= 399) {
        destinoCidade = `Região Nordeste`
        resultadoDestino = `Regiao Destino: Cidade ${destino}, ${destinoCidade} `
        pacotesNordeste.push(pacote[i])
        tipoDestinoNordeste.push(tipoProduto)

    }
    else if (destino >= 400 && destino <= 499) {
        destinoCidade = `Região Norte`
        resultadoDestino = `Regiao Destino: Cidade ${destino}, ${destinoCidade} `
        pacotesNorte.push(pacote[i])
        tipoDestinoNorte.push(tipoProduto)


    }
    else {
        invalidos = 1;

    }


    //Impressão

    if (codigoProduto == '367') {
        console.log(`O vendedor 367 está com seu CNPJ inativo Codigo:${pacote[i]} \n `)
        codigoInvalido.push(pacote[i])


        if (destino >= 001 && destino <= 099) {
            pacotesSudeste.pop(pacote[i]);
            tipoDestinoSudeste.pop(pacote[i]);
        }
        else if (destino >= 100 && destino <= 199) {
            pacotesSul.pop(pacote[i]);
            tipoDestinoSul.pop(pacote[i]);
        }
        else if (destino >= 201 && destino <= 299) {
            pacotesCentroOeste.pop(pacote[i]);
            tipoDestinoCentroOeste.pop(pacote[i]);
        }

        else if (destino >= 300 && destino <= 399) {
            pacotesNordeste.pop(pacote[i])
            tipoDestinoNordeste.pop(pacote[i])
        }
        else if (destino >= 400 && destino <= 499) {
            pacotesNorte.pop(pacote[i])
            tipoDestinoNorte.pop(pacote[i])
        }


    }
    else if (verificacao == 1 && tipo == 001) {
        console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro - oeste; Codigo:${pacote[i]}  \n `)
        codigoInvalido.push(pacote[i])

        if (destino >= 001 && destino <= 099) {
            pacotesSudeste.pop(pacote[i]);
            tipoDestinoSudeste.pop(pacote[i]);
        }
        else if (destino >= 100 && destino <= 199) {
            pacotesSul.pop(pacote[i])
            tipoDestinoSul.pop(pacote[i]);

        }
        else if (destino >= 201 && destino <= 299) {
            pacotesCentroOeste.pop(pacote[i])
            tipoDestinoCentroOeste.pop(pacote[i]);

        }
        else if (destino >= 400 && destino <= 499) {
            pacotesNordeste.pop(pacote[i])
            tipoDestinoNordeste.pop(pacote[i])

        }
        else if (destino >= 400 && destino <= 499) {
            pacotesNorte.pop(pacote[i])
            tipoDestinoNorte.pop(pacote[i])

        }

    }
    else if (invalidos == 1) {
        console.log(`Codigo ${pacote[i]} Invalido \n`)
        codigoInvalido.push(pacote[i])

        if (destino >= 001 && destino <= 099) {
            pacotesSudeste.pop(pacote[i]);
            tipoDestinoSudeste.pop(pacote[i]);

        }
        else if (destino >= 100 && destino <= 199) {
            pacotesSul.pop(pacote[i])
            tipoDestinoSul.pop(pacote[i]);

        }
        else if (destino >= 201 && destino <= 299) {
            pacotesCentroOeste.pop(pacote[i])
            tipoDestinoCentroOeste.pop(pacote[i]);

        }
        else if (destino >= 300 && destino <= 399) {
            pacotesNordeste.pop(pacote[i])
            tipoDestinoNordeste.pop(pacote[i])

        }
        else if (destino >= 400 && destino <= 499) {
            pacotesNorte.pop(pacote[i])
            tipoDestinoNorte.pop(pacote[i])

        }

    }
    else if (origemCidade == 'Região Sul' && tipo == 888) {
        console.log(` OBS: pacotes têm como origem a região Sul e Brinquedos em seu conteúdo; \n Código: ${pacote[i]} \n ${resultadoOrigem} \n ${resultadoDestino} \n Codigo Loggi: ${codigoLoggi} \n Codigo do vendedor do produto: ${codigoProduto} \n ${tipoProduto} \n`)
    }
    else {
        console.log(`Código: ${pacote[i]} \n ${resultadoOrigem} \n ${resultadoDestino} \n Codigo Loggi: ${codigoLoggi} \n Codigo do vendedor do produto: ${codigoProduto} \n ${tipoProduto} \n`)
    }
}


console.log(`Pacotes do Centro-Oeste:${pacotesCentroOeste} \nTotal:${pacotesCentroOeste.length} \nSendo:${tipoDestinoCentroOeste}`)

console.log(`Pacotes do Norte:${pacotesNorte} \nTotal:${pacotesNorte.length} \nSendo:${tipoDestinoNorte}`)

console.log(`Pacotes do Nordeste:${pacotesNordeste} \nTotal:${pacotesNordeste.length} \nSendo:${tipoDestinoNordeste}`)

console.log(`Pacotes do Sudeste:${pacotesSudeste} \nTotal:${pacotesSudeste.length} \nSendo:${tipoDestinoSudeste}`)

console.log(`Pacotes do Sul:${pacotesSul} \n Total:${pacotesSul.length} \nSendo:${tipoDestinoSul}`)

console.log(`Codigos invalidos: ${codigoInvalido} Total:${codigoInvalido.length}`)


