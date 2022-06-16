const sql = require("./db.js");

const City = function (City) {
    this.cid = City.cid,
    this.cname = City.cname
}

City.addCity = (req, result) => {
    console.log(req);
    debugger;
    sql.query("INSERT INTO City SET cname = ?",
        [req.cname], (err, res) => {
            console.log(res);
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, { 'success': true });
                return;
            }
            else {
                result(null, { 'success': false });
                return;
            }
        });

};

//update a place
City.removeCity = (req, result) => {
    console.log(req);
    debugger;
    sql.query("delete from City where cid = ?",
        [req.cid], (err, res) => {
            console.log(res);
            if (err) {
                console.log("error: ", err);
                result(err, null);
                return;
            }
            if (res.length) {
                result(null, { 'success': true });
                return;
            }
            else {
                result(null, { 'success': false });
                return;
            }
        });

};


module.exports = City;