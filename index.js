import inquirer from 'inquirer'
import chalk from 'chalk' // Para deixar msg colorida


var array = []

menu()
function menu() {
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'Bem vindo a Biblioteca CSS. O que você deseja fazer?',
        choices: [
            'Adicionar Regra',
            'Remover Regra',
            'Consultar Lista',
            'Sair'
        ]
    }])
    .then((answer) => {
        var action = answer['action']

        if (action === 'Adicionar Regra'){
            adicionarRegra()
        } else if (action === 'Remover Regra'){
            removerRegra()
        } else if (action === 'Consultar Lista'){
            consultarLista()
        } else if (action === 'Sair'){
            console.log(sair)
            sair()
        }
    })
}

function voltar(){
    inquirer.prompt([{
        type: 'list',
        name: 'voltar',
        message: 'Deseja retornar ao menu principal?',
        choices: [
            'Sim',
            'Não',
        ]
    }])
    .then((answer) => {
        var voltar = answer['voltar']

        if (voltar === 'Sim'){
            menu()
        }else if (voltar === 'Não'){
            console.log('Sair')
            sair()
        }
    })
}


function adicionarRegra() {
    inquirer.prompt([{
        name: 'inserir',
        message: 'Digite um comando CSS'
    }])
    .then((answer) => {
        var comandoCSS = answer['inserir']

        if (!array.includes(comandoCSS)){
            array.push(comandoCSS)
            console.log('O comando CSS foi inserido com sucesso em nossa biblioteca!')
            console.log("Biblioteca CSS:", array.sort())
            return voltar()

        }else{
            console.log(chalk.red('Esse comando já existe em nossa biblioteca'))
            adicionarRegra()
        }
    })
}


function removerRegra(){
    inquirer.prompt([{
        name: 'remover',
        message: 'Digite qual comando CSS você gostaria de remover de nosa biblioteca: ',
    }])
    .then((answer) => {
        var removerComando = answer['remover']

        if (array.includes(removerComando)){
            var findFor = removerComando
            var index = array.indexOf(findFor);
            while(index >= 0){
                array.splice(index, 1);
                index = array.indexOf(findFor);
            }
            console.log('O comando CSS foi removido com sucesso da nossa biblioteca')
            console.log("Biblioteca CSS: ", array.sort())
            return voltar()
        } else {
            console.log(chalk.red('Esse comando CSS já foi removido!'))
            console.log("Biblioteca CSS: ", array.sort())
            return voltar()
        }
    })
}


function consultarLista(){
    console.log("Biblioteca CSS: ", array.sort())
    voltar()
}

function sair(){
    console.log("Obrigado por visitar nossa Biblioteca. Até a próxima!")
    process.exit()
}

