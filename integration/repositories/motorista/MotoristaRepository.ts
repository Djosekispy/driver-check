import { getRquestImplementation } from "@/request/method/GET/GetRequestImplementation";
import IMotoristaInterface from "./IMotoristaRepository";
import IGetRequestEndpoints from "@/request/method/GET/GetRequestInterface";



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

        obterMotoristaPorEmail = async  (email: string) => {
         return this.request.obterMotoristaPorEmail(email)
        };
        obterMotoristaPorNumeroDeBillhete = async (bilhete: string) => {
         return this.request.obterMotoristaPorNumeroDeBillhete(bilhete)
        };
    
}

export const motoristaRepository = new MotoristaRepository(getRquestImplementation)