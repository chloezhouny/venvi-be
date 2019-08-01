module.exports = {
  findAll: function(req, res) {
    console.log("RECEIVED CLIENT GET REQUEST");
    res.json({status: 200, message: "GET received"})
  },
  create: function(req, res) {
    console.log("RECEIVED CLIENT POST REQ.BODY: ", req.body);
    res.json({status: 200, msg: "POST received", req: req.body})
  },
  
  update: function(req, res) {
    console.log("RECEIVED CLIENT PUT REQ.PARAMS: ", req.params);
    res.json({status: 200, msg: `Put received. Id: ${req.params.id}`})
  },
  
  remove: function(req, res) {
    console.log("RECEIVED CLIENT DELETE REQ.PARAMS: ", req.params);
    res.json({status: 200, msg: `Delete received. Id: ${req.params.id}`})
  },

  default: function(req, res) {
    const index = path.join(__dirname, 'build', 'index.html');
    res.sendFile(index);
  }
}