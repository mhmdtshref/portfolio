import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private http: HttpClient) { }

  getProjectsList = () => new Promise( (resolve, reject) => {
      this.http.get('/api/project').subscribe((res: any) => {
          if (res.success) {
              resolve(res.data);
          } else {
              reject(new Error(res.error));
          }
      });
  })

  getServicesList = () => new Promise( (resolve, reject) => {
      this.http.get('/api/service').subscribe((res: any) => {
          if (res.success) {
              resolve(res.data);
          } else {
              reject(new Error(res.error));
          }
      });
  })


}
