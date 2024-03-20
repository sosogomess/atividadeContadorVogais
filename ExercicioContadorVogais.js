let vogais = ['a', 'e', 'i', 'o', 'u'];

let consoantes = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

let espacos = [" "];

let texto = "Sophia Gomes";

texto = texto.toLocaleLowerCase();

let arrayLetras = texto.split ('');

let arrayVogais = [];

let arrayConsoantes = []; 

let arrayEspaco = [];

for(let i = 0; i < arrayLetras.length; i++){
    if (vogais.includes(arrayLetras[i])){
        arrayVogais.push(arrayLetras[i]);
    }
}

for (let i =0; i < arrayLetras.length; i++){
    if(consoantes.includes(arrayLetras[i])){
        arrayConsoantes.push(arrayLetras[i]);
      }  
    }

for (let i = 0; i < arrayLetras.length; i++){
    if(espacos.includes(arrayLetras[i])){
        arrayEspaco.push(arrayLetras[i]);
    }

}
    

    console.log("Texto original:", texto);
    console.log("Consoantes encontradas:", arrayConsoantes.toString());
    console.log("Total de Consoantes:" + arrayConsoantes.length);
    console.log("Vogais encontradas:", arrayVogais.toString());
    console.log("Total de Vogais:" + arrayVogais.length);
    console.log("Total de Espacos:"+ arrayEspaco.length);