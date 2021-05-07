import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ModeButton } from '../../../styles';
import { startGame } from '../../../actions/gameActions';

const ModeToggle = ({ currMode, btnMode, left }) => {
  const dispatch = useDispatch();

  const restartGame = (newMode) => {
    dispatch(startGame(newMode));
  };

  return (
    <ModeButton
      type="button"
      onClick={() => restartGame(btnMode)}
      active={currMode === btnMode}
      left={left}
      casing="capitalize"
    >
      { btnMode }
    </ModeButton>
  );
};

ModeToggle.propTypes = {
  currMode: PropTypes.string.isRequired,
  btnMode: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
};

export default ModeToggle;
