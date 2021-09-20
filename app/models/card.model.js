module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("card", {
      cardName:{
          type: Sequelize.STRING
      },
      cardNumber:{
        type: Sequelize.STRING
      },
      cardExpiration:{
        type: Sequelize.STRING
      },
    //   cardSecurityCode:{
    //     type: Sequelize.STRING
    //   }
    });
  
    return Card;
  };


  