
let Idrogeno = {};

Idrogeno.simbolo = 'H';
Idrogeno.numero = 1;  
Idrogeno.nome = 'Idrogeno';

let elio = {};

elio.simbolo = 'He';
elio.numero = 2;
elio.nome = 'Elio';

let elementi = [Idrogeno, elio]
for (const element of elementi) {
    let cinesino = document.getElementById('cinesino');


let dallo = document.createElement('div');
dallo.style.borderStyle = 'solid';
dallo.style.width = '70px';
let samuele = document.createElement('p');
samuele.innerText = element.numero;
dallo.appendChild(samuele);

let balzino = document.createElement('a');
balzino.innerText = element.simbolo ;
dallo.appendChild(balzino);

let cine =document.createElement('p');
cine.innerText = element.nome;
dallo.appendChild(cine);
cinesino.appendChild(dallo);

}






