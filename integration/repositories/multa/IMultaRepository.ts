
export default interface IMultaInterface {
    registarMultaDeMotoristaPorFaltadDeSeguro: (titulo: string, descricao: string, motorista_id: number) => Promise<any>;
    obterMultaDeMotorista: (id : number) => Promise<any>;
}