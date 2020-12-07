import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Section } from 'src/app/models/section';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sections = [];
  closeResult ='';
  sectionTitle;
  size = 'sm';

  constructor(private http: HttpClient, private modalService: ModalService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/sections/all')
      .subscribe((data: Section[]) => {
        this.sections = data;
        console.log(this.sections);
      }); 
  }

  addSection(title) {
    const url = 'http://localhost:8080/sections/add?title=' + title;
    this.http.post(url, null)
      .subscribe((data) => {
        this.sections.push(data);
      });
  }

  editSection(obj) {
    this.http.put('http://localhost:8080/sections/' + obj.id, obj.title)
      .subscribe((data: Section) => {
  
      });
  }

  open(content) {
    this.modalService.open(content, this.size);
  }

  deleteSection(id) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    this.http.delete('http://localhost:8080/sections/' + id, options)
      .subscribe(() => {
        this.sections = this.sections.filter(section => section.id !== id);
      });
  }
}
