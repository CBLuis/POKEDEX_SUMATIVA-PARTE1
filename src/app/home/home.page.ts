import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';
import { Firestore, doc, setDoc,getDoc, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any
  pokemonId: number=0;
  valor: any;
  pokemonName: string="";
  pokemonType: string="";

  tableled1: any;
  constructor(private api: APIServiceService, private db: Firestore) {}

  async encenderAzul(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"water" });
  }
  async encenderVerde(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"grass" });
  }
  async encenderRojo(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"fire" });
  }
  async encenderAmarillo(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"electric" });
  }
  async encenderMorado(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"poison" });
  }
  async encenderBlanco(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"normal" });
  }
  async encenderCafe(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"ground" });
  }
  async encenderCelesteD(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"dragon" });
  }
  async encenderMoradoG(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"ghost" });
  }
  async encenderCelesteF(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"flying" });
  }
  async encenderRosado(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"psychic" });
  }
  async encenderRojoPelea(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"fighting" });
  }
  async encenderGris(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"rock" });
  }
  async encenderCeleste(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"ice" });
  }
  async encenderNegro(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"dark" });
  }
  async encenderGrisClaro(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"steel" });
  }
  async encenderRosa(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"fairy" });
  }

  
  

  getPokemonData() {
    try {
      if (isNaN(this.valor)) {
        this.api.getPokemonName(this.valor).subscribe((response => {
          this.pokemon = response;
          //console.log(this.pokemon)
          //console.log(this.pokemon.sprites.front_default)
          for (let i = 0; i < this.pokemon.types.length; i++) {
            //console.log(this.pokemon.types[i].type.name);

            if (this.pokemon.types[i].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dragon") {
              this.encenderCelesteD();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ghost") {
              this.encenderMoradoG();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "poison") {
              this.encenderMorado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "flying") {
              this.encenderCelesteF();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ground") {
              this.encenderCafe();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "psychic") {
              this.encenderRosado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fighting") {
              this.encenderRojoPelea();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "rock") {
              this.encenderGris();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ice") {
              this.encenderCeleste();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dark") {
              this.encenderNegro();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "steel") {
              this.encenderGrisClaro();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fairy") {
              this.encenderRosa();
            }
          }
        }));
      } else {
        this.api.getPokemonID(this.valor).subscribe((response => {
          this.pokemon = response;
          //console.log("Tipos de Pokémon:");
          for (let i = 0; i < this.pokemon.types.length; i++) {
            //console.log(this.pokemon.types[i].type.name);

            if (this.pokemon.types[i].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dragon") {
              this.encenderCelesteD();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ghost") {
              this.encenderMoradoG();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "poison") {
              this.encenderMorado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "flying") {
              this.encenderCelesteF();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ground") {
              this.encenderCafe();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "psychic") {
              this.encenderRosado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fighting") {
              this.encenderRojoPelea();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "rock") {
              this.encenderGris();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ice") {
              this.encenderCeleste();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dark") {
              this.encenderNegro();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "steel") {
              this.encenderGrisClaro();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fairy") {
              this.encenderRosa();
            }
          }
        }));
      }
    } catch (error) {
      //console.log(error);
    }
  }

  
}
