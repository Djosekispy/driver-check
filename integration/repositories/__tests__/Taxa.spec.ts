import { isAxiosError } from "axios";
import { taxaRepository } from "../taxa/TaxaRepository";

describe('Testes de integração para Taxas : casos certos',()=>{
    it('Obter Taxa pelo Id',async()=>{
        try {
            const { data } = await taxaRepository.obterTaxaPorId(1)
        expect(data.result).toMatchObject({
            id: expect.any(Number),
            criacao: expect.any(String) ,
            ultima_actualizacao: expect.any(String) ,
            data_expiracao: expect.any(String),
            doc_url: expect.any(String)
        })
        } catch (error) {
            throw error;
        }
    });

    it('Obter últimas taxas actualizadas',async()=>{
        try {
            const { data } = await taxaRepository.obterTaxaPorUpdates(4)
        expect(data.taxas[0]).toMatchObject({
            id: expect.any(Number),
            criacao: expect.any(String) ,
            ultima_actualizacao: expect.any(String) ,
            data_expiracao: expect.any(String),
            doc_url: expect.any(String)
        })
        } catch (error) {
            throw error;
        }
    });
});



describe('Testes de integração para Taxas de circulação : casos de Falha',()=>{
    it('Erro ao Obter Taxa pelo Id',async()=>{
        try {
            const { data } = await taxaRepository.obterTaxaPorId(50)
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado");
        }
    });

});