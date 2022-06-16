const sql = require("./db.js");

const PlaceTag = function (placeTag) {
    this.pid = placeTag.pid,
    this.tid = placeTag.tid
}

PlaceTag.addPlaceTag = (req, result) => {
    console.log(req);
    debugger;
    sql.query("INSERT INTO p_t_map SET pid = ?, tid = ?",
        [req.pid, req.tid], (err, res) => {
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
PlaceTag.removePlaceTag = (req, result) => {
    console.log(req);
    debugger;
    sql.query("delete from p_t_map where pid = ? and tid = ?",
        [req.pid, req.tid], (err, res) => {
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


module.exports = PlaceTag;