var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Book = require('../models/book')

/* GET book list. */
router.get('/',
    async (req, res) => {
      try {
        Book.find((err,books) => {
            return res.json(books);
        })
      } catch (e) {
        return handlePageError(res, e)
      }
    }
);

const handlePageError = (res, e) => res.setStatus(500).send(e.message)
 
router.post(
  '/add',
  async (req, res) => {
    try {
      const post = await new Book(req.body).save()
 
      return res.json({
        message: 'Created new book successfully!',
        data: post
      })
    } catch (e) {
      return handlePageError(res, e)
    }
  }
)

module.exports = router;
