import React from 'react';
import PropTypes from 'prop-types';
import { InfoMsg, CodeReveal } from '../../styles';

const Message = ({ status, combo, max }) => {
  const getMessage = () => {
    switch (status) {
      case 'won':
        return 'You\'re a mastermind!';
      case 'lost':
        return (
          <>
            The combination was
            {' '}
            <CodeReveal>
              {combo}
            </CodeReveal>
            .
          </>
        );
      default:
        return `Enter digits from 0-${max}.`;
    }
  };
  return (
    <InfoMsg>
      { getMessage() }
    </InfoMsg>
  );
};

Message.propTypes = {
  status: PropTypes.string.isRequired,
  combo: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
};

export default Message;
