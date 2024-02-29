import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment'; // Importa el entorno

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,HttpClientModule ,IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp({"projectId":"pokedexcarpiogaibor","appId":"1:6059268158:web:6511bf89bc05184e11596f","storageBucket":"pokedexcarpiogaibor.appspot.com","apiKey":"AIzaSyBd3IrO2CMdYKrIF4-KoiBkA5mx9wjtKgc","authDomain":"pokedexcarpiogaibor.firebaseapp.com","messagingSenderId":"6059268158"}))],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
