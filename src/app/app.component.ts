import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MatDialogModule,MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { Pokeapi } from './services/pokeapi.service';
import { concatMap, map, Observable, Subscription, tap } from 'rxjs';
import { halfPokemon } from './models/pokemonList.model';
import { MainComponent } from "./components/main/main.component";
import { loadBar } from './Shared/Components/Modals/loadingBar/loadingBar.component';
import { LoadingService } from './services/loading.service';
import { IsMobile } from './services/isMobile.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatDialogModule, MainComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnDestroy,AfterViewInit {
  private dialog = inject(MatDialog);

  public halfPokemonList = signal<halfPokemon[]>([]);
  public CurrentStage = signal<string>("ssss");
  public subs = new Subscription;

  public mobile = new IsMobile();

  public isMobile = computed(() => this.mobile.mobileCheck());

  public width = computed(() => !this.isMobile() ? "390px" : "100%");
  public height = computed(() => !this.isMobile() ? "780px" : "100%");
  
  constructor(private Pokeapi: Pokeapi, private loadingService: LoadingService) {}

  public ngAfterViewInit(): void {
    this.openDialog();
  }

  public ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public openDialog():void {
    const dialogRef = this.dialog.open(ModalComponent,{
      width: "50%",
      height: "43%",
      disableClose: true,
    })

    let dialogSub = dialogRef.afterClosed().pipe(
      concatMap(()=>{
        const loadbarRef = this.dialog.open(loadBar, {
          width: "50%",
          height: "20%",
          disableClose: true,
        })
        // add more to load here load the pokemon summary last.

        this.loadingService.updateMsg$("Fetching Pokemon Summary")
        return this.Pokeapi.getLocalPokeSummary$().pipe(
          tap(value => {
            this.loadingService.updateMsg$("Closing...")
            loadbarRef.close();
            console.log("Local Poke Summary: ", value);
          })
        );   
      })
    ).subscribe((value)=>{
      this.halfPokemonList.set(value);
    })

    this.subs.add(dialogSub);
  }
  
}