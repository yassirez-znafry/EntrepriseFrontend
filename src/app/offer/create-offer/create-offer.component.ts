import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import{CreateOfferPayload} from 'src/app/offer/create-offer/create-offer.payload';
import{OfferService} from 'src/app/shared/offer.service'

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {
  createOfferForm: FormGroup;
  offerPayload: CreateOfferPayload;

  constructor(private router: Router, private offerService: OfferService) {
    this.createOfferForm = new FormGroup({
      title: new FormControl('', Validators.required),
      profil: new FormControl('', Validators.required),
      mission: new FormControl('', Validators.required),
      qualities: new FormControl('', Validators.required),
      competance: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
    })

    this.offerPayload = {
      title: '',
      profil: '',
      mission: '',
      qualities: '',
      competance: '',
      type: ''
    }
   }

  ngOnInit(): void {
  }

  discardOffer() {
    this.router.navigateByUrl('/home');
  }

  createOffer() {
    this.offerPayload.title = this.createOfferForm.get('title').value;
    this.offerPayload.qualities = this.createOfferForm.get('qualities').value;
    this.offerPayload.profil = this.createOfferForm.get('profil').value;
    this.offerPayload.mission = this.createOfferForm.get('mission').value;
    this.offerPayload.type = this.createOfferForm.get('type').value;
    this.offerPayload.competance = this.createOfferForm.get('competance').value;
    this.offerService.createOffer(this.offerPayload).subscribe((data) => {
      this.router.navigateByUrl('/home');
    }, error => {
      throwError(error);
    })
  }

}
