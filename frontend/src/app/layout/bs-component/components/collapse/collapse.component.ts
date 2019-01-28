import { Component  } from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent {
  public isCollapsed1 = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  group1 = "demo"
  group2 = "spa"
  group3 = "massage"
  service1 = "demo1"
  service2 = "demo2"
  service3 = "massage1"
  service4 = "spa1"
  mouseEnter(div : string){
    console.log("mouse enter : " + div);
  }

  mouseLeave(div : string){
   console.log('mouse leave :' + div);
  }
  changeText: boolean;
    constructor() {
      this.changeText = false;
  }
}
