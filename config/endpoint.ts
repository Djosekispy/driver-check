
const config = {
    
    // Motorista
    getMotoristaById: { endpoint: "/motorista/:id" },
    getMotoristaByPhone: { endpoint: "/motorista/telefone/:telefone" },
    getMotoristaByGender: { endpoint: "/motorista/genero/:genero" },

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
    getTaxaByUpdates: { endpoint: "/taxa/updates/" },
  };

  export default config;