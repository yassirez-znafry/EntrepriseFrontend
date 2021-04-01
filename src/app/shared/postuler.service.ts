import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostulationPayload } from '../candidat/postuler/Postulation.payload';

@Injectable({
  providedIn: 'root'
})
export class PostulerService {

  private url = 'http://localhost:8080/api/candidat';

  constructor(private httpClient: HttpClient) { }

  postuler(postulerPayload: PostulationPayload){
    return this.httpClient.post(this.url, postulerPayload);
  }

  getCandidat(id: number){
    return this.httpClient.get<Array<PostulationPayload>>(this.url + '/'+id);
  }
}
