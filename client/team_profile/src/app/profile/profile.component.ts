import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Profile} from './interfaces/profile.interface';
import {CommonserviceService} from '../service/commonservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute, private http:CommonserviceService) { }


singleJson:Profile;






  jsonData = [{
    "ID": 1,
    "first_name": "hello",
    "last_name": "accusamus beatae ad facilis cum similique qui sunt",
    "user_photo": "https://via.placeholder.com/600/92c952",
    "description": "https://via.placeholder.com/150/92c952"
  },
  {
    "ID": 2,
    "first_name": "hello",
    "last_name": "reprehenderit est deserunt velit ipsam",
    "user_photo": "https://via.placeholder.com/600/771796",
    "description": "https://via.placeholder.com/150/771796"
  }

  ]

  ngOnInit(): void {
    let id:any = this.route.snapshot.paramMap.get("id");
    console.log(id);

    let singleData= this.jsonData.findIndex(x => x.ID == id);

    console.log(singleData);
    console.log(this.jsonData[singleData]);

    // this.singleJson = this.jsonData[singleData];

    // this.singleJson.push(this.jsonData[singleData])

    // console.log(this.singleJson);


    // this.singleJson=json;

    // console.log("albumid is", json.ID);

  this.http.getSingleUser(id).subscribe(profile=>{
    this.singleJson = profile

    console.log(this.singleJson);

  })

  }

}
