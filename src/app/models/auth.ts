export interface LoginRequest {
  email: string;
  password: string;
}

export interface CadastroRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface MeResponse {
  id: number;
  name: string;
  email: string;
}