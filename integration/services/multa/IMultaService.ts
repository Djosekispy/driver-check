import Multa from "@/integration/model/Multa";

export default interface IMultaServiceInterface {
    registarMultaDeMotorista: (titulo: string, descricao: string, motorista_id: number) => Promise<Multa>;
    obterMultaDeMotorista: (id: number) => Promise<Multa[] | []>;
}