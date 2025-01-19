import { isAxiosError } from "axios";
import { motoristaRepository } from "../motorista/MotoristaRepository";

;
(async()=>{
    const motorista = await motoristaRepository.obterMotoristaPorId(1);
    console.log(JSON.stringify(motorista))
})();

/*
describe('Testes de integração para Motorista', () => {
  it('Obter Motorista por Id ou retornar erro de busca', async () => {
    try {
      // Chamando o repositório para obter o motorista
      const motorista = await motoristaRepository.obterMotoristaPorId(1);

      // Debug para verificar o retorno da API
      console.log("Dados retornados:", JSON.stringify(motorista, null, 2));

      // Validando as propriedades do motorista
      expect(motorista).toMatchObject({
        id: expect.any(Number),
        nome: expect.any(String),
        endereco: expect.any(String),
        nacionalidade: expect.any(String),
        telefone: expect.any(String),
      });

      // Validando as propriedades do veículo, se existir
      if (motorista.veiculo?.length) {
        expect(motorista.veiculo[0]).toMatchObject({
          id: expect.any(Number),
          marca: expect.any(String),
          modelo: expect.any(String),
          matricula: expect.any(String),
        });

        // Validando o seguro do veículo, se existir
        if (motorista.veiculo[0].seguro?.length) {
          expect(motorista.veiculo[0].seguro[0]).toMatchObject({
            id: expect.any(Number),
            asseguradora: expect.any(String),
            tipo: expect.any(String),
            Data_expiracao: expect.any(String),
          });
        }
      }
    } catch (error) {
      // Tratamento de erro para registro não encontrado
      const errorMessage = isAxiosError(error) ? error.response?.data.message : error;
      console.error("Erro capturado:", errorMessage);
      expect(errorMessage).toBe('Registro não encontrado');
    }
  }, 10000); // Timeout do teste aumentado para 10s caso a API demore
});
*/