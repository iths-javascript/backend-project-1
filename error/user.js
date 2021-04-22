
class userNotFound extends Error{
    constructor(email){
        super()
        this.errorCode = 404
        this.errorMessage = `User with ${email} not found`
    }
}

class wrongPassword extends Error{
    constructor(){
        super()
        this.errorCode = 405
        this.errorMessage = `Wrong password`
    }
}

module.exports = {
    userNotFound,
    wrongPassword
}