import React from 'react';
import PropTypes from 'prop-types';
import GamePlayer from './GamePlayer';
import GameInfo from './GameInfo';
import { GameArea, Text } from '../styles';

const GameContainer = ({
  combo, guesses,
  mode, status,
  max, time,
  gamesWon, gamesLost,
  bestTime, hint,
  setGuess, guess,
}) => {
  if (!combo) {
    return (
      <Text color="gray">
        Loading...
      </Text>
    );
  }

  return (
    <GameArea>
      <GameInfo
        combo={combo}
        status={status}
        gamesLost={gamesLost}
        gamesWon={gamesWon}
        bestTime={bestTime}
        mode={mode}
        max={max}
        time={time}
      />
      <GamePlayer
        combo={combo}
        guesses={guesses}
        status={status}
        max={max}
        hint={hint}
        setGuess={setGuess}
        guess={guess}
      />
    </GameArea>
  );
};

GameContainer.propTypes = {
  combo: PropTypes.string.isRequired,
  guesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  gamesWon: PropTypes.objectOf(PropTypes.number).isRequired,
  gamesLost: PropTypes.objectOf(PropTypes.number).isRequired,
  bestTime: PropTypes.objectOf(PropTypes.number).isRequired,
  max: PropTypes.number.isRequired,
  hint: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  guess: PropTypes.string.isRequired,
  setGuess: PropTypes.func.isRequired,
};

export default GameContainer;
