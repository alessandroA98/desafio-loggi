

var pacote = '205205555369001'

var regiao = (pacote.substring(0, 3));
var regiaoString = pacote.substring(0, 3);
var destino = Number(pacote.substring(3, 6));
var codigoLoggi = pacote.substring(6, 9);
var codigoProduto = pacote.substring(9, 12);
var tipo = Number(pacote.substring(12, 15));



if(codigoProduto == '367'){
    console.log('O vendedor 367 está com seu CNPJ inativo')
}
else if (regiao >= 1 && regiao <= 99) {
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
