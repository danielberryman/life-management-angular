import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Tab } from 'src/app/models/tab';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Output() openModal = new EventEmitter();
  @Output() deleteSection = new EventEmitter();
  @Output() editSection = new EventEmitter();
  @Input() section;

  closeResult = '';
  titleMode = false;
  size = 'xl';

  constructor(private modalService: ModalService) { }

  ngOnInit(): void { }

  open(content) {
    this.modalService.open(content, this.size);
  }

  toggleEditMode() {
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
