import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import CloseButton from '../CloseButton/CloseButton';
import Logo from '../shared/Logo/Logo';
import CallToAction from '../CallToAction/CallToAction';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import { COLORS, STYLES } from '../../constants/styles';

const slideDown = keyframes`
    0% {
        top: -100px;
    }
    100% {
        top: 0;
    }
`;

const Container = styled.div`
  ${(props) => {
    if (!props.isPopup) {
      return css`
        background: ${COLORS.blue};
        color: ${COLORS.white};
        font-size: ${STYLES.fontSize};
        font-family: ${STYLES.fontFamily};
        width: 100%;
        position: fixed;
        z-index: 9999;
        top: 0;
        padding: 10px 20px 10px 20px;
        animation-name: ${slideDown};
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: 0.5s;

        h2 {
          color: ${COLORS.white};
          display: inline;
          font-size: 1.5em;
          -webkit-margin-before: 0.83em;
          -webkit-margin-after: 0.83em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
          font-weight: bold;
        }

        p {
          display: inline;
          -webkit-margin-before: 1em;
          -webkit-margin-after: 1em;
          -webkit-margin-start: 0px;
          -webkit-margin-end: 0px;
        }

        a,
        a:visited {
          color: ${COLORS.white};
        }
      `;
    }
  }}
}
`;

const Body = (props) => {
  const {
    nearestStore, nearestStoreMapUrl, price, addToCartUrl, isPopup
  } = props;

  return (
    <Container isPopup={isPopup}>
      <CloseButton isPopup={isPopup} />
      <Logo isPopup={isPopup} />
      <CallToAction
        nearestStore={nearestStore}
        nearestStoreMapUrl={nearestStoreMapUrl}
        price={price}
        isPopup={isPopup}
      />
      <AddToCartButton addToCartUrl={addToCartUrl} isPopup={isPopup} />
    </Container>
  );
};

Body.propTypes = {
  nearestStore: PropTypes.string.isRequired,
  nearestStoreMapUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  addToCartUrl: PropTypes.string.isRequired,
  isPopup: PropTypes.bool,
};

Body.defaultProps = {
  isPopup: false,
};

export default Body;
