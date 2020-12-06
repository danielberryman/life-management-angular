import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Section } from 'src/app/models/section';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sections = [];
  closeResult ='';
  sectionTitle;

  constructor(private http: HttpClient, private modalService: NgbModal) { }

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

  // Modal
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', size: 'sm'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
