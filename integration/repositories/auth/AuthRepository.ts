import IAuthInterface from "./IAuthRepository";
import IPOSTRequestEndpoints from "@/request/method/POST/PostRequestInterface";
import { postRquestImplementation } from "@/request/method/POST/PostRequestImplementation";


 class AuthRepository implements IAuthInterface {

    constructor(private request : IPOSTRequestEndpoints){}

   login = async (email : string, senha: string) :Promise<any> =>{
    return this.request.login(email,senha)
    }
    logout = async (token: string) : Promise<any> => {
    return this.request.logout(token)
    }
}

export const authRepository = new AuthRepository(postRquestImplementation)