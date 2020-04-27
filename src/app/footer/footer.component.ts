import { Component, OnInit, HostBinding } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  colorFooter:boolean = false;

  constructor(public svc:ColorChoiceService) { }

  // @HostBinding('style.background')

  ngOnInit(): void {
    if(this.svc.darkTeamOn){
      this.colorFooter = true;
    }
  }

}
