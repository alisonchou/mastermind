import React from 'react';
import PropTypes from 'prop-types';
import StatBox from './StatBox';
import { StatContainer, Text } from '../../../../styles';
import formatSeconds from '../../../../utils/formatSeconds';

const formatBestTime = (bestTime) => {
  if (bestTime < 0) {
    return '--';
  }
  return formatSeconds(bestTime);
};

const ModeStats = ({
  gamesWon, gamesLost,
  bestTime, mode,
}) => (
  <>
    <Text casing="capitalize" color="gray">
      { mode }
      {' '}
      Mode
    </Text>
    <StatContainer>
      <StatBox stat={gamesWon[mode].toString()} label="Won" />
      <StatBox stat={gamesLost[mode].toString()} label="Lost" />
      <StatBox stat={formatBestTime(bestTime[mode])} label="Best Time" />
    </StatContainer>
  </>
);

ModeStats.propTypes = {
  gamesWon: PropTypes.objectOf(PropTypes.number).isRequired,
  gamesLost: PropTypes.objectOf(PropTypes.number).isRequired,
  bestTime: PropTypes.objectOf(PropTypes.number).isRequired,
  mode: PropTypes.string.isRequired,
};

export default ModeStats;
