import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{CreateOfferPayload} from 'src/app/offer/create-offer/create-offer.payload';
import { AuthService } from '../auth.service';
import { OfferService } from '../shared/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
offers$: Array<CreateOfferPayload> = [];
 

  offer1: CreateOfferPayload ;
  offer2: CreateOfferPayload ;
  name: String;
   constructor(private offerService: OfferService, private router: Router, private authService: AuthService) {
    this.offerService.getAllOffers().subscribe(offer => {
      this.offers$ = offer;
      this.offer1=this.offers$[0];
      this.offer2=this.offers$[1];
    });

    
  }


  ngOnInit(): void {
  }
  see(offerId: number): void{
    this.router.navigateByUrl('/view-offer/'+ offerId);
  }
  createOffer(){
    this.router.navigateByUrl('create-offer');
  }

   isOdd(num) { return num % 2;}

}
