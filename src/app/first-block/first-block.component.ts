import { Component, OnInit, Input } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent implements OnInit {



  constructor(public svc:ColorChoiceService) { }


  // colorChoice(){
  //   this.svc.color = 'black';
  // }

  ngOnInit(): void {
  }

}
