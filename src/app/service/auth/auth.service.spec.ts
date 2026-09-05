import { LoginRequest } from './../../models/auth';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // garante que não sobrou nenhuma requisição "pendente"
  });

  it('deve fazer POST para /login com as credenciais', () => {
    const credenciais = { email: 'teste@teste.com', senha: '123456' };

    service.login(credenciais: LoginRequest).subscribe();

    const req = httpMock.expectOne('http://localhost:8080/api/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(credenciais);

    req.flush(undefined); // simula a resposta do "backend"
  });


  it('deve iniciar deslogado', ()=>{
  service.setLoggedIn(true);
    service.setLoggedIn(false);
    expect(service.isLoggedIn()).toBeFalse();

  })
});
