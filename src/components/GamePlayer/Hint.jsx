import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setHint } from '../../actions/gameActions';
import { HintText } from '../../styles';

const initialHint = 'Need a hint?';

const Hint = ({ guesses, status, hint }) => {
  const dispatch = useDispatch();

  const hintOnClick = () => {
    if (hint === initialHint) {
      dispatch(setHint());
    }
  };

  return (
    <HintText
      active={guesses.length > 5 && status === 'running'}
      collapse={status !== 'running'}
      hintSet={hint !== initialHint}
      onClick={hintOnClick}
    >
      { hint }
    </HintText>
  );
};

Hint.propTypes = {
  guesses: PropTypes.arrayOf(PropTypes.object).isRequired,
  status: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired,
};

export default Hint;
