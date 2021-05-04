import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GhibliService} from '../../services/ghibli.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  profileId: number;
  name: string;

  constructor(private activatedRoute: ActivatedRoute,
              private ghibliService: GhibliService) { }

  ngOnInit(): void {
    const snapshot = this.activatedRoute.snapshot;
    console.log('Snapshot: ', snapshot);
    this.profileId = snapshot.params.id;
    this.ghibliService.getPeople(this.profileId.toString()).subscribe(res => {
      console.log(res);
      this.profile = JSON.stringify(res, null, 2);
    });
  }

}
