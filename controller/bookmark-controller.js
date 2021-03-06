var db = require("../models");
module.exports = {

  getAllbookmark: function (req, res) {
    db.Bookmark.findAll({
      order:[['time', 'desc']]}
      ).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },


//send back the Bookmark id
  addBookmark: function (req, res) {
    console.log("alfredb0b")
    console.log(req.body);

    db.Bookmark.create(req.body
      ).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },


  getBookmarkByUser: function (req, res) {
    console.log("In bookmark controller");
    // var query = {};
    // query['UserId'] = req.params.id;
    db.Bookmark.findAll({
      where: {
          UserId: req.params.id,           
        },
       include: [{
         model: db.Listing,
        }]
      }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },
  //  getBookmarkByUser: function (req, res) {
  //   console.log("In bookmark controller");
  //   db.Bookmark.findAll(
  //     {
  //       where: {
  //         UserId: req.params.id,           
  //       }
  //     },
  //     {
  //       order:[['time', 'desc']]
  //     }
  //     ).then(function(dbBookmark) {
  //     res.json(dbBookmark);
  //   });
  // },

   getBookmark: function (req, res) {
    db.Bookmark.findOne(
      {
        where: {id: req.params.id}
      }
      ).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },




  deleteBookmark: function(req, res) {
    db.Bookmark.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
},

deleteBookmarkByListing: function(req, res) {
    console.log("in bookmark/listing controller");
    db.Bookmark.destroy({
      where: {
        ListingId: req.params.id
      }
    }).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
},

}


