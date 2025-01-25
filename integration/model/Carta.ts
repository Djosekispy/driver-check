import Motorista from "./Motorista";


  export default class CartaDeConducao {
    id: number;
    tipo_de_carta: string;
    numero_da_licenca: string;
    validade: Date;
    local_de_emissao: string;
    doc_url: string;
    primeira_emissao_ano: number;
    motorista_id : number;
    motorista? : Motorista
  
    constructor(
      id: number,
      tipo_de_carta: string,
      numero_da_licenca: string,
      validade: Date,
      local_de_emissao: string,
      doc_url: string,
      primeira_emissao_ano: number,
      motorista_id : number
    ) {
      this.id = id;
      this.tipo_de_carta = tipo_de_carta;
      this.numero_da_licenca = numero_da_licenca;
      this.validade = validade;
      this.local_de_emissao = local_de_emissao;
      this.doc_url = doc_url;
      this.primeira_emissao_ano = primeira_emissao_ano;
      this.motorista_id = motorista_id
    }
  }
  