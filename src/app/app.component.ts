import { Component, HostBinding, Input } from '@angular/core';
import { ColorChoiceService } from './color-choice.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // darkOn:boolean = false;

  constructor(public svc: ColorChoiceService){}


  @HostBinding('style.background')
  public background = 'white';

  colorChoice(){
    // this.background = "black";
    this.svc.iconMenu = !this.svc.iconMenu;
    this.svc.showBar = !this.svc.showBar;
    // this.svc.darkOn = !this.svc.darkOn;
   
  }
  colorChoiceBack(){
    // this.background = "white";
    // this.svc.darkOn = !this.svc.darkOn;
    this.svc.iconMenu = !this.svc.iconMenu;
    this.svc.showBar = !this.svc.showBar;
  }
  changeTeam(){
    this.svc.changeButton = ! this.svc.changeButton;
    this.background = "#231f1f";
    this.svc.darkTeamOn = !this.svc.darkTeamOn;
  }
  changeTeamBack(){
    this.svc.changeButton = ! this.svc.changeButton;
    this.background = "white";
    this.svc.darkTeamOn = !this.svc.darkTeamOn;
  }



  title = 'workProject';
}
