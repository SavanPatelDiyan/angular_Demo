import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook',
  templateUrl: './life-cycle-hook.component.html',
  styleUrls: ['./life-cycle-hook.component.css']
})
export class LifeCycleHookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value: any;
  compDemo: boolean = true;

  submitValue(val: any) {
    this.value = val.value;
  }

  destroy() {
    this.compDemo = false;
  }

}
