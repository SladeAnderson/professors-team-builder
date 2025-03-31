import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { Pokeapi } from './services/pokeapi.service';
import { concatMap, map, Observable, Subscription, tap } from 'rxjs';
import { halfPokemon } from './models/pokemonList.model';
import { MainComponent } from "./components/main/main.component";
import { loadBar } from './Shared/Components/Modals/loadingBar/loadingBar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy,AfterViewInit {
  constructor(private Pokeapi: Pokeapi) {}

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
      height: "30%",
      disableClose: true,
    })

    dialogRef.afterClosed().pipe(
      concatMap((value)=>{
        const loadbarRef = this.dialog.open(loadBar, {
          width: "50%",
          height: "20%",
          disableClose: true,
        })
        
        return this.Pokeapi.getLocalPokeSummary$().pipe(
          tap(value => {
            loadbarRef.close();
            console.log("Local Poke Summary: ", value);
          })
        );   
      })
    ).subscribe((value)=>{
      this.halfPokemonList.set(value);
    })

    
  }
  
}