export default interface IAuthInterface {
    login: (email: string, senha : string) => Promise<any>;
    logout: (token: string) => Promise<any>;
}