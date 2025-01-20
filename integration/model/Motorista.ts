import Carta from "./Carta";
import Veiculo from "./Veiculo";

export default  class Motorista {
    id: number;
    nome: string;
    endereco: string;
    nacionalidade: string;
    telefone: string;
    data_nascimento: Date;
    data_expiracao_de_documento: Date;
    url_do_BI: string;
    numero_bi_ou_passport: string;
    genero: string;
    cartaDeConducao : Carta[]
    veiculo  : Veiculo[]
  
    constructor(
      id: number,
      nome: string,
      endereco: string,
      nacionalidade: string,
      telefone: string,
      data_nascimento: Date,
      data_expiracao_de_documento: Date,
      url_do_BI: string,
      numero_bi_ou_passport: string,
      genero: string,
    cartaDeConducao : Carta[],
    veiculo  : Veiculo[]
    ) {
      this.id = id;
      this.nome = nome;
      this.endereco = endereco;
      this.nacionalidade = nacionalidade;
      this.telefone = telefone;
      this.data_nascimento = data_nascimento;
      this.data_expiracao_de_documento = data_expiracao_de_documento;
      this.url_do_BI = url_do_BI;
      this.numero_bi_ou_passport = numero_bi_ou_passport;
      this.genero = genero;
      this.cartaDeConducao = cartaDeConducao;
      this.veiculo  = veiculo
    }
  }
  