import { Component, OnInit } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {

  constructor(public svc:ColorChoiceService) { }

  ngOnInit(): void {
  }

}
