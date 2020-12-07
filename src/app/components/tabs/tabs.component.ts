import { Component, OnInit, Input } from '@angular/core';
import { Tab } from 'src/app/models/tab';
import { HttpClient } from '@angular/common/http';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() section;
  tabs = [];
  selectedTab: Tab;
  plusIcon = faPlus;

  constructor(private http: HttpClient) { }

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

}
