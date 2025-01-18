import{ getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import IVeiculoRepository from "./IVeiculoRepository";



class VeiculoRepository implements IVeiculoRepository {
    constructor(private request : IGetRequestEndpoints){}
    obterVeiculoPorId = async (id: number) : Promise<any> => {
        return this.request.obterVeiculoPorId(id);
    }
    obterVeiculoPorPlaca = async (placa: string) : Promise<any> => {
        return this.request.obterVeiculoPorPlaca(placa);
    }
    obterVeiculoPorMarca = async (marca: string) : Promise<any> => {
        return this.request.obterVeiculoPorMarca(marca);
    }
}

export const veiculoRepository = new VeiculoRepository(getRquestImplementation);