import { isAxiosError } from "axios";
import { motoristaRepository } from "../motorista/MotoristaRepository";


describe('Testes de integração para Motorista : casos certos', () => {

  it('Obter Motorista por Id', async () => {
    try {
      const { data } = await motoristaRepository.obterMotoristaPorId(1);
      expect(data.result).toMatchObject({
        id: expect.any(Number),
        nome: expect.any(String),
        endereco: expect.any(String),
        nacionalidade: expect.any(String),
        telefone: expect.any(String),
      });
    } catch (error) {
      throw error;
    }
  });

  it('Obter Motorista por Telefone', async () => {
    try {
      const { data } = await motoristaRepository.obterMotoristaPorTelefone("927023711");
      console.log()
      expect(data.motorista).toMatchObject({
        id: expect.any(Number),
        nome: expect.any(String),
        endereco: expect.any(String),
        nacionalidade: expect.any(String),
        telefone: expect.any(String),
      });
    } catch (error) {
      throw error;
    }
  });

  it('Obter Motorista por Genero', async () => {
    try {
      const { data } = await motoristaRepository.obterMotoristaPorGenero("Masculino");
      expect(data.motorista[0]).toMatchObject({
        id: expect.any(Number),
        nome: expect.any(String),
        endereco: expect.any(String),
        nacionalidade: expect.any(String),
        telefone: expect.any(String),
      });
    } catch (error) {
      throw error;
    }
  });

});



describe('Testes de integração para Motorista : Casos de Erro', () => {

  it('Erro ao Obter Motorista por Telefone', async () => {
    try {
    const { data } = await motoristaRepository.obterMotoristaPorTelefone("927023720");
    expect(data.motorista).toEqual(null)
    } catch (error) {
      throw error;
    }
  });
 
  it('Erro ao Obter Motorista por id', async () => {
    try {
    await motoristaRepository.obterMotoristaPorId(40);
    } catch (error) {
      const message = isAxiosError(error) ? error.response?.data.message : error
      expect(message).toBe("Registro não encontrado");
    }
  });

  it('Erro ao Obter Motorista por Genero inexistente', async () => {
    try {
    const { data } = await motoristaRepository.obterMotoristaPorGenero("popol");
    } catch (error) {
      const message = isAxiosError(error) ? error.response?.data.error : error
      expect(message).toContain("Algo deu errado");
    }
  });

  it('Erro ao Obter Motorista por Genero Existente', async () => {
    try {
    const { data } = await motoristaRepository.obterMotoristaPorGenero("Feminino");
    expect(data.motorista).toEqual([]);
    } catch (error) {
      throw error;
    }
  });

});