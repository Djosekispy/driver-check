import { isAxiosError } from "axios";
import { taxaDeCirculacaoService } from "../taxa/TaxaService";

describe('Testando os services das Taxas : casos certos',()=>{
    it('Obter Taxa pelo Id',async()=>{
        try {
            const  data  = await taxaDeCirculacaoService.buscarTaxaPorId(1)
        expect(data).toMatchObject({
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
            const data  = await taxaDeCirculacaoService.buscarTaxaPorUpdates(4)

        expect(data[0]).toMatchObject({
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



describe('Testando os services de Taxas de circulação : casos de Falha',()=>{
    it('Erro ao Obter Taxa pelo Id',async()=>{
        try {
            const  data  = await taxaDeCirculacaoService.buscarTaxaPorId(50)
        } catch (error) {
            const message = isAxiosError(error) ? error.response?.data.message : error;
            expect(message).toBe("Registro não encontrado");
        }
    });

});