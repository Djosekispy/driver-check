
const config = {
    
    // Motorista
    getMotoristaById: { endpoint: "/motorista/:id" },
    getMotoristaByPhone: { endpoint: "/motorista/telefone/:telefone" },
    getMotoristaByGender: { endpoint: "/motorista/genero/:genero" },
    getMotoristaByBilhete: { endpoint: "/motorista/email/:email" },
    getMotoristaByEmail: { endpoint: "/motorista/bilhete/:bilhete" },

    // Seguro
    getSeguroById: { endpoint: "/seguro/:id" },
    getActiveSeguro: { endpoint: "/seguro-active" },
    getSeguroByAsseguradora: { endpoint: "/seguro/asseguradora/:asseguradora" },

    // Veiculo
    getVeiculoById: { endpoint: "/veiculo/:id" },
    getVeiculoByPlaca: { endpoint: "/veiculo/placa/:placa" },
    getVeiculoByMarca: { endpoint: "/veiculo/marca/:marca" },

    // Carta de Conducao
    getCartaById: { endpoint: "/carta/:id" },
    getCartaByLicenca: { endpoint: "/carta/licenca/:licenca" },

    // Taxa de Circulação
    getTaxaById: { endpoint: "/taxa/:id" },
    getTaxaByUpdates: { endpoint: "/taxa/updates/:limit" },

    // Multa
    postMultaByMotorista: { endpoint: "/multa" },
    getMultaByMotorista: { endpoint: "/multa/motorista/:id" },
  };

  export default config;