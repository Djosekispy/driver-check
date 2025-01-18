import Motorista from "./Motorista";
import Seguro from "./Seguro";
import TaxaDeCirculacao from "./Taxa";

export default  class Veiculo {
    id: number;
    marca: string;
    modelo: string;
    medidas_pneomaticas: string;
    cor: string;
    ano_fabricacao: number;
    lotacao: number;
    numero_quadro: number;
    cilindrada: string;
    numero_cilindro: number;
    combustivel: string;
    peso_bruto: string;
    tipo_de_caixa: string;
    distancia_entre_eixos: string;
    matricula: string;
    numero_motor: string;
    tara: string;
    primeiro_registro: string;
    motorista_id : number;
    motorista? : Motorista[]
    seguro? : Seguro[]
    taxaDeCirculacao? : TaxaDeCirculacao[]
  
    constructor(
      id: number,
      marca: string,
      modelo: string,
      medidas_pneomaticas: string,
      cor: string,
      ano_fabricacao: number,
      lotacao: number,
      numero_quadro: number,
      cilindrada: string,
      numero_cilindro: number,
      combustivel: string,
      peso_bruto: string,
      tipo_de_caixa: string,
      distancia_entre_eixos: string,
      matricula: string,
      numero_motor: string,
      tara: string,
      primeiro_registro: string,
      motorista_id : number
    ) {
      this.id = id;
      this.marca = marca;
      this.modelo = modelo;
      this.medidas_pneomaticas = medidas_pneomaticas;
      this.cor = cor;
      this.ano_fabricacao = ano_fabricacao;
      this.lotacao = lotacao;
      this.numero_quadro = numero_quadro;
      this.cilindrada = cilindrada;
      this.numero_cilindro = numero_cilindro;
      this.combustivel = combustivel;
      this.peso_bruto = peso_bruto;
      this.tipo_de_caixa = tipo_de_caixa;
      this.distancia_entre_eixos = distancia_entre_eixos;
      this.matricula = matricula;
      this.numero_motor = numero_motor;
      this.tara = tara;
      this.primeiro_registro = primeiro_registro;
      this.motorista_id = motorista_id;
    }
  }
  