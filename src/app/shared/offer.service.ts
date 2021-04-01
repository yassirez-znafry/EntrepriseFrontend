import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{CreateOfferPayload} from 'src/app/offer/create-offer/create-offer.payload'



@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private url = 'http://localhost:8080/api/offers/';

  constructor(private httpClient: HttpClient) { }

  createOffer(offerPayload: CreateOfferPayload): Observable<any> {
    return this.httpClient.post(this.url, offerPayload);
  }

  getAllOffers  (): Observable<Array<CreateOfferPayload>> {
    return this.httpClient.get<Array<CreateOfferPayload>>(this.url + 'all');
  }

  getOffer(id: number): Observable<CreateOfferPayload>{
    return this.httpClient.get<CreateOfferPayload>(this.url + 'get/' + id);
  }


}
