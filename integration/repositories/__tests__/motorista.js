import { isAxiosError } from "axios";
import { motoristaRepository } from "../motorista/MotoristaRepository.ts";

;
(async()=>{
    const motorista = await motoristaRepository.obterMotoristaPorId(1);
    console.log(JSON.stringify(motorista))
})();