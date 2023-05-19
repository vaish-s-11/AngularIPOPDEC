import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
 selector: 'app-child',
 templateUrl: './child.component.html',
 styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
constructor() {
 }
 @Output() public newPrice = new EventEmitter<any>();
 public price:any;
  ngOnInit() {
    
  } 
  onChange(value: any) {
  this.newPrice.emit(value);
 }
}