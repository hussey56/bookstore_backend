class userDTO{
    constructor(user){
        this._id = user._id;
        this.username= user.username;
        this.email = user.email;
        this.photoUrl = user.photoUrl;
        this.shipping = user.shipping_address;
        this.paymethods = user.payment_method;
    }
}
module.exports = userDTO