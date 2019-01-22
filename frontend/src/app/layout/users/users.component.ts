import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.scss'],
animations: [routerTransition()]
})

export class UsersComponent implements OnInit {

    public form: Staff = <Staff>{};
  // public form = {
  //     email: null,
  //     name: null,
  //     password: null,
  //     password_confirmation: null
  //   };

  public formedit = {
      email: null,
      name: null,
    };

  modalOptions: NgbModalOptions;
  public error = [];

	closeResult: string;
  listusers: any;
  
	constructor(
	private http: HttpClient,
	private modal: NgbModal, 
	) {
		this.getUser();
	}

  open(content: NgbModalRef) {
    this.modal.open(content, this.modalOptions).result.then((result) => {
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

	ngOnInit() {
    this.modalOptions = {
      backdrop: 'static',
      size: 'lg'
    };
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
      console.table(this.form);
      return;
        // console.log(this.form);
        // this.httpcall.signup(this.form).subscribe(
        //   data => this.handleResponse(data),
        //   error => this.handleError(error)
        // );
      this.http.post('http://localhost:8000/api/create_user',this.form,{
              headers: new HttpHeaders({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
              })
      }).subscribe((listusers:any) => {
            console.log(listusers.list_user);
              this.listusers = listusers.list_user;
          });
      }

  Crete_user() {
    this.http.post('http://localhost:8000/api/create_user',this.form)
    .subscribe((data:any) => {
            this.getUser();
            $('.close-modal-createuser').click();
        });
    }

  show_user(id) {
    this.http.post('http://localhost:8000/api/show_user',{id : id})
    .subscribe((data:any) => {
            this.formedit = data.find_user;
        });
    }

  update_user() {
    this.http.post('http://localhost:8000/api/update_user',this.formedit)
    .subscribe((data:any) => {
            this.getUser();
            $('.close-modal-update-user').click();
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

interface Staff {
    firstName: string;
    lastName: string;
    staffTitle: string;
    mobileNumber: number;
    email: string;
    userPermission: string;
    notes: string;
    employmentStartDate: string;
    employmentEndDate: string;
    apointmentBooking: string;
    apointmentColor: string
    services: [];
    commissions: Commission;
}

interface Commission {
  service: string;
  product: string;
  voucherSale: string;
}
