import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import set = Reflect.set;


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.less']
})
export class ContactUsComponent implements OnInit {

  data = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  constructor(private http: HttpClient) {
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    const params = new HttpParams()
      .set('name', this.data.name)
      .set('email', this.data.email)
      .set('subject', this.data.subject)
      .set('message', this.data.message);

    this.http.post('/api/contactUs', params.toString(), { headers })
      .subscribe((res: any) => {
        if (res.success) {
          alert('Your message has been submitted successfully!');
        } else {
          alert(`Submit error: ${res.error}`);
        }
      });
  }

  onChangeHandler = (e) => {
    this.data[e.target.name] = e.target.value;
    console.log(this.data);
  }

  ngOnInit() {
  }

}
