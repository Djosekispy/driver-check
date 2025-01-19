import TaxaDeCirculacao from "@/integration/model/Taxa";


export default interface ITaxaService {
    buscarTaxaPorId: (id: number) => Promise<TaxaDeCirculacao | null>;
    buscarTaxaPorUpdates: (limit: number) => Promise<TaxaDeCirculacao[] | []>;
}