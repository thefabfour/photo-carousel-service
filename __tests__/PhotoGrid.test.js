import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PhotoGrid from '../client/src/components/PhotoGrid/PhotoGrid.jsx'

describe('PhotoGrid', () => {
  it('renders the PhotoGrid component', () => {
    render(<PhotoGrid/>);
    screen.debug();
  })
})