export interface Customerdto {
    name: string;
    address: {
        streetNumber: string;
        postalCode: string;
    };
    customerType: string
}