export class order{
    constructor(public _id:Object, public OrderNumber:Number, public UserID:String, public Products:Object,public Amount:Number,public Status:String,public Reason:String, public Date:Date){}
}