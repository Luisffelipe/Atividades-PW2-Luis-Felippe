// 1 - Como podemos rodar isso em um arquivo .ts sem causar erros?



// let employee = {};

// employee.code = 10;

// employee.name = "John";

// Resposta:

    let employee = {
        code: 10,
        name: 'John'
    }

    employee.code = 10;
    employee.name = "John";


// 2 - Como podemos melhorar o esse código usando TS?

/* let pessoa1 = {};

pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"



let pessoa2 = {}

pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";



let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};



let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

// Resposta:

    type Ipessoa = {
        nome: string
        idade: number | string
        profissao: string
    }

    let pessoa1: Ipessoa = {
        nome: 'maria',
        idade: 29,
        profissao: 'atriz',
    }

    let pessoa2: Ipessoa = {
        nome: "roberto",
        idade: 19,
        profissao: "Padeiro",
    }

    let pessoa3: Ipessoa = {
        nome: "laura",
        idade: "32",
        profissao: "Atriz"

    }

    let pessoa4: Ipessoa = {
        nome: "carlos",
        idade: 19,
        profissao: "padeiro"
    }

