import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor(private http: HttpClient) { }

  Request = (route) => new Promise((resolve, reject) => {
      this.http.get(`/api/${route}`).subscribe((res: any) => {
          if (res.success) {
              resolve(res.data);
          } else {
              reject(res.error);
          }
      });
  }
)

}
