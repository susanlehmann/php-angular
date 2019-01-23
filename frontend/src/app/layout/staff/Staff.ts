export class Staff {
    id: string;
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

    constructor() {
      this.new();
      return this;
    }

    new() {
      this.id = this.create_UUID();
      this.firstName = "";
      this.lastName = "";
      this.staffTitle = "";
      this.mobileNumber = null;
      this.email = "";
      this.userPermission = "";
      this.notes = "";
      this.employmentStartDate = "";
      this.employmentEndDate = "";
      this.apointmentBooking = "";
      this.apointmentColor = "";
      this.services = [];
      if (this.commissions === undefined) {
        this.commissions = new Commission();
      } else {
        this.commissions.new();
      }
    }

    toDto() {
      return {
        id: this.id,
        name: this.firstName,
        email: this.email,
        password: this.lastName,
        password_confirmation: this.lastName,
      };
    }

    updateData(data) {
      this.id = data.find_user.id;
      this.firstName = data.find_user.name;
      this.email = data.find_user.email;
    }

    create_UUID() {
      var dt = new Date().getTime();
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (dt + Math.random()*16)%16 | 0;
          dt = Math.floor(dt/16);
          return (c=='x' ? r :(r&0x3|0x8)).toString(16);
      });
      return uuid;
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
