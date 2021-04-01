import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import{PostulationPayload} from './Postulation.payload';
import{PostulerService} from 'src/app/shared/postuler.service';
import{UploadFileService} from 'src/app/shared/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { CreateOfferPayload } from 'src/app/offer/create-offer/create-offer.payload';
import { OfferService } from 'src/app/shared/offer.service';

@Component({
  selector: 'app-postuler',
  templateUrl: './postuler.component.html',
  styleUrls: ['./postuler.component.css']
})
export class PostulerComponent implements OnInit {
   selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
 



  postuler: FormGroup;
  postulerPayload: PostulationPayload;
  offerId: number;
  offer: CreateOfferPayload;
  
 

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postulerService: PostulerService, private uploadService: UploadFileService, private offerService: OfferService) {
    this.postuler = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      tele: new FormControl('', Validators.required),
      tarif: new FormControl('', Validators.required),
      disponibilite: new FormControl('', Validators.required),
    })

    this.postulerPayload = {
      name: '',
      email: '',
      tele: '',
      tarif: '',
      disponibilite: '',
    }

    this.offerId = this.activatedRoute.snapshot.params['offerId'];
    this.offerService.getOffer(this.offerId).subscribe(data=>{
      this.offer=data;
    },error=>{
      throwError(Error);
    });
    
   
   }

  ngOnInit(): void {
    
  }

  discardPostulation() {
    this.router.navigateByUrl('/home');
  }

 

  postulerNow() {
    this.offerId = this.activatedRoute.snapshot.params['offerId'];
    this.postulerPayload.name = this.postuler.get('name').value;
    this.postulerPayload.email = this.postuler.get('email').value;
    this.postulerPayload.tarif = this.postuler.get('tarif').value;
    this.postulerPayload.tele = this.postuler.get('tele').value;
    this.postulerPayload.disponibilite = this.postuler.get('disponibilite').value;
    this.postulerPayload.offerId = this.offerId;
    this.upload();
    this.postulerService.postuler(this.postulerPayload).subscribe((data) => {
      this.router.navigateByUrl('/home');
    }, error => {
      throwError(error);
    })
  }





  selectFile(event) {
  this.selectedFiles = event.target.files;
}


upload() {
  this.progress = 0;

  this.currentFile = this.selectedFiles.item(0);
  this.uploadService.upload(this.currentFile).subscribe(
    event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.message = event.body.message;
        
      }
    });

  this.selectedFiles = undefined;
}

seeCv(url: string){
  this.uploadService.getFile(url);
}

}
