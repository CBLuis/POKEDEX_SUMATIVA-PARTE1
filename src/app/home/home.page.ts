import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';
import { Firestore, collection, doc, setDoc, getDoc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any = {}; // Initialize to avoid errors
  pokemonId: number = 0;
  valor: any;
  pokemonName: string = '';
  pokemonType: string = ''; // Note: This variable will now store a combined string of types

  constructor(private api: APIServiceService, private db: Firestore) {}

  getPokemonData() {
    try {
      if (isNaN(this.valor)) {
        // Search by name
        this.api.getPokemonName(this.valor).subscribe((response) => {
          this.pokemon = response;
          console.log(this.pokemon);
          console.log(this.pokemon.sprites.front_default);

          // Implement the logic to extract up to two types
          let primaryType = '';
          if (this.pokemon.types[0] && this.pokemon.types[0].type.name) {
            primaryType = this.pokemon.types[0].type.name;
          }

          let secondaryType = '';
          if (this.pokemon.types[1] && this.pokemon.types[1].type.name) {
            secondaryType = ` / ${this.pokemon.types[1].type.name}`;
          }

          this.pokemonType = `${primaryType}${secondaryType}`;

          this.sendPokemonToFirebase(this.pokemonType);
        });
      } else {
        // Search by ID
        this.api.getPokemonID(this.valor).subscribe((response) => {
          this.pokemon = response;
          console.log("Types of Pokémon:");

          // Implement the logic to extract up to two types (same as above)
          let primaryType = '';
          if (this.pokemon.types[0] && this.pokemon.types[0].type.name) {
            primaryType = this.pokemon.types[0].type.name;
          }

          let secondaryType = '';
          if (this.pokemon.types[1] && this.pokemon.types[1].type.name) {
            secondaryType = ` / ${this.pokemon.types[1].type.name}`;
          }

          this.pokemonType = `${primaryType}${secondaryType}`;

          this.sendPokemonToFirebase(this.pokemonType);
        });
      }
    } catch (error) {
      console.error("Error getting Pokémon data:", error);
    }
  }

  sendPokemonToFirebase(type: string) {
    const pokemonRef = doc(this.db, 'Pokedex', 'Pokemon');

    setDoc(pokemonRef, {
      pokemon: {
        tipo: type, // Send the combined string of types
      },
    })
    .then(() => {
      console.log("Pokémon type(s) sent to Firebase successfully");
    })
    .catch((error) => {
      console.error("Error sending Pokémon type(s) to Firebase:", error);
    });
  }
}

