import { isAxiosError } from "axios";
import { veiculoService } from "../veiculo/veiculoService";



describe("Testando services de  Veiculo : Casos certos",()=>{

    it('Obter Veiculo pelo Id',async()=>{
        try {
            const  data = await veiculoService.buscarVeiculoPorId(2);
            expect(data).toMatchObject({
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
            const  data = await veiculoService.buscarVeiculoPorPlaca("0012HA23");
            expect(data).toMatchObject({
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
            const  data  = await veiculoService.buscarVeiculoPorMarca("Jetour");
            expect(data[0]).toMatchObject({
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


describe("Testando services de  Veiculo : Casos de Falha",()=>{

    it('Erro ao Obter Veiculo pelo Id',async()=>{
        try {
            const data  = await veiculoService.buscarVeiculoPorId(20);
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado")
        }
    });

    it('Erro Obter Veiculo pela Placa',async()=>{
        try {
            const  data  = await veiculoService.buscarVeiculoPorPlaca("0012HA231212");
            expect(data).toEqual(null)
        } catch (error) {
            throw error
        }
    });

    it('erro ao Obter Veiculo pela Marca',async()=>{
        try {
            const  data  = await veiculoService.buscarVeiculoPorMarca("Nnas");
            expect(data).toEqual([])
        } catch (error) {
            throw error
        }
    });


});