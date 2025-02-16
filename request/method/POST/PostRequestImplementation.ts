import request from "@/request/RME/mapper";
import IPOSTRequestEndpoints from "./PostRequestInterface";


export default class PostRquestImplementation implements IPOSTRequestEndpoints {

    registrarMultaDeMotorista = async  (titulo: string, descricao: string, motorista_id: number ) => {
            return request.route.postMultaByMotorista.post({titulo,descricao,motorista_id});
        };

    login = async (email: string, senha: string ) => {
     return request.route.authLogin.post({email, senha});
    }
    logout = async (token: string ) => {
        return request.route.authLogout.post({token});
    }
    }

export const  postRquestImplementation = new PostRquestImplementation()