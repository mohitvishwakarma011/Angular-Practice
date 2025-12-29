import { Component, computed, input } from "@angular/core";

@Component({
    selector:'app-counter',
    standalone:true,
    templateUrl:'./counter.component.html'
})

export class CounterComponent{
   counter = input.required();

   signalLabel = computed(()=> `The counter value is ${this.counter()}`)

}