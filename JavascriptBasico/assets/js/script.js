/*
function somar(n1, n2) {
    let resultado = n1 + n2;
    console.log('resultado = ' + resultado);
}

function nomeCompleto(nome, sobrenome) {
    // console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Bonieky", "Lacerda");

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

let idade = 17;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    // console.log("o fulano é maior de idade");
} else {
    // console.log("o fulano é menor de idade");
}

function calcpct(n1, n2) {
    return (n2 / n1) * 100;

}
let x = 40;
let y = 10;

let pct = calcpct(x, y);
// console.log(`${pct}% de ${x} é ${y}`);

function calcularImovel(m, q) {
    let m2 = 3000;
    let preco = 0;
    if (q == 1) {
        preco = m * m2;
    } else if (q == 2) {
        preco = m * (m2 * 1.2);
    } else {
        preco = m * (m2 * 1.5);
    }
    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
// console.log(`A casa custa R$ ${preco}`);


// --------------------------------------------
// Crie uma função que valide usuário e senha.
// Usuario correto> pedro
// senha correta 123

function validar(usuario, senha) {
    let userCorreto = "pedro";
    let passCorreto = 123;
    if (usuario === userCorreto && senha === passCorreto) {
        console.log("Usuario correto");
    } else {
        console.log("Usuário incorreto");
    }
}

let usuario = "pedro";
let senha = 123;

// console.log(validar(usuario, senha));

//  função dentro de função
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }
    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

// console.log(addSquares(2, 3));

// array
/*


let colors = ['blue', 'red', 'green'];
console.log(colors[0]);
*/

let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'corante',
    'sal'
];

// ingredientes[5] = 'cenora';
// ingredientes.push('cebola');//adiciona na ultima posição do array

// ingredientes.pop();//remove o ultimo item do array
// ingredientes.shift();//remove o primeiro item do array

// console.log(ingredientes);

// console.log(`Total de ingredientes: ${ingredientes.length}`);

// Exercicios
//=============================================================================
//=============================================================================
//=============================================================================
/*
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log('1. ' + carros[x]);
//Troque a ferrari por audi
carros[x] = 'Audi';
console.log(carros);

//Adicione o Volvo a lista
carros.push('Volvo');
console.log(carros);

//exiba quantos itens tem no array
console.log(`Existem ${carros.length} na lista.`);
*/

//=============================================================================
//=============================================================================
//=============================================================================
// Fim dos Exercicios

// OBJETOS
let personagem = {
    nome: 'Bonieky',
    idade: 90,
    pais: 'Brasil',
    caracteristicas: {
        forca: 20,
        magia: 5,
        stamina: 15
    }
};

//como chamar uma propriedade dentro do objeto
// console.log(personagem.nome);
// console.log(personagem.idade);
// console.log(personagem.pais);
// console.log(personagem.caracteristicas.forca);
// console.log(personagem.caracteristicas.magia);
// console.log(personagem.caracteristicas.stamina);

// let pessoa = {
//     nome: 'Bonieky',
//     sobrenome: 'Lacerda',
//     idade: 90,
//     nomeCompleto: function () {
//         return `${this.nome} ${this.sobrenome}`;
//     }
// };
// console.log(pessoa.nomeCompleto());

//========== loop  ====================
let cores = ['preto', 'branco', 'azul', 'vermelho'];
for (let n = 0; n < cores.length; n++) {
    // console.log(cores[n]);
}

//mais uma forma de fazer o for no array
for (let i in cores) {
    // console.log(cores[i]);
}
//mais uma forma de fazer o for no array
for (let cor of cores) {
    // console.log(cor);
}

let numero = 0;
while (numero <= 10) {
    console.log(`O numero da vez é ${numero}`);
    numero++
}