type RequestConfig = {
    [routeName: string]: {
      endpoint: string;
    };
  };
  
  type RequestMethods = {
    get: (paramsQueries?: any,token? : string) => Promise<any>;
    post: (paramsBody?: any, token? : string) => Promise<any>;
    put: (paramsBody?: any,token? : string) => Promise<any>;
    delete: (paramsQueries?: any,token? : string) => Promise<any>;
  };
  

  export {
    RequestConfig,
    RequestMethods
  }