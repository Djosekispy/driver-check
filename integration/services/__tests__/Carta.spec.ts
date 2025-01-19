import { isAxiosError } from "axios";
import { cartaService } from "../carta/CartaService";


describe('Testando services de Carta de Condução : Casos certos',()=>{
    it('Obter carta pelo id', async () =>{
        try {
            const data = await cartaService.buscarCartaPorId(3)
          
            expect(data).toMatchObject({
                id: expect.any(Number),
                tipo_de_carta: expect.any(String),
                numero_da_licenca: expect.any(String),
                validade: expect.any(String),
                local_de_emissao: expect.any(String),
                doc_url: expect.any(String),
                primeira_emissao_ano: expect.any(String),
            })
        } catch (error) {
            throw error;
        }
    });

    it('Obter carta pelo número de licença', async () =>{
        try {
            const data  = await cartaService.buscarCartaPorLicenca("15152gas")
            expect(data).toMatchObject({
                id: expect.any(Number),
                tipo_de_carta: expect.any(String),
                numero_da_licenca: expect.any(String),
                validade: expect.any(String),
                local_de_emissao: expect.any(String),
                doc_url: expect.any(String),
                primeira_emissao_ano: expect.any(String),
            })
        } catch (error) {
            throw error;
        }
    });


})


describe('Testando services de  Carta de Condução : Casos de erros',()=>{
    it('Erro ao Obter carta pelo id', async () =>{
        try {
            const  data  = await cartaService.buscarCartaPorId(50)
        } catch (error) {

            const message = isAxiosError(error) ? error.response?.data.message : error
             expect(message).toBe("Registro não encontrado");
        }
    });

    it('Erro ao Obter carta pelo número de licença', async () =>{
        try {
            const data  = await cartaService.buscarCartaPorLicenca("15152gas121212")
            expect(data).toBe(null)
        } catch (error) {
            throw error;
        }
    });
})