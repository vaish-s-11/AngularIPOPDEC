import { Component, Input, OnInit } from '@angular/core';
@Component({
 selector: 'app-root',
 templateUrl: './app.component.html',
 styleUrls: ['./app.component.css']
})
export class AppComponent {
 title = 'LEAF VILLAGE';
 myInputMessage:string ="I AM NARUTO UZUMAKI!"



 GetChildData(data: any){

  console.log(data);

 }
 ngOnInit(): void{
 }
 displayMessage(msg:string){
  this.myInputMessage=msg;
 }
}