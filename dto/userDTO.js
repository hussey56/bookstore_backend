class userDTO{
    constructor(user){
        this._id = user._id;
        this.username= user.username;
        this.email = user.email;
        this.photoUrl = user.photoUrl;
    }
}
module.exports = userDTO