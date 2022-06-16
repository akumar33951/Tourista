module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
  const user = require("../controllers/user.controller.js");
  const place = require("../controllers/place.controller.js");
  const image = require("../controllers/image.controller.js");
  const placeTag = require("../controllers/place_tag.controller.js");
  const tag = require("../controllers/tag.controller.js");
  const city = require("../controllers/city.controller.js");

  // Add new place
  app.post("/place/add_place", place.addPlace);


  // Retrieve all Customers
  app.get("/destination/findAll", customers.findAll);

  // Retrieve a single destination with customerId
  app.get("/destination/:city", customers.findByCity);


  app.get("/destination_tag/:city/:tag_id", customers.findByTag);

  //user/admin authentication
  app.post("/user/login", user.login)

  // Update a Customer with customerId
  app.post("/place/update_place", place.updatePlace);

  // Delete a place with pid
  app.post("/place/remove_place", place.removePlace);

  // // Create a new Customer
  // app.delete("/customers", customers.deleteAll);

  app.post("/image/add_image", image.addImage);

  app.post("/image/update_image", image.updateImage);

  app.post("/place_tag/add_place_tag", placeTag.addPlaceTag);

  app.post("/place_tag/remove_place_tag", placeTag.removePlaceTag);


  app.post("/tag/add_tag", tag.addTag);

  app.post("/tag/remove_tag", tag.removeTag);

  app.post("/city/add_city", city.addCity);

  app.post("/city/remove_city", city.removeCity);

};
