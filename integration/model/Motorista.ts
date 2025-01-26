import Carta from "./Carta";
import Multa from "./Multa";
import Veiculo from "./Veiculo";

export default  class Motorista {
    id: number;
    nome: string;
    endereco: string;
    nacionalidade: string;
    telefone: string;
    data_nascimento: Date;
    imagem: string;
    data_expiracao_de_documento: Date;
    url_do_BI: string;
    numero_bi_ou_passport: string;
    genero: string;
    cartaDeConducao : Carta[]
    veiculo  : Veiculo[]
    multa : Multa[]
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
    veiculo  : Veiculo[],
    imagem: string,
    multa : Multa[]
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
      this.veiculo  = veiculo;
      this.imagem = imagem;
      this.multa = multa
    }
  }
  