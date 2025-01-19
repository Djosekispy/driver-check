

export default interface IGetRequestEndpoints {
    obterMotoristaPorId: (id: number) => Promise<any>;
    obterMotoristaPorTelefone: (telefone: string) => Promise<any>;
    obterMotoristaPorGenero: (genero: string) => Promise<any>;

    obterSeguroPorId: (id: number) => Promise<any>;
    obterSeguroAtivo: () => Promise<any>;
    obterSeguroPorAsseguradora: (asseguradora: string) => Promise<any>;

    obterVeiculoPorId: (id: number) => Promise<any>;
    obterVeiculoPorPlaca: (placa: string) => Promise<any>;
    obterVeiculoPorMarca: (marca: string) => Promise<any>;

    obterCartaPorId: (id: number) => Promise<any>;
    obterCartaPorLicenca: (licenca: string) => Promise<any>;

    obterTaxaPorId: (id: number) => Promise<any>;
    obterTaxaPorUpdates: (limit: number) => Promise<any>;
}

