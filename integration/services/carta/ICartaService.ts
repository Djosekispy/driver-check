

export default interface ICartaServiceInterface {
    buscarCartaPorId: (id: number) => Promise<any>;
    buscarCartaPorLicenca: (licenca: string) => Promise<any>;
}