import React from 'react';
import { render } from 'react-dom';
import Root from '../../app/containers/Root';
import getProductCode from './get-product-code';

window.addEventListener('load', () => {
  const script = document.createElement('script');
  script.innerHTML = getProductCode;
  document.body.appendChild(script);

  const div = document.createElement('div');
  div.id = 'bby-product-locator';
  document.body.appendChild(div);
  render(<Root isPopup={false} />, div);
});
