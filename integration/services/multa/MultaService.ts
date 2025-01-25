import IMultaInterface from "@/integration/repositories/multa/IMultaRepository";
import IMultaServiceInterface from "./IMultaService";
import { isAxiosError } from "axios";
import Multa from "@/integration/model/Multa";
import { multaRepository } from "@/integration/repositories/multa/MultaRepository";


class MultaService implements IMultaServiceInterface {
    constructor(private multaRepository : IMultaInterface){}
    registarMultaDeMotorista = async (titulo: string, descricao: string, motorista_id: number) => {
            try {
                const { data } = await this.multaRepository.registarMultaDeMotoristaPorFaltadDeSeguro(titulo,descricao,motorista_id);
                return data as Multa
            } catch (error) {
                const message = isAxiosError(error) ? error.response?.data.message : error 
                throw error;
            }
        
    }

    obterMultaDeMotorista = async (id: number) => {
        try {
            const { data } = await this.multaRepository.obterMultaDeMotorista(id);
            return data.multa as Multa[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error 
            throw error;
        }
    
}
}

export const multaService = new MultaService(multaRepository);