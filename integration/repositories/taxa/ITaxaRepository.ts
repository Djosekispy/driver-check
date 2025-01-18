

export default interface ITaxaRepository {
    obterTaxaPorId: (id: number) => Promise<any>;
    obterTaxaPorUpdates: (limit: number) => Promise<any>;
}