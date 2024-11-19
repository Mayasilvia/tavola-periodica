



for (const element of elementi) {
    let cinesino = document.getElementById('cinesino'); 
    cinesino.style.position ='relative';


let dallo = document.createElement('div');
dallo.style.borderStyle = 'solid';
dallo.style.borderWidth = '0.5px';
dallo.style.width = '90px';
dallo.style.height = '120px';
dallo.style.position = 'absolute';
dallo.style.left = element.xpos * 90 + 'px';
dallo.style.top = element.ypos * 120 + 'px';
dallo.style.backgroundColor = '#'+ element['cpk-hex']
dallo.style.textAlign = 'center'
dallo.style.boxSizing = 'border-box'

let samuele = document.createElement('p');
samuele.innerText = element.number;
dallo.appendChild(samuele); 

let balzino = document.createElement('a');
balzino.innerText = element.symbol ;
balzino.href=element.source
dallo.appendChild(balzino);
balzino.style.fontSize = '24px'
balzino.style.fontWeight = 'bold';
balzino.style.color = 'black'

let cine =document.createElement('p');
cine.innerText = element.name;
dallo.appendChild(cine);
cinesino.appendChild(dallo);

}






