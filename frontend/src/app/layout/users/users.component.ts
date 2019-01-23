import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { User } from './User'

@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.scss'],
animations: [routerTransition()]
})

export class UsersComponent implements OnInit {

  public form = new User();

  modalOptions: NgbModalOptions;
  public error = [];

	closeResult: string;
  listusers: any;
  isCreate: boolean;
  
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
		// console.log('Get Products and Update Table');
		return this.http.get('http://localhost:8000/api/list-user')
		.subscribe((listusers:any) => {
			console.log(listusers.list_user);
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
		// console.log('Get Products and Update Table');
		return this.http.post('http://localhost:8000/api/delete_user',{'id':id})
      .subscribe((data:any) => {
              this.getUser();
          });
	}
}