import { Component, OnInit } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  phoneNum:boolean = false;
  comments = [];
  option:string;


  constructor(public svc:ColorChoiceService) { }

 

  showPhone(){
    this.phoneNum = !this.phoneNum;
  }
  addOpt(option){
    if(option !== ""){
      this.comments.unshift(option);
       return false;
    }
  }
  delOpt(option){
    for(let i = 0; i < this.comments.length; i++){
      if(this.comments[i] == option){
        this.comments.splice(i,1);
        break;
      }
    }
  }

  ngOnInit(): void {
   
  }

}
