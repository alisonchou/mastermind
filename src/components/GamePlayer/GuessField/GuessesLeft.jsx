import React from 'react';
import PropTypes from 'prop-types';
import { FlexAlignCenterCol, Text } from '../../../styles';

const GuessesLeft = ({ guessesLen }) => (
  <FlexAlignCenterCol>
    <Text fontSize="infoBoxStat">
      { 10 - guessesLen }
    </Text>
    <Text fontSize="infoBoxLabel" color="secondary">
      Left
    </Text>
  </FlexAlignCenterCol>
);

GuessesLeft.propTypes = {
  guessesLen: PropTypes.number.isRequired,
};

export default GuessesLeft;
