

export default interface IPOSTRequestEndpoints {
    registrarMultaDeMotorista: (titulo: string, descricao: string, motorista_id: number ) => Promise<any>;
    login: (email: string, senha: string ) => Promise<any>;
    logout: (token: string ) => Promise<any>;
}

