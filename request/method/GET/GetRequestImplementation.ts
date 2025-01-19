import request from "@/request/RME/mapper";
import IGetRequestEndpoints from "./GetRequestInterface";


export default class GetRquestImplementation implements IGetRequestEndpoints {
    
    obterMotoristaPorId = async (id: number) => {
        return request.route.getMotoristaById.get({id});
    }
    obterMotoristaPorTelefone = async (telefone: string) => {
        return request.route.getMotoristaByPhone.get({telefone});
    }

    obterMotoristaPorGenero = async (genero: string) => {
        return request.route.getMotoristaByGender.get({genero});
    }

    obterSeguroPorId = async (id: number) => {
        return request.route.getSeguroById.get({id});
    }

    obterSeguroAtivo = async () => {
        return request.route.getActiveSeguro.get();
    }

    obterSeguroPorAsseguradora = async (asseguradora: string) => {
        return request.route.getSeguroByAsseguradora.get({asseguradora});
    }

    obterVeiculoPorId = async (id: number) => {
        return request.route.getVeiculoById.get({id});
    }

    obterVeiculoPorPlaca = async (placa: string) => {
        return request.route.getVeiculoByPlaca.get({placa});
    }

    obterVeiculoPorMarca = async (marca: string) => {
        return request.route.getVeiculoByMarca.get({marca});
    }

    obterCartaPorId = async (id: number) => {
        return request.route.getCartaById.get({id});
    }

    obterCartaPorLicenca = async (licenca: string) => {
        return request.route.getCartaByLicenca.get({licenca});
    }

    obterTaxaPorId = async (id: number) => {
        return request.route.getTaxaById.get({id});
    }

    obterTaxaPorUpdates = async (limit: number) => {
        return request.route.getTaxaByUpdates.get({limit});
    }
}

export const  getRquestImplementation = new GetRquestImplementation()