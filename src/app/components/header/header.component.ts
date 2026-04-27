import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, input, OnDestroy, OnInit, output, signal } from "@angular/core";
import { interval, Subscription } from "rxjs";

@Component({
    selector: "app-header",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    standalone: true,
})
export class Header implements OnInit, OnDestroy{

    private blinkerFluid = interval(1400);

    private subs = new Subscription();

    public shouldBlink = signal(false);

    

    constructor() {
        
    }

    public ngOnInit(): void {
        const sub = this.blinkerFluid.subscribe(() => {
            this.shouldBlink.update(b => !b);
        })

        this.subs.add(sub);
    }
    
    public ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
    
    public getBlinkBG = (): string  => {
        const blink = this.shouldBlink();

        if (blink) {
            return "radial-gradient(circle at 35% 30%, #b8e0ff 0%, #4ea0ff 40%, #1659a8 100%)";
        } else {
            return "radial-gradient(circle at 35% 30%, #88c4ff 0%, #2f80e0 40%, #0d3f7a 100%)";
        }
    }

    public getBoxShadow = (): string => {
        const blink = this.shouldBlink();

        if (blink) {
            return "inset 0 1px 2px rgba(255,255,255,.5), inset 0 -2px 4px rgba(0,0,0,.4), 0 0 14px rgba(78,160,255,0.7)"
        } else {
            return "inset 0 1px 2px rgba(255,255,255,.5), inset 0 -2px 4px rgba(0,0,0,.4), 0 0 4px rgba(78,160,255,0.3)`"
        }
    }
    
    
}