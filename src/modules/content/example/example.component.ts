import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.scss'],
})

export class ExampleComponent implements OnInit {


  constructor(private router: Router){}

  ngOnInit(): void {
    
  }


}