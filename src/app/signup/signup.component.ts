import { Component, OnInit } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(public svc:ColorChoiceService) { }

  ngOnInit(): void {
  }

}
