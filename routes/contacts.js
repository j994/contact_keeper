const express = require("express");
const router = express.Router();

// @route GET api/contacts
// @desc Get all user contacts
// @access Private
router.get("/", (req, res) => {
  res.send("Get all user contacts");
});

// @route POST api/contacts
// @desc add new contact
// @access Private
router.post("/", (req, res) => {
  res.send("Add a contact");
});

// @route PUT api/contacts
// @desc update a contact
// @access Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route DELETE api/contacts
// @desc delete a contact
// @access Private
router.delete("/:id", (req, res) => {
  res.send("delete a contact");
});

module.exports = router;
