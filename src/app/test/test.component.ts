import { Component, OnInit } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';


export interface Description{
  name:string,
  text:string,
  price:number
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(public svc:ColorChoiceService) { }


  options:string[];

  ngOnInit(): void {

 

  }


  

}
