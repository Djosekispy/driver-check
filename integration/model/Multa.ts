import Motorista from "./Motorista";

export default class  Multa {
    id  : number;
    titulo : string;
    descricao : string;
    estado :  string;
    motorista_id : number;
    motorista : Motorista

    constructor( 
        id  : number,
        titulo : string,
        descricao : string,
        estado :  string,
        motorista_id : number,
        motorista : Motorista
    ){
            this.descricao = descricao;
            this.id = id;
            this.motorista_id = motorista_id;
            this.estado = estado;
            this.titulo = titulo
            this.motorista = motorista
        }
}