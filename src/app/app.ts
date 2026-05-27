import { ChangeDetectionStrategy, Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { IsMobile } from './services/isMobile.service';
import { Subscription } from 'rxjs';
import { halfPokemon } from './models/pokemonList.model';

@Component({
  selector: 'app-root',
  imports: [Header, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  public halfPokemonList = signal<halfPokemon[]>([]);
  public TeamDexMode = signal<string>("");
  public TotalPkmn = signal<number>(0);
  public CurrentPkmnAmt = signal<number>(0);
  public subs = new Subscription;

  public mobile = computed<boolean>(() => this.isMobile.mobileCheck());
  public width = computed<string>(() => !this.mobile() ? "390px" : "100%");
  public height = computed<string>(() => !this.mobile() ? "780px" : "100%");
  
  constructor(private isMobile: IsMobile) {}
  
  public ngOnInit(): void {
    
  }

  public ngOnDestroy(): void {
    
  }
}
