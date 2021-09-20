const db = require("../models");
const Card = db.cards;
const Op = db.Sequelize.Op;


// Create and Save a new Card
exports.create = (req, res) => {
  //console.log(req.body);
    // Validate request
    if (!req.body.cardNumber) {
      res.status(400).send({
        message: "Card Number can not be empty!"
      });
      return;
    }
  
    // Create a Card
    const card = {
        cardNumber: req.body.cardNumber,
        cardName: req.body.cardName,
        cardExpiration: req.body.cardExpiration,
        //cardSecurityCode: req.body.cardSecurityCode
    };
  
    // Save Card in the database
    Card.create(card)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while saving the Card."
        });
      });
  };

// Retrieve all Card from the database.
exports.findAll = (req, res) => {
    const cardNumber = req.query.cardNumber;
    var condition = cardNumber ? { cardNumber: { [Op.like]: `%${cardNumber}%` } } : null;
  
    Card.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving cards."
        });
      });
  };

// Find a single Card with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Card.findByPk(id)
    .then(data => {
      
      if(data === null){
        res.status(400).send({
          message: "No record found for id=" + id
        });
        return;
      }
      else{
        res.send(data);
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Card with id=" + id
      });
    });
};

// Update a Card by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Card.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Card was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Card with id=${id}. Maybe Card was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Card with id=" + id
      });
    });
};

// Delete a Card with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Card.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Card was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Card with id=${id}. Maybe Card was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Card with id=" + id
      });
    });
};

// Delete all Card from the database.
// exports.deleteAll = (req, res) => {
  
// };

