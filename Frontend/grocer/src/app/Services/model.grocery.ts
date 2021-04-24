export class Grocery{
    constructor (public _id:number,public gname:string,public price:number, public quantity:number){}
}

// Cart contains an array of grocery items
export class Cart{
    constructor (cartItems:Grocery[]){}
}