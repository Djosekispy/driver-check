
import Usuario from '@/integration/model/Usuario';
import { authService } from '@/integration/services/auth/AuthService';
import { useRouter } from 'expo-router';
import { createContext, useState, useContext, ReactNode, useEffect } from 'react';



type AuthContextData = {
  user:  Usuario | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<Usuario | { error : string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<Usuario | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string) : Promise<Usuario | { error : string }> => {
    try {
      const user = await authService.Entrar(email, password);
     getUser();
      return user as Usuario;
    } catch (error) {
      return {error : 'Erro ao logar: ' + error };
    }
  };


  const logout = async () => {
    const user = await authService.Sair();
    router.replace('/auth/login');
    setUser(null);
   
  };
   const getUser = async () => {
    const user = await authService.getUser();
    setUser(user[0]);
    return user;
   };



   useEffect(() => {
    const checkUser = async () => {
      const user = await getUser();
      if (!user) {
         router.replace('/auth/login');
      }
    };
    checkUser();
   }, []);


  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated: !!user,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}