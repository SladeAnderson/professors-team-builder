import { ChangeDetectionStrategy, Component, computed, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IsMobile } from './services/isMobile.service';
import { concatMap, Subscription, tap } from 'rxjs';
import { halfPokemon } from './models/pokemonList.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './Shared/Components/Modals/LoadingModal/LoadingModal.component';
import { loadBar } from './Shared/Components/Modals/loadingBar/loadingBar.component';
import { LoadingService } from './services/loading.service';
import { Pokeapi } from './services/pokeapi.service';
import { BottomComponent } from './components/bottom/bottom.component';

@Component({
  selector: 'app-root',
  imports: [Header, MainComponent, BottomComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  private dialog = inject(MatDialog);
  
  public halfPokemonList = signal<halfPokemon[]>([]);
  public TeamDexMode = signal<string>("");
  public TotalPkmn = signal<number>(0);
  public CurrentPkmnAmt = signal<number>(0);
  public subs = new Subscription;

  public mobile = computed<boolean>(() => this.isMobile.mobileCheck());
  public width = computed<string>(() => !this.mobile() ? "390px" : "100%");
  public height = computed<string>(() => !this.mobile() ? "780px" : "100%");
  public isLoaded = computed<string|null>(() => localStorage.getItem("hasLoadedPkmn"));
  public hasLoadedPkmn = computed<boolean>(() => this.isLoaded() === "true");

  constructor(private isMobile: IsMobile, private loadingService: LoadingService, private Pokeapi: Pokeapi) {}
  
  public setIsLoaded = (value: boolean): void => {
    localStorage.setItem("hasLoadedPkmn", value.toString());
  }

  public ngOnInit(): void {
    if (!this.isLoaded()) {
      this.openDialog();
      this.setIsLoaded(true);
    }
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
