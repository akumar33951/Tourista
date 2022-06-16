const sql = require("./db.js");

const Tag = function (Tag) {
    this.tid = Tag.tid,
    this.tname = Tag.tname
}

Tag.addTag = (req, result) => {
    console.log(req);
    debugger;
    sql.query("INSERT INTO tag SET tname = ?",
        [req.tname], (err, res) => {
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
Tag.removeTag = (req, result) => {
    console.log(req);
    debugger;
    sql.query("delete from tag where tid = ?",
        [req.tid], (err, res) => {
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


module.exports = Tag;