import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { RequestConfig, RequestMethods } from "./IMapper";

type RouteMap<T extends RequestConfig> = {
  [K in keyof T]: RequestMethods;
};

export default class RequestMapper<T extends RequestConfig> {
  private config: T;
  private api: AxiosInstance;

  constructor(config: T, apiInstance: AxiosInstance) {
    this.config = config;
    this.api = apiInstance;
  }

  private async makeRequest(
    method: "GET" | "POST" | "PUT" | "DELETE",
    routeName: keyof T,
    { paramsBody, paramsQueries, token }: { paramsBody?: any; paramsQueries?: any; token?: string } = {}
  ): Promise<any> {
    const route = this.config[routeName];
    if (!route) {
      throw new Error(`Route "${String(routeName)}" not found in configuration.`);
    }
    let url = route.endpoint;

    if (paramsQueries && Object.keys(paramsQueries).length > 0) {
      Object.entries(paramsQueries).forEach(([key, value]) => {
        const encodedValue = encodeURIComponent(String(value));
        url = url.replace(`:${key}`, encodedValue);
      });
      const remainingParams = Object.fromEntries(
        Object.entries(paramsQueries).filter(([key, value]) => !url.includes(`/${encodeURIComponent(String(value))}`))
      );
      const stringParams = Object.fromEntries(
        Object.entries(remainingParams).map(([key, value]) => [key, String(value)])
      );
    
      if (Object.keys(stringParams).length > 0) {
        const queryString = new URLSearchParams(stringParams).toString();
        url += `?${queryString}`;
      }
    }
    
if (url.includes(":")) {
  throw new Error(
    `Missing required parameters for endpoint: ${url}. Ensure all placeholders are provided.`
  );
}

  
    const axiosConfig: AxiosRequestConfig = {
      method,
      url,
       ...(paramsQueries && { params: paramsQueries }),
      ...(paramsBody && {data: paramsBody} ),
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };
    return this.api.request(axiosConfig);
  }

  get route(): RouteMap<T> {
    return new Proxy(
      {},
      {
        get: (_, routeName: string) => ({
          get: (paramsQueries?: any,token? : string) =>
            this.makeRequest("GET", routeName as keyof T, { paramsQueries , token}),
          post: (paramsBody?: any, token? : string) =>
            this.makeRequest("POST", routeName as keyof T, { paramsBody , token}),
          put: (paramsBody?: any,token? : string) =>
            this.makeRequest("PUT", routeName as keyof T, { paramsBody,token }),
          delete: (paramsQueries?: any,token? : string) =>
            this.makeRequest("DELETE", routeName as keyof T, { paramsQueries , token}),
        }),
      }
    ) as RouteMap<T>;
  }
}
