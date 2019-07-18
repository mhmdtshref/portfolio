import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  deleteProject = (id) => new Promise((resolve, reject) => {
      this.http.delete(`/api/project/${id}`)
          .subscribe((res: any) => {
              if (res.success) {
                  resolve();
              } else {
                  reject(new Error(res.error));
              }
          });
  })

    getProject = (id) => new Promise((resolve, reject) => {
      this.http.get(`/api/project/${id}`).subscribe((res: any) => {
          if (res.success) {
              resolve(res.data);
          } else {
              reject(res.error);
          }
      });
    })

    editProject = (id, project) => new Promise((resolve, reject) => {
        const params = new HttpParams()
            .set('name', project.name)
            .set('link', project.link)
            .set('gitLink', project.gitLink)
            .set('imageUrl', project.imageUrl)
            .set('teamWork', project.teamWork)
            .set('description', project.description);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.http.patch(`/api/project/${id}`, params.toString(), { headers })
            .subscribe((res: any) => {
                if (res.success) {
                    alert(`Saved successfully!`);
                } else {
                    alert(`Save Error: ${res.error}`);
                }
            });
    })

}
