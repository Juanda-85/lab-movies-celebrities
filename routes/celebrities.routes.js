// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const celebrity = require("../models/Celebrity.model")
// all your routes here
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrity");
})

// GET route for /celebrities/create
router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchphrase} = req.body;
  

//   lets create a new celebrity

Celebrity.create({ name, occupation, catchPhrase})
.then((celeb) => {
  console.log("Celebrity has been created", celeb);
  res.redirect("/celebrities");

})
.catch((err) => {
  console.log(err);
  res.render("celebrities/new-celebrity");

});

});




module.exports = router;



















module.exports = router;