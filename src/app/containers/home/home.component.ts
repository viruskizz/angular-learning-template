import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {GhibliService} from '../../services/ghibli.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'learning-website';
  isDisable: boolean;
  totalLike = 0;
  profiles = [];

  constructor(private router: Router,
              private ghibliService: GhibliService) {
  }

  ngOnInit(): void {
    this.ghibliService.listPeople().subscribe((res: any[]) => {
      console.log('RES: ', res);
      res.forEach(el => {
        this.profiles.push({
          id: el.id,
          avatarImg: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
          title: el.name,
          subtitle: el.gender,
          // img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
          description: el.spicies,
          liked: 10,
        });
      });
      this.profiles.forEach(element => {
        this.totalLike += typeof element.liked === 'number' ? element.liked : 0;
      });
    });
  }

  goProfile(): void {
    const id = Math.ceil(Math.random() * 10);
    this.router.navigate(['/profile/' + id], {
      queryParams: {
        name: 'Araiva'
      }
    });
  }

  onLiked(event: any): void {
    this.totalLike += event.increased;
  }
}
