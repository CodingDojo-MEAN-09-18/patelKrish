import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon(){
      let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      let ability = "";
      bulbasaur.subscribe( data => {
        let ans = `${data['name']}'s ablities are: `
        data['abilities'].forEach(d => { ans += `\n ${d['ability']['name']}`; });

        console.log(ans);

        ability = data['abilities'][1].ability.url;

        let ab = this._http.get(ability);

        ab.subscribe(a => { console.log(`Pokemon with the same ablitiies are: ${a['pokemon'].length}`); })
      })
  }
}
