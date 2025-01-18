import Veiculo from "./Veiculo";

  export default class TaxaDeCirculacao {
    id: number;
    criacao: Date;
    ultima_actualizacao: Date;
    data_expiracao: Date;
    doc_url: string;
    veiculo_id  : number;
    veiculo ? : Veiculo[]
  
    constructor(
      id: number,
      criacao: Date,
      ultima_actualizacao: Date,
      data_expiracao: Date,
      doc_url: string,
      veiculo_id : number
    ) {
      this.id = id;
      this.criacao = criacao;
      this.ultima_actualizacao = ultima_actualizacao;
      this.data_expiracao = data_expiracao;
      this.doc_url = doc_url;
      this.veiculo_id  = veiculo_id
    }
  }
  