import Veiculo from "@/integration/model/Veiculo";




export default interface IVeiculoService {
    buscarVeiculoPorId: (id: number) => Promise<Veiculo | null>;
    buscarVeiculoPorPlaca: (placa: string) => Promise<Veiculo | null>;
    buscarVeiculoPorMarca: (marca: string) => Promise<Veiculo[] | []>;
}