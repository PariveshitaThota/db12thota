var Flower = require("../models/flower");
// List of all flowers
exports.flower_list = async function (req, res) {
  try {
    var data = await Flower.find({});
 
    res.send("The data is \n" + data);
  } catch (err) {
    res.status(500);
 
    res.send(`{"error": ${err}}`);
  }
};
// for a specific flower.
exports.flower_detail = async function (req, res) {
  console.log("detail"  + req.params.id)
  try {
      result = await Flower.findById( req.params.id)
      res.send(result)
  } catch (error) {
      res.status(500)
      res.send(`{"error": document for id ${req.params.id} not found`);
  }

};
// Handle flower create on POST.
exports.flower_create_post = async function (req, res) {
  console.log(req.body);
  let document = new Flower();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"costumetype":"goat", "cost":12, "size":"large"}
  document.type = req.body.type;
  document.color = req.body.color;
  document.cost= req.body.cost;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.error(500, `{"error": ${err}}`);
  }
};
// Handle flower delete form on DELETE.
exports.flower_delete = async function (req, res) {
  try {
    result = await Flower.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
} catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
}
};
// Handle flower update form on PUT.
exports.flower_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
  try {
      let toUpdate = await Flower.findById( req.params.id)
      // Do updates of properties
      if(req.body.type) toUpdate.type = req.body.type;
      if(req.body.colour) toUpdate.colour = req.body.colour;
      if(req.body.cost) toUpdate.cost = req.body.cost;
      let result = await toUpdate.save();
      console.log("Sucess " + result)
      res.send(result)
  } catch (err) {
      res.status(500)
      res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};

exports.flower_view_all_Page = async function (req, res) {
  try {
    theflower = await Flower.find();
    res.render("flower", {
      title: "flower Search Results",
      results: theflower,
    });
  } catch (err) {
    res.error(500, `{"error": ${err}}`);
  }
};

// Handle a show one view with id specified by query
exports.flower_view_one_Page = async function(req, res) {
  console.log("single view for id "  + req.query.id)
  try{
      result = await Flower.findById( req.query.id)
      res.render('flowerdetail', 
{ title: 'flower Detail', toShow: result });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.flower_create_Page =  function(req, res) {
  console.log("create view")
  try{
      res.render('flowercreate', { title: 'flower Create'});
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};

// Handle building the view for updating a costume.
// query provides the id
exports.costume_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await Costume.findById(req.query.id)
        res.render('costumeupdate', { title: 'Costume Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.flower_update_Page =  async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
      let result = await Flower.findById(req.query.id)
      res.render('flowerupdate', { title: 'Flower Update', toShow: result });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};

// Handle a delete one view with id from query
exports.flower_delete_Page = async function(req, res) {
  console.log("Delete view for id "  + req.query.id)
  try{
      result = await Flower.findById(req.query.id)
      res.render('flowerdelete', { title: 'Flower Delete', toShow: result });
  }
  catch(err){
      res.status(500)
      res.send(`{'error': '${err}'}`);
  }
};





