import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  userData = []
  constructor(private profileService: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
    let data = this.profileService.getAllUser()
    this.userData = data;
    console.log(this.userData[0].profilePic)
  }

}

