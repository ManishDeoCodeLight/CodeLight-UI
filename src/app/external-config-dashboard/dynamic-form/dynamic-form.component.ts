import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
 
 @Input() label : any;
 @Input() value : any;

  constructor() { }

  ngOnInit(): void {
  }

}
