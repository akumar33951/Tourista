const sql = require("./db.js");

const Destination = function(destination) {
  this.id = destination.pid,
  this.name = destination.pname,
  this.city = destination.cname,
  this.location = destination.location,
  this.metro = destination.metro,
  this.summary = destination.summary,
  this.description = destination.p_description,
  this.imageLogo = destination.imlogo,
  this.img1 = destination.img1,
  this.img2 = destination.img2,
  this.img3 = destination.img3,
  this.lat = destination.latitude,
  this.long = destination.longitude
}


Destination.findByCity = (city, result) => {
  sql.query(`select places.pid, pname, cname, location, metro, summary, p_description, imlogo, img1, img2, img3, latitude, longitude
  from places inner join city on places.CId = city.CId
  inner join images on places.pid = images.PId
  inner join geo_coordinates on places.pid = geo_coordinates.pid
  where cname = '${city}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found destinations: ", res[0]);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Destination.findByTag = (city, tag_id, result) => {
  sql.query(`select places.pid, pname, cname, location, metro, summary, p_description, imlogo, img1, img2, img3, latitude, longitude
  from places inner join city on places.CId = city.CId
  inner join p_t_map on places.pid = p_t_map.PId
  inner join images on places.pid = images.PId
  inner join geo_coordinates on places.pid = geo_coordinates.pid
  where cname = '${city}' and tid = ${tag_id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found destinations: ", res[0]);
      result(null, res);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });

};

Destination.getAll = result => {
  sql.query(`select places.pid, pname, cname, location, metro, summary, p_description, imlogo, img1, img2, img3, latitude, longitude
  from places inner join city on places.CId = city.CId
  inner join geo_coordinates on places.pid = geo_coordinates.pid
  left join images on places.pid = images.PId`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};
module.exports = Destination;
