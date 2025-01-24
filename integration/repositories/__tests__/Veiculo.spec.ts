

import { isAxiosError } from "axios";
import { veiculoRepository } from "../veiculo/VeiculoRepository";



describe("Testes de integração para Veiculo : Casos certos",()=>{

    it('Obter Veiculo pelo Id',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorId(2);
            expect(data.result).toMatchObject({
                id: expect.any(Number),
                marca: expect.any(String) ,
                modelo: expect.any(String),
                medidas_pneomaticas: expect.any(String),
                cor: expect.any(String),
                ano_fabricacao: expect.any(Number)
            })
        } catch (error) {
            throw error
        }
    });

    it('Obter Veiculo pela Placa',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorPlaca("0012HA23");
            expect(data.veiculo).toMatchObject({
                id: expect.any(Number),
                marca: expect.any(String) ,
                modelo: expect.any(String),
                medidas_pneomaticas: expect.any(String),
                cor: expect.any(String),
                ano_fabricacao: expect.any(Number)
            })
        } catch (error) {
            throw error
        }
    });

    it('Obter Veiculo pela Marca',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorMarca("Jetour");
            expect(data.veiculo[0]).toMatchObject({
                id: expect.any(Number),
                marca: expect.any(String) ,
                modelo: expect.any(String),
                medidas_pneomaticas: expect.any(String),
                cor: expect.any(String),
                ano_fabricacao: expect.any(Number)
            })
        } catch (error) {
            throw error
        }
    });
});


describe("Testes de integração para Veiculo : Casos de Falha",()=>{

    it('Erro ao Obter Veiculo pelo Id',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorId(20);
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado")
        }
    });

    it('Erro Obter Veiculo pela Placa',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorPlaca("0012HA231212");
            expect(data.veiculo).toEqual(null)
        } catch (error) {
            throw error
        }
    });

    it('erro ao Obter Veiculo pela Marca',async()=>{
        try {
            const { data } = await veiculoRepository.obterVeiculoPorMarca("Nnas");
            expect(data.veiculo).toEqual([])
        } catch (error) {
            throw error
        }
    });


});