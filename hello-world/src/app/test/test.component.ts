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
    <h2 class="text-success" [class]="special_class">{{say_hello()}}</h2>

    <h3>{{"the URL of this page is: " + URL}}</h3>

    <input [disabled]="is_disabled" [id]="id" type="text">
    <input class="text-success" bind-disabled="is_disabled" type="text">

    <input class="text-success" bind-class="special_class" bind-disabled="is_disabled" type="text">

    <input [ngClass]="messageClasses"  bind-disabled="is_disabled" type="text">

  `,
  styleUrls: ['./test.component.css',
              './test.textStyle.css']
})
export class TestComponent implements OnInit {

  //declare a dynamic string variable
  public name = "Dan Li"
  private names = "Hui & Du"
  constructor() { }
  public URL = window.location.href

  public id = "my id";

  public is_disabled = false;
  public is_special = true;
  public special_class = "text-special";
  
  public messageClasses = {
    "text-success": !this.is_disabled,
    "text-special": this.is_special,
    "text-fail": this.is_disabled

  }



  ngOnInit(): void {
  }

  say_hello(){
    return "Hello " + this.name
  }

}
