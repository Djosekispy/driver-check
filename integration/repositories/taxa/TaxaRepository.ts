import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import ITaxaRepository from "./ITaxaRepository";


class TaxaRepository implements ITaxaRepository {
    constructor(private request : IGetRequestEndpoints){}

     obterTaxaPorId = async(id: number) : Promise<any> => {
        return this.request.obterTaxaPorId(id)
    }
     obterTaxaPorUpdates = async (limit: number) : Promise<any> =>{
        return this.request.obterTaxaPorUpdates(limit)
    }
}

export const taxaRepository = new TaxaRepository(getRquestImplementation);