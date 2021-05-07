import React from 'react';
import PropTypes from 'prop-types';
import { PlayerStatBox, Text } from '../../../../styles';

const StatBox = ({ stat, label }) => (
  <PlayerStatBox>
    <Text fontSize="infoBoxStat">
      { stat }
    </Text>
    <Text fontSize="infoBoxLabel" color="secondary">
      { label }
    </Text>
  </PlayerStatBox>
);

StatBox.propTypes = {
  stat: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatBox;
