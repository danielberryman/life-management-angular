import { Component, OnInit, Input } from '@angular/core';
import { SectionDetail } from 'src/app/models/section-detail';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.scss']
})
export class SectionDetailsComponent implements OnInit {
  @Input() tab;

  sectionsDetails = [];
  mode = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/sectiondetails/all')
      .subscribe((data: SectionDetail[]) => {
        this.sectionsDetails = data;
        console.log(this.sectionsDetails);
      });
  }

  changeMode () {
    this.mode = !this.mode;
  }

}
