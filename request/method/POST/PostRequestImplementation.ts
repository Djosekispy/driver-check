import request from "@/request/RME/mapper";
import IPOSTRequestEndpoints from "./PostRequestInterface";


export default class PostRquestImplementation implements IPOSTRequestEndpoints {

    registrarMultaDeMotorista = async  (titulo: string, descricao: string, motorista_id: number ) => {
            return request.route.postMultaByMotorista.post({titulo,descricao,motorista_id});
        };
    }

export const  postRquestImplementation = new PostRquestImplementation()