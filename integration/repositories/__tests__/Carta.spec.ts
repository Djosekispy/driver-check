import { isAxiosError } from "axios";
import { cartaRepository } from "../carta/CartaRepository"


describe('Testes de Integração para Carta de Condução : Casos certos',()=>{
    it('Obter carta pelo id', async () =>{
        try {
            const { data } = await cartaRepository.obterCartaPorId(3)
          
            expect(data.result).toMatchObject({
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
            const { data } = await cartaRepository.obterCartaPorLicenca("15152gas")
            expect(data.carta).toMatchObject({
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


describe('Testes de Integração para Carta de Condução : Casos de erros',()=>{
    it('Erro ao Obter carta pelo id', async () =>{
        try {
            const { data } = await cartaRepository.obterCartaPorId(50)
        } catch (error) {

            const message = isAxiosError(error) ? error.response?.data.message : error
             expect(message).toBe("Registro não encontrado");
        }
    });

    it('Erro ao Obter carta pelo número de licença', async () =>{
        try {
            const { data } = await cartaRepository.obterCartaPorLicenca("15152gas121212")
            expect(data.carta).toBe(null)
        } catch (error) {
            throw error;
        }
    });
})