import { isAxiosError } from "axios";
import { motoristaService } from "../motorista/MotoristaService";


describe('Testando os services para Motorista : casos certos', () => {

  it('Obter Motorista por Id', async () => {
    try {
      const  data  = await motoristaService.buscarMotoristaPeloId(1);
      expect(data).toMatchObject({
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
      const  data  = await motoristaService.buscarMotoristaPeloTelefone("927023711");
      expect(data).toMatchObject({
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
      const  data  = await motoristaService.buscarMotoristaPeloGenero("Masculino");
      expect(data[0]).toMatchObject({
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



describe('Testando os services para Motorista : Casos de Erro', () => {

  it('Erro ao Obter Motorista por Telefone', async () => {
    try {
    const  data  = await motoristaService.buscarMotoristaPeloTelefone("927023720");
    expect(data).toEqual(null)
    } catch (error) {
      throw error;
    }
  });
 
  it('Erro ao Obter Motorista por id', async () => {
    try {
    await motoristaService.buscarMotoristaPeloId(40);
    } catch (error) {
      const message = isAxiosError(error) ? error.response?.data.message : error
      expect(message).toBe("Registro não encontrado");
    }
  });

  it('Erro ao Obter Motorista por Genero inexistente', async () => {
    try {
    const  data  = await motoristaService.buscarMotoristaPeloGenero("popol");
    } catch (error) {
      const message = isAxiosError(error) ? error.response?.data.error : error
      expect(message).toContain("Algo deu errado");
    }
  });

  it('Erro ao Obter Motorista por Genero Existente', async () => {
    try {
    const  data  = await motoristaService.buscarMotoristaPeloGenero("Feminino");
    expect(data).toEqual([]);
    } catch (error) {
      throw error;
    }
  });

});