import IVeiculoRepository from "@/integration/repositories/veiculo/IVeiculoRepository";
import IVeiculoService from "./IVeiculoService";
import Veiculo from "@/integration/model/Veiculo";
import { isAxiosError } from "axios";
import { veiculoRepository } from "@/integration/repositories/veiculo/VeiculoRepository";
import { IRepository } from "@/integration/repositories/repositoryBase/IRepositoryBase";
import { repository } from "@/integration/repositories/repositoryBase/RepositoryBase";



class VeiculoService implements IVeiculoService {
    constructor(private veiculoRepository : IVeiculoRepository, private storegeRepository : IRepository){}
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
            await this.storegeRepository.create((data.veiculo as Veiculo).motorista_id, (data as Veiculo).motorista.nome, `Matrícula : ${String((data as Veiculo).matricula)}`)
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

export const veiculoService = new VeiculoService(veiculoRepository,repository);