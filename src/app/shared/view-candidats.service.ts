import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostulationPayload } from '../candidat/postuler/Postulation.payload';
import { CreateOfferPayload } from '../offer/create-offer/create-offer.payload';
import { CandidatPayload } from '../profile/view-candidats/candidat.payload';

@Injectable({
  providedIn: 'root'
})
export class ViewCandidatsService {
  private url = 'http://localhost:8080/api/';
  

  constructor(private httpClient: HttpClient) { }


  getOffersByUsername  (username: string): Observable<Array<CreateOfferPayload>> {
    return this.httpClient.get<Array<CreateOfferPayload>>(this.url + 'offers/get/by-user/' + username);
  }

  getCandidatsByOffer(id: number): Observable<Array<PostulationPayload>>{
        return this.httpClient.get<Array<PostulationPayload>>('http://localhost:8080/api/candidat/by-offer/' + id);
  }


 getCandidatsByOfferor(username: string): Observable<Array<PostulationPayload>>{
        return this.httpClient.get<Array<PostulationPayload>>('http://localhost:8080/api/candidat/by-offeror/' + username);
  }


  
}
