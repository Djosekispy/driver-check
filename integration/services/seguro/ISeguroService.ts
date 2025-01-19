import Seguro from "@/integration/model/Seguro";


export default interface ISeguroServiceInterface {
    buscarSeguroPorId: (id: number) => Promise<Seguro | null>;
    buscarSeguroAtivo: () => Promise<Seguro[] | []>;
    buscarSeguroPorAsseguradora: (asseguradora: string) => Promise<Seguro[] | []>;
}