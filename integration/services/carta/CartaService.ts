import { isAxiosError } from "axios";
import ICartaServiceInterface from "./ICartaService";
import ICartaInterface from "@/integration/repositories/carta/ICartaRepository";
import CartaDeConducao from "@/integration/model/Carta";
import { cartaRepository } from "@/integration/repositories/carta/CartaRepository";
import { IRepository } from "@/integration/repositories/repositoryBase/IRepositoryBase";
import { repository } from "@/integration/repositories/repositoryBase/RepositoryBase";


class CartaService implements ICartaServiceInterface {

    constructor(private cartaRepository : ICartaInterface, private storegeRepository : IRepository){}
    buscarCartaPorId = async (id: number) => {
            try {
                const { data } = await this.cartaRepository.obterCartaPorId(id);
                await this.storegeRepository.create((data.result as CartaDeConducao).motorista_id, String((data.result as CartaDeConducao).motorista?.nome), `Carta Nº : ${String((data.result as CartaDeConducao).numero_da_licenca)}`)
                return data.result as CartaDeConducao;
            } catch (error) {
                const message = isAxiosError(error) ? error.response?.data.message : error;
                throw message;
            }
    }
    buscarCartaPorLicenca = async (licenca: string) => {
        try {
            const { data } = await this.cartaRepository.obterCartaPorLicenca(licenca);
            await this.storegeRepository.create((data.carta as CartaDeConducao).motorista_id, String((data.carta as CartaDeConducao).motorista?.nome), `Carta Nº : ${String((data.carta as CartaDeConducao).numero_da_licenca)}`)
            return data.carta as CartaDeConducao;
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
}


export const cartaService = new  CartaService(cartaRepository,repository);