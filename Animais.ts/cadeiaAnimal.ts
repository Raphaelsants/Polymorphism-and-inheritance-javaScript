
export class Animal{
    nome: string;
    idade: number;
    emiteSom: boolean;
    corre: boolean;
    sobeArvore: boolean;

    constructor(nome: string, idade: number, emiteSom: boolean, corre: boolean, sobeArvore: boolean) {   
        this.nome = nome;
        this.idade = idade; 
        this.emiteSom = emiteSom;
        this.corre = corre;
        this.sobeArvore = sobeArvore;
}
    mostrarInfo(){
        console.log(` O nome do animel é: ${this.nome}`);
        console.log(` A idade do animel é: ${this.idade}`);
        console.log(` O animal emite som? ${this.emiteSom}`);
        console.log(` O animal corre? ${this.corre}`);
        console.log(` O animal sobe em árvore ${this.sobeArvore}`);
    }

}