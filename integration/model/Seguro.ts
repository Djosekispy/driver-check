import Veiculo from "./Veiculo";

export default  class Seguro {
    id: number;
    asseguradora: string;
    tipo: string;
    data_criacao: Date;
    ultima_actualizacao: Date;
    Data_expiracao: Date;
    doc_url: string;
    veiculo_id: number;
    veiculo? : Veiculo[]
  
    constructor(
      id: number,
      asseguradora: string,
      tipo: string,
      data_criacao: Date,
      ultima_actualizacao: Date,
      Data_expiracao: Date,
      doc_url: string,
      veiculo_id : number
    ) {
      this.id = id;
      this.asseguradora = asseguradora;
      this.tipo = tipo;
      this.data_criacao = data_criacao;
      this.ultima_actualizacao = ultima_actualizacao;
      this.Data_expiracao = Data_expiracao;
      this.doc_url = doc_url;
      this.veiculo_id = veiculo_id;
    }
  }
  