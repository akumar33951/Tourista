const sql = require("./db.js");
const CryptoJS = require("crypto-js");

debugger;
const User = function (user) {
    this.userId = user.userId,
    this.password = user.password
}

User.login = (req, result) => {
    debugger;
    sql.query(`select userid, password from user
    where userId = '${req.userId}' and password = '${req.password}'`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
    if (res.length) {
        result(null, {'success': true});
        return;        
    }
    else
    {
        result(null, {'success': false});
        return;
    }
    });

};
module.exports = User;