import Motorista from "@/integration/model/Motorista";


export default interface IMotoristaServiceInterface {

    buscarMotoristaPeloId(id : number) : Promise<Motorista | null>
    buscarMotoristaPeloTelefone(telefone : string) : Promise<Motorista | null>
    buscarMotoristaPeloGenero(genero: string) : Promise<Motorista[] | null>
}