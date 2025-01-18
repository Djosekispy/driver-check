

export default interface IVeiculoRepository {
    obterVeiculoPorId: (id: number) => Promise<any>;
    obterVeiculoPorPlaca: (placa: string) => Promise<any>;
    obterVeiculoPorMarca: (marca: string) => Promise<any>;
}