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
                    resolve();
                } else {
                    reject(new Error(res.error));
                }
            });
    })

    createProject = (project) => new Promise((resolve, reject) => {
        const params = new HttpParams()
            .set('name', project.name)
            .set('link', project.link)
            .set('gitLink', project.gitLink)
            .set('imageUrl', project.imageUrl)
            .set('teamWork', project.teamWork)
            .set('description', project.description);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.http.post(`/api/project`, params.toString(), { headers })
            .subscribe((res: any) => {
                if (res.success) {
                    resolve();
                } else {
                    reject(new Error(res.error));
                }
            });
    })

    deleteService = (id) => new Promise((resolve, reject) => {
        this.http.delete(`/api/service/${id}`)
            .subscribe((res: any) => {
                if (res.success) {
                    resolve();
                } else {
                    reject(new Error(res.error));
                }
            });
    })

    getService = (id) => new Promise((resolve, reject) => {
        this.http.get(`/api/service/${id}`).subscribe((res: any) => {
            if (res.success) {
                resolve(res.data);
            } else {
                reject(res.error);
            }
        });
    })

    editService = (id, service) => new Promise((resolve, reject) => {
        const params = new HttpParams()
            .set('name', service.name)
            .set('imageUrl', service.imageUrl)
            .set('brief', service.brief)
            .set('description', service.description);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.http.patch(`/api/service/${id}`, params.toString(), { headers })
            .subscribe((res: any) => {
                if (res.success) {
                    resolve();
                } else {
                    reject(new Error(res.error));
                }
            });
    })

    createService = (service) => new Promise((resolve, reject) => {
        const params = new HttpParams()
            .set('name', service.name)
            .set('imageUrl', service.imageUrl)
            .set('brief', service.brief)
            .set('description', service.description);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        this.http.post('/api/service', params.toString(), { headers })
            .subscribe((res: any) => {
                if (res.success) {
                    resolve();
                } else {
                    reject(new Error(res.error));
                }
            });
    })

    loginRequest = (username, password) => new Promise((resolve, reject) => {
        const params = new HttpParams()
            .set('username', username)
            .set('password', password);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        this.http.post(`/api/auth/login`, params.toString(), { headers }).subscribe((res: any) => {
            if (res.success) {
                resolve(res.data);
            } else {
                reject(new Error(res.error));
            }
        });
    })

    checkAuth = () => new Promise((resolve, reject) => {
      this.http.get('/api/auth/checkAuth').subscribe((res: any) => {
          if (res.success) {
              resolve();
          } else {
              reject(new Error(res.error));
          }
      });
    })

}
