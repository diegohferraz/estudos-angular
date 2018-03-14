
// Para importar um módulo precia do nome entre {} e o caminho relativo entre ''
import { ModPoint } from './modPoint'

var number = 1; // quando declarado com var a variavel é elevada ao escopo da função mais proxima
let count = 2; // quando declarado com LET a variavel fica no escopo do bloco que esta inserida
let varTypeAnnotation
//count = 'a'; // Nao funciona porque a variavel foi setada como numero

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Color {Red, Green, Blue};

console.log(Color.Red);

function doSomething() {
	for(let i = 0; i < 5; i++) {
		console.log(i);
	}

	//console.log("Valor: " + i); // Nao deveria funcionar por causa que esta variavel nao existe neste escopo quando declarada com LET
}

//Assertion 
// Fala para o compilador usar a variavel como um tipo especifico
// Isso acontece porque nao declarou o tipo da variavel 
// Entao por padrao a variavel é do tipo any.
// Isso nao muda o tipo da variavel, so serve para o compilador saber as funções que esta variavel possui
let testString;
testString  = 'abd';

let endsWithC = (<string>testString).endsWith('c');
let AlternativeEndsWithC = (testString as string).endsWith('c');


//Arrow functions
// Uma maneira mais limpa de se definir funções
let log = function(message) {
	console.log(message);
}
// é a mesma coisa que:
let doLog = (message) => console.log(message);

//Interfaces
// Serve para abstrair tipos complexos, se esta funçao precisar de 30 parametros
// fica mais facil abstrai-los em uma interface e passar um objeto deste tipo
// assim o cod fica mais organizado
// Interfaces são apenas para declaração e nao para implementação

interface Point {
	x: number,
	y: number
} 

let drawPoint = (point: Point) => {
	console.log(point);
}

// Cohesion
// Coisas que sao relacionadas devem fazer parte do mesmo objeto
// Class
// Agrupa propriedades e funções relacionadas
class PointClass {
	x: number; //campos ou fields
	y: number;
	private z: number; //modificador de acesso

	// constructor é uma palavra reservada em typecript
	// é chamado quando cria uma instancia da classe
	// o ? serve para o paramentro ser opcional
	constructor(x: number, y: number, z?:number) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	draw() { // metodos
		console.log('X ' + this.x + ', Y: ' + this.y);
	}

	getDistance(another: Point){
		return 0;
	}
}

// Objects
// instancia da classe

let point = new PointClass(1,2);
point.draw();

// Maneira menos verbosa de se declarar uma classe 
// é o mesmo que a classe PontClass
class CleanPoint {

	// Declarando assim o trasnpilador gera os campos sozinho
	// o _ é uma convenção de declaração de variaveis para evitar conflitos
	constructor(private _x: number, private _y: number) {
	}

	draw() { // metodos
		console.log('X ' + this._x + ', Y: ' + this._y);
	}

	getX() {
		return this._x;
	}

	setX(value) {
		if (value < 0)
			throw new Error('Value cannot be less than 0');

		this._x = value;
	}

	//Properties
	// Faz com que as propriedades sejam lidas como campos
	get x(){
		return this._y;
	}

	set y(value){
		this._y = value;
	}

}

let newPoint = new CleanPoint(5,6);
let propertie = newPoint.y;

let anotherPoint = new ModPoint(7,8);