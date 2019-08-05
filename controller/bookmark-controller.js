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

    console.log(req.body);

    db.Bookmark.create(req.body
      ).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },


  
  getBookmarkByUser: function (req, res) {
    db.Bookmark.findAll(
      {
        where: {
          UserId: req.params.id
        }
      },
      {
        order:[['time', 'desc']],
      },
      include: [{
        model: db.Listing
      }]
      ).then(function(dbBookmark) {
      res.json(dbBookmark);
    });
  },




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

}


