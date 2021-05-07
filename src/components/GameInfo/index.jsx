import React from 'react';
import PropTypes from 'prop-types';
import PlayerStats from './PlayerStats';
import Message from './Message';
import NewGame from './NewGame';
import formatSeconds from '../../utils/formatSeconds';
import { InfoArea, Timer } from '../../styles';

const GameInfo = ({
  status, mode,
  combo, max, time,
  gamesWon, gamesLost,
  bestTime,
}) => (
  <InfoArea>
    <Message status={status} combo={combo} max={max} />
    <Timer>{ formatSeconds(time) }</Timer>
    <NewGame mode={mode} />
    <PlayerStats gamesWon={gamesWon} gamesLost={gamesLost} bestTime={bestTime} />
  </InfoArea>
);

GameInfo.propTypes = {
  status: PropTypes.string.isRequired,
  combo: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  gamesWon: PropTypes.objectOf(PropTypes.number).isRequired,
  gamesLost: PropTypes.objectOf(PropTypes.number).isRequired,
  bestTime: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default GameInfo;
