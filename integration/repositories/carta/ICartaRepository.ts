


export default interface ICartaInterface {
    obterCartaPorId: (id: number) => Promise<any>;
    obterCartaPorLicenca: (licenca: string) => Promise<any>;
}