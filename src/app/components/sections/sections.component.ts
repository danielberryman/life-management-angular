import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalService } from 'src/app/services/modal.service';
import { Section } from 'src/app/models/section';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  sections = [];
  size = 'sm';
  content;
  sectionTitle;

  constructor(private http: HttpClient, private modalService: ModalService) { }

  ngOnInit(): void {
    // get all sections
    this.http.get('http://localhost:8080/sections/all')
      .subscribe((data: Section[]) => {
        this.sections = data;
        console.log(this.sections);
      });
  }

  // MODAL
  open(content) {
    this.modalService.open(content, this.size);
  }

  // CRUD
  addSection(title) {
    const url = 'http://localhost:8080/sections/add?title=' + title;
    this.http.post(url, null)
      .subscribe((data) => {
        this.sections.push(data);
      });
  }

  editSection(obj) {
    this.http.put('http://localhost:8080/sections/' + obj.id, obj.title)
      .subscribe((data: Section) => { });
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
