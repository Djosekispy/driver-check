import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import IMotoristaInterface from "./IMotoristaRepository";



 class MotoristaRepository implements IMotoristaInterface {

    constructor(private request : IGetRequestEndpoints){}

         obterMotoristaPorId = async (id: number) : Promise<any> => {
        return this.request.obterMotoristaPorId(id)
       }
         obterMotoristaPorTelefone = async (telefone: string) : Promise<any> =>{
            return this.request.obterMotoristaPorTelefone(telefone)
        }
         obterMotoristaPorGenero = async (genero: string) : Promise<any> =>{
            return this.request.obterMotoristaPorGenero(genero)
        }
    
}

export const motoristaRepository = new MotoristaRepository(getRquestImplementation)