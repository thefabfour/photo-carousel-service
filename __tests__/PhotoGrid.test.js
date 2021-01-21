import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PhotoGrid from '../client/src/components/PhotoGrid/PhotoGrid'

describe('PhotoGrid component', () => {
  it('should exist in the document', () => {
    render(<PhotoGrid listingId="30506101"/>);
    expect(document.querySelector('.photogrid')).toBeInTheDocument();
  })

  // it('photos should be visible on the screen', () => {
  //   render(<PhotoGrid listingId="30506101"/>);
  //   const imgCount = document.querySelectorAll('.photobtn').length;
  //   expect(imgCount).toBeGreaterThanOrEqual(5);
  // })

  it('"Show All Photos" button should be visible', () => {
    render(<PhotoGrid listingId="30506101"/>);
    expect(screen.getByText('Show All Photos')).toBeInTheDocument();
  })

})