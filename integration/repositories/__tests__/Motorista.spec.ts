import { isAxiosError } from "axios";
import { motoristaRepository } from "../motorista/MotoristaRepository";


describe('Testes de integração para Motorista', () => {
  it('Obter Motorista por Id ou retornar erro de busca', async () => {
    try {
      const { data } = await motoristaRepository.obterMotoristaPorId(1);
      expect(data.result).toMatchObject({
        id: expect.any(Number),
        nome: expect.any(String),
        endereco: expect.any(String),
        nacionalidade: expect.any(String),
        telefone: expect.any(String),
      });
      if (data.result.veiculo?.length) {
        expect(data.result.veiculo[0]).toMatchObject({
          id: expect.any(Number),
          marca: expect.any(String),
          modelo: expect.any(String),
          matricula: expect.any(String),
        });
        if (data.result.veiculo[0].seguro?.length) {
          expect(data.result.veiculo[0].seguro[0]).toMatchObject({
            id: expect.any(Number),
            asseguradora: expect.any(String),
            tipo: expect.any(String),
            Data_expiracao: expect.any(String),
          });
        }
      }
    } catch (error) {
      const errorMessage = isAxiosError(error) ? error.response?.data.message : error;
      expect(errorMessage).toBe('Registro não encontrado');
    }
  });
});