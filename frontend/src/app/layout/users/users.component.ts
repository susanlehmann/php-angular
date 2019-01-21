import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {NgbModal, NgbModalRef, ModalDismissReasons, NgbModalOptions, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
@Component({
selector: 'app-users',
templateUrl: './users.component.html',
styleUrls: ['./users.component.scss'],
animations: [routerTransition()]
})

export class UsersComponent implements OnInit {
    public form = {
      firstName: null,
      lastName: null,
      staffTitle: null,
      mobileNumber: null,
      email: null,
      userPermission: null,
      notes: null,
      employmentStartDate: null,
      employmentEndDate: null,
      apointmentBooking: null,
      apointmentColor: null
      };

    public error = [];

  modalOptions: NgbModalOptions;
	closeResult: string;
  listusers: any;
  
	constructor(
	private http: HttpClient,
	private modal: NgbModal, 
	) {
		this.getProducts();
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
	
	getProducts() {
		// console.log('Get Products and Update Table');
		return this.http.get('http://localhost:8000/list-user')
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

	dalete_user(id) {
		// console.log('Get Products and Update Table');
		return this.http.post('http://localhost:8000/delete',{'id':id})
		.subscribe((listusers:any) => {
			// console.log(listusers.list_user);
		 //    this.listusers = listusers.list_user;
		});
	}
}
