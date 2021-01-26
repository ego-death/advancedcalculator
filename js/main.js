//jesus dont want me for a sunbeam :(
//TODO: 26/01/2020 - COMPLETE OPERATION FUNCTION!!!
//TODO: 27/01/2020 - SOMEHOW GET DECIMALS WORKING!!!!!!

let a; //fucking keep it wtf
let b;
let operation;
let total=0;
let flag=false;
const display=document.querySelector('#insertNum');

const numBtns=document.getElementsByClassName('num');
let numBtnsArr = Array.prototype.slice.call(numBtns).map(element=>element.addEventListener('click', function(e){
	if(flag){display.innerText="";flag=false;}
	console.log(e.target);
	display.innerText+=e.target.innerText;
}));

const opBtns=document.getElementsByClassName('operation');
let opBtnsArr = Array.prototype.slice.call(opBtns).map(element=>element.addEventListener('click', function(e){
	console.log(e.target);
	operation=e.target.innerText;
	if(!a){
		a=parseInt(display.innerText);
		total+=a;
	}
	else{
		b=parseInt(display.innerText);
		switch(operation){
			case '+': total=a+b;
					break;
			case '-': total=a-b;
					break;
			case 'x': total=a*b;
					break;
			case '/': total=a/b;
					break;
		}
	}
	console.log(e.target.innerText, total);
	display.innerText="";
}));

document.querySelector('#equals').addEventListener('click', function(){
	let keepThis=(parseInt(display.innerText));
	display.innerText=(total+=keepThis);
	flag=true;
});



















