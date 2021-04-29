export class User{
    constructor(public UserID:String, public FirstName:String, public LastName:String, public Email:String, public Password:String, public DOB:Date, public PhoneNumber:String, public Address:String, public LoginAttempts:Number, public Locked:Boolean){}
}