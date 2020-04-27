import { Component, OnInit } from '@angular/core';
import { ColorChoiceService } from '../color-choice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(public svc:ColorChoiceService) { }

  ngOnInit(): void {
  }

}
