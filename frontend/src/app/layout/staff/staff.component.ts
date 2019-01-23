import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { Staff } from './Staff';

@Component({
selector: 'app-staff',
templateUrl: './staff.component.html',
styleUrls: ['./staff.component.scss'],
animations: [routerTransition()]
})

export class StaffComponent implements OnInit {

  public form = new Staff();

  modalOptions: NgbModalOptions;
  public error = [];

	closeResult: string;
  listusers: any;
  isCreate: boolean;
  selectedId: string;
  
	constructor(
	private http: HttpClient,
	private modal: NgbModal, 
	) {
		this.getUser();
	}

	ngOnInit() {
    this.modalOptions = {
      backdrop: 'static',
      size: 'lg'
    };
  }
  
  openModal(content: NgbModalRef) {
    this.modal.open(content, this.modalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  openCreateModal(content: NgbModalRef) {
    this.isCreate = true;
    this.form.new();
    this.openModal(content);
  }

  openUpdateModal(content: NgbModalRef, userId) {
    this.isCreate = false;
    this.selectedId = userId;
    this.http.post('http://localhost:8000/api/show_user',{id : userId})
    .subscribe((data:any) => {
            this.form.updateData(data);
            this.openModal(content);
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
	
	getUser() {
		return this.http.get('http://localhost:8000/api/list-user')
		.subscribe((listusers:any) => {
		    this.listusers = listusers.list_user;
		});
	}
	
    onSubmit() {
      const dto = this.form.toDto();
      console.table(dto);
      if (this.isCreate) {
        this.Crete_user(dto);
      } else {
        this.update_user(dto);
      }
      this.modal.dismissAll();
      }

  Crete_user(user) {
    this.http.post('http://localhost:8000/api/create_user',user)
    .subscribe((data:any) => {
            this.getUser();
        });
    }

  update_user(user) {
    this.http.post('http://localhost:8000/api/update_user',user)
    .subscribe((data:any) => {
            this.getUser();
        });
    }

	dalete_user(id) {
		return this.http.post('http://localhost:8000/api/delete_user',{'id':id})
      .subscribe((data:any) => {
              this.getUser();
          });
  }
  
  deleteStaff() {
    this.dalete_user(this.selectedId);
    this.modal.dismissAll();
  }
}