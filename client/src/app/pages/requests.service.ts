import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  getProject = (id) => new Promise((resolve, reject) => {
    this.http.get(`/api/project/${id}`).subscribe((res: any) => {
      if (res.success) {
        resolve(res.data);
      } else {
        reject(res.error);
      }
    });
  })

  getSocials = () => new Promise((resolve, reject) => {
    this.http.get('/api/social').subscribe((res: any) => {
      if (res.success) {
        resolve(res.data);
      } else {
        reject(new Error(res.error));
      }
    });
  });
}
