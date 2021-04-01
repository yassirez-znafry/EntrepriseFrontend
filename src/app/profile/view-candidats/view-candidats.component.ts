import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth.service';
import { PostulationPayload } from 'src/app/candidat/postuler/Postulation.payload';
import { CreateOfferPayload } from 'src/app/offer/create-offer/create-offer.payload';
import {ViewCandidatsService} from 'src/app/shared/view-candidats.service';
import{CandidatPayload} from './candidat.payload';

@Component({
  selector: 'app-view-candidats',
  templateUrl: './view-candidats.component.html',
  styleUrls: ['./view-candidats.component.css']
})
export class ViewCandidatsComponent implements OnInit {
  username: string;
  candidats: Array<PostulationPayload> = [];
  
  constructor(private localStorageService: LocalStorageService, private candidatService: ViewCandidatsService, private authService: AuthService) { }

  ngOnInit(): void {
  
  this.username = this.localStorageService.retrieve("username");
  this.candidatService.getCandidatsByOfferor(this.username).subscribe(data=>{
      this.candidats=data;
    },error=>{
      throwError(Error);
    });    
  }

  
}
