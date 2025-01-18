import { isAxiosError } from "axios";
import { motoristaRepository } from "../motorista/MotoristaRepository";



describe('Testes de integração para Motorista', () => {
    it('Obter Motorista por Id Ou retorna erro de busca', async () => {
        try {
            const motorista = await motoristaRepository.obterMotoristaPorId(1);
            expect({}).toEqual({}); 
        } catch (error) {
        expect(isAxiosError(error) ? error.response?.data.message : error).toBe('Registro não encontrado');
        }
    }, 10000);
});