import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  //templateUrl: './test.component.html',
  template: `
  <h2>
  <!--
    use {{_var_}} for getting the variable
  -->
    Welcom test app {{name}}
  </h2>

  
  <!--
    calling class function
  -->
    <h2>{{say_hello()}}</h2>

    <h3>{{"the URL of this page is: " + URL}}</h3>

  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //declare a dynamic string variable
  public name = "Dan Li"
  private names = "Hui & Du"
  constructor() { }
  public URL = window.location.href
  ngOnInit(): void {
  }

  say_hello(){
    return "Hello " + this.name
  }

}
