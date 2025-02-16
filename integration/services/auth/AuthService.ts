import { isAxiosError } from "axios";
import { IRepository } from "@/integration/repositories/repositoryBase/IRepositoryBase";
import { repositoryUser } from "@/integration/repositories/repositoryBase/RepositoryBase";
import IAuthService from "./IAuthService";
import IAuthInterface from "@/integration/repositories/auth/IAuthRepository";
import Usuario from "@/integration/model/Usuario";
import { authRepository } from "@/integration/repositories/auth/AuthRepository";


class AuthService implements IAuthService {

    constructor(private authRepository : IAuthInterface, private storegeRepository : IRepository){}
    Entrar = async (email : string, senha : string) => {
            try {
                const { data } = await this.authRepository.login(email,senha);
                await this.storegeRepository.create((data.resultado as Usuario).id, String((data.resultado as Usuario).nome), data.resultado.token)
                return data.resultado as Usuario;
            } catch (error) {
                const message = isAxiosError(error) ? error.response?.data.message : error;
                throw message;
            }
    }
    Sair = async () => {
        try {
            return await this.storegeRepository.deleteAll()
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
    getUser = async () => {
        try {
            return await this.storegeRepository.getAll()
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
}


export const authService = new  AuthService(authRepository,repositoryUser);