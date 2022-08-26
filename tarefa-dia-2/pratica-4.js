let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};
let impostoInternacional = 1.2
let impostoNacional = 1.12
let calculoImpostoInternacionalA = produtoA.valor * impostoInternacional
let calculoImpostoNacioalA = produtoA.valor * impostoNacional
let calculoImpostoInternacionalB = produtoB.valor * impostoInternacional
let calculoImpostoNacioalB = produtoB.valor * impostoNacional
let calculoImpostoInternacionalC = produtoC.valor * impostoInternacional
let calculoImpostoNacionalC = produtoC.valor * impostoNacional

if (produtoA.internacional == true) {
    console.log("O produto " + produtoA.nome + " é internacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoInternacionalA);
        
} else {

    console.log("O produto " + produtoA.nome + " é nacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoNacionalA);
}

if (produtoB.internacional == true) {

    console.log("O produto " + produtoB.nome + " é internacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoInternacionalB);
        
} else {

    console.log("O produto " + produtoB.nome + " é nacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoNacionalB);
}


if (produtoC.internacional == true) {

    console.log("O produto " + produtoC.nome + " é internacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoInternacionalC);
        
} else {

    console.log("O produto " + produtoC.nome + " é nacional , portanto o preço do produto, já com os impostos acrescidos, será de : " + calculoImpostoNacionalC);
}

