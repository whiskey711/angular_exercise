export interface Customer {
    customerId: number;
    name: string;
    address: {
        streetNumber: string;
        postalCode: string;
        city: string;
        province: string
    }
}