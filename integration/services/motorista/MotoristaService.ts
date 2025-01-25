import Motorista from "@/integration/model/Motorista";
import IMotoristaServiceInterface from "./IMotoristaService";
import IMotoristaInterface from "@/integration/repositories/motorista/IMotoristaRepository";
import { isAxiosError } from "axios";
import { motoristaRepository } from "@/integration/repositories/motorista/MotoristaRepository";


class MotoristaService implements  IMotoristaServiceInterface {

    constructor(private motoristaRepository : IMotoristaInterface){}

    buscarMotoristaPeloId = async (id : number)  => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorId(id);
            return data.result as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw error;
        }
    }
    buscarMotoristaPeloTelefone = async (telefone : string) => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorTelefone(telefone);
            return data.motorista as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw error;
        }
    }

    buscarMotoristaPeloGenero = async (genero: string) => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorGenero(genero);
            return data.motorista as Motorista[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw error;
        }
    }

    buscarMotoristaPeloBilhete = async (bilhete: string) =>{
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorNumeroDeBillhete(bilhete);
            return data.motorista as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw error;
        }
    }
}

export const motoristaService = new MotoristaService(motoristaRepository)