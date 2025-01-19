import { isAxiosError } from "axios";
import ISeguroServiceInterface from "./ISeguroService";
import ISeguroInterface from "@/integration/repositories/seguro/ISeguroRepository";
import Seguro from "@/integration/model/Seguro";
import { seguroRepository } from "@/integration/repositories/seguro/SeguroRepository";


class SeguroService implements ISeguroServiceInterface {
    constructor(private seguroRepository : ISeguroInterface){}
    buscarSeguroPorId = async (id: number) => {
        try {
            const { data } = await this.seguroRepository.obterSeguroPorId(id);
            return data.result as Seguro
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error
            throw error;
        }
    }
    buscarSeguroAtivo = async () => {
        try {
            const { data } = await this.seguroRepository.obterSeguroAtivo();
            return data.seguro as Seguro[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error
            throw error;
        }
    }
    buscarSeguroPorAsseguradora = async (asseguradora: string) => {
        try {
            const { data } = await this.seguroRepository.obterSeguroPorAsseguradora(asseguradora);
            return data.seguro as Seguro[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error
            throw error;
        }
    }
}

export const seguroService = new SeguroService(seguroRepository)