import { Component, Input } from "@angular/core";

@Component({
    selector:'app-counter',
    standalone:true,
    templateUrl:'./counter.component.html'
})

export class CounterComponent{

    @Input()counter = 0;

}