import React from 'react';
import PropTypes from 'prop-types';
import GuessesLeft from './GuessesLeft';
import { GuessInput, GuessNum, GuessInputContainer } from '../../../styles';

const GuessField = ({
  guess, setGuess,
  guessesLen, max,
}) => (
  <GuessInputContainer>
    <GuessNum color="gray">
      { guessesLen + 1 }
    </GuessNum>
    <GuessInput
      id="guess"
      type="text"
      name="Guess"
      maxLength="4"
      value={guess}
      placeholder="----"
      onChange={({ target }) => {
        const parsedGuess = target.value.replace(new RegExp(`[^0-${max}]`), '');
        setGuess(parsedGuess);
      }}
    />
    <GuessesLeft guessesLen={guessesLen} />
  </GuessInputContainer>
);

GuessField.propTypes = {
  guess: PropTypes.string.isRequired,
  setGuess: PropTypes.func.isRequired,
  guessesLen: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default GuessField;
