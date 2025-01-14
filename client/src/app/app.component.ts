import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { Pokeapi } from './services/pokeapi.service';
import { pokemonSummery } from './models/pokemonSummery.model';
import { concatMap, map, Observable, Subscription, tap } from 'rxjs';
import { halfPokemon, Link } from './models/pokemonList.model';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private pokeApi:Pokeapi) {
    this.getHalfPokemon$ = this.pokeApi.getPokemonSummary$().pipe(
      concatMap(value => {
        return this.pokeApi.getAllHalfPokemon$(value.results);
      }),
      tap(value=>{
        this.halfPokemonList.set(value);
      })
    );
  }
  
  private dialog = inject(MatDialog);

  public getHalfPokemon$: Observable<halfPokemon[]>;
  public halfPokemonList = signal<halfPokemon[]>([]);
  public subs = new Subscription;

 ngOnInit() {
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  openDialog():void {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: "50%",
      height: "50%"
    })

    dialogRef.afterOpened().pipe(
      concatMap(value=>this.getHalfPokemon$)
    ).subscribe((value)=>{
      console.log('localCheck',this.halfPokemonList());
      
      dialogRef.close();
    })

    
  }

}
