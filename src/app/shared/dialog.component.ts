import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
selector: 'app-template',
templateUrl: './dialog.component.html'
})
export class DialogComponent implements OnInit {

    @Output() passEntry: EventEmitter<any> = new EventEmitter();

    userForm: FormGroup<any>;
    user:any;
    prefixMobile:any;
    errorMobileNumber:boolean =true;

    constructor(public activeModal: NgbModal, private formBuilder: FormBuilder) {}
    
    ngOnInit(){
        this.userForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            lastName: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            domain: ['',Validators.required],
            location: ['',[Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
            gender: ['', Validators.required],
            dateofBirth: ['', Validators.required],
            countryCode:['',Validators.required]
        });
    }

    cancelClicked(){
        this.activeModal.dismissAll();
    }

    getNumber(value:any){
        this.prefixMobile = value;
    }

    hasError(event:any){
        this.errorMobileNumber = event;
    }

    onSubmit(){
        if(this.userForm.status == "VALID"){
            if(this.errorMobileNumber){
                this.userForm.value.mobileNumber = this.prefixMobile;
                this.user = this.userForm.value;
                this.passEntry.emit(this.user);
                this.activeModal.dismissAll();
            }else{
                alert('Mobile Number is not valid!!')
            }
        } else {
            alert('All fields are required!!')
        }
    }

    get m(){
        return this.userForm.controls;
    }
}