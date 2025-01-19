import { isAxiosError } from "axios";
import { seguroRepository } from "../seguro/SeguroRepository";

describe('Testes de integração para Seguros : casos certos',()=>{
    it('Obter Seguro pelo Id',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroPorId(5)
        expect(data.result).toMatchObject({
            id: expect.any(Number),
            asseguradora: expect.any(String) ,
            tipo: expect.any(String) ,
            data_criacao: expect.any(String),
            ultima_actualizacao: expect.any(String),
            Data_expiracao: expect.any(String),
            doc_url: expect.any(String)
        })
        } catch (error) {
            throw error;
        }
    });

    it('Obter Seguro pela Asseguradora',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroPorAsseguradora("Nossa Seguros")
        expect(data.seguro[0]).toMatchObject({
            id: expect.any(Number),
            asseguradora: expect.any(String) ,
            tipo: expect.any(String) ,
            data_criacao: expect.any(String),
            ultima_actualizacao: expect.any(String),
            Data_expiracao: expect.any(String),
            doc_url: expect.any(String)
        })
        } catch (error) {
            throw error;
        }
    });

    it('Obter Seguros activos',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroAtivo()
        expect(data.seguro[0]).toMatchObject({
            id: expect.any(Number),
            asseguradora: expect.any(String) ,
            tipo: expect.any(String) ,
            data_criacao: expect.any(String),
            ultima_actualizacao: expect.any(String),
            Data_expiracao: expect.any(String),
            doc_url: expect.any(String)
        })
        } catch (error) {
            throw error;
        }
    });

});



describe('Testes de integração para Seguros : casos de Falha',()=>{
    it('Erro ao Obter Seguro pelo Id',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroPorId(1)
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado");
        }
    });

    it(' Erro ao Obter Seguro pela Asseguradora',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroPorAsseguradora("Puaua")
        expect(data.seguro).toEqual([])
        } catch (error) {
            throw error;
        }
    });

    it.skip('Erro ao Obter Seguros activos',async()=>{
        try {
            const { data } = await seguroRepository.obterSeguroAtivo()
            expect(data.seguro).toEqual([])
        } catch (error) {
            throw error;
        }
    });

});