import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { Pokeapi } from './services/pokeapi.service';
import { pokemonSummery } from './models/pokemonSummery.model';
import { Subscription } from 'rxjs';
import { halfPokemon } from './models/pokemonList.model';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit,OnDestroy {
  constructor(private pokeApi:Pokeapi) {

  }
  
  private dialog = inject(MatDialog);

  public pokemonSummary = signal<pokemonSummery>({
    count: 0,
    next: "",
    previous: "",
    results: []
  });
  public halfPokemonList = signal<halfPokemon[]>([]);
  public subs = new Subscription;

 ngOnInit() {
    const summary = this.pokeApi.getPokemonSummary$().subscribe(value => {
      this.pokemonSummary.set(value);
    });

    this.subs.add(summary);
    
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

    dialogRef.afterOpened().subscribe(()=>{
      
      const halfPokemon = this.pokeApi.getAllHalfPokemon$(this.pokemonSummary()).subscribe(value=>{
        console.log(value);
        
        this.halfPokemonList.set(value);
      });

      this.subs.add(halfPokemon);

      dialogRef.close();
    })

    
  }

}
