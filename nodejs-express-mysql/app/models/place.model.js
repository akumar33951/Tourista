const sql = require("./db.js");

const Place = function (place) {
    this.id = place.pid,
        this.name = place.pname,
        this.city = place.cid,
        this.location = place.location,
        this.metro = place.metro,
        this.summary = place.summary,
        this.description = place.p_description
}

Place.addPlace = (req, result) => {
    console.log(req);
    debugger;
    sql.query("INSERT INTO places SET pname = ?, cid = ?, location = ?, metro = ?, summary = ?, p_description = ?",
        [req.pname, req.cid, req.location, req.metro, req.summary, req.p_description], (err, res) => {
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
Place.updatePlace = (req, result) => {
    console.log(req);
    debugger;
    sql.query("UPDATE places SET cid = ?, location = ?, metro = ?, summary = ?, p_description = ? where pname = ?",
        [req.cid, req.location, req.metro, req.summary, req.p_description, req.pname], (err, res) => {
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

//remove a place
Place.removePlace = (req, result) => {
    console.log(req);
    debugger;
    sql.query(`delete from places where pid = ?`,req.pid, (err, res) => {
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
module.exports = Place;