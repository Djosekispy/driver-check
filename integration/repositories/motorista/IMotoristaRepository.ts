


export default interface IMotoristaInterface {
    obterMotoristaPorId: (id: number) => Promise<any>;
    obterMotoristaPorTelefone: (telefone: string) => Promise<any>;
    obterMotoristaPorGenero: (genero: string) => Promise<any>;
}