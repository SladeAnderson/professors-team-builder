import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
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
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy,AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  private dialog = inject(MatDialog);

  public halfPokemonList = signal<halfPokemon[]>([]);
  public subs = new Subscription;

  openDialog():void {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: "50%",
      height: "20%"
    })

    dialogRef.afterOpened().pipe(
      
    ).subscribe(()=>{
      
      dialogRef.close();
    })

    
  }

}
