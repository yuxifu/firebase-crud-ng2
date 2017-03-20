// src/app / home - page / home - page.component.ts
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { AF } from "../providers/af";
import { FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewChecked {
  public newMessage: string;
  public messages: FirebaseListObservable<any>;
  constructor(public afService: AF) {
    this.messages = this.afService.messages;
  }
  ngOnInit() { }

  @ViewChild('scrollMe') 
  private myScrollContainer: ElementRef;
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { console.log('Scroll to bottom failed yo!') }
  }

  isYou(email) {
    if(email == this.afService.email)
      return true;
    else
      return false;
  }
  isMe(email) {
    if(email == this.afService.email)
      return false;
    else
      return true;
  }

  sendMessage(){
    this.afService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}