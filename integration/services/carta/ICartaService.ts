import CartaDeConducao from "@/integration/model/Carta";


export default interface ICartaServiceInterface {
    buscarCartaPorId: (id: number) => Promise<CartaDeConducao | null>;
    buscarCartaPorLicenca: (licenca: string) => Promise<CartaDeConducao | null>;
}