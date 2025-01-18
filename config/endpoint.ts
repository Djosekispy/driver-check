
const config = {
    
    // Motorista
    getMotoristaById: { endpoint: "/motorista/:id" },
    getMotoristaByPhone: { endpoint: "/motorista/telefone/" },
    getMotoristaByGender: { endpoint: "/motorista/genero/" },

    // Seguro
    getSeguroById: { endpoint: "/seguro/" },
    getActiveSeguro: { endpoint: "/seguro-active" },
    getSeguroByAsseguradora: { endpoint: "/seguro/asseguradora/" },

    // Veiculo
    getVeiculoById: { endpoint: "/veiculo/" },
    getVeiculoByPlaca: { endpoint: "/veiculo/placa/" },
    getVeiculoByMarca: { endpoint: "/veiculo/marca/" },

    // Carta de Conducao
    getCartaById: { endpoint: "/carta/" },
    getCartaByLicenca: { endpoint: "/carta/licenca/" },

    // Taxa de Circulação
    getTaxaById: { endpoint: "/taxa/" },
    getTaxaByUpdates: { endpoint: "/taxa/updates/" },
  };

  export default config;