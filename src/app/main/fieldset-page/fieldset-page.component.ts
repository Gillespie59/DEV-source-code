import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'c3m-fieldset-page',
  templateUrl: './fieldset-page.component.html',
  styleUrls: ['./fieldset-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FieldsetPageComponent implements OnInit {


  constructor(private app: AppComponent) {
  }

  ngOnInit() {
    this.app.codeSnippets('');
  }

}

