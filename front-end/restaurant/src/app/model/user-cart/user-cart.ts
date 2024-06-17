import { UserAddress } from "../user-address/user-address"
import { UserItems } from "../user-items/user-items"

export class UserCart {
    code: string
    status:string
    quantity:number
    price:number
    updatedDate:Date
    toAddressDto:UserAddress;
    fromAddressDto:UserAddress;
    cartOrdersDto:UserItems[];
}
