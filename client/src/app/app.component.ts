import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { Pokeapi } from './services/pokeapi.service';
import { concatMap, map, Observable, Subscription, tap } from 'rxjs';
import { halfPokemon, Link } from './models/pokemonList.model';
import { MainComponent } from "./components/main/main.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit{
  constructor(http: HttpClient) {
    this.pokeapi = new Pokeapi(http);
  }


  private pokeapi: Pokeapi;
  
  private dialog = inject(MatDialog);

  public halfPokemonList = signal<halfPokemon[]>([]);
  public subs = new Subscription;
  
  
  
  ngOnInit() {
      this.openDialog();
  }
  
  openDialog():void {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: "50%",
      height: "50%"
    })

    dialogRef.afterOpened().pipe(
      concatMap(()=>{
        return this.pokeapi.getPokemonSummary$()
      }),
      concatMap((summary)=>{
        return this.pokeapi.getAllHalfPokemon$(summary.results);
      }),
    ).subscribe((value)=>{
      
      this.halfPokemonList.set(value);

      dialogRef.close();
    })

    
  }
}