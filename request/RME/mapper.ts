
import { api } from "@/config/api";
import RequestMapper from "./RequestMapping";
import config from "@/config/endpoint";


const request = new RequestMapper(config, api);

export default request;
