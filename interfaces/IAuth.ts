import * as yup from 'yup';


  
const schemaLogin = yup.object({
    email: yup.string()
      .required('E-mail é obrigatório')
      .email('Digite um e-mail válido'),
    password: yup.string()
      .required('Senha é obrigatória')
  });
  
  type FormDataLogin = yup.InferType<typeof schemaLogin>;

  export { schemaLogin, FormDataLogin };