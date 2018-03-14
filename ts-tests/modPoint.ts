
//Export faz o typescrit ver esta classe como um módulo
// assim pode ser injetada em outro lugar
export class ModPoint {
	constructor(private x?:number, private y?:number){
	}

	draw() {
		return 1;
	}
}