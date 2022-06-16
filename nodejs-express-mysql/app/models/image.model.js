const sql = require("./db.js");

const Image = function (image) {
    this.pid = image.pid,
    this.imlogo = image.imlogo,
    this.img1 = image.img1,
    this.img2 = image.img2,
    this.img3 = image.img3
}

Image.addImage = (req, result) => {
    console.log(req);
    debugger;
    sql.query("INSERT INTO images SET pid = ?, imlogo = ?, img1 = ?, img2 = ?, img3 = ?",
        [req.pid, req.imlogo, req.img1, req.img2, req.img3], (err, res) => {
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
Image.updateImage = (req, result) => {
    console.log(req);
    debugger;
    sql.query("UPDATE images SET imlogo = ?, img1 = ?, img2 = ?, img3 = ? where pid = ?",
        [req.imlogo, req.img1, req.img2, req.img3, req.pid], (err, res) => {
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


module.exports = Image;