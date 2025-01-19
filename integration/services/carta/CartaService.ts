import { isAxiosError } from "axios";
import ICartaServiceInterface from "./ICartaService";
import ICartaInterface from "@/integration/repositories/carta/ICartaRepository";
import CartaDeConducao from "@/integration/model/Carta";
import { cartaRepository } from "@/integration/repositories/carta/CartaRepository";


class CartaService implements ICartaServiceInterface {

    constructor(private cartaRepository : ICartaInterface){}
    buscarCartaPorId = async (id: number) => {
            try {
                const { data } = await this.cartaRepository.obterCartaPorId(id);
                return data.result as CartaDeConducao;
            } catch (error) {
                const message = isAxiosError(error) ? error.response?.data.message : error;
                throw message;
            }
    }
    buscarCartaPorLicenca = async (licenca: string) => {
        try {
            const { data } = await this.cartaRepository.obterCartaPorLicenca(licenca);
            return data.carta as CartaDeConducao;
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            throw message;
        }
    }
}


export const cartaService = new  CartaService(cartaRepository);