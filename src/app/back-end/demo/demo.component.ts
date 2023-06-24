import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("Constructor Called");

  }

  @Input() myValue = 'Bhargav Sankaliya';
  counter: any;
  num: number = 1;

  ngOnInit(): void {
    console.log("ngOnInit Called");
    this.counter = setInterval(() => {
      this.num++;
      console.log(this.num);

    }, 1000);
  }

  // kai pan changes thay etle tarat j called thay ngonchanges and ema current and previous value get kari sakay
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  // every time call thase kai pan changes thase tyare call thase 
  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  // content project hoy tyare call thase 
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }


  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked Called");
  }

  // jyare component initialize thai jay tyar pachhi j call thase
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit Called");
  }

  // jyare badhu render thai jay pachhi j ng after view checked call thase
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked Called");
  }

  // current component remove thase dom mathi tyare call thase aa hook model
  ngOnDestroy(): void {
    clearInterval(this.counter);
    console.log("ngOnDestroy Called");
  }


}
