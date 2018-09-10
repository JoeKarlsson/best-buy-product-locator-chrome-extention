import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { COLORS } from '../../constants/styles';

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        position: absolute;
        margin-left: 100px;
        margin-top: 8px;
      `;
    }
  }};
`;

const H2 = styled.h2`
  color: ${COLORS.darkBlue};
`;

const CallToAction = (props) => {
  const {
    isPopup, nearestStoreMapUrl, nearestStore, price
  } = props;
  return (
    <Container isPopup={isPopup}>
      <H2>Want it faster? </H2>
      <p>
        This same product is available right now at the{' '}
        <a target="_blank" rel="noopener noreferrer" href={nearestStoreMapUrl}>
          Best Buy in {nearestStore}.
        </a>{' '}
        Order now and pick it up in 1 hour.&nbsp;
      </p>
      <p>
        Price: <b>${price}</b>
      </p>
    </Container>
  );
};

CallToAction.propTypes = {
  isPopup: PropTypes.bool,
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

CallToAction.defaultProps = {
  isPopup: false,
};

export default CallToAction;
