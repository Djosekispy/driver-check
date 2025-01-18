


export default interface ISeguroInterface {
    obterSeguroPorId: (id: number) => Promise<any>;
    obterSeguroAtivo: () => Promise<any>;
    obterSeguroPorAsseguradora: (asseguradora: string) => Promise<any>;
}