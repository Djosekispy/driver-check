import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import ISeguroInterface from "./ISeguroRepository";
import IGetRequestEndpoints from "@/request/method/GET/GetRequestInterface";




class SeguroRepository implements ISeguroInterface {

    constructor(private request : IGetRequestEndpoints){}
     obterSeguroPorId = async (id: number) : Promise<any> => {
        return this.request.obterSeguroPorId(id);
    }
     obterSeguroAtivo = async () : Promise<any> => {
        return this.request.obterSeguroAtivo()
    }
     obterSeguroPorAsseguradora = async(asseguradora: string) : Promise<any> => {
        return this.request.obterSeguroPorAsseguradora(asseguradora)
    }
}


export const seguroRepository = new SeguroRepository(getRquestImplementation);