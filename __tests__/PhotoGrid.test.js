import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

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

  it('"Show All Photos" button should open modal', () => {
    render(<PhotoGrid listingId="30506101"/>);
    userEvent.click(screen.getByText('Show All Photos'));
    expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  })

  it('photo click should open modal', () => {
    render(<PhotoGrid listingId="30506101"/>);
    userEvent.click(screen.getByRole('button')[0]);
    expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  })

})