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


var pacotesCentroOeste = 0;
var pacotesNorte = 0;
var pacotesNordeste = 0;
var pacotesSudeste = 0;
var pacotesSul = 0;
var invalido = 0;

for (i = 0; i < pacote.length; i++) {

    let regiao = pacote[i].substring(0, 3);
    let destino = Number(pacote[i].substring(3, 6));
    let codigoLoggi = pacote[i].substring(6, 9);
    let codigoProduto = pacote[i].substring(9, 12);
    let tipo = Number(pacote[i].substring(12, 15));

    if (codigoProduto == '367') {
        console.log('O vendedor 367 está com seu CNPJ inativo')
    }
    else if (regiao >= 1 && regiao <= 99) {
        console.log('origem sul')
        if (destino >= 1 && destino <= 99) {
            if (tipo == 001) {
                console.log(`destino sudeste, \n codigo Loggi ${codigoLoggi}, \n codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 100 && destino <= 199) {
            if (tipo == 001) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 201 && destino <= 299) {
            if (tipo == 001) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 300 && destino <= 399) {
            if (tipo == 001) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 400 && destino <= 499) {
            if (tipo == 001) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else {
            console.log('invalido')
        }
    }
    else if (regiao >= 100 && regiao <= 199) {
        console.log('origem sul')
        if (destino >= 1 && destino <= 99) {
            if (tipo == 001) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 100 && destino <= 199) {
            if (tipo == 001) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 201 && destino <= 299) {
            console.log('chegou')
            if (tipo == 001) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 300 && destino <= 399) {
            if (tipo == 001) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 400 && destino <= 499) {
            if (tipo == 001) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else {
            console.log('invalido')
        }
    }
    else if (regiao >= 201 && regiao <= 299) {
        console.log('origem centro-oeste')
        if (destino >= 1 && destino <= 99) {
            if (tipo == 001) {
                console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro-oeste;`)
            }
            else if (tipo == 111) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 100 && destino <= 199) {
            if (tipo == 001) {
                console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro-oeste;`)
            }
            else if (tipo == 111) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            } else {
                console.log('invalido')
            }
        }
        else if (destino >= 201 && destino <= 299) {
            if (tipo == 001) {
                console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro-oeste;`)
            }
            else if (tipo == 111) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 300 && destino <= 399) {
            if (tipo == 001) {
                console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro-oeste;`)
            }
            else if (tipo == 111) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 400 && destino <= 499) {
            if (tipo == 001) {
                console.log(`Não é possível despachar pacotes contendo jóias tendo como região de origem o Centro-oeste;`)
            }
            else if (tipo == 111) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
        }
        else {
            console.log('invalido')
        }
    }
    else if (regiao >= 300 && regiao <= 399) {
        console.log('origem nordeste')
        if (destino >= 1 && destino <= 99) {
            if (tipo == 001) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 100 && destino <= 199) {
            if (tipo == 001) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 201 && destino <= 299) {
            if (tipo == 001) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 300 && destino <= 399) {
            if (tipo == 001) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 400 && destino <= 499) {
            if (tipo == 001) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else {
            console.log('invalido')
        }
    }
    else if (regiao >= 400 && regiao <= 499) {
        console.log('origem norte')
        if (destino >= 1 && destino <= 99) {
            if (tipo == 001) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sudeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 100 && destino <= 199) {
            if (tipo == 001) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino sul, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 201 && destino <= 299) {
            if (tipo == 001) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino centro-oeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 300 && destino <= 399) {
            if (tipo == 001) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino nordeste, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else if (destino >= 400 && destino <= 499) {
            if (tipo == 001) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, Joias`)
            }
            else if (tipo == 111) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, livros`)
            }
            else if (tipo == 333) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, eletronicos`)
            }
            else if (tipo == 555) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, bebidas`)
            }
            else if (tipo == 888) {
                console.log(`destino norte, codigo Loggi ${codigoLoggi}, codigo do produto ${codigoProduto}, brinquedos`)
            }
            else {
                console.log('invalido')
            }
        }
        else {
            console.log('invalido')
        }
    }
}

console.log(`Pacotes invalidos = ${invalido}`)