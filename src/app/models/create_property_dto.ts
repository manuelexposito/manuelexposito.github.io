export class CreatePropertyDto {
  name: string;
  phone: string;
  description: string;
  location: string;
  commerceType: string;
  address: string;
  email: string;
  website: string;
  availableTables: number;
  openingHours: string;
  closingHours: string;
  available: boolean;

  constructor() {
    this.name = '';
    this.phone = '';
    this.description = '';
    this.location = '';
    this.address = '';
    this.commerceType = '';
    this.website = '';
    this.available = false;
    this.email = '';
    this.availableTables = 0;
    this.openingHours = '';
    this.closingHours = '';
  }
}
