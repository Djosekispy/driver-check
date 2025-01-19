import { isAxiosError } from "axios";
import { seguroService } from "../seguro/seguroService";

describe('Testando os services dos Seguros : casos certos',()=>{
    it('Obter Seguro pelo Id',async()=>{
        try {
            const data  = await seguroService.buscarSeguroPorId(5)
        expect(data).toMatchObject({
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
            const  data = await seguroService.buscarSeguroPorAsseguradora("Nossa Seguros")
        expect(data[0]).toMatchObject({
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
            const  data  = await seguroService.buscarSeguroAtivo()
        expect(data[0]).toMatchObject({
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



describe('Testando os services dos Seguros : casos de Falha',()=>{
    it('Erro ao Obter Seguro pelo Id',async()=>{
        try {
            const  data  = await seguroService.buscarSeguroPorId(1)
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado");
        }
    });

    it(' Erro ao Obter Seguro pela Asseguradora',async()=>{
        try {
            const  data  = await seguroService.buscarSeguroPorAsseguradora("Puaua")
        expect(data).toEqual([])
        } catch (error) {
            throw error;
        }
    });

    it.skip('Erro ao Obter Seguros activos',async()=>{
        try {
            const  data  = await seguroService.buscarSeguroAtivo()
            expect(data).toEqual([])
        } catch (error) {
            throw error;
        }
    });

});