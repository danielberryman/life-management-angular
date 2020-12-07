import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/models/tab';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  @Output() openModal = new EventEmitter();
  @Output() deleteSection = new EventEmitter();
  @Output() editSection = new EventEmitter();
  @Input() section;

  closeResult = '';
  tabs = [];
  selectedTab: Tab;
  plusIcon = faPlus;
  size = 'xl';
  titleMode = false;

  constructor(private http: HttpClient, private modalService: ModalService) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/tabs/all?id=' + this.section.id)
    .subscribe((data: Tab[]) => {
      this.tabs = data;
      if (this.tabs.length > 0) {
        this.tabs[0].active = true;
        this.selectedTab = this.tabs[0];
      }
    }); 
  }

  setSelectedTab(tab) {
    // If there's no previously selected tab we're in init fn
    if (!this.selectedTab) {
      this.tabs[0].active = true;
      this.selectedTab = this.tabs[0];
    } else {
      tab.active = !tab.active;
      if (this.selectedTab) {
        this.selectedTab.active = !this.selectedTab.active;
        this.selectedTab = tab;
      } else {
        this.selectedTab = tab;
      }
    }
  }

  resetSelectedTab() {
    if (this.selectedTab != this.tabs[0]) {
      this.selectedTab.active = false;
      this.selectedTab = this.tabs[0];
      this.selectedTab.active = true;
    }
  }

  open(content) {
    this.modalService.open(content, this.size);
  }

  edit() {
    this.changeMode();
  }
  
  onEditSectionSave(editedTitle) {
    this.editSection.emit({ title: editedTitle, id: this.section.id});
    this.changeMode();
  }

  onDeleteSection() {
    this.deleteSection.emit(this.section.id);
  }

  changeMode () {
    this.titleMode = !this.titleMode;
  }

}
