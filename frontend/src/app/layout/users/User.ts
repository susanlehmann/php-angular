export class User {
    id: number;
    firstName: string;
    lastName: string;
    staffTitle: string;
    mobileNumber: number;
    email: string;
    password: string;
    userPermission: string;
    notes: string;
    employmentStartDate: string;
    employmentEndDate: string;
    apointmentBooking: boolean;
    apointmentColor: string
    services: [];
    commissions: Commission;

    constructor() {
      this.new();
      return this;
    }

    new() {
      this.firstName = "";
      this.lastName = "";
      this.staffTitle = "";
      this.mobileNumber = null;
      this.email = "";
      this.userPermission = "";
      this.notes = "";
      this.employmentStartDate = "";
      this.employmentEndDate = "";
      this.apointmentBooking = false;
      this.apointmentColor = "";
      this.services = [];
      if (this.commissions === undefined) {
        this.commissions = new Commission();
      } else {
        this.commissions.new();
      }
    }

    toDto(): any {
      return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone : this.mobileNumber,
        ennable_appointment_bookig : this.apointmentBooking ? 1 : 0,
        notes : this.notes,
        start_date : this.employmentStartDate,
        end_date : this.employmentEndDate,
        appointment_color: this.apointmentColor,
        dial_code : "",
        service_commission : this.commissions.service,
        product_commission : this.commissions.product,
        voucher_sales_commission : this.commissions.voucherSale,
      };
    }

    updateData(data: any) {
      const {find_user: {
        id,
        name,
        email
      }} = data;
      this.id = id;
      this.firstName = name;
      this.email = email;
    }

}

export class Commission {
  service: number;
  product: number;
  voucherSale: number;

  constructor() {
    this.new();
    return this;
  }

  new() {
    this.service = null;
    this.product = null;
    this.voucherSale = null;
  }
}

export interface UserDto {
  find_user: {
    id : number;
    firstName : string;
    lastName : string;
    email : string;
    password : string;
    phone : string;
    ennable_appointment_booking : number;
    notes : string;
    start_date : string;
    end_date : string;
    appointment_color : string;
    dial_code : string;
    first_login : number;
    service_commission : number;
    product_commission : number;
    voucher_sales_commission : number;
    sort_order: number;
    level: number;
  };
  
}
