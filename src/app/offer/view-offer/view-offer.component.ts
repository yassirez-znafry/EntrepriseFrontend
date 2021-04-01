import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { throwError } from 'rxjs';
import { OfferService } from 'src/app/shared/offer.service';
import { CreateOfferPayload } from '../create-offer/create-offer.payload';

@Component({
  selector: 'app-view-offer',
  templateUrl: './view-offer.component.html',
  styleUrls: ['./view-offer.component.css']
})
export class ViewOfferComponent implements OnInit {

  offerId: number;
  offer: CreateOfferPayload;
  

  constructor(private offerService: OfferService, private activateRoute: ActivatedRoute, private router: Router) {
    this.offerId = this.activateRoute.snapshot.params.id;
    this.offerService.getOffer(this.offerId).subscribe(data=>{
      this.offer=data;
    },error=>{
      throwError(Error);
    });
   }

  ngOnInit(): void {
  }

  postuler(id: number){
    this.router.navigateByUrl('/postuler/'+ id);

}

}
