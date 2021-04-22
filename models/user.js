const db = require('../database/connection')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const {userNotFound, wrongPassword} = require('../error/user')

function loginUser ({email, password}) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT password FROM users WHERE email = ?`, [email], function(err, row){
            if(row == undefined){
                reject(new userNotFound(email))
            } else if(err) {
                reject(err)
            } else {
                if(bcrypt.compareSync(password, row.password)) {
                    const payload = {email: email}
                    const token = jwt.sign(payload, process.env.JWT_SECRET)
                    resolve({token})
                } else {
                    reject(new wrongPassword())
                }
            }
        })
    })
}

function getUser ({email}) {
    return new Promise((resolve, reject) => {
        db.get(`SELECT email FROM users WHERE email = ?`, [email], function(err, row){
            err ? reject(err) : resolve(row)
        })
    })
}

function changePassword (email, password) {
    return new Promise((resolve, reject) => {
        db.get(`UPDATE users SET password = ? WHERE email = ?`, [bcrypt.hashSync(password, 10), email], function(err){
            err ? reject(err) : resolve({success: true, message: `Password updated`})
        })
    })
}



module.exports = {
    loginUser,
    getUser,
    changePassword
}