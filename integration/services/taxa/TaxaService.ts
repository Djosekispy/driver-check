import TaxaDeCirculacao from "@/integration/model/Taxa";
import { isAxiosError } from "axios";
import ITaxaService from "./ITaxaService";
import ITaxaRepository from "@/integration/repositories/taxa/ITaxaRepository";
import { taxaRepository } from "@/integration/repositories/taxa/TaxaRepository";



class TaxaDeCirculacaoService implements  ITaxaService {
    constructor(private taxaRepository : ITaxaRepository){}
    buscarTaxaPorId = async (id: number) => {
        try {
            const { data } = await this.taxaRepository.obterTaxaPorId(id)
            return data.result as TaxaDeCirculacao
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
    buscarTaxaPorUpdates = async(limit: number) => {
        try {
            const { data } = await this.taxaRepository.obterTaxaPorUpdates(limit)
            return data.taxas as TaxaDeCirculacao[]
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
}

export const taxaDeCirculacaoService = new TaxaDeCirculacaoService(taxaRepository);