import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from '../shared/dialog.component';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss']
})
export class MemberProfileComponent implements OnInit {


  example = { firstName: "Shubham", lastName: "Tile",domain:"www.shubhamtile.in", location:"Pune",gender:"Male", mobileNumber:"+918788601371",dateofBirth:"1993-11-09"};
  @Input() firstName:any
 
  constructor(public modalService: NgbModal, public formBuilder: FormBuilder) {}

  openModal() {
    const modalRef = this.modalService.open(DialogComponent);
    modalRef.componentInstance.user = this.example;
    modalRef.componentInstance.passEntry.subscribe((result:any) => {
      this.example = result;
    });
  }

  ngOnInit(): void {
  }

}
