import { Injectable } from '@angular/core';
import { HeroeModel } from '../models/heroe.model';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = 'https://integrar-firebase-y-angu-64a19.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearHeroe( heroe:HeroeModel ){
    console.log(heroe);
    return this.http.post(`${this.url}/heroes.json`, heroe)
      .pipe(
        map( (resp: any) => {
            heroe.id = resp.name;
            return heroe;
        })
      );
  }
}
