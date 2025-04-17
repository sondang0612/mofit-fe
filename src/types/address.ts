export interface Address {
  id: string | number;
  firstName: string;
  lastName: string;
  city: string;
  district: string;
  streetAddress: string;
  note?: string;
  phoneNumber: string;
  isDefault: boolean;
}
