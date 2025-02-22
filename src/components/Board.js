import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
// import CARD_DATA from '../data/card-data.json';


const Board = ({boardName, url}) => {
  const [cards, setCards] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    
    axios.get(`${url}/${boardName}/cards`)
    .then((response) => {
      const apiCards = response.data;
      setCards(apiCards);
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    });
  }, []);

  const cardData = cards.map((card) => {
    return (
      <Card 
        key={card.card.id}
        card={card.card}
      />
    )
  });
  return (
    <div>
      Board: {boardName}
      {cardData || errorMessage}
    </div>
  )
};
Board.propTypes = {

};

export default Board;
