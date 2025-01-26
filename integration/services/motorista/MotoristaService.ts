import Motorista from "@/integration/model/Motorista";
import IMotoristaServiceInterface from "./IMotoristaService";
import IMotoristaInterface from "@/integration/repositories/motorista/IMotoristaRepository";
import { isAxiosError } from "axios";
import { motoristaRepository } from "@/integration/repositories/motorista/MotoristaRepository";
import { IRepository } from "@/integration/repositories/repositoryBase/IRepositoryBase";
import { repository } from "@/integration/repositories/repositoryBase/RepositoryBase";


class MotoristaService implements  IMotoristaServiceInterface {

    constructor(private motoristaRepository : IMotoristaInterface, private storegeRepository : IRepository){}

    buscarMotoristaPeloId = async (id : number)  => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorId(id);
           await this.storegeRepository.create((data.motorista as Motorista).id, (data as Motorista).nome, `Bilhete Nº : ${String((data as Motorista).numero_bi_ou_passport)}`)
            return data.result as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw message;
        }
    }
    buscarMotoristaPeloTelefone = async (telefone : string) => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorTelefone(telefone);
           
            await this.storegeRepository.create((data.motorista as Motorista).id, (data as Motorista).nome, `Bilhete Nº : ${String((data as Motorista).numero_bi_ou_passport)}`)
            return data.motorista as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw message;
        }
    }

    buscarMotoristaPeloGenero = async (genero: string) => {
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorGenero(genero);
            return data.motorista as Motorista[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw message;
        }
    }

    buscarMotoristaPeloBilhete = async (bilhete: string) =>{
        try {
            const { data } = await this.motoristaRepository.obterMotoristaPorNumeroDeBillhete(bilhete);
            await this.storegeRepository.create((data.motorista as Motorista).id, (data as Motorista).nome, `Bilhete Nº : ${String((data as Motorista).numero_bi_ou_passport)}`)
            return data.motorista as Motorista
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw message;
        }
    }
}

export const motoristaService = new MotoristaService(motoristaRepository,repository)