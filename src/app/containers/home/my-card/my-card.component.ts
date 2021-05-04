import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './my-card.component.html',
  styleUrls: ['./my-card.component.scss']
})
export class MyCardComponent implements OnInit {

  @Input()
  profile: MyCard;

  @Output()
  liked = new EventEmitter<{total: number, increased: number}>();

  constructor() { }

  ngOnInit(): void {
  }

  onLike(): void {
    this.profile.liked = this.profile.liked + 1;
    this.liked.emit({
      total: this.profile.liked,
      increased: 1,
    });
  }
}


export interface MyCard {
  id: string;
  avatarImg: string;
  title: string;
  subtitle: string;
  img: string;
  description: string;
  sharedLike?: string;
  liked: number;
}
