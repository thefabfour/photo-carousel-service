import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import PhotoViewer from '../client/src/components/PhotoViewer/PhotoViewer'

const photo = {
    id: 1,
    thumbnailUrl: 'https://loremflickr.com/320/240',
    imageUrl: 'https://loremflickr.com/1280/960',
    description: 'Test description',
    room: 'Living Room',
  }

// describe('PhotoViewer', () => {
//   it('renders the PhotoViewer component', () => {
//     render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photo} setSelectedPhoto={() => {}} photos={[photo]} />);
//     screen.debug();
//   })
// })

describe('PhotoViewer component exists', () => {
  it('PhotoGrid component should exist in the document', () => {
    render(<PhotoViewer modalOpen={false} setModalOpen={() => {}} selectedPhoto={photo} setSelectedPhoto={() => {}} photos={[photo]} />);
    expect(document.querySelector('.viewer')).toBeInTheDocument();
  })

  // it('"Show All Photos" button opens modal', () => {
  //   render(<PhotoGrid listingId="30506101"/>);
  //   userEvent.click(screen.getByText('Show All Photos'));
  //   expect(document.getElementsByClassName('modal')[0]).toHaveClass('modalopen');
  // })
})