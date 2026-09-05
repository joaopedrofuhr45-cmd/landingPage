import { TestBed } from '@angular/core/testing';
import { AuthStateService } from './auth-state.service';

describe('AuthStateService', () => {
  let service: AuthStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStateService);
  });


  it('deve inicir deslogodo', () => {
    service.setLoggedIn(false);
    expect(service.isLoggedIn()).toBeFalse();
  });


  it('deve ficar logado depois de setLoggedIn(true)', () =>{
    service.setLoggedIn(true);
    expect(service.isLoggedIn()).toBeTrue();
  })

  it('deve voltar a deslogado depois de setLoggedIn(false)', ()=> {
    service.setLoggedIn(true);
    service.setLoggedIn(false);
    expect(service.isLoggedIn()).toBeFalse();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
