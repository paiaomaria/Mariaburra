var readline=require('readline-sync');
console.log("+----------PASSAGENS AEREAS----------+")
console.log("1-Comprar passagem")
console.log("2-Consultar voos")
console.log("3-Mapa de assentos")
console.log("4-Emitir ticket")
console.log("0-Encerrar programa")
console.log("+-----------------------------------+")

var CP=readline.question("Escolha uma opcao: ")

if(CP==1){
console.log("Você está em COMPRAR PASSAGEM")
var nome=readline.question("Qual seu nome?")
var sobrenome=readline.question("Qual seu sobrenome?")
var idade=readline.question("Qual a sua idade?")
var origem=readline.question("Qual a sua origem?")
var destino=readline.question("Qual o seu destino?")
var assento=readline.question("Qual o seu assento?")
}
    if(origem="Presidente Prudente") {true}
    if(destino="Carlópolis") {true}
    if(destino="Guarulhos") {true}

var CV=("Opções de voo: ")
if(CV==2){
console.log("Voos disponiveis")  
console.log("Presidente Prudente------Carlópolis")
console.log("Presidente Prudente------Guarulhos")
}


var MA=("Mapa de assentos: ")
if(MA==3){
    console.log("Assentos disponiveis:")  
    console.log("A1-A2-A3-A4-A5-A6-A7-A8-A9-A10-A11-A12-A13-A15-A16-A17-A18")
    console.log("Assentos reservados:")
    console.log("B1-B2-B3-B4-B5-B6-B7-B8-B9-B10-B11-B12-B13-B15-B16-B17-B18")
    }
    
    if(assento=="B1-B2-B3-B4-B5-B6-B7-B8-B9-B10-B11-B12-B13-B15-B16-B17-B18"){false}
    if(assento=="A1-A2-A3-A4-A5-A6-A7-A8-A9-A10-A11-A12-A13-A15-A16-A17-A18"){true}

var ET=("EMITIR TICKET")
if(ET==4){
    console.log("____________TICKET_____________")
    console.log("")
    console.log("Obrigado por Viajar conosco")
    console.log("")
    console.log("Cliente: "+nome+" "+sobrenome)
    console.log("Idade: "+idade)
    console.log("Assento: "+assento)
    console.log("Origem e destino: "+origem+"----"+destino)
    console.log("Status de voo: Confirmado")
    console.log("TOItal= R$3.000,00")
    console.log("")
    console.log("_____________________________")
}





 
