import Usuario from "@/integration/model/Usuario";

export default interface IAuthService {
    Entrar: (email: string, senha : string) => Promise<Usuario>;
    Sair: (token: string, id: any) => Promise<any>;
    getUser: () => Promise<Usuario[]>;
}