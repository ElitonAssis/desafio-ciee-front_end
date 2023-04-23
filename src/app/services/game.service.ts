import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from './http/http.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit, OnDestroy {

  API = environment.apiUrl
  constructor(private http: HttpService) {

  }

  ngOnInit(): void {

  }
  ngOnDestroy(): void {

  }

  async sendData(obj: any) {
    return this.http.post(`/game/cadastro-jogo`, obj);
  }

  async getAll() {
    return this.http.get("/game/get-all");
  }
}