import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import ICartaInterface from "./ICartaRepository";


 class CartaRepository implements ICartaInterface {

    constructor(private request : IGetRequestEndpoints){}

   obterCartaPorId = async (id: number) :Promise<any> =>{
    return this.request.obterCartaPorId(id)
    }
    obterCartaPorLicenca = async (licenca: string) : Promise<any> => {
    return this.request.obterCartaPorLicenca(licenca)
    }
}

export const cartaRepository = new CartaRepository(getRquestImplementation)