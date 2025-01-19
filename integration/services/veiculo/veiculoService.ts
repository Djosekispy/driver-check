import IVeiculoRepository from "@/integration/repositories/veiculo/IVeiculoRepository";
import IVeiculoService from "./IVeiculoService";
import Veiculo from "@/integration/model/Veiculo";
import { isAxiosError } from "axios";
import { veiculoRepository } from "@/integration/repositories/veiculo/VeiculoRepository";



class VeiculoService implements IVeiculoService {
    constructor(private veiculoRepository : IVeiculoRepository){}
    buscarVeiculoPorId = async (id: number) => {
        try {
            const { data } = await this.veiculoRepository.obterVeiculoPorId(id)
            return data.result as Veiculo
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
    buscarVeiculoPorPlaca = async (placa: string) => {
        
        try {
            const { data } = await this.veiculoRepository.obterVeiculoPorPlaca(placa)
            return data.veiculo as Veiculo
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
    buscarVeiculoPorMarca = async (marca: string) => {
        try {
            const { data } = await this.veiculoRepository.obterVeiculoPorMarca(marca)
            return data.veiculo as Veiculo[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
}

export const veiculoService = new VeiculoService(veiculoRepository)