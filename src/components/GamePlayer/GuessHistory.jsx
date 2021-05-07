import React from 'react';
import PropTypes from 'prop-types';
import generateClues from '../../utils/generateClues';
import {
  GuessContainer, GuessStat,
  ClueDot, GuessClues, GuessNum,
} from '../../styles';

const GuessHistory = ({ guesses, combo }) => {
  const guessClues = (g) => {
    const clues = generateClues(g, combo);
    return (
      <GuessClues>
        { [...Array(clues.correctPlacements)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ClueDot key={i} />
        )) }
        { [...Array(clues.correctNums)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <ClueDot key={i} white />
        )) }
      </GuessClues>
    );
  };

  return (
    <div>
      { guesses.map((prevGuess) => (
        <GuessContainer key={prevGuess.number}>
          <GuessNum color="gray">
            { prevGuess.number }
          </GuessNum>
          <GuessStat fontSize="guess" letterSpace=".2em">
            { prevGuess.guess }
          </GuessStat>
          { guessClues(prevGuess.guess) }
        </GuessContainer>
      )) }
    </div>
  );
};

GuessHistory.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  combo: PropTypes.string.isRequired,
};

export default GuessHistory;
