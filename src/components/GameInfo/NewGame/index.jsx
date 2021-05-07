import React from 'react';
import PropTypes from 'prop-types';
import { ModeContainer, NewGameText } from '../../../styles';
import ModeToggle from './ModeToggle';

const NewGame = ({ mode }) => (
  <>
    <NewGameText casing="uppercase">
      Start a new game
    </NewGameText>
    <ModeContainer>
      <ModeToggle btnMode="easy" currMode={mode} left />
      <ModeToggle btnMode="normal" currMode={mode} left={false} />
    </ModeContainer>
  </>
);

NewGame.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default NewGame;
