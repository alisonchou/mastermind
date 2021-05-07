import React from 'react';
import PropTypes from 'prop-types';
import { FlexAlignCenterCol } from '../../../styles';
import ModeStats from './ModeStats';

const PlayerStats = ({ gamesWon, gamesLost, bestTime }) => (
  <FlexAlignCenterCol>
    <ModeStats mode="easy" gamesWon={gamesWon} gamesLost={gamesLost} bestTime={bestTime} />
    <ModeStats mode="normal" gamesWon={gamesWon} gamesLost={gamesLost} bestTime={bestTime} />
  </FlexAlignCenterCol>
);

PlayerStats.propTypes = {
  gamesWon: PropTypes.objectOf(PropTypes.number).isRequired,
  gamesLost: PropTypes.objectOf(PropTypes.number).isRequired,
  bestTime: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default PlayerStats;
