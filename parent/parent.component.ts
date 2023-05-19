import { Component, Input, OnInit } from '@angular/core';
@Component({
selector: 'app-parent',
 templateUrl: './parent.component.html',
styleUrls: ['./parent.component.css']

})

export class ParentComponent implements OnInit{
    @Input()
    myinputMsg!: string;
 public price: any;
 onChange(value: any){

this.price=value;
 }
 constructor(){
 }
 ngOnInit() { 

console.log(this.myinputMsg); 

}

}