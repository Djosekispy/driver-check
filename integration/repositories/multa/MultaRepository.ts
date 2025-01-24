import IPOSTRequestEndpoints from "@/request/method/POST/PostRequestInterface";
import IMultaInterface from "./IMultaRepository";
import { postRquestImplementation } from "@/request/method/POST/PostRequestImplementation";
import IGetRequestEndpoints from "@/request/method/GET/GetRequestInterface";
import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";



class MultaRepository implements  IMultaInterface {

    constructor(private request : IPOSTRequestEndpoints, private getRequest : IGetRequestEndpoints){}
    registarMultaDeMotoristaPorFaltadDeSeguro = async (titulo: string, descricao: string, motorista_id: number) => {
            return this.request.registrarMultaDeMotorista(titulo, descricao, motorista_id)
    }

    obterMultaDeMotorista = async (id : number) => {
        return this.getRequest.obterMultasDeMotorista(id)
    }
}

export const multaRepository = new MultaRepository(postRquestImplementation,getRquestImplementation);