import React from 'react';
import PropTypes from 'prop-types';
import GuessHistory from './GuessHistory';
import GuessField from './GuessField';
import Hint from './Hint';
import { PlayerArea } from '../../styles';

const GamePlayer = ({
  combo, guesses,
  status, max, hint,
  setGuess, guess,
}) => (
  <PlayerArea>
    <Hint
      guesses={guesses}
      status={status}
      hint={hint}
    />
    {
      status === 'running'
      && (
        <GuessField
          setGuess={setGuess}
          guess={guess}
          guessesLen={guesses.length}
          max={max}
        />
      )
    }
    <GuessHistory guesses={guesses} combo={combo} />
  </PlayerArea>
);

GamePlayer.propTypes = {
  combo: PropTypes.string.isRequired,
  guesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  hint: PropTypes.string.isRequired,
  guess: PropTypes.string.isRequired,
  setGuess: PropTypes.func.isRequired,
};

export default GamePlayer;
