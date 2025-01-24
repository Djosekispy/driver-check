

export default interface IPOSTRequestEndpoints {
    registrarMultaDeMotorista: (titulo: string, descricao: string, motorista_id: number ) => Promise<any>;
}

